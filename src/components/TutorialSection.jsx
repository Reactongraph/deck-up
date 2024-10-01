import React from "react";

import GradientOverlay from "./common/GradientOverlay";
export default function TutorialSection() {
  return (
    <div className="container py-[115px] flex gap-[150px] item-center ps-2.5 pe-2.5 relative">
     
      <div className="max-w-[320px] w-full items-start flex flex-col justify-center relative">
      <GradientOverlay
        width="140px"
        height="140px"
        gradient="linear-gradient(to bottom, rgba(100,172,205,.5), rgba(100,172,205,0))"
        top="59px"
        left="-60px"
        zIndex="-999"
        transform="rotate(-70deg)"
      />
        <h2 className="text-headline  text-paleBlue font-extrabold">
          Learn the tools in seconds
        </h2>
        <p className="mt-[24px] text-body text-bodyColor">
          Mulates real DeckUp Add-in to learn how a particular tool works
        </p>
        <button className="mt-[40px] bg-primary text-white px-[24px] py-[12px] rounded-[100px]">
          Check tutorials
        </button>
      </div>
      <div className="w-full mr-[-195px]">
        <img
          src="/images/powerpoint.svg"
          alt="Microsoft PowerPoint interface with DeckUp add-in"
          className="w-full"
        />
      </div>
    </div>
  );
}
