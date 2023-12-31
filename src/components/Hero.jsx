import React from "react";
import heroImage from "../img/tropicalIsland.svg";
import RoundedButton from "./elements/RoundedButton";

const Hero = () => {
  return (
    <div className="container mx-auto my-2 px-4 lg:my-10 lg:px-20" id="hero">
      <div className="hidden text-start lg:block">
        <a href="https://youtu.be/dQw4w9WgXcQ?si=XHfujjZX3eaDmPjA" className="inline-block">
          <p className="font-medium tracking-wide text-primary">#GRAFIKA4META</p>
        </a>
      </div>
      <div className="flex flex-col">
        <div className="mb-5 md:flex md:flex-row md:items-center md:justify-between">
          <p className="w-full space-y-2 text-center text-3xl font-bold tracking-widest text-black md:w-2/3 md:justify-start lg:text-start lg:text-6xl">
            PESONA LAUT WISATA BAHARI DALAM 3D!
          </p>
          <div className="hidden justify-center md:flex">
            <a href="#cta">
              <RoundedButton roundedText={"Explore Sekarang Juga"} />
            </a>
          </div>
        </div>
        <hr className="my-5 rounded-full border-2 border-secondary/30"></hr>
        <div className="my-2 flex flex-col text-slate-800 lg:flex-row lg:justify-between">
          <p className="m-2 h-1/5 text-center lg:justify-start lg:text-start lg:font-normal">
            Mengalami keajaiban dalam 3D, petualangan yang memukau yang mempersembahkan keindahan laut secara visual dan
            mendalam
          </p>
          <p className="m-2 h-1/5 text-center lg:justify-end lg:text-start lg:font-normal">
            Rasakan keindahan laut secara visual. Tiket terbatas, jadi segera dapatkan pengalaman istimewa ini!
          </p>
        </div>
        <div className="my-2 block text-start lg:hidden">
          <a href="https://youtu.be/dQw4w9WgXcQ?si=XHfujjZX3eaDmPjA" className="block">
            <p className="text-center font-semibold tracking-wide text-primary">#GRAFIKA4META</p>
          </a>
        </div>
        <div className="mt-20 text-center">
          <img src={heroImage} alt="Hero" className="hidden w-full md:block" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
