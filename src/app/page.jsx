import Image from "next/image";
import ParticleRing from "./components/Background/ParticleRing";
import HeroHeading from "./components/Foreground/HeroHeading";
import Navbar from "./components/Foreground/Navbar";

export default function Home() {
  return (
    <>
      <div className="relative h-screen w-screen z-0">
        <ParticleRing />
        <div id="foreGround" className="absolute h-screen w-screen top-0 z-1">
                    
          <HeroHeading/>          
          <Navbar/>
        </div>
      </div>
    </>
  );
}
