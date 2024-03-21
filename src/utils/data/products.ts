const MENU = [
  {
    title: "Pizzas Tradicionais",
    data: [
      {
        id: "1",
        title: "mussarela",
        price: 34.9,
        description:
          "Mussarela e tomates",
        cover: require("../../assets/products/cover/1.png"),
        thumbnail: require("../../assets/products/thumbnail/1.png"),
        ingredients: [
          "Mussarela",
          "Tomates",
        ],
      },
      {
        id: "8",
        title: "calabresa",
        price: 34.9,
        description:
          "Calabresa e cebola",
        cover: require("../../assets/products/cover/1.png"),
        thumbnail: require("../../assets/products/thumbnail/1.png"),
        ingredients: [
          "Calabresa",
          "Cebola",
        ],
      },
    ],
  },
  {
    title: "Promoções",
    data: [
      {
        id: "2",
        title: "quatro queijos",
        price: 34.9,
        description:
          "Mussarela, Provolone, Requeijão e Parmesão",
        cover: require("../../assets/products/cover/2.png"),
        thumbnail: require("../../assets/products/thumbnail/2.png"),
        ingredients: [
          "Mussarela",
          "Provolone",
          "Requeijão",
          "Parmesão"
        ],
      },
      {
        id: "3",
        title: "portuguesa",
        price: 34.9,
        description:
          "Presunto, Milho, Ovos, Cebola e Mussarela",
        cover: require("../../assets/products/cover/3.png"),
        thumbnail: require("../../assets/products/thumbnail/3.png"),
        ingredients: [
          "Presunto",
          "Milho",
          "Ovos",
          "Cebola",
          "Mussarela"
        ],
      },
    ],
  },
  {
    title: "Pizzas Doces",
    data: [
      {
        id: "5",
        title: "bombom de Uva",
        price: 49.9,
        description:
          "Creme de bom bom, uvas verdes e chocolate ao leite",
        cover: require("../../assets/products/cover/5.png"),
        thumbnail: require("../../assets/products/thumbnail/5.png"),
        ingredients: [
          "Creme de bom bom;",
          "Chocolate ao leite",
          "Uvas",
        ],
      },
      {
        id: "6",
        title: "brigadeiro",
        price: 49.9,
        description:
          "Chcolate ao leite e Granulado",
        cover: require("../../assets/products/cover/6.png"),
        thumbnail: require("../../assets/products/thumbnail/6.png"),
        ingredients: ["Chocolate ao leite;", "Granulado;"],
      },
    ],
  },
  {
    title: "Bebidas",
    data: [
      {
        id: "7",
        title: "Hmmm, coquinha!",
        price: 6.9,
        thumbnail: require("../../assets/products/thumbnail/7.png"),
        cover: require("../../assets/products/cover/7.png"),
        description:
          "Uma coca super gelada para acompanhar o seu super lanche...",
        ingredients: [],
      },
    ],
  },
]

const PRODUCTS = MENU.map((item) => item.data).flat()

const CATEGORIES = MENU.map((item) => item.title)

type ProductProps = (typeof PRODUCTS)[0]

export { MENU, PRODUCTS, CATEGORIES, ProductProps }
