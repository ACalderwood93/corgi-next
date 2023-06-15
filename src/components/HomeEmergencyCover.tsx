"use client";
import Image from "next/image";
import Link from "next/link";

const HomeEmergencyCover = () => {
  return (
    <section className="w-[70%] mx-auto h-[500px] pt-6 pm-6">
      <div className="flex-row flex h-full flex-wrap">
        <div className="md:w-2/4 sm:w-full px-2">
          <span className="font-bold">Home Emergency cover</span>
          <h2 className="text-xl font-bold">
            Simple Plans to keep your mind at ease
          </h2>

          <p>
            Cover for your boiler, central heating, plumbing, electrics and more
          </p>
          <p>
            We are the UK&apos;s top rated boiler and home emergency cover
            provider on Trustpilot
          </p>

          <h2 className="text-xl font-bold">Key benifits</h2>
          <ul>
            <li>Annual Boiler Service</li>
            <li>24/7 emergency helpline</li>
            <li>Parts and labour included</li>
            <li>Nationwide network of approved engineers</li>
          </ul>

          <Link href="/boiler-cover">
            <button className="primary-colour w-50 p-2 rounded-md text-white font-bold">
              Get boiler cover
            </button>
          </Link>
        </div>
        <div className="px-2 rounded-lg md:w-2/4 sm:w-full">
          <Image
            className=""
            src="/home-emergency-cover.jpg"
            width={500}
            height={500}
            alt="test"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeEmergencyCover;
