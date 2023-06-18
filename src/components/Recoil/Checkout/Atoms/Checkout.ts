import { Excess, ICheckout } from "@/lib/Checkout/interfaces";
import { atom } from "recoil";
import { persistAtom } from "../../Atoms/common";

export const checkoutState = atom<ICheckout>({
  key: "checkoutState",
  default: {
    excess: Excess.Zero,
    personalDetails: undefined,
    address: undefined,
    bankDetails: undefined,
    product: undefined,
  },
  effects_UNSTABLE: [persistAtom],
});
