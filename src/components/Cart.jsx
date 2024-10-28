export default function Cart() {
  const removeItemIcon = (
    <svg
      className="w-6 rounded-lg fill-gray-600"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <title>Remove Item</title>
      <path d="M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z" />
    </svg>
  );

  const plusIcon = (
    <svg className="w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>Increase Quantity</title>
      <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
    </svg>
  );

  const minusIcon = (
    <svg className="w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>Decrease Quantity</title>
      <path d="M19,13H5V11H19V13Z" />
    </svg>
  );
  return (
    <>
      <div className="cartContainer my-20 flex min-h-[80vh] flex-col items-center justify-start gap-10">
        <h1 className="text-6xl font-black uppercase">Shopping Cart (1)</h1>
        <div className="flex items-start justify-start gap-4 bg-gray-100 px-4 py-3">
          <div className="cartItemContainer flex w-[70%] flex-col items-start justify-start">
            <div className="cartItem flex w-full rounded-lg bg-white py-2 shadow-md">
              <img
                src="https://cdn.dummyjson.com/products/images/mens-shirts/Gigabyte%20Aorus%20Men%20Tshirt/thumbnail.png"
                alt=""
                className="cartItemImg w-1/4"
              />
              <div className="cartItemDetails flex w-3/4 items-start">
                <div className="col1 flex h-full w-3/4 flex-col items-start justify-center">
                  <h2 className="text-xl font-bold uppercase">Item Name</h2>
                  <span className="cartItemCode text-xs text-gray-400">
                    UPC: 0902481273082
                  </span>
                  <span className="cartItemSize text-sm font-semibold">
                    Size: Regular
                  </span>
                  <div className="cartItemBtns">
                    <div className="productQtyContainer flex items-center gap-2 py-0">
                      <button className="p-0">{minusIcon}</button>
                      <input
                        type="number"
                        min="0"
                        max="99"
                        value="1"
                        className="px-2 py-1.5 text-center outline-2 outline-gray-600"
                      />
                      <button>{plusIcon}</button>
                    </div>
                  </div>
                </div>
                <div className="col2 flex h-full flex-col items-end justify-start gap-12">
                  <button className="-200 border-0 p-0">
                    {removeItemIcon}
                  </button>
                  <span className="cartItemPrice text-xl font-bold text-red-500">
                    $110.00
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="orderSummaryContainer flex w-[30%] flex-col gap-2 rounded-lg bg-white px-4 py-3 shadow-md">
            <h2 className="text-2xl font-bold">Order Summary</h2>
            <div className="subtotalContainer flex justify-between border-b-2 py-2 text-sm font-semibold">
              <span>Item Subtotal (1):</span>
              <span>110.00</span>
            </div>
            <div className="shippingContainer flex justify-between py-2 text-sm font-semibold">
              <span>Shipping:</span>
              <span>10.00</span>
            </div>
            <div className="taxContainer flex justify-between border-b-2 py-2 text-sm font-semibold">
              <span>Tax:</span>
              <span>10.00</span>
            </div>
            <div className="totalContainer flex justify-between py-2 text-lg font-bold">
              <span>Total:</span>
              <span className="text-red-500">130.00</span>
            </div>
            <button className="bg-black uppercase text-white transition-all duration-150 hover:bg-white hover:text-black">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
