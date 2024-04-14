import Image from "next/image";
import Features from "./(routes)/Home/_components/Features";
import Navbar from "./(routes)/Home/_components/Navbar";
import Part2 from "./(routes)/Home/_components/Part2";
import Sponsor from "./(routes)/Home/_components/Sponsor";
import Hero from "./(routes)/Home/_components/_HeroSection/Hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Sponsor />
      <Features />
      <Part2 />
    </>
  );
}
