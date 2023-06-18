"use client";
import BackgroundImageContainer from "./Layout/Containers/BackgroundImageContainer";
import { Products } from "@/lib/Products/constants";
import ProductCard from "./ProductCard/ProductCard";
import { Dialog } from "@headlessui/react";
import { useRecoilState } from "recoil";
import Card from "./Card";
import { ImodalState } from "./Recoil/Atoms/FindAplan";
import { modalStateAtom } from "./Recoil/Atoms/FindAplan";
import { CoverSection } from "@/lib/Products/Interfaces";
import { CoverSections } from "@/lib/CoverSections/constants";
import { convertCamelCaseToSpaces } from "@/lib/helpers";
const FindAPlan = () => {
  const [modal, setModal] = useRecoilState<ImodalState>(modalStateAtom);
  return (
    <>
      <BackgroundImageContainer className="py-12">
        <div className="w-screen md:max-w-[1200px] justify-center flex flex-col text-center p-6 md:p-0">
          <h1>Find a plan that suits you</h1>
          <div className="flex flex-row flex-wrap">
            {Products.map((product) => {
              if (!product.display) return;
              return <ProductCard key={product.index} {...product} />;
            })}
          </div>
        </div>
      </BackgroundImageContainer>
      <Dialog
        open={modal.modalOpen}
        onClose={() => setModal({ ...modal, modalOpen: false })}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center  md:w-screen">
          <Dialog.Panel className=" rounded bg-white ">
            <Card className="p-4 w-full md:w-[750px] rounded-lg">
              <h2 className="text-xl font-bold">
                Whats Included -{" "}
                {convertCamelCaseToSpaces(
                  CoverSection[modal.selectedCoverSection!]
                )}
              </h2>
              <ul className="pt-6 text-xs md:text-sm">
                {CoverSections.find(
                  (section) => section.name === modal.selectedCoverSection
                )?.sections.map((section) => (
                  <li key={section}>{section}</li>
                ))}
              </ul>
            </Card>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default FindAPlan;
