import { useEffect, useState, useContext } from "react";
import PropTypes from "prop-types";
import { CartContext } from "../App";

export default function CartItem({ item }) {
  const { setCart } = useContext(CartContext);

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

  const [qtyValue, setQtyValue] = useState(0);
  useEffect(() => {
    setQtyValue(item.qty);
  }, [item]);

  const handleQtyChange = (e) => {
    if (e.target.value < 1 || e.target.value > 99) return;
    setQtyValue(Number(e.target.value));
    setCart((prevItems) => {
      return prevItems.map((prevItem) => {
        if (prevItem.id === item.id) {
          return {
            ...item,
            qty: Number(e.target.value),
            total: item.price * e.target.value,
          };
        }
        return prevItem;
      });
    });
  };

  const handleIncreaseQty = () => {
    setCart((prevItems) => {
      return prevItems.map((prevItem) => {
        if (prevItem.id === item.id) {
          return {
            ...item,
            qty: item.qty + 1,
            total: item.price * (item.qty + 1),
          };
        }
        return prevItem;
      });
    });
  };

  const handleDecreaseQty = () => {
    if (item.qty > 1) {
      setCart((prevItems) => {
        return prevItems.map((prevItem) => {
          if (prevItem.id === item.id) {
            return {
              ...item,
              qty: item.qty - 1,
              total: item.price * (item.qty - 1),
            };
          }
          return prevItem;
        });
      });
    }
  };

  const handleRemoveItem = () => {
    setCart((prevItems) => {
      return prevItems.filter((prevItem) => prevItem.id !== item.id);
    });
  };

  return (
    <div className="cartItem flex w-full gap-2 rounded-lg bg-white px-4 py-2 shadow-md">
      <img src={item.image} alt="" className="cartItemImg w-1/4" />
      <div className="cartItemDetails flex w-3/4 items-start justify-start">
        <div className="col1 flex h-full w-full flex-col items-start justify-center">
          <h2 className="text-xl font-bold uppercase">{item.name}</h2>
          <span className="cartItemCode text-xs text-gray-400">
            SKU: {item.sku}
          </span>
          <span className="cartItemSize text-sm font-semibold">
            Size: Regular
          </span>
          <div className="productQtyContainer mt-4 flex h-[40px] items-center rounded-3xl border-2 border-[#414141] py-0">
            <button onClick={handleDecreaseQty} className="border-0">
              {minusIcon}
            </button>
            <input
              type="number"
              min="0"
              max="99"
              value={qtyValue}
              onChange={handleQtyChange}
              className="px-2 py-1.5 text-center"
            />
            <button onClick={handleIncreaseQty} className="border-0">
              {plusIcon}
            </button>
          </div>
        </div>
        <div className="col2 flex h-full flex-col items-end justify-start gap-20 py-2">
          <button onClick={handleRemoveItem} className="-200 border-0 p-0">
            {removeItemIcon}
          </button>
          <span className="cartItemPrice w-40 p-0 text-right text-xl font-bold text-red-500">
            $
            {item.total.toLocaleString(
              (undefined,
              { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
            )}
          </span>
        </div>
      </div>
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.object.isRequired,
  setCart: PropTypes.func,
};
