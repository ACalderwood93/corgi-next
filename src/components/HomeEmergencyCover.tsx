import Image from "next/image";

const HomeEmergencyCover = () => {
  return (
    <section className="w-[70%] mx-auto p-4 h-[500px]">
      <div className="flex-row flex h-full">
        <div className="md:w-2/4 sm:w-full">
          <h3>Home Emergency cover</h3>
          <h2>Simple Plans to keep your mind at ease</h2>

          <p>
            Cover for your boiler, central heating, plumbing, electrics and more
          </p>
          <p>
            We are the UK&apos;s top rated boiler and home emergency cover
            provider on Trustpilot
          </p>
        </div>
        <div className="rounded-lg md:w-2/4 sm:w-full bg-center bg-no-repeat bg-[url('/home-emergency-cover.jpg')]"></div>
      </div>
    </section>
  );
};

export default HomeEmergencyCover;
