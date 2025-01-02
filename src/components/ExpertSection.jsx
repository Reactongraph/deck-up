import React from "react";

export default function ExpertSection() {
  return (
    <div className="relative mt-12 xl:mt-[157px] max-w-[760px] m-auto text-center ps-2.5 pe-2.5 sm:mt-[100px]">
      <h2 className="lg:text-headline xl:text-headline text-subhead text-paleBlue font-extrabold bg-hero-pattern2 md:bg-hero-pattern bg-contain bg-no-repeat py-[20%] md:py-[70px] px-[20px] font-inter max-lg:w-[80%] max-lg:mx-auto">
        Built by experts in
        <br />
        visual communication
      </h2>
      <p className="mt-0 text-sm lg:text-body text-bodyColor px-[10px] lg:px-[70px] font-inter">
        <span className="lg:text-[#0078F0] font-inter">SlideXpress</span> is
        trusted by industry leaders world over creating presentation decks as
        the most effective and expressive communication tools. It's this
        ex-McKinsey team that built DeckUp.
      </p>
      <div className="mt-8 lg:mt-[40px] flex justify-center gap-[11px] lg:gap-[24px]">
        <button
          variant="destructive"
          className="bg-primary hover:bg-hoverButton text-white px-[24px] py-[12px] rounded-[100px] shadow-[0_0px_16px_0px_rgba(210,216,231,0.5)] font-inter"
        >
          Watch demo
        </button>
        <button
          variant="outline"
          className="bg-secondary hover:bg-hoverSecondary text-white border-blue-400 px-[24px] py-[12px] rounded-[100px] font-inter"
        >
          Check pricing
        </button>
      </div>

      {/* Design tool UI elements (for illustration purposes) */}
    </div>
  );
}
