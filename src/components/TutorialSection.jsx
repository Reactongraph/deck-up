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
    <div className="container pl-[15px] md:pl-[32px] xs:pl-[56px] pr-[14px] md:pr-0 lg:pl-[10px] lg:pr-[10px] py-[72px] lg:py-[115px] flex gap-[13px] md:gap-[52px] lg:gap-[150px] item-center relative  max-sm:flex-col max-sm:flex">
      <div className="w-full xs:w-[27.3%] max-w-[320px] px-[17px] lg:px-0 lg:w-full items-start flex flex-col justify-center">
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
          <h2 className="lg:text-headline whitespace-nowrap md:whitespace-normal xl:text-headline md:text-subhead text-paleBlue font-extrabold font-inter">
            Learn the tools in seconds
          </h2>
          <p className="mt-[24px] text-sm leading-[20px] lg:text-body text-bodyColor font-inter">
            Mulates real DeckUp Add-in to learn how a particular tool works
          </p>
        </div>
        <button className="mt-[24px] lg:mt-[40px] bg-primary hover:bg-hoverButton text-white px-[13px] lg:px-[24px] py-[10px] lg:py-[12px] rounded-[100px] font-inter">
          Check tutorials
        </button>
      </div>
      <div className="w-full xs:w-[62%] lg:w-full mr-[-182px] lg:mr-[-133px]">
        <img
          src="/videos/tutorial.gif"
          alt="Microsoft PowerPoint interface with DeckUp add-in"
          className="w-full"
        />
      </div>
    </div>
  );
}
