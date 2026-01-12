require("dotenv").config();
const mongoose = require("mongoose");
const Listing = require("./models/listing");
const { data: sampleListings } = require("./init/data");


const dbUrl = process.env.ATLASDB_URL;

async function seedDB() {
  await mongoose.connect(dbUrl, { dbName: "wanderlust" });

  const formattedListings = sampleListings.map(l => ({
    ...l,
    title: l.title?.trim(),
    geometry: {
      type: "Point",
      coordinates: l.geometry?.coordinates,
    },
  }));

  await Listing.deleteMany({});
  await Listing.insertMany(formattedListings);

  console.log("✅ Database seeded successfully");
  mongoose.connection.close();
}

seedDB().catch(err => {
  console.error(err);
  mongoose.connection.close();
});
