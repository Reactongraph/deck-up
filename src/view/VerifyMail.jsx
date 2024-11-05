import React from "react";

const VerifyMail = () => {
  return (
    <div className="bg-lightBlue min-h-screen flex flex-col">
      <div className="flex flex-col lg:flex-row container lg:pt-[48px] xl:pt-[48px] lg:pb-[80px] xl:pt-[80px] sm:pt-[72px] sm:pb-[24px] relative z-[100]">
        <div className="flex-1 flex items-center justify-center mt-10">
          <div class="max-w-[536px] w-full bg-white rounded-lg sm:px-[66px] px-[40px] pt-[50px] pb-[300px] text-start mx-[40px] xl:mx-[0px]">
            <h2 class="text-2xl font-semibold text-paleBlue mb-2">
              Verify your email
            </h2>
            <p class="text-gray-600 mb-14 text-bodyColor">
              Enter the OTP sent to{" "}
              <span class="font-medium text-bodyColor">malar@mecstudio.com</span>
              <a href="#" class="text-blue-500 font-medium hover:underline underline underline-offset-1 pl-[5px]">
                Change
              </a>
            </p>

            <div class="flex justify-start  gap-2 sm:gap-7 mb-6 pt-13">
              <input
                type="text"
                maxlength="1"
                class="w-12 h-14 text-center text-lg border-2 border-lightGray bg-lightBlue rounded-md focus:outline-none focus:border-blue-500"
              />
              <input
                type="text"
                maxlength="1"
                class="w-12 h-14 text-center text-lg border-2 border-lightGray bg-lightBlue rounded-md focus:outline-none focus:border-blue-500"
              />
              <input
                type="text"
                maxlength="1"
                class="w-12 h-14 text-center text-lg border-2 border-lightGray bg-lightBlue rounded-md focus:outline-none focus:border-blue-500"
              />
              <input
                type="text"
                maxlength="1"
                class="w-12 h-14 text-center text-lg border-2 border-lightGray bg-lightBlue rounded-md focus:outline-none focus:border-blue-500"
              />
              <input
                type="text"
                maxlength="1"
                class="w-12 h-14 text-center text-lg border-2 border-lightGray bg-lightBlue rounded-md focus:outline-none focus:border-blue-500"
              />
              <input
                type="text"
                maxlength="1"
                class="w-12 h-14 text-center text-lg border-2 border-lightGray bg-lightBlue rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>

            <button class="w-full bg-primary hover:bg-red-600 text-white font-medium py-3 rounded-full">
              Submit
            </button>
          </div>
        </div>
        {/* Right section for the image */}
        <div className="hidden lg:block relative w-0 flex-1 m-auto order-1 lg:order-2">
          <img
            className="absolute inset-0 w-full max-w-[659px] m-auto object-contain"
            src="/images/login-logo.svg"
            alt="Productivity illustration"
          />
        </div>

        {/* For smaller screens, image will be shown below the form */}
        <div className="block lg:hidden w-full order-1">
          <img
            className="w-full max-w-[659px] mx-auto object-contain pt-6 px-4"
            src="/images/login-logo.svg"
            alt="Productivity illustration"
          />
        </div>
      </div>
    </div>
  );
};

export default VerifyMail;
