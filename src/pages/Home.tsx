import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { WhatWeDo } from "../components/WhatWeDo";
import { Gallery } from "../components/Gallery";
import { Socials } from "../components/Socials";
import { Footer } from "../components/Footer";

export function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <WhatWeDo />
      <Gallery />
      <Socials />
      <Footer />
    </div>
  );
}
