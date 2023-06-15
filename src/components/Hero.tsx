"use client";

import Button from "react-bootstrap/Button";

const hero = () => {
  return (
    <div className="bg-cover bg-[url('/hero.png')] w-[1200px] text-center">
      <div className="">
        <h1>BOILER AND HOME EMERGENCY COVER</h1>
        <h1 className="text-white">FROM THE UK&apos;s TOP RATED PROVIDER</h1>
        <h3>Compare our boiler plans from £15 a month</h3>
        <Button variant="dark">Get boiler cover</Button>
      </div>
    </div>
  );
};

export default hero;
