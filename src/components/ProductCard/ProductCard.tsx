"use client";
import { useState } from "react";
import { IProduct } from "@/lib/Products/Interfaces";
import Card from "../Card";
import CtaButton from "../CtaButton";
import Link from "next/link";

const ProductCard = (product: IProduct) => {
  const [excess, setExcess] = useState<boolean>(false);
  return (
    <Card className="flex-grow p-6 mx-2 text-center mt-6 w-full md:w-full px-4 md:px-0 lg:w-32 md:mt-4">
      <h1>{product.name}</h1>
      <div className="flex flex-col py-4 w-[80%] mx-auto">
        <div>from</div>
        <h2>
          <span className="font-bold text-5xl text-primary">
            £{excess ? product.price : product.priceWithoutExcess}
          </span>
          <div>/ month</div>
        </h2>
        <div className="text-left font-bold">Includes</div>
        <ul className="text-left text-xs">
          <li>Annual Boiler Service</li>
          <li>Annual Boiler Service</li>
          <li>Annual Boiler Service</li>
          <li>Annual Boiler Service</li>
          <li>Annual Boiler Service</li>
        </ul>
      </div>
      <Link href={`/product/${product.name.toLowerCase()}`}>
        <CtaButton className="p-4 w-[98%] md:w-[70%]">Select</CtaButton>
      </Link>
    </Card>
  );
};

export default ProductCard;
