import React from "react";

import GradientOverlay from "./common/GradientOverlay";
import useCustomWindowSize from "../Hooks/useCustomWindowSize";
export default function TutorialSection() {
  const size = useCustomWindowSize(); // Get screen size
  const gradientOverlayStyles =
    size.width <= 640
      ? {
          // Mobile styles
          width: "80px",
          height: "80px",
          top: "-40px",
          right: "inherit",
          left: "-9px",
          zIndex: "-999",
          transform: "rotate(90deg)",
        }
      : size.width <= 1024
      ? {
          // Tablet styles
          width: "108px",
          height: "108px",
          top: "39px",
          left: "-60px",
          zIndex: "-999",
          transform: "rotate(-70deg)",
        }
      : {
          // Desktop styles
          width: "140px",
          height: "140px",
          top: 0,
          left: "-60px",
          right: "inherit",
          zIndex: "-999",
          transform: "rotate(-70deg)",
        };
  return (
    <div className="container py-[115px] flex gap-[150px] item-center ps-2.5 pe-2.5 relative  max-sm:flex-col max-sm:flex">
      <div className="max-w-[320px] w-full items-start flex flex-col justify-center">
        <div className="relative">
          <GradientOverlay
            width={gradientOverlayStyles.width}
            height={gradientOverlayStyles.height}
            gradient="linear-gradient(to bottom, rgba(100,172,205,.5), rgba(100,172,205,0))"
            top={gradientOverlayStyles.top}
            left={gradientOverlayStyles.left}
            right={gradientOverlayStyles.right}
            zIndex={gradientOverlayStyles.zIndex}
            transform={gradientOverlayStyles.transform}
          />
          <h2 className="g:text-headline xl:text-headline max-sm:text-subhead   text-paleBlue font-extrabold font-inter">
            Learn the tools in seconds
          </h2>
          <p className="mt-[24px] text-body text-bodyColor font-inter">
            Mulates real DeckUp Add-in to learn how a particular tool works
          </p>
        </div>
        <button className="mt-[40px] bg-primary text-white px-[24px] py-[12px] rounded-[100px] font-inter">
          Check tutorials
        </button>
      </div>
      <div className="w-full mr-[-182px] lg:mr-[-133px]">
        <img
          src="/videos/tutorial.gif"
          alt="Microsoft PowerPoint interface with DeckUp add-in"
          className="w-full"
        />
      </div>
    </div>
  );
}
