import Card from "../components/Card";
import CtaButton from "./CtaButton";
import Image from "next/image";
const ReadyToProtectYourHome = () => {
  return (
    <section
      className="mt-20 bg-cover bg-no-repeat 
    bg-[url('https://d33wubrfki0l68.cloudfront.net/3d5448b4a37819916359b2cd218ec1b3fdae6d4b/44972/static/protect_your_home-e9fe5f637189b186fb3a40bde7e25ef0.png')]"
    >
      <div className="text-center pt-24">
        <h1 className="">Ready to protect your home?</h1>

        <div className="flex flex-row flex-wrap mx-auto w-[80%]">
          <div className="md:w-1/3 sm:w-full ">
            <Card className="p-6 mx-1  text-center gap-2.5">
              <Image
                src="/protect-home-icon1.png"
                alt="corgiShield"
                width={82}
                height={82}
              />
              <span className="text-sm">Home Emergency Cover</span>
              <p>
                You deserve better boiler cover for less. Join CORGI HomePlan,
                we are the UK&apos;s top rated provider on Trustpilot.
              </p>
              <CtaButton className="w-[80%]">Get Covered</CtaButton>
            </Card>
          </div>
          <div className="md:w-1/3 sm:w-full ">
            <Card className="p-6 mx-1 text-center gap-2.5">
              <Image
                src="/protect-home-icon1.png"
                alt="corgiShield"
                width={82}
                height={82}
              />
              <span className="text-sm">Home Emergency Cover</span>
              <p>
                You deserve better boiler cover for less. Join CORGI HomePlan,
                we are the UK&apos;s top rated provider on Trustpilot.
              </p>
              <CtaButton className="w-[80%]">Get Covered</CtaButton>
            </Card>
          </div>
          <div className="md:w-1/3 sm:w-full">
            <Card className="p-6 mx-1  text-center gap-2.5">
              <Image
                src="/protect-home-icon1.png"
                alt="corgiShield"
                width={82}
                height={82}
              />
              <span className="text-sm">Home Emergency Cover</span>
              <p>
                You deserve better boiler cover for less. Join CORGI HomePlan,
                we are the UK&apos;s top rated provider on Trustpilot.
              </p>
              <CtaButton className="w-[80%]">Get Covered</CtaButton>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReadyToProtectYourHome;
