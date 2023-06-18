"use client";
import Card from "@/components/Card";
import CtaButton from "@/components/CtaButton";
import { checkoutState } from "@/components/Recoil/Checkout/Atoms/Checkout";
import { Excess } from "@/lib/Checkout/interfaces";
import { Dialog } from "@headlessui/react";
import Link from "next/link";
import { useState } from "react";
import { set } from "react-hook-form";
import { useRecoilValue } from "recoil";
const PlanSummary = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const checkout = useRecoilValue(checkoutState);
  return (
    <>
      <Dialog
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center  md:w-screen">
          <Dialog.Panel className=" rounded bg-white ">
            <Card className="p-4 w-full md:w-[750px] rounded-lg">
              <h2>What is a Callout Fee?</h2>
              <p>
                The call-out fee is the amount you pay each time you request a
                repair. You can choose your plan with or without a call out fee.
                Choosing a higher call-out fee reduces your monthly payments.
              </p>
            </Card>
          </Dialog.Panel>
        </div>
      </Dialog>
      <div className="flex flex-col w-full md:w-[500px] px-4">
        <h1>Your plan overview</h1>
        <div className="flex flex-row">
          <div className="flex-grow">
            Type: <span className="font-bold">{checkout.product?.name}</span>
          </div>
          <div className="text-primary font-bold text-right text-sm">
            <Link href="/boiler-cover">Change Plan</Link>
          </div>
        </div>
        <span>Price: £{checkout.product?.price} / Month</span>
        <div className="flex flex-row">
          <div className="flex-grow">
            <span>Callout Fee: {Excess[checkout.excess]}</span>
          </div>
          <div
            className="text-primary font-bold text-right cursor-pointer text-sm"
            onClick={() => setModalOpen(true)}
          >
            Whats this?
          </div>
        </div>

        <CtaButton className="mt-4">Get Cover</CtaButton>
      </div>
    </>
  );
};

export default PlanSummary;
