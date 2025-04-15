use('app');
db.dropDatabase() // clear database, then recreate it

db.createCollection('space');
db.space.insertMany([
  {
    name: "Galaxy",
    description: "A vast system of billions of stars, gas, and dust bound together by gravity, often arranged in spiral arms or elliptical shapes and spanning thousands of light-years across the cosmos.",
    source: "Microsoft Copilot",
    imageUri: "/images/galaxy.webp"
  },
  {
    name: "Asteroid",
    description: "An asteroid is a small rocky body that orbits the sun, typically found in the asteroid belt between Mars and Jupiter.",
    source: "Microsoft Copilot",
    imageUri: "/images/asteroid.webp"
  },
  {
    name: "Black Hole",
    description: "A black hole is a region of space where the gravitational pull is so strong that nothing, not even light, can escape from it.",
    source: "Microsoft Copilot",
    imageUri: "/images/black-hole.webp"
  },
  {
    name: "Cloud Nebulae",
    description: "Cloud nebulae are vast clouds of gas and dust in space, often the birthplace of stars and planets.",
    source: "Microsoft Copilot",
    imageUri: "/images/cloud-nebulae.webp"
  },
  {
    name: "Distant Space",
    description: "Distant space refers to the far reaches of the universe, beyond our immediate cosmic neighborhood.",
    source: "Microsoft Copilot",
    imageUri: "/images/distant-space.webp"
  },
  {
    name: "Galaxy Collision",
    description: "A galaxy collision occurs when two galaxies pass through each other, often resulting in the formation of new stars.",
    source: "Microsoft Copilot",
    imageUri: "/images/galaxy-collision.webp"
  },
  {
    name: "Moon",
    description: "A moon is a natural satellite that orbits a planet, such as Earth's moon which influences tides and has phases.",
    source: "Microsoft Copilot",
    imageUri: "/images/moon.webp"
  },
  {
    name: "Pulsar",
    description: "A pulsar is a highly magnetized rotating neutron star that emits beams of electromagnetic radiation.",
    source: "Microsoft Copilot",
    imageUri: "/images/pulsar.webp"
  },
  {
    name: "Star Death",
    description: "Star death refers to the end of a star's life cycle, which can result in a supernova, black hole, or white dwarf.",
    source: "Microsoft Copilot",
    imageUri: "/images/star-death.webp"
  },
  {
    name: "Sun",
    description: "The Sun is the star at the center of our solar system, providing light and heat essential for life on Earth.",
    source: "Microsoft Copilot",
    imageUri: "/images/sun.webp"
  }
]);

db.createCollection('produce');
db.produce.insertMany([
  {
    name: "Apple",
    category: "fruit",
    price: 1.99,
    quantity: 150,
    supplier: "Organic Farms Inc",
    organic: true,
    country: "USA",
    expiration: new Date("2023-12-15")
  },
  {
    name: "Banana",
    category: "fruit",
    price: 0.59,
    quantity: 200,
    supplier: "Tropical Imports",
    organic: false,
    country: "Ecuador",
    expiration: new Date("2023-12-10")
  },
  {
    name: "Carrot",
    category: "vegetable",
    price: 1.29,
    quantity: 100,
    supplier: "Local Growers Co-op",
    organic: true,
    country: "USA",
    expiration: new Date("2023-12-20")
  },
  {
    name: "Potato",
    category: "vegetable",
    price: 0.99,
    quantity: 300,
    supplier: "Midwest Farms",
    organic: false,
    country: "USA",
    expiration: new Date("2024-01-15")
  },
  {
    name: "Tomato",
    category: "vegetable",
    price: 2.49,
    quantity: 80,
    supplier: "Sunshine Growers",
    organic: true,
    country: "Mexico",
    expiration: new Date("2023-12-08")
  },
  {
    name: "Cucumber",
    category: "vegetable",
    price: 1.79,
    quantity: 120,
    supplier: "GreenFields Ltd",
    organic: true,
    country: "Canada",
    expiration: new Date("2023-12-12")
  },
  {
    name: "Orange",
    category: "fruit",
    price: 1.29,
    quantity: 175,
    supplier: "Citrus Valley",
    organic: false,
    country: "Spain",
    expiration: new Date("2023-12-18")
  },
  {
    name: "Broccoli",
    category: "vegetable",
    price: 2.99,
    quantity: 60,
    supplier: "Fresh Produce Inc",
    organic: true,
    country: "USA",
    expiration: new Date("2023-12-09")
  },
  {
    name: "Strawberry",
    category: "fruit",
    price: 3.99,
    quantity: 50,
    supplier: "Berry Farms",
    organic: true,
    country: "USA",
    expiration: new Date("2023-12-07")
  },
  {
    name: "Lettuce",
    category: "vegetable",
    price: 1.89,
    quantity: 90,
    supplier: "Green Valley Farms",
    organic: true,
    country: "USA",
    expiration: new Date("2023-12-06")
  },
  {
    name: "Grapes",
    category: "fruit",
    price: 3.49,
    quantity: 75,
    supplier: "Vineyard Delights",
    organic: false,
    country: "Chile",
    expiration: new Date("2023-12-14")
  },
  {
    name: "Onion",
    category: "vegetable",
    price: 0.89,
    quantity: 200,
    supplier: "Midwest Farms",
    organic: false,
    country: "USA",
    expiration: new Date("2024-01-20")
  },
  {
    name: "Avocado",
    category: "fruit",
    price: 2.99,
    quantity: 80,
    supplier: "Tropical Imports",
    organic: true,
    country: "Mexico",
    expiration: new Date("2023-12-13")
  },
  {
    name: "Bell Pepper",
    category: "vegetable",
    price: 1.99,
    quantity: 70,
    supplier: "Sunshine Growers",
    organic: false,
    country: "Netherlands",
    expiration: new Date("2023-12-11")
  },
  {
    name: "Mango",
    category: "fruit",
    price: 2.49,
    quantity: 60,
    supplier: "Global Fruits Inc",
    organic: false,
    country: "India",
    expiration: new Date("2023-12-10")
  },
  {
    name: "Zucchini",
    category: "vegetable",
    price: 1.69,
    quantity: 85,
    supplier: "Local Growers Co-op",
    organic: true,
    country: "USA",
    expiration: new Date("2023-12-09")
  },
  {
    name: "Kiwi",
    category: "fruit",
    price: 0.99,
    quantity: 100,
    supplier: "Southern Hemisphere Imports",
    organic: false,
    country: "New Zealand",
    expiration: new Date("2023-12-16")
  },
  {
    name: "Spinach",
    category: "vegetable",
    price: 2.29,
    quantity: 45,
    supplier: "Green Valley Farms",
    organic: true,
    country: "USA",
    expiration: new Date("2023-12-05")
  },
  {
    name: "Pineapple",
    category: "fruit",
    price: 3.99,
    quantity: 40,
    supplier: "Tropical Imports",
    organic: false,
    country: "Costa Rica",
    expiration: new Date("2023-12-12")
  },
  {
    name: "Cauliflower",
    category: "vegetable",
    price: 2.79,
    quantity: 55,
    supplier: "Fresh Produce Inc",
    organic: true,
    country: "Canada",
    expiration: new Date("2023-12-08")
  }
]);
