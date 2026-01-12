const sampleListings = [
  // TRENDING (6)
  {
    title: "Luxury Cliffside Villa",
    description:
      "A breathtaking cliffside villa overlooking the Arabian Sea. Featuring modern interiors, infinity balcony views, and ultimate privacy.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85" },
    price: 9500,
    location: "Varkala",
    country: "India",
    category: "Trending",
    geometry: { type: "Point", coordinates: [76.7190, 8.7379] }
  },
  {
    title: "Desert Oasis Retreat",
    description:
      "A peaceful desert escape with rustic décor, open-sky lounges, and unforgettable sunset views over the dunes.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308" },
    price: 6500,
    location: "Jaisalmer",
    country: "India",
    category: "Trending",
    geometry: { type: "Point", coordinates: [70.9165, 26.9157] }
  },
  {
    title: "Riverside Bamboo Cottage",
    description:
      "A serene riverside hideout crafted from eco-friendly bamboo—perfect for relaxing, kayaking, and stargazing.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1544986581-efac024faf62" },
    price: 4200,
    location: "Alleppey",
    country: "India",
    category: "Trending",
    geometry: { type: "Point", coordinates: [76.3388, 9.4981] }
  },
  {
    title: "Skyline Penthouse Suite",
    description:
      "A stylish penthouse with panoramic city views, a private bar, and chic interiors ideal for luxury travelers.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1542928658-22251e208ac1" },
    price: 12000,
    location: "Mumbai",
    country: "India",
    category: "Trending",
    geometry: { type: "Point", coordinates: [72.8777, 19.0760] }
  },
  {
    title: "Forest Hideout Cabin",
    description:
      "A modern wooden cabin tucked inside a dense forest, offering nature trails, bird-watching, and complete peace.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1501183638710-841dd1904471" },
    price: 3800,
    location: "Wayanad",
    country: "India",
    category: "Trending",
    geometry: { type: "Point", coordinates: [76.0833, 11.6850] }
  },
  {
    title: "Lavish Beachfront Glass House",
    description:
      "Wake up to ocean waves in this stunning all-glass beachfront stay offering uninterrupted sea views.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae" },
    price: 11500,
    location: "Goa",
    country: "India",
    category: "Trending",
    geometry: { type: "Point", coordinates: [73.8256, 15.4909] }
  },

  // ROOMS (5)
  {
    title: "Cozy Private Room in Art Home",
    description:
      "A beautifully decorated bedroom in a creative artistic home, complete with murals and handcrafted furniture.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1667125095636-dce94dcbdd96" },
    price: 1500,
    location: "Pondicherry",
    country: "India",
    category: "Rooms",
    geometry: { type: "Point", coordinates: [79.8083, 11.9416] }
  },
  {
    title: "Minimalist City Room",
    description:
      "A clean, bright, and affordable room perfect for business and solo travelers needing a peaceful stay.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2" },
    price: 1100,
    location: "Bangalore",
    country: "India",
    category: "Rooms",
    geometry: { type: "Point", coordinates: [77.5946, 12.9716] }
  },
  {
    title: "Budget-Friendly Homestay Room",
    description:
      "A comfortable private room inside a warm family home, offering homemade meals and local guidance.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267" },
    price: 900,
    location: "Jaipur",
    country: "India",
    category: "Rooms",
    geometry: { type: "Point", coordinates: [75.7873, 26.9124] }
  },
  {
    title: "Garden View Room",
    description:
      "A nature-facing room with balcony access and lush garden surroundings—ideal for quiet retreats.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353" },
    price: 1700,
    location: "Ooty",
    country: "India",
    category: "Rooms",
    geometry: { type: "Point", coordinates: [76.6950, 11.4064] }
  },
  {
    title: "Old Town Heritage Room",
    description:
      "A charming old-town room located in a restored 80-year-old home filled with history and character.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1756802137414-7bc6ba908e6a" },
    price: 1600,
    location: "Varanasi",
    country: "India",
    category: "Rooms",
    geometry: { type: "Point", coordinates: [82.9739, 25.3176] }
  },

  // ICONIC CITIES (6)
  {
    title: "Modern Delhi Apartment",
    description:
      "A premium apartment in the capital city with designer interiors, smart lighting, and central access.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1484154218962-a197022b5858" },
    price: 4800,
    location: "New Delhi",
    country: "India",
    category: "Iconic Cities",
    geometry: { type: "Point", coordinates: [77.2090, 28.6139] }
  },
  {
    title: "Heritage Haveli Suite",
    description:
      "Live inside a historic haveli with courtyards, arches, and royal-themed suites in Jaipur's old city.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1746701905946-f1babf656914" },
    price: 7500,
    location: "Jaipur",
    country: "India",
    category: "Iconic Cities",
    geometry: { type: "Point", coordinates: [75.7873, 26.9124] }
  },
  {
    title: "Stylish Seafront Apartment",
    description:
      "A high-rise apartment with sweeping views of the Arabian Sea and easy beach access.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1682833691807-e960d6a4fdf2" },
    price: 9000,
    location: "Mumbai",
    country: "India",
    category: "Iconic Cities",
    geometry: { type: "Point", coordinates: [72.8777, 19.0760] }
  },
  {
    title: "IT Hub Studio",
    description:
      "Sleek, contemporary studio for tech professionals visiting the Silicon Valley of India.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1688853204774-4ab3a47db0d0" },
    price: 3200,
    location: "Bangalore",
    country: "India",
    category: "Iconic Cities",
    geometry: { type: "Point", coordinates: [77.5946, 12.9716] }
  },
  {
    title: "Chic Riverside Condo",
    description:
      "A modern riverside condo offering peaceful views, stylish décor, and urban convenience.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1527030280862-64139fba04ca" },
    price: 5400,
    location: "Ahmedabad",
    country: "India",
    category: "Iconic Cities",
    geometry: { type: "Point", coordinates: [72.5714, 23.0225] }
  },
  {
    title: "Lakefront Heritage Villa",
    description:
      "A colonial heritage stay near the famous lakes—perfect blend of elegance and comfort.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1667403206415-0e51a54727d4"},
    price: 7800,
    location: "Udaipur",
    country: "India",
    category: "Iconic Cities",
    geometry: { type: "Point", coordinates: [73.7125, 24.5854] }
  },

  // MOUNTAINS (6)
  {
    title: "Himalayan Cedar Chalet",
    description:
      "A handcrafted wooden chalet surrounded by towering cedar forests, offering uninterrupted mountain views and a peaceful atmosphere.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1660326290284-0d702c39221c" },
    price: 5200,
    location: "Manali",
    country: "India",
    category: "Mountains",
    geometry: { type: "Point", coordinates: [77.1900, 32.2432] }
  },
  {
    title: "Snow Peak Hideaway",
    description:
      "A cozy hideaway perched on a snowy ridge—perfect for winter lovers, featuring a warm fireplace and floor-to-ceiling windows.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1736512317172-43d59a7c4a0d" },
    price: 6800,
    location: "Auli",
    country: "India",
    category: "Mountains",
    geometry: { type: "Point", coordinates: [79.5524, 30.4570] }
  },
  {
    title: "Tea Garden Mountain Villa",
    description:
      "An elegant villa overlooking sweeping tea plantations with misty sunrise views and nature trails nearby.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1687227496409-25abef9b6ebf" },
    price: 5500,
    location: "Munnar",
    country: "India",
    category: "Mountains",
    geometry: { type: "Point", coordinates: [77.0590, 10.0889] }
  },
  {
    title: "Pinewood Glass Retreat",
    description:
      "A modern glass cabin nestled between pine trees, offering dramatic valley panoramas and a minimalist living experience.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1685628538332-23bfcc4e7a08" },
    price: 7200,
    location: "Kasauli",
    country: "India",
    category: "Mountains",
    geometry: { type: "Point", coordinates: [76.9666, 30.8920] }
  },
  {
    title: "Rustic Mountain Homestay",
    description:
      "A charming stone-and-wood homestay with traditional Himachali hospitality, organic meals, and peaceful village surroundings.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1665930152500-26acb7c86076" },
    price: 2800,
    location: "Dharamkot",
    country: "India",
    category: "Mountains",
    geometry: { type: "Point", coordinates: [76.3215, 32.2465] }
  },
  {
    title: "Cloud Valley Eco Lodge",
    description:
      "An eco-friendly lodge sitting above cloud level, offering sunrise decks, yoga spaces, and pristine Himalayan air.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1455763916899-e8b50eca9967" },
    price: 6100,
    location: "Mussoorie",
    country: "India",
    category: "Mountains",
    geometry: { type: "Point", coordinates: [78.0736, 30.4598] }
  },

  // CASTLES (6)
  {
    title: "Royal Desert Castle Suite",
    description:
      "Stay inside a restored desert castle featuring sandstone architecture, regal courtyards, and panoramic views of golden dunes.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1706622618518-7e7c4b99aa1a" },
    price: 8500,
    location: "Jaisalmer",
    country: "India",
    category: "Castles",
    geometry: { type: "Point", coordinates: [70.9165, 26.9157] }
  },
  {
    title: "Heritage Fort Palace",
    description:
      "A luxurious suite in a centuries-old hilltop fort offering royal interiors, antique décor, and breathtaking valley views.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1660991473393-3612a4e49127" },
    price: 12000,
    location: "Kumbhalgarh",
    country: "India",
    category: "Castles",
    geometry: { type: "Point", coordinates: [73.7065, 25.1447] }
  },
  {
    title: "Colonial Castle Mansion",
    description:
      "A grand colonial-era mansion styled like a European castle with sprawling lawns and opulent interiors.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1570129477492-45c003edd2be" },
    price: 9500,
    location: "Ooty",
    country: "India",
    category: "Castles",
    geometry: { type: "Point", coordinates: [76.6950, 11.4064] }
  },
  {
    title: "Lakeview Palace Suite",
    description:
      "Experience royal living inside a serene lakeside palace featuring marble corridors and intricate hand-carved details.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1724947053227-2335bf21d0ae" },
    price: 11500,
    location: "Udaipur",
    country: "India",
    category: "Castles",
    geometry: { type: "Point", coordinates: [73.7125, 24.5854] }
  },
  {
    title: "Regal Hill Castle Retreat",
    description:
      "A majestic hilltop castle offering old-world charm blended with modern comfort and sweeping mountain views.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1623685453478-3c657081042e?" },
    price: 10500,
    location: "Nainital",
    country: "India",
    category: "Castles",
    geometry: { type: "Point", coordinates: [79.4542, 29.3919] }
  },
  {
    title: "Historic Rajput Fortress Room",
    description:
      "A beautifully preserved Rajput fortress stay featuring grand arches, decorated balconies, and royal hospitality.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1708616178113-f687b1113414" },
    price: 7800,
    location: "Bikaner",
    country: "India",
    category: "Castles",
    geometry: { type: "Point", coordinates: [73.2890, 28.0229] }
  },

  // AMAZING POOLS (6)
  {
    title: "Infinity Cliff Pool Villa",
    description:
      "A luxury villa featuring an infinity pool that blends seamlessly with the horizon, offering spectacular ocean sunsets.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1648995505975-8fe3ebc7b253" },
    price: 15000,
    location: "Goa",
    country: "India",
    category: "Amazing Pools",
    geometry: { type: "Point", coordinates: [73.8256, 15.4909] }
  },
  {
    title: "Private Forest Pool Bungalow",
    description:
      "A secluded bungalow featuring a private pool surrounded by lush rainforest, offering complete tranquility.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1710522544802-ac6c66517894" },
    price: 9000,
    location: "Coorg",
    country: "India",
    category: "Amazing Pools",
    geometry: { type: "Point", coordinates: [75.8060, 12.3370] }
  },
  {
    title: "Rooftop Sky Pool Apartment",
    description:
      "A modern apartment with access to a sky-high rooftop pool overlooking city skylines and glittering nightlife.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1711110065918-388182f86e00" },
    price: 7000,
    location: "Mumbai",
    country: "India",
    category: "Amazing Pools",
    geometry: { type: "Point", coordinates: [72.8777, 19.0760] }
  },
  {
    title: "Desert Oasis Pool Camp",
    description:
      "A luxury desert camp with a stunning pool right in the middle of the dunes—an unbelievable blend of comfort and adventure.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1733333321954-5234705f0a30" },
    price: 8200,
    location: "Thar Desert",
    country: "India",
    category: "Amazing Pools",
    geometry: { type: "Point", coordinates: [70.9165, 26.9157] }
  },
  {
    title: "Tea Estate Pool Cottage",
    description:
      "A peaceful hill cottage featuring a temperature-controlled pool overlooking rolling tea gardens.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1623944010372-0d5077020fd8" },
    price: 6500,
    location: "Munnar",
    country: "India",
    category: "Amazing Pools",
    geometry: { type: "Point", coordinates: [77.0590, 10.0889] }
  },
  {
    title: "Luxury Jungle Pool Resort",
    description:
      "A premium stay inside a wildlife-rich jungle featuring a crystal-clear pool surrounded by tall sal trees.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1644886267519-e41524d8ce02" },
    price: 11000,
    location: "Jim Corbett",
    country: "India",
    category: "Amazing Pools",
    geometry: { type: "Point", coordinates: [78.7747, 29.5306] }
  },

  // CAMPING (5)
  {
    title: "Riverside Adventure Camp",
    description:
      "A thrilling riverside camp offering rafting, bonfires, and tent stays with majestic riverbank views.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1739633842989-941d095069da" },
    price: 1800,
    location: "Rishikesh",
    country: "India",
    category: "Camping",
    geometry: { type: "Point", coordinates: [78.2676, 30.0869] }
  },
  {
    title: "Starry Desert Camp",
    description:
      "Experience stargazing like never before in this luxury tent camp deep inside the golden dunes.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1718330009595-faeb03c5814a" },
    price: 3000,
    location: "Jaisalmer",
    country: "India",
    category: "Camping",
    geometry: { type: "Point", coordinates: [70.9165, 26.9157] }
  },
  {
    title: "Himalayan Trek Base Camp",
    description:
      "A mountain base camp ideal for trekkers, offering breathtaking views, warm meals, and cozy alpine tents.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1703299943493-b6b8eefc03e4" },
    price: 2500,
    location: "Kasol",
    country: "India",
    category: "Camping",
    geometry: { type: "Point", coordinates: [77.3280, 32.0146] }
  },
  {
    title: "Forest Wilderness Camp",
    description:
      "A secluded campsite inside dense forest trails, perfect for wildlife enthusiasts and nature lovers.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1728649072511-bd946044a63b" },
    price: 2100,
    location: "Wayanad",
    country: "India",
    category: "Camping",
    geometry: { type: "Point", coordinates: [76.0833, 11.6850] }
  },
  {
    title: "Lakeside Tent Village",
    description:
      "Enjoy lakeside serenity with comfortable tents, fishing spots, and sunrise reflections over calm waters.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1680020009117-911d3d3b4927" },
    price: 1900,
    location: "Pawna Lake",
    country: "India",
    category: "Camping",
    geometry: { type: "Point", coordinates: [73.5885, 18.6656] }
  },

  // FARMS (5)
  {
    title: "Organic Farm Cottage",
    description:
      "A charming cottage surrounded by organic vegetable fields, offering fresh meals and peaceful rural views.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1653206608259-4bd18a057ce8" },
    price: 2600,
    location: "Coorg",
    country: "India",
    category: "Farms",
    geometry: { type: "Point", coordinates: [75.8060, 12.3370] }
  },
  {
    title: "Rustic Farmhouse Retreat",
    description:
      "A traditional farmhouse offering tractor rides, mango orchards, and a serene countryside lifestyle.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09" },
    price: 2300,
    location: "Nashik",
    country: "India",
    category: "Farms",
    geometry: { type: "Point", coordinates: [73.7898, 20.0110] }
  },
  {
    title: "Dairy Farm Stay",
    description:
      "A unique farm stay where guests can enjoy fresh milk, interact with farm animals, and explore open fields.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1592833210806-93d61cecd3ab" },
    price: 2000,
    location: "Ludhiana",
    country: "India",
    category: "Farms",
    geometry: { type: "Point", coordinates: [75.8573, 30.9010] }
  },
  {
    title: "Flower Farm Cottage",
    description:
      "A vibrant flower-filled estate where guests can relax among colorful blossoms and rolling green meadows.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1714631551579-5c05e5be7db5" },
    price: 2700,
    location: "Coonoor",
    country: "India",
    category: "Farms",
    geometry: { type: "Point", coordinates: [76.7966, 11.3522] }
  },
  {
    title: "Fruit Orchard Villa",
    description:
      "Stay in a cozy villa surrounded by orchards full of apples, peaches, and pears with seasonal fruit-picking experiences.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1678161951987-da9dea967f58" },
    price: 3100,
    location: "Shimla",
    country: "India",
    category: "Farms",
    geometry: { type: "Point", coordinates: [77.1734, 31.1048] }
  },

  // ARCTIC (5)
  {
    title: "Snow Igloo Stay",
    description:
      "A rare igloo-style stay surrounded by snow-covered landscapes offering a surreal winter experience.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1652601373869-3fae01d76f8e" },
    price: 8500,
    location: "Manali",
    country: "India",
    category: "Arctic",
    geometry: { type: "Point", coordinates: [77.1900, 32.2432] }
  },
  {
    title: "Himalayan Ice Dome",
    description:
      "A transparent dome stay in freezing mountain terrain offering uninterrupted starry skies and snowy panoramas.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1733586462088-70ef73d0f9a8" },
    price: 9000,
    location: "Spiti Valley",
    country: "India",
    category: "Arctic",
    geometry: { type: "Point", coordinates: [78.2256, 32.2460] }
  },
  {
    title: "Frozen Peak Cabin",
    description:
      "A beautifully insulated cabin located in high-altitude snow regions, with heated interiors and scenic peaks.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1710880435578-062ea02e8976" },
    price: 7800,
    location: "Gulmarg",
    country: "India",
    category: "Arctic",
    geometry: { type: "Point", coordinates: [74.3850, 34.0490] }
  },
  {
    title: "Winter Wonderland Hut",
    description:
      "A rustic alpine hut offering snowfall views, cozy beds, and a warm fireplace for the perfect winter escape.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee" },
    price: 6200,
    location: "Auli",
    country: "India",
    category: "Arctic",
    geometry: { type: "Point", coordinates: [79.5524, 30.4570] }
  },
  {
    title: "Snow Ridge Luxury Pod",
    description:
      "A modern heated pod perched on a snowy ridge, offering thrilling winter adventure with maximum comfort.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd" },
    price: 9200,
    location: "Sonmarg",
    country: "India",
    category: "Arctic",
    geometry: { type: "Point", coordinates: [75.3181, 34.3333] }
  },

  // DOMES (5)
  {
    title: "Luxury Forest Dome",
    description:
      "A stunning transparent forest dome offering immersive views of nature with luxurious interiors.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1647771167457-c82f4850bb7e" },
    price: 6500,
    location: "Coorg",
    country: "India",
    category: "Domes",
    geometry: { type: "Point", coordinates: [75.8060, 12.3370] }
  },
  {
    title: "Himalayan Sky Dome",
    description:
      "Sleep under the stars in a mountain dome with skylights offering spectacular Milky Way views.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1659720879338-160d469a3b17" },
    price: 7800,
    location: "Manali",
    country: "India",
    category: "Domes",
    geometry: { type: "Point", coordinates: [77.1900, 32.2432] }
  },
  {
    title: "Lakefront Eco Dome",
    description:
      "A peaceful eco-friendly dome beside a beautiful lake, perfect for meditation and outdoor relaxation.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1564013434775-f71db0030976" },
    price: 5400,
    location: "Pawna Lake",
    country: "India",
    category: "Domes",
    geometry: { type: "Point", coordinates: [73.5885, 18.6656] }
  },
  {
    title: "Desert Mirage Dome",
    description:
      "A desert dome stay offering warmth, privacy, and dreamy sunrise views over golden dunes.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1760067538068-03d10481bacb" },
    price: 7000,
    location: "Jaisalmer",
    country: "India",
    category: "Domes",
    geometry: { type: "Point", coordinates: [70.9165, 26.9157] }
  },
  {
    title: "Jungle Bubble Dome",
    description:
      "Stay inside a bubble-like transparent dome in the midst of dense jungle for a thrilling lush escape.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1666307578906-164f8887a839" },
    price: 6200,
    location: "Wayanad",
    country: "India",
    category: "Domes",
    geometry: { type: "Point", coordinates: [76.0833, 11.6850] }
  },

  // PLAY (5)
  {
    title: "Adventure Sports Lodge",
    description:
      "A thrilling lodge offering ziplining, rock climbing, ATV rides, and adrenaline-fueled outdoor fun.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1646860529847-678fa12089ae" },
    price: 4800,
    location: "Rishikesh",
    country: "India",
    category: "Play",
    geometry: { type: "Point", coordinates: [78.2676, 30.0869] }
  },
  {
    title: "Seaside Surf Shack",
    description:
      "A fun beach stay designed for surfers, offering surf lessons, board rentals, and breezy ocean views.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1633411190688-e1ec1ae7859b" },
    price: 3500,
    location: "Varkala",
    country: "India",
    category: "Play",
    geometry: { type: "Point", coordinates: [76.7190, 8.7379] }
  },
  {
    title: "Mountain Biking Lodge",
    description:
      "A sporty hillside lodge ideal for bikers featuring exhilarating mountain trails and scenic downhill routes.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1567164050875-822cd14dbf85" },
    price: 4100,
    location: "Leh",
    country: "India",
    category: "Play",
    geometry: { type: "Point", coordinates: [77.5770, 34.1526] }
  },
  {
    title: "Kayaking Adventure Cabin",
    description:
      "A lakeside adventure cabin offering kayaking, canoeing, and water sports—perfect for thrill seekers.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1714302947502-2472b43f15d6" },
    price: 3800,
    location: "Kumarakom",
    country: "India",
    category: "Play",
    geometry: { type: "Point", coordinates: [76.5000, 9.5833] }
  },
  {
    title: "Jungle Adventure Treehouse",
    description:
      "A fun-filled treehouse stay offering zip swings, rope bridges, jungle trails, and wildlife spotting.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1745240940163-0859c8213688" },
    price: 5200,
    location: "Mudumalai",
    country: "India",
    category: "Play",
    geometry: { type: "Point", coordinates: [76.4667, 11.6671] }
  }
];

module.exports = { data: sampleListings };