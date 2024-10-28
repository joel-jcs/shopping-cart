export default function ProductCard({ product }) {
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
        <button className="w-3/4 transition-all duration-150 hover:bg-black hover:text-white">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
