"use client";

import { IProduct } from "@/lib/Products/Interfaces";
import Card from "../Card";
import CtaButton from "../CtaButton";
import Link from "next/link";

const ProductCard = (product: IProduct) => {
  return (
    <Card className="flex-grow p-6 mx-2 text-center mt-6 md:mt-0">
      <h1>{product.name}</h1>
      <div className="flex flex-col py-4">
        <div>from</div>
        <h2>
          <span className="font-bold text-5xl text-primary">
            £{product.price}
          </span>
          <div>/ month</div>
        </h2>
      </div>
      <Link href={`/product/${product.name.toLowerCase()}`}>
        <CtaButton className="p-4">Choose {product.name}</CtaButton>
      </Link>
    </Card>
  );
};

export default ProductCard;
