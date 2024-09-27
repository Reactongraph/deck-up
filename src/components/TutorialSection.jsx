import React from "react";

export default function TutorialSection() {
  return (
    <div className="container py-[115px] flex gap-[150px] item-center ps-2.5 pe-2.5">
      <div className="max-w-[320px] w-full">
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
