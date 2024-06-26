import Image from "next/image";
import Banner from "./(routes)/Home/_components/Banner";
import Efficiency from "./(routes)/Home/_components/Efficiency";
import Features from "./(routes)/Home/_components/Features";
import Feedback from "./(routes)/Home/_components/Feedback";
import Footer from "./(routes)/Home/_components/Footer";
import Navbar from "./(routes)/Home/_components/Navbar";
import Part2 from "./(routes)/Home/_components/Part2";
import Part4 from "./(routes)/Home/_components/Part4";
import Part5 from "./(routes)/Home/_components/Part5";
import Products from "./(routes)/Home/_components/Products";
import Sponsor from "./(routes)/Home/_components/Sponsor";
import Support from "./(routes)/Home/_components/Support";
import Hero from "./(routes)/Home/_components/_HeroSection/Hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Sponsor />
      <Features />
      <Part2 />
      <Part4 />
      <Part5 />
      <Products />
      <Efficiency />
      <Feedback />
      <Support />
      <Banner />
      <Footer />
    </>
  );
}
