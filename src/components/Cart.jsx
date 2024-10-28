export default function Cart() {
  return (
    <div className="cartContainer my-20 flex flex-col items-center justify-center gap-10">
      <h1 className="text-6xl font-black">Shopping Cart (1)</h1>
      <div className="cartItemContainer">
        <div className="cartItem">
          <img src="" alt="" className="cartItemImg" />
          <div className="cartItemDetails">
            <h2>Item Name</h2>
            <span className="cartItemCode">UPC: 0902481273082</span>
            <span className="cartItemSize">Regular</span>
            <span className="cartItemPrice">110.00</span>
            <div className="cartItemBtns">
              <div className="productQtyContainer">
                <button>-</button>
                <input value="1" type="text" />
                <button>+</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="orderSummaryContainer">
        <h2>Order Summary</h2>
        <div className="subtotalContainer">
          <span>Subtotal</span>
          <span>110.00</span>
        </div>
        <div className="shippingContainer">
          <span>Shipping</span>
          <span>110.00</span>
        </div>
        <div className="taxContainer">
          <span>Tax</span>
          <span>110.00</span>
        </div>
        <div className="totalContainer">
          <span>Total</span>
          <span>130.00</span>
        </div>
        <button>Checkout</button>
      </div>
    </div>
  );
}
