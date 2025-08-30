const products = [
  {
    id: 1,
    name: "Molinillo con Blend de especias",
    description: `Blend de especias: jengibre, cúrcuma, cardamomo, pimienta y limón.
Propiedades antiinflamatorias y antioxidantes, ideal para realzar sabores`,
    usage:
      "Perfecto para dar un toque exótico a tragos y comidas, o para tus infusiones.",
    image: "/molinillo.png",
    price: 25000,
    minQuantity: 5,
    pricing: [
      { min: 5, price: Math.round(25000 * 0.85) }, // 21.250
      { min: 20, price: Math.round(25000 * 0.7) }, // 17.500
      { min: 50, price: Math.round(25000 * 0.55) }, // 13.750
    ],
  },
  {
    id: 2,
    name: "Molinillo con frasco RE-FILL",
    description:
      "Molinillo con Blend de especias: jengibre, cúrcuma, cardamomo, pimienta y limón.",
    image: "/molinillo combo.png",
    price: 30000,
    minQuantity: 5,
    pricing: [
      { min: 5, price: Math.round(30000 * 0.85) }, // 25.500
      { min: 20, price: Math.round(30000 * 0.7) }, // 21.000
      { min: 50, price: Math.round(30000 * 0.55) }, // 16.500
    ],
  },
  {
    id: 3,
    name: "Leche Dorada (Golden Milk)",
    description:
      "Con especias antibacterianas y antivirales, fortalece el sistema inmunológico y protege contra resfriados.",
    usage: "Consumir caliente como bebida reconfortante y nutritiva.",
    image: "/lechedorada.png",
    price: 4500,
    minQuantity: 3,
    pricing: [
      { min: 5, price: Math.round(4500 * 0.85) }, // 3.825
      { min: 20, price: Math.round(4500 * 0.7) }, // 3.150
      { min: 50, price: Math.round(4500 * 0.55) }, // 2.475
    ],
  },
  {
    id: 4,
    name: "Hibiscus",
    description:
      "Infusión de hibiscus con propiedades antioxidantes y refrescantes.",
    usage: "Disfrutar como té frío o caliente, según tu preferencia.",
    image: "/hibiscus.png",
    price: 4500,
    minQuantity: 4,
    pricing: [
      { min: 5, price: Math.round(4500 * 0.85) }, // 3.825
      { min: 20, price: Math.round(4500 * 0.7) }, // 3.150
      { min: 50, price: Math.round(4500 * 0.55) }, // 2.475
    ],
  },
  {
    id: 5,
    name: "Blend de Especias",
    description:
      "Jengibre, cúrcuma, pimienta, cardamomo y citrus. Fortalece el sistema inmunológico y protege contra resfriados.",
    usage:
      "Como infusión o para agregar a la yerba mate, ideal para potenciar el sabor.",
    image: "/blendSpecias.png",
    price: 4500,
    minQuantity: 5,
    pricing: [
      { min: 5, price: Math.round(4500 * 0.85) }, // 3.825
      { min: 20, price: Math.round(4500 * 0.7) }, // 3.150
      { min: 50, price: Math.round(4500 * 0.55) }, // 2.475
    ],
  },
];

export default products;
