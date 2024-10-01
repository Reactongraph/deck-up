import React from "react";
import CommonImage from "./common/CommonImage";
import CommonButton from "./common/CommonButton";
import CommonInput from "./common/CommonInput";
import GradientOverlay from "./common/GradientOverlay";

export default function HeroSection() {
  return (
    <div className="container flex items-center ps-2.5 relative" >
      <GradientOverlay
        width="108px"
        height="108px"
        gradient="linear-gradient(to bottom, rgba(100,172,205,.5), rgba(100,172,205,0))"
        top="39px"
        left="-60px"
        zIndex="-999"
        transform="rotate(-70deg)"
      />
      <div className="w-full max-w-[465px] pr-[40px]">
        <h1 className="text-[55px] text-banner text-paleBlue">
          Create decks at lightning speed
        </h1>
        <p className="mt-[48px] text-[18px] pr-[100px] text-bodyColor text-heading">
          Drive impact and dramatically improve quality and speed using DeckUp
        </p>
        <div className="mt-[70px]">
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
                "w-full font-medium text-white bg-primary shadow-sm rounded-[20px] max-w-[123px]"
              }
              text={"Start now"}
            />
          </form>
        </div>
      </div>
      <div className="relative w-full max-w-[816px] mr-[-195px]">
        <CommonImage
          src="/images/left-logo.svg"
          alt={"Person working on a computer surrounded by charts and graphs"}
          className="w-full"
        />

        <GradientOverlay
          width="160px"
          height="160px"
          gradient="linear-gradient(to right, rgba(255,114,95,0), rgba(255,114,95,1))"
          bottom="-60px"
          left="31px"
          zIndex="999"
        />
      </div>
    </div>
  );
}
