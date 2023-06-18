"use client";

import CtaButton from "@/components/CtaButton";
import { checkoutState } from "@/components/Recoil/Checkout/Atoms/Checkout";
import { IAddress, ICheckout } from "@/lib/Checkout/interfaces";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import * as yup from "yup";

const YourAddress = () => {
  const [checkout, setCheckout] = useRecoilState<ICheckout>(checkoutState);
  const router = useRouter();
  const schema = yup
    .object({
      address1: yup.string().required("Address line 1 is required"),
      address2: yup.string().required("Address line 2 is required"),
      city: yup.string().required("Your City is required"),
      postCode: yup
        .string()
        .required("Your Postcode is required")
        .matches(
          /^[a-z,A-Z]{1,2}\d[A-Z\d]? ?\d[a-z,A-Z]{2}$/,
          "Invalid UK Postcode"
        ),
    })
    .required();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IAddress>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: IAddress) => {
    setCheckout({ ...checkout, address: data });
    router.push("/checkout/plan-summary");
  };

  // Set initial value when the component mounts
  useEffect(() => {
    setValue("address1", checkout?.address?.address1 as string);
    setValue("address2", checkout?.address?.address2 as string);
    setValue("city", checkout?.address?.city as string);
    setValue("postCode", checkout?.address?.postCode as string);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setValue]);

  return (
    <div className="w-full md:w-96 px-3 md:px-0">
      <h1>Your Address</h1>
      <form className="flex flex-col w-full " onSubmit={handleSubmit(onSubmit)}>
        <span className="text-red-600 text-sm">{errors.address1?.message}</span>
        <input
          className="my-2"
          type="text"
          placeholder="Address Line 1"
          {...register("address1")}
        />
        <span className="text-red-600 text-sm">{errors.address2?.message}</span>
        <input
          className="my-2"
          type="text"
          placeholder="Address Line 2"
          {...register("address2")}
        />
        <span className="text-red-600 text-sm">{errors.city?.message}</span>
        <input
          className="my-2"
          type="text"
          placeholder="City"
          {...register("city")}
        />
        <span className="text-red-600 text-sm">{errors.postCode?.message}</span>
        <input
          className="my-2"
          type="text"
          placeholder="Postcode"
          {...register("postCode")}
        />
        <CtaButton type="submit">Next</CtaButton>
      </form>
    </div>
  );
};

export default YourAddress;
