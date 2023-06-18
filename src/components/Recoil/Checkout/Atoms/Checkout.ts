import { Excess, ICheckout } from "@/lib/Checkout/interfaces";
import { atom } from "recoil";
import { persistAtom } from "../../Atoms/common";

export const defaultValue: ICheckout = {
  excess: Excess.Zero,
  personalDetails: undefined,
  address: undefined,
  bankDetails: undefined,
  product: undefined,
};
export const checkoutState = atom<ICheckout>({
  key: "checkoutState",
  default: defaultValue,
  effects_UNSTABLE: [persistAtom],
});
