import PropTypes from "prop-types";

export default function ProductCard({ product, cart, setCart }) {
  const handleAddToCart = () => {
    const hasItem = cart.some((item) => product.id === item.id);
    if (hasItem) {
      setCart((prevItems) => {
        return prevItems.map((item) => {
          if (item.id === product.id) {
            return {
              ...item,
              qty: item.qty + 1,
              total: item.price * (item.qty + 1),
            };
          }
          return item;
        });
      });
    } else {
      setCart((prevItems) => [
        ...prevItems,
        {
          name: product.title,
          id: product.id,
          price: product.price,
          qty: 1,
          image: product.thumbnail,
          sku: product.sku,
          total: product.price,
        },
      ]);
    }
  };

  return (
    <div className="productCard flex flex-col items-center justify-center gap-3 rounded-lg px-1 py-3 transition-all duration-150 hover:scale-105 hover:shadow-xl">
      <img
        src={product.thumbnail}
        className="productImg h-full select-none bg-white object-cover"
      />
      <div className="productDetails flex h-auto w-full flex-col items-center py-2">
        <h2 className="productPrice text-xl font-bold text-red-500">
          {`$${product.price.toLocaleString()}`}
        </h2>
        <span className="productName mb-4 text-sm font-bold">
          {product.title}
        </span>
        <button
          onClick={handleAddToCart}
          className="w-3/4 transition-all duration-150 hover:bg-black hover:text-white"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  cart: PropTypes.array.isRequired,
  setCart: PropTypes.func,
};
