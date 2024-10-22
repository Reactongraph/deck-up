import React from "react";
import { videos } from "../utils/videos";
import CommonImage from "./common/CommonImage";
import CommonButton from "./common/CommonButton";
import CommonInput from "./common/CommonInput";
import CommonVideo from "./common/CommonVideo";
import GradientOverlay from "./common/GradientOverlay";
import useCustomWindowSize from "../Hooks/useCustomWindowSize";

export default function HeroSection() {
  const size = useCustomWindowSize(); // Get screen size
  console.log("sizesizesize", size);
  // Define responsive values for GradientOverlay based on screen width
  const gradientOverlayStyles =
    size.width <= 640
      ? {
          // Mobile styles
          width: "80px",
          height: "80px",
          top: "57px",
          right: "18px",
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
          width: "160px",
          height: "160px",
          top: 0,
          left: "-58px",
          right: "inherit",
          zIndex: "-999",
          transform: "rotate(-70deg)",
        };

  const gradientOverlayStyles1 =
    size.width <= 640
      ? {
          // Mobile styles
          width: "80px",
          height: "80px",
          bottom: "-2px",
          zIndex: "999",
          transform: "rotate(-9deg)",
        }
      : size.width <= 1024
      ? {
          // Tablet styles
          width: "108px",
          height: "108px",
          bottom: "39px",
          left: "-60px",
          zIndex: "-999",
          transform: "rotate(-70deg)",
        }
      : {
          // Desktop styles
          width: "160px",
          height: "160px",
          bottom: 0,
          left: "0px",
          transform: "rotate(-70deg)",
        };

  return (
    <div className="container flex items-center ps-2.5 relative max-sm:flex-col-reverse max-sm:flex pl-[22px] pr-[0px] sm:pr-[32px]">
      <div className="w-full max-w-[465px] sm:pr-[40px] pr-[0px] mt-[40px] sm:mt-[0px]">
        <div className="relative">
          <>
            <h1 className="max-sm:text-[40px] max-sm:font-bold lg:text-banner text-paleBlue">
              Create decks at lightning speed
            </h1>
            <p className="mt-[48px] text-[18px] pr-[100px] text-bodyColor text-heading">
              Drive impact and dramatically improve quality and speed using
              DeckUp
            </p>
          </>
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
        </div>

        <div className="mt-[70px] w-[90%] sm:w-[100%]">
          <p className="text-[12px] font-bold text-primary">
            START 30 DAY FREE TRIAL
          </p>
          <form action="#" method="POST" className="mt-[8px] gap-[8px] sm:flex">
            <CommonInput
              type={"email"}
              name="email"
              id="email"
              className={
                "w-full py-3 text-[14px] placeholder-gray-500 shadow-sm rounded-[8px] bg-[#ECF1F6] border border-lightGray"
              }
              placeholder={"example@xyz.com"}
            />
            <CommonButton
              type="submit"
              className={
                "w-full font-medium text-white bg-primary shadow-sm rounded-[20px] max-w-[123px] mt-[10px] mt-[0px]"
              }
              text={"Start now"}
            />
          </form>
        </div>
      </div>
      <div className="relative w-full max-w-[739px] lg:mr-[-148px] xl:mr-[-195px]">
        {/* <CommonImage
          src="/images/left-logo.svg"
          alt={"Person working on a computer surrounded by charts and graphs"}
          className="w-full"
        /> */}
        <CommonVideo
          url={videos?.hero}
          gradientOverlayStyles1={gradientOverlayStyles1}
        />

        {/* <GradientOverlay
          width={gradientOverlayStyles1.width}
          height={gradientOverlayStyles1.height}
          gradient="linear-gradient(to right, rgba(255,114,95,0), rgba(255,114,95,1))"
          bottom={gradientOverlayStyles1.bottom}
          left={gradientOverlayStyles1.left}
          zIndex={gradientOverlayStyles1.zIndex}
          transform={gradientOverlayStyles1.transform}
        /> */}
      </div>
    </div>
  );
}
