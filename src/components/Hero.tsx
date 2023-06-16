"use client";
import Link from "next/link";
import Button from "react-bootstrap/Button";

const hero = () => {
  return (
    <section className="">
      <div className="bg-cover bg-no-repeat bg-[url('/hero.png')] text-center p-36">
        <h1>BOILER AND HOME EMERGENCY COVER</h1>
        <h1 className="text-white">FROM THE UK&apos;s TOP RATED PROVIDER</h1>
        <h3>Compare our boiler plans from £15 a month</h3>
        <Link href="/boiler-cover">
          <Button variant="dark" className="w-[240px] h-[50px] mt-4">
            Get boiler cover
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default hero;
