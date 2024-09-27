import React from "react";

export default function ExpertSection() {
  return (
    <div className="relative mt-[157px] max-w-[760px] m-auto text-center ps-2.5 pe-2.5">
      <h2 className="text-headline  text-paleBlue font-extrabold">
        Built by experts in
        <br />
        visual communication
      </h2>
      <p className="mt-4 text-body text-bodyColor px-[60px]">
        <span className="text-[#0078F0]">SlideXpress</span> is trusted by
        industry leaders world over creating presentation decks as the most
        effective and expressive communication tools. It's this ex-McKinsey team
        that built DeckUp.
      </p>
      <div className="mt-8 flex justify-center gap-[24px]">
        <button
          variant="destructive"
          className="bg-primary text-white px-[24px] py-[12px] rounded-[100px] shadow-[0_0px_16px_0px_rgba(210,216,231,0.5)]"
        >
          Watch demo
        </button>
        <button
          variant="outline"
          className="bg-secondary hover:bg-secondary text-white border-blue-400 px-[24px] py-[12px] rounded-[100px]"
        >
          Check pricing
        </button>
      </div>

      {/* Design tool UI elements (for illustration purposes) */}
    </div>
  );
}
