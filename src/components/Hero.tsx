import Link from "next/link";
import { Roboto } from "next/font/google";
import CtaButton from "./CtaButton";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "700",
});
const hero = () => {
  return (
    <section>
      <div
        className={`flex flex-col justify-center items-center bg-cover bg-no-repeat bg-[url('/hero.png')] text-center w-screen p-16 ${roboto.className} min-h-[500px]`}
      >
        <h1>BOILER AND HOME EMERGENCY COVER</h1>
        <h1 className="text-white">FROM THE UK&apos;s TOP RATED PROVIDER</h1>
        <h3>Compare our boiler plans from £15 a month</h3>
        <Link href="/boiler-cover">
          <CtaButton className="w-[240px] h-[50px] mt-4">
            Get boiler cover
          </CtaButton>
        </Link>
      </div>
    </section>
  );
};

export default hero;
