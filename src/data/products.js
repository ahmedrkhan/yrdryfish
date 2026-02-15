const products = [
  {
    id: 1,
    name: "Premium Dry Prawns",
    price: 850,
    category: "Prawns",
    stock: 25,
    rating: 4.8,
    description:
      "High-quality dry prawns, handpicked and naturally sun-dried for intense flavor. Perfect for curries or snacks.",
    images: [
      `${import.meta.env.BASE_URL}images/mandeli.png`,
      `${import.meta.env.BASE_URL}images/yellow-jawala.png`
    ],
    video: `${import.meta.env.BASE_URL}videos/jawla.mp4`
  },
  {
    id: 2,
    name: "Gujarat Bomil",
    price: 400,
    category: "Small Fish",
    stock: 40,
    rating: 4.5,
    description:
      "Fresh small fish from Gujarat, ideal for light frying and traditional recipes.",
    images: [
      `${import.meta.env.BASE_URL}images/mandeli.png`,
      `${import.meta.env.BASE_URL}images/yellow-jawala.png`
    ],
    video: `${import.meta.env.BASE_URL}videos/kardi.mp4`
  },
  {
    id: 3,
    name: "Dry Mandeli",
    price: 1200,
    category: "Large Fish",
    stock: 10,
    rating: 4.7,
    description:
      "Premium large fish dried naturally, rich in protein and perfect for gourmet dishes.",
    images: [
      `${import.meta.env.BASE_URL}images/mandeli.png`,
      `${import.meta.env.BASE_URL}images/yellow-jawala.png`
    ],
    video: `${import.meta.env.BASE_URL}videos/wakati.mp4`

  },
  {
    id: 4,
    name: "Yellow Jawala",
    price: 900,
    category: "Prawns",
    stock: 15,
    rating: 4.6,
    description:
      "Sun-dried yellow jawala prawns with a rich taste and aromatic flavor. Excellent for special seafood recipes.",
    images: [
      `${import.meta.env.BASE_URL}images/mandeli.png`,
      `${import.meta.env.BASE_URL}images/yellow-jawala.png`
    ]
    ,
    video: `${import.meta.env.BASE_URL}videos/kardi.mp4`
  },
  {
    id: 5,
    name: "Small Gujarat Bomil",
    price: 450,
    category: "Small Fish",
    stock: 30,
    rating: 4.3,
    description:
      "Tender small fish from Gujarat, lightly salted and sun-dried for freshness.",
    images: [
      `${import.meta.env.BASE_URL}images/mandeli.png`,
      `${import.meta.env.BASE_URL}images/yellow-jawala.png`
    ],
    video: `${import.meta.env.BASE_URL}videossurmai-piece.mp4`
  },
  {
    id: 6,
    name: " Bangda",
    price: 400,
    category: "Small Fish",
    stock: 40,
    rating: 4.5,
    description:
      "Fresh small fish from Gujarat, ideal for light frying and traditional recipes.",
    images: [
      `${import.meta.env.BASE_URL}images/mandeli.png`,
      `${import.meta.env.BASE_URL}images/yellow-jawala.png`
    ]
    ,
    video: `${import.meta.env.BASE_URL}videos/bangda.mp4`
  },
];

export default products;
