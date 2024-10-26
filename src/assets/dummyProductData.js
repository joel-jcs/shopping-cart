const getProductId = () => crypto.randomUUID();

const data = [
  {
    name: "Black Women's Gown",
    id: getProductId(),
    category: "Women's Clothing",
    price: 129.99,
    image:
      "https://cdn.dummyjson.com/products/images/womens-dresses/Black%20Women's%20Gown/thumbnail.png",
  },
  {
    name: "Corset Leather With Skirt",
    id: getProductId(),
    category: "Women's Clothing",
    price: 89.99,
    image:
      "https://cdn.dummyjson.com/products/images/womens-dresses/Corset%20Leather%20With%20Skirt/thumbnail.png",
  },
  {
    name: "Dress Pea",
    id: getProductId(),
    category: "Women's Clothing",
    price: 49.99,
    image:
      "https://cdn.dummyjson.com/products/images/womens-dresses/Dress%20Pea/thumbnail.png",
  },
];

export default data;
