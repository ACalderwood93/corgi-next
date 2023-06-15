import CovidUpdate from "@/components/CovidUpdate";
import Hero from "@/components/Hero";
import HomeEmergencyCover from "@/components/HomeEmergencyCover";
import Image from "next/image";

export default function Home() {
  return (
    <section>
      <Hero />
      <CovidUpdate />
      <HomeEmergencyCover />
    </section>
  );
}
