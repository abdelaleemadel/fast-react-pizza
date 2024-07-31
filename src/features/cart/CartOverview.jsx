import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCartTotalPrice, getCartTotalQuantity } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  const cartTotalPrice = useSelector(getCartTotalPrice);
  const cartTotalQuantity = useSelector(getCartTotalQuantity);

  if (!cartTotalQuantity) return null;
  return (
    <div className="flex items-center justify-between bg-stone-800 p-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="text-stone-30 0 space-x-4 font-semibold sm:space-x-6">
        <span>{cartTotalQuantity} pizzas</span>
        <span>{formatCurrency(cartTotalPrice)}</span>
      </p>
      <Link to={"/cart"}>Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
