"use client";

import { Switch } from "@headlessui/react";
import { checkoutState } from "./Recoil/Checkout/Atoms/Checkout";
import { useRecoilState } from "recoil";
import { Excess } from "@/lib/Checkout/interfaces";

import { useMemo } from "react";
const ExcessToggle = () => {
  const [checkout, setCheckout] = useRecoilState(checkoutState);

  const enabled = useMemo(() => {
    return checkout.excess == Excess.Sixty;
  }, [checkout.excess]);

  const toggleExcess = () => {
    console.log("switched");
    setCheckout({
      ...checkout,
      excess: checkout.excess == Excess.Sixty ? Excess.Zero : Excess.Sixty,
    });
  };
  return (
    <Switch
      checked={enabled}
      onChange={toggleExcess}
      className={`${
        enabled ? "bg-primary" : "bg-gray-200"
      } relative inline-flex h-6 w-11 items-center rounded-full`}
    >
      <span className="sr-only">Enable notifications</span>
      <span
        className={`${
          enabled ? "translate-x-6" : "translate-x-1"
        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
      />
    </Switch>
  );
};

export default ExcessToggle;
