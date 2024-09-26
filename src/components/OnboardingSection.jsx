import React from "react";
import CommonButton from "./common/CommonButton";

export default function OnboardingSection() {
  return (
    <div className="container pt-[99px] pb-[60px] flex gap-[42px] item-center">
      <div className="w-full">
        <img src="/images/side-image.svg" alt="Microsoft PowerPoint interface with DeckUp add-in" className="w-full" />
      </div>
      <div className="max-w-[480px] w-full flex flex-col justify-center">        
        <h2 className="text-headline  text-paleBlue font-extrabold">Get onboard for a smarter workflow today!</h2>
        <p className="mt-[24px] text-body text-bodyColor">
        Why wait to enhance existing capability and improve
                productivity? Your superpower-packed plug-and-play PPT tool is
                just a click away!
        </p>
       <div className="flex flex-row gap-[12px]">
       <button className="mt-[40px] bg-primary text-white px-[24px] py-[12px] rounded-[100px]">
        Start free trial
          </button>
          <button className="mt-[40px] bg-secondary text-white px-[24px] py-[12px] rounded-[100px]">
          Explore plans
          </button>
       </div>
      </div>
      
    </div>
    

  );
}
