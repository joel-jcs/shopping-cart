import { useOutletContext } from "react-router-dom";
import CartItem from "./CartItem";

export default function Cart() {
  const { cart, setCart, cartQty } = useOutletContext();

  if (cart.length === 0) {
    return (
      <>
        <div className="cartContainer my-20 flex min-h-[80vh] flex-col items-center justify-start gap-10">
          <h1 className="text-6xl font-black uppercase">Shopping Cart</h1>
          <h2 className="text-3xl font-bold">Your cart is empty</h2>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="cartContainer my-20 flex min-h-[80vh] flex-col items-center justify-start gap-10">
        <h1 className="text-6xl font-black uppercase">
          Shopping Cart ({cartQty} Items)
        </h1>
        <div className="cartAndSummary relative flex items-start justify-start gap-4 bg-gray-100 px-4 py-3">
          <div className="cartItemContainer flex w-[70%] flex-col items-start justify-start gap-4">
            {cart.map((item) => {
              return <CartItem key={item.id} item={item} setCart={setCart} />;
            })}
          </div>
          {/* fix the sticky, should stay on the same position when scrolling */}
          <div className="orderSummaryContainer sticky flex w-[30%] flex-col gap-2 rounded-lg bg-white px-4 py-3 shadow-md">
            <h2 className="text-2xl font-bold">Order Summary</h2>
            <div className="subtotalContainer flex justify-between border-b-2 py-2 text-sm font-semibold">
              <span>Item Subtotal ({cartQty}):</span>
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
