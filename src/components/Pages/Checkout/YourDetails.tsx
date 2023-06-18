"use client";
import { useRecoilState } from "recoil";
import { checkoutState } from "@/components/Recoil/Checkout/Atoms/Checkout";
import { ICheckout, IPersonalDetails } from "@/lib/Checkout/interfaces";
import CtaButton from "@/components/CtaButton";
import { useRouter } from "next/navigation";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
const YourDetails = () => {
  const [checkout, setCheckout] = useRecoilState<ICheckout>(checkoutState);
  const router = useRouter();
  const schema = yup
    .object({
      firstName: yup.string().required("Please enter your first name"),
      lastName: yup.string().required("Please enter your last name"),
      email: yup
        .string()
        .email()
        .required("Please enter a valid email address"),
      phone: yup
        .string()
        .required("Please enter your phone number")
        .matches(
          /^(?:(?:\+|00)44|0)(?:\s?\d){9,10}$/,
          "Invalid UK phone number"
        ),
    })
    .required();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IPersonalDetails>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: IPersonalDetails) => {
    setCheckout({ ...checkout, personalDetails: data });
    router.push("/checkout/your-address");
  };

  // Set initial value when the component mounts
  useEffect(() => {
    setValue("firstName", checkout?.personalDetails?.firstName as string);
    setValue("lastName", checkout?.personalDetails?.lastName as string);
    setValue("email", checkout?.personalDetails?.email as string);
    setValue("phone", checkout?.personalDetails?.phone as string);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setValue]);

  return (
    <div className="w-64">
      <h1>Your Details</h1>
      <form className="flex flex-col w-full " onSubmit={handleSubmit(onSubmit)}>
        <span className="text-red-600 text-sm">
          {errors.firstName?.message}
        </span>
        <input
          className="my-2"
          type="text"
          placeholder="First Name"
          {...register("firstName")}
        />
        <span className="text-red-600 text-sm">{errors.lastName?.message}</span>
        <input
          className="my-2"
          type="text"
          placeholder="Last Name"
          {...register("lastName")}
        />
        <span className="text-red-600 text-sm">{errors.email?.message}</span>
        <input
          className="my-2"
          type="text"
          placeholder="Email"
          {...register("email")}
        />
        <span className="text-red-600 text-sm">{errors.phone?.message}</span>
        <input
          className="my-2"
          type="number"
          placeholder="Phone Number"
          {...register("phone")}
        />
        <CtaButton type="submit">Next</CtaButton>
      </form>
    </div>
  );
};

export default YourDetails;
