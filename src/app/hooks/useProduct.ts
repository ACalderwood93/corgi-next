import { useRecoilValue } from "recoil";
import { checkoutState } from "@/components/Recoil/Checkout/Atoms/Checkout";
import { useMemo } from "react";
import { Excess } from "@/lib/Checkout/interfaces";

const useProduct = (): IUseProductProps => {
  const checkout = useRecoilValue(checkoutState);

  const isExcess = useMemo(() => {
    return checkout.excess == Excess.Sixty;
  }, [checkout.excess]);

  const currentPrice = useMemo(() => {
    return isExcess
      ? checkout.product?.price
      : checkout.product?.priceWithoutExcess;
  }, [checkout.product?.price, checkout.product?.priceWithoutExcess, isExcess]);

  const excessCost = useMemo(() => {
    return checkout?.product?.priceWithoutExcess! - checkout.product?.price!;
  }, [checkout.product?.price, checkout.product?.priceWithoutExcess]);

  return {
    currentPrice,
    isExcess,
    name: checkout.product?.name,
    excessCost,
  };
};

export default useProduct;

export interface IUseProductProps {
  currentPrice?: number;
  name?: string;
  isExcess: boolean;
  excessCost: number;
}
