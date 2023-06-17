import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex justify-center  pt-6">
      <div className="w-screen md:max-w-[1200px] ">
        <div className="flex flew-col flex-wrap p-6 border-b-2">
          <div className="w-full md:w-1/4 px-6 pt-4">
            <Link href="/">
              <Image
                src="/logo.svg"
                className="w-[150px] h-[105px]"
                alt="Flowbite Logo"
                width={100}
                height={100}
              />
            </Link>
          </div>
          <div className="w-full md:w-1/4 pt-4">
            <h3 className="font-bold">Home services</h3>
            <ul className="v">
              <li>Boiler & Heating Cover</li>
              <li>Annual Boiler Service</li>
              <li>Boiler Replacement</li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 pt-4">
            <h3 className="font-bold">Advice & support</h3>
            <ul>
              <li>Advice articles</li>
              <li>FAQ&apos;s</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 pt-4">
            <h3 className="font-bold">About us</h3>
            <ul>
              <li>Jobs</li>
              <li>About Corgi</li>
              <li>Corgi & OVO</li>
              <li>Engineers</li>
            </ul>
          </div>
        </div>
        <p className="text-xs	 p-6">
          Your CORGI HomePlan policy is arranged and administered by CORGI
          HomePlan Ltd, a firm authorised and regulated by the Financial Conduct
          Authority under firm reference number 824122 to carry on insurance
          distribution. CORGI HomePlan Ltd is registered in Scotland (Company
          No. SC358475). Registered Office: Cadworks, 41 West Campbell Street,
          Glasgow, G2 6SE. The insurance policy is underwritten by OVO Insurance
          Services Ltd, a firm authorised and regulated by the Guernsey
          Financial Services Commission under reference number 2570126. OVO
          Insurance Services Ltd is registered in the Bailiwick of Guernsey
          under the Companies (Guernsey) Law 2008 (Company No. 67013).
          Registered office: PO Box 155, Mill Court, La Charroterie, St Peter
          Port, Guernsey, GY1 4ET. CORGI HomePlan Ltd and OVO Insurance Services
          Ltd are part of OVO Group Ltd
        </p>
      </div>
    </footer>
  );
};

export default Footer;
