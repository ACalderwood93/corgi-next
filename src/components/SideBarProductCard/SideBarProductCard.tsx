"use client";

import { useRecoilValue } from "recoil";
import { checkoutState } from "@/components/Recoil/Checkout/Atoms/Checkout";
import useProduct from "@/app/hooks/useProduct";
import Card from "../Card";
import ExcessToggle from "../ExcessToggle";

const SideBarProductCard = () => {
  const { currentPrice, name, excessCost, isExcess } = useProduct();
  const checkout = useRecoilValue(checkoutState);

  return (
    <Card className="w-[350px] flex flex-col p-6 bg-amber-100 rounded-xl ">
      <h1>Your Plan</h1>
      <h2 className="text-xl font-bold">{name}</h2>
      <span>£{currentPrice}/ month</span>
      <h2 className="text-xl mt-2">Price Breakdown</h2>
      <ul className="w-full">
        <li className="flex">
          <div className="flex-grow">Product cost</div>
          <div>£{isExcess ? currentPrice! - excessCost : currentPrice}</div>
        </li>
        <li className="flex">
          <div className="flex-grow">Excess Cost:</div>
          <div></div>
          <div>£{isExcess ? excessCost : 0}</div>
        </li>
      </ul>
    </Card>
  );
};

export default SideBarProductCard;
