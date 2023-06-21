"use client";
import Card from "@/components/Card";
import { ReactNode } from "react";
import { useRecoilState } from "recoil";
import { checkoutState } from "@/components/Recoil/Checkout/Atoms/Checkout";
import SideBarProductCard from "@/components/SideBarProductCard/SideBarProductCard";
const CheckoutLayout = ({ children }: { children: ReactNode }) => {
  const [checkout] = useRecoilState(checkoutState);
  return (
    <div className="flex flew-row w-full md:w-[1200px]">
      <div className="flex-grow">{children}</div>
      <div className="px-4 hidden md:block">
        <SideBarProductCard />
      </div>
    </div>
  );
};

export default CheckoutLayout;
