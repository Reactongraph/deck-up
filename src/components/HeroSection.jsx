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
          right: "104px",
          zIndex: "-999",
          transform: "rotate(135deg)",
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
          width: "108px",
          height: "108px",
          top: "-63px",
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
          width: "155px",
          height: "155px",
          bottom: 0,
          left: "0px",
          transform: "rotate(-70deg)",
        };

  return (
    <div className="container flex items-center gap-[81px] lg:gap-0 px-0 xl:px-[10px] relative flex-col-reverse pl-0 xl:pl-[22px] pr-[0px] xl:pr-[32px]">
      <div className="w-full lg:max-w-[465px] pl-[57px] xl:pl-0 xl:pr-[40px] pr-[57px] mt-[40px] sm:mt-[0px]">
        <div className="relative ">
          <>
            <h1 className="text-[40px] font-bold lg:text-banner text-paleBlue font-inter max-sm:max-w-[300px] w-full">
              Create decks at lightning speed
            </h1>
            <p className="mt-6 xl:mt-[48px] text-[18px] pr-[100px] text-bodyColor text-heading font-inter max-sm:text-[14px]">
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
        <div className="w-[90%] sm:w-[100%] max-sm:max-w[124px] max-sm:block hidden">
          <CommonButton
            type="submit"
            className={
              "w-full font-medium text-white bg-primary shadow-sm rounded-[20px] max-w-[124px] mt-[32px] font-inter max-sm:p-2"
            }
            text={"Watch Demo"}
          />
        </div>
        <div className="mt-8 xl:mt-[70px] w-[90%] sm:w-[100%] max-sm:hidden">
          <p className="text-[12px] font-bold text-primary font-inter">
            START 30 DAY FREE TRIAL
          </p>
          <form action="#" method="POST" className="mt-[8px] gap-[8px] sm:flex">
            <CommonInput
              type={"email"}
              name="email"
              id="email"
              className={
                "w-[47.2%] xl:w-full py-3 text-[14px] placeholder-gray-500 shadow-sm rounded-[8px] bg-[#ECF1F6] border border-lightGray font-inter"
              }
              placeholder={"example@xyz.com"}
            />
            <CommonButton
              type="submit"
              className={
                "w-full text-sm xl:text-base font-medium text-white bg-primary shadow-sm rounded-[20px] max-w-[123px] mt-[0px] font-inter"
              }
              text={"Start now"}
            />
          </form>
        </div>
      </div>
      <div className="relative flex justify-end xl:block w-full xl:max-w-[739px] lg:mr-[-148px] xl:mr-[-195px]">
        {/* <CommonImage
          src="/images/left-logo.svg"
          alt={"Person working on a computer surrounded by charts and graphs"}
          className="w-full"
        /> */}
        <CommonVideo
          url={videos?.hero}
          gradientOverlayStyles1={gradientOverlayStyles1}
          className="w-[79.9%] h-[377px] xl:h-full mx-0 xl:mx-auto"
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
