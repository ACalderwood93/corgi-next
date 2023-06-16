"use client";
import Image from "next/image";
import Link from "next/link";

const HomeEmergencyCover = () => {
  return (
    <div className="py-6 flex justify-center">
      <div className="flex justify-center flex-row flex-wrap w-[70%]">
        <div className="md:w-2/4 sm:w-full p-2">
          <span className="font-bold">Home Emergency cover</span>
          <h2 className="text-xl font-bold mb-2">
            Simple Plans to keep your mind at ease
          </h2>

          <p>
            Cover for your boiler, central heating, plumbing, electrics and more
          </p>
          <p>
            We are the UK&apos;s top rated boiler and home emergency cover
            provider on Trustpilot
          </p>

          <h2 className="text-xl font-bold my-2">Key benifits</h2>
          <ul className="mb-4">
            <li>Annual Boiler Service</li>
            <li>24/7 emergency helpline</li>
            <li>Parts and labour included</li>
            <li>Nationwide network of approved engineers</li>
          </ul>

          <Link href="/boiler-cover">
            <button className="primary-colour p-2 rounded-md text-white font-bold">
              Get boiler cover
            </button>
          </Link>
        </div>
        <div className="p-2 rounded-lg md:w-2/4 sm:w-full">
          <Image
            className="aspect-auto"
            src="/home-emergency-cover.jpg"
            width={500}
            height={500}
            alt="test"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeEmergencyCover;
