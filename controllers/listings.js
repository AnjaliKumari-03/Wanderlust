const Listing = require("../models/listing.js");
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });

const CATEGORIES = [
  'Trending','Rooms','Iconic Cities','Mountains','Castles',
  'Amazing Pools','Camping','Farms','Arctic','Domes','Play'
];

module.exports.index = async (req, res, next) => {
  try {
    let {category, q} = req.query;

    // Normalize category for ALL listings
    if (
      !category ||                           // undefined OR empty string
      String(category).trim().length === 0 || 
      String(category).trim().toLowerCase() === "all"
    ) {
      category = null; // <-- This ensures ALL listings will be shown
    }

    const page = Math.max(1, parseInt(req.query.page) || 1);
    const perPage = 100;

    const filter = {};
    if (category) {
      // Use case-insensitive exact match
      filter.category = new RegExp("^" + category + "$", "i");
    }

    // search filter (if q is provided)
    if (q && q.trim() !== "") {
      const searchRegex = new RegExp(q.trim(), "i"); // case-insensitive

      // match title OR location OR country
      filter.$or = [
        { title: searchRegex },
        { location: searchRegex },
        { country: searchRegex },
      ];
    }

    const [listings, total] = await Promise.all([
      Listing.find(filter)
        .skip((page - 1) * perPage)
        .limit(perPage)
        .lean(),
      Listing.countDocuments(filter),
    ]);

    res.render("listings/index", {
      listings,
      selectedCategory: category, // null for ALL
      categories: CATEGORIES,
      page,
      total,
      perPage,
      q,
    });
  } catch (err) {
    next(err);
  }
};


module.exports.renderNewForm = (req, res) => {
    res.render("listings/new.ejs");
};

module.exports.showListing = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id)
        .populate({
            path: "reviews",
            populate: {
                path: "author",
            }
        })
        .populate("owner");
    if (!listing) {
        req.flash("error", "Listing you requested for does not exist!");
        return res.redirect("/listings");
    }
    console.log(listing);
    res.render("listings/show.ejs", { listing });
};

module.exports.createListing = async (req, res, next) => {
    let response = await geocodingClient
    .forwardGeocode({
    query: req.body.listing.location,
    limit: 1,
    })
    .send()

    let url = req.file.path;
    let filename = req.file.filename;
    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    newListing.image= { url, filename };

    newListing.geometry = response.body.features[0].geometry;

    let savedListing = await newListing.save();
    console.log(savedListing);
    req.flash("success", "New Listing Created!!");
    res.redirect("/listings");
};

module.exports.editListing = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if(!listing)  {
        req.flash("error", "Listing you requested for does not exist!");
        return res.redirect("/listings");
    }
    let originalImageUrl = listing.image.url;
    originalImageUrl = originalImageUrl.replace("/upload", "/upload/w_250");
    res.render("listings/edit.ejs", { listing, originalImageUrl });
};

module.exports.updateListing = async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });

    if (typeof req.file !== "undefined") {
        let url = req.file.path;
        let filename = req.file.filename;
        listing.image = { url, filename };
        await listing.save();
    }
    
    req.flash("success", "Listing Updated!!");
    res.redirect(`/listings/${id}`);
};

module.exports.deleteListing = async (req, res) => {
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    req.flash("success", "Listing Deleted!!");

    res.redirect("/listings");
};

module.exports.searchSuggestions = async (req, res, next) => {
  try {
    const { q } = req.query;

    if (!q || !q.trim()) {
      return res.json([]); // nothing typed → no suggestions
    }

    const regex = new RegExp(q.trim(), "i");

    const filter = {
      $or: [
        { title: regex },
        { location: regex },
        { country: regex },
      ],
    };

    const suggestions = await Listing.find(filter)
      .limit(10) // limit for performance
      .select("title location country") // only needed fields
      .lean();

    res.json(suggestions);
  } catch (err) {
    next(err);
  }
};
