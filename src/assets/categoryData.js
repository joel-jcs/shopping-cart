const getCategoryId = () => crypto.randomUUID();

const data = [
  {
    name: "Men's Clothing",
    id: getCategoryId(),
    image: "https://c.stocksy.com/a/nNVQ00/z9/6317167.jpg",
  },
  {
    name: "Men's Accessories",
    id: getCategoryId(),
    image:
      "https://www.shutterstock.com/image-photo/stylish-male-clothes-accessories-on-600nw-2029300439.jpg",
  },
  {
    name: "Women's Clothing",
    id: getCategoryId(),
    image:
      "https://www.shutterstock.com/image-photo/young-fashion-model-stylish-beige-600nw-2382157791.jpg",
  },
  {
    name: "Women's Accessories",
    id: getCategoryId(),
    image:
      "https://www.shutterstock.com/image-photo/fashion-women-stylish-accessories-outfit-600nw-1532053424.jpg",
  },
];

export default data;
