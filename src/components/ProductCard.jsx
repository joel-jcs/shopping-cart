export default function ProductCard({ product }) {
  return (
    <div className="productCard flex flex-col items-center justify-center gap-3 rounded-lg px-1 py-3">
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
        <div className="productQtyContainer flex h-1/4 w-full items-center justify-center gap-2 py-0">
          <button>-</button>
          <input
            type="number"
            min="0"
            max="99"
            placeholder="1"
            onInput={(e) => (e.target.value = e.target.value.slice(0, 2))}
            className="px-2 py-1.5 text-center outline-2 outline-gray-600"
          />
          <button>+</button>
        </div>
        <button className="mt-3">Add to Cart</button>
      </div>
    </div>
  );
}
