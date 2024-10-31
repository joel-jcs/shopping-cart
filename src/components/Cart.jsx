import { useContext } from "react";
import { CartContext } from "../App";

import CartItem from "./CartItem";

export default function Cart() {
  const { cart, setCart, cartQty } = useContext(CartContext);

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

  const orderSubtotal = cart
    .map((item) => item.total)
    .reduce((a, b) => a + b, 0);
  const orderSummary = {
    subtotal: orderSubtotal,
    shipping: orderSubtotal > 50 ? 0 : 10,
    tax: orderSubtotal * 0.115,
  };

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
              <span>
                $
                {orderSummary.subtotal.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </span>
            </div>
            <div className="shippingContainer flex justify-between py-2 text-sm font-semibold">
              <span>
                Shipping:
                <i className="text-xs text-gray-500"> (free on orders $50+)</i>
              </span>
              <span>
                $
                {orderSummary.shipping.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </span>
            </div>
            <div className="taxContainer flex justify-between border-b-2 py-2 text-sm font-semibold">
              <span>
                Tax: <i className="text-xs text-gray-500"> (11.5%)</i>
              </span>
              <span>
                $
                {orderSummary.tax.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </span>
            </div>
            <div className="totalContainer flex justify-between py-2 text-lg font-bold">
              <span>Total:</span>
              <span className="text-red-500">
                $
                {(
                  orderSummary.subtotal +
                  orderSummary.shipping +
                  orderSummary.tax
                ).toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </span>
            </div>
            <button
              onClick={() => {
                alert("Checkout successful");
                setCart([]);
              }}
              className="bg-black uppercase text-white transition-all duration-150 hover:bg-white hover:text-black"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
