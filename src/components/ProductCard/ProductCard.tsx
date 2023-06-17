"use client";

import { useState } from "react";
import { CoverSection, IProduct } from "@/lib/Products/Interfaces";
import Card from "../Card";
import CtaButton from "../CtaButton";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { convertCamelCaseToSpaces } from "@/lib/helpers";
import { Dialog } from "@headlessui/react";
import { useRecoilState } from "recoil";
import { modalStateAtom } from "../Recoil/Atoms/FindAplan";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ProductCard = (product: IProduct) => {
  const [modal, setModal] = useRecoilState(modalStateAtom);
  return (
    <Card className="flex-grow p-6 mx-2 text-center mt-6 w-full md:w-full px-4 md:px-0 lg:w-32 md:mt-4">
      <h1>{product.name}</h1>
      <div className="flex flex-col py-4 w-[80%] mx-auto md:min-h-[400px]">
        <div>from</div>
        <h2>
          <span className="font-bold text-5xl text-primary">
            £{product.price}
          </span>
          <div>/ month</div>
        </h2>
        <div className="text-left font-bold mt-3">Includes</div>
        <ul className="text-left text-sm">
          {product.covered.map((section) => {
            return (
              <li key={section} className="hover:text-primary">
                <button
                  onClick={() =>
                    setModal({
                      modalOpen: true,
                      selectedCoverSection: section,
                    })
                  }
                >
                  {convertCamelCaseToSpaces(CoverSection[section])}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="w-full">
        <CtaButton
          onClick={() => setModal({ ...modal, modalOpen: true })}
          className="p-4 w-[98%] md:w-[70%]"
        >
          Select
        </CtaButton>
      </div>
    </Card>
  );
};

export default ProductCard;
