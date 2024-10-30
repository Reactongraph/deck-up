import React from "react";
import CommonButton from "./common/CommonButton";
import GradientOverlay from "./common/GradientOverlay";
import useCustomWindowSize from "../Hooks/useCustomWindowSize";

export default function OnboardingSection() {
  const size = useCustomWindowSize(); 
  const gradientOverlayStyles =
  size.width <= 640
    ? {
        // Mobile styles
        width: "49px",
        height: "49px",
        top: 55,
        right: 40,
        zIndex: "0",
        left: "inherit",
        bottom: "-95px",
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
        width: "146px",
        height: "146px",
        top: 0,
        left: "-41px",
        right: "inherit",
        zIndex: "-999",
        bottom: "inherit",

        transform: "rotate(90deg)",
      };
  return (
    <div className="container pt-[99px] pb-[60px] flex gap-[42px] item-center ps-2.5 pe-2.5 max-sm:flex max-sm:flex-col">
      <div className="w-full ml-[-140px] max-sm:ml-0 relative">
        <img
          src="/videos/onboarding.gif"
          alt="Microsoft PowerPoint interface with DeckUp add-in"
          className="w-ful"
        />
        <GradientOverlay
          width={gradientOverlayStyles.width}
          height={gradientOverlayStyles.height}
          gradient="linear-gradient(to right, rgba(255,114,95,0), rgba(255,114,95,1))"
          top={gradientOverlayStyles.top}
          left={gradientOverlayStyles.left}
          right={gradientOverlayStyles.right}
          zIndex={gradientOverlayStyles.zIndex}
          transform={gradientOverlayStyles.transform}
        />
      </div>
      <div className="max-w-[480px] w-full flex flex-col justify-center">
        <h2 className="text-headline  text-paleBlue font-extrabold font-inter">
          Get onboard for a smarter workflow today!
        </h2>
        <p className="mt-[24px] text-body text-bodyColor font-inter">
          Why wait to enhance existing capability and improve productivity? Your
          superpower-packed plug-and-play PPT tool is just a click away!
        </p>
        <div className="flex flex-row gap-[12px]">
          <button className="mt-[40px] bg-primary text-white px-[24px] py-[12px] rounded-[100px] font-inter">
            Start free trial
          </button>
          <button className="mt-[40px] bg-secondary text-white px-[24px] py-[12px] rounded-[100px] font-inter">
            Explore plans
          </button>
        </div>
      </div>
    </div>
  );
}
