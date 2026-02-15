const products = [
  {
    id: 1,
    name: "Arnala Bomil",
    price: 700,
    category: "Bomil",
    stock: 2500,
    rating: 4.8,
    description:
      "High-quality dry Bomil, handpicked and naturally sun-dried for intense flavor. Perfect for curries or snacks.",
    images: [
      `${import.meta.env.BASE_URL}images/harnala2.png`,
      `${import.meta.env.BASE_URL}images/harnal-bomil.png`
    ],
    video: `${import.meta.env.BASE_URL}videos/harnalabomil.mp4`
  },
  {
    id: 2,
    name: "Gujarat Bomil",
    price: 420,
    category: "Bomil",
    stock: 4000,
    rating: 4.5,
    description:
      "Fresh small fish from Gujarat, ideal for light frying and traditional recipes.",
    images: [
      `${import.meta.env.BASE_URL}images/gujaarta-bomil.png`,
      `${import.meta.env.BASE_URL}images/gujaratbomil2.webp`
    ],
    video: `${import.meta.env.BASE_URL}videos/harnalabomil.mp4`
  },
  {
    id: 3,
    name: "Dry Jawla",
    price: 250,
    category: "small fish",
    stock: 10000,
    rating: 4.7,
    description:
      "Premium small fish dried naturally, rich in protein and perfect for gourmet dishes.",
    images: [
      `${import.meta.env.BASE_URL}images/white-jawala.png`,
      `${import.meta.env.BASE_URL}images/yellow-jawala.png`
    ],
    video: `${import.meta.env.BASE_URL}videos/jawla.mp4`

  },
  {
    id: 4,
    name: "Kardi (small prawns)",
    price: 500,
    category: "Prawns",
    stock: 1500,
    rating: 4.6,
    description:
      "Sun-dried  prawns with a rich taste and aromatic flavor. Excellent for special seafood recipes.",
    images: [
      `${import.meta.env.BASE_URL}images/kardi.png`,
      `${import.meta.env.BASE_URL}images/kardi2.png`
    ]
    ,
    video: `${import.meta.env.BASE_URL}videos/kardi.mp4`
  },
  {
    id: 5,
    name: "Bangda dry Fish",
    price: "250 - 12pieces" ,
    category: "Fish",
    stock: 3000,
    rating: 4.3,
    description:
      "Tender small fish from oceans, lightly salted and sun-dried for freshness.",
    images: [
      `${import.meta.env.BASE_URL}images/bangda.jpg`,
      `${import.meta.env.BASE_URL}images/bangda2.jpg`
    ],
    video: `${import.meta.env.BASE_URL}bangda.mp4`
  },
  {
    id: 6,
    name: " Mandeli",
    price: 400,
    category: "Small Fish",
    stock: 4000,
    rating: 4.5,
    description:
      "Fresh small fish from Oceans, ideal for light frying and traditional recipes.",
    images: [
      `${import.meta.env.BASE_URL}images/mandeli.png`,
      `${import.meta.env.BASE_URL}images/mandeli2.png`
    ]
    ,
    video: `${import.meta.env.BASE_URL}videos/wakati.mp4`
  },
];

export default products;
