import React from "react";
import GradientOverlay from "./common/GradientOverlay";
import useCustomWindowSize from "../Hooks/useCustomWindowSize";

const Footer = () => {
  const size = useCustomWindowSize();
  return (
    <footer className="bg-darkBlue text-white py-12 px-[1.5rem] md:px-[6.5rem]">
      <div className="container">
        <div className="flex md:flex-row justify-between border-b-2 border-b-[#6592BF] pb-8 md:pb-0 lg:pb-[20px] lg:mb-[63px] text-center xl:text-left flex-col items-baseline mb-[30px]">
          <div className="flex flex-col items-start mb-8 xl:mb-0 realtive z-[0] max-w-[530px] relative max-sm:mb-0">
            <h2 className="text-base md:text-sm xl:text-[24px] font-[500] mb-2 md:mb-4 lg:max-w-[70%] relative z-[1] font-inter text-[16px] max-w-full text-justify">
              Need some answers or want to catch up with us!
            </h2>
            <p className="text-blue-200 text-sm md:text-[11px] xl:text-base mb-4 md:mb-0 lg:mb-4 relative z-[1] font-inter max-w-full text-justify">
              Here's where you will find answers and can get to know us!
            </p>
            <GradientOverlay
              width="69px"
              height="69px"
              gradient="linear-gradient(to right, rgba(0, 176, 200, 1), rgba(0, 176, 200, 0))"
              border-radius="50%"
              position="absolute"
              z-index="-999"
              left="-50px"
              display={size.width <= 640 && "none"}
            />
          </div>

          <div className="flex justify-center xl:justify-end space-x-6 xl:gap-[78px] lg:gap-[78px]">
            <p className="text-secondary text-nowrap underline underline-offset-2 hover:cursor-pointer font-inter max-sm:text-[14px]">
              FAQs
            </p>
            <p className="text-secondary text-nowrap underline underline-offset-2 hover:cursor-pointer font-inter max-sm:text-[14px]">
              Get in touch
            </p>
          </div>
        </div>

        <div>
          <div className="flex flex-col md:flex-row justify-between items-center mb-0 md:mb-8 lg:mb-[25px] text-center md:text-left max-sm:items-baseline">
            <div>
              {/* <p className="text-2xl md:text-4xl font-bold inline-block">
                DECK<span className="text-red-500">UP</span>
              </p> */}
              <img
                src="/images/footerlogo.svg"
                className="w-[156px] h-[25px]"
                alt="logo"
              />
            </div>
            <div className="flex space-x-4 mt-4 md:mt-0 lg:gap-[44px] xl:gap-[44px]">
              <button className="bg-primary hover:bg-hoverButton text-white  py-2 px-5 md:px-4 rounded-[20px] text-sm md:text-base font-inter">
                Download
              </button>
              <button className="bg-secondary hover:bg-hoverSecondary text-white py-2 px-5 md:px-4 rounded-[20px] text-sm md:text-base font-inter">
                Buy now
              </button>
            </div>
          </div>
          <div className="flex flex-col-reverse lg:flex-row justify-between gap-8 mt-[49px] md:mt-0 lg:mt-[63px]">
            <div className="flex flex-row justify-between lg:justify-start lg:flex-col items-center md:items-start text-center md:text-left">
              <div className="flex gap-2 items-center">
                <img
                  src="/images/mail.svg"
                  alt="img"
                  className="w-5 h-5 md:w-[25px] md:h-[25px] mb-0 md:mb-4"
                />
                <p className="mb-4 font-inter max-sm:mb-0 max-sm:text-[14px]">
                  info@deckup.com
                </p>
              </div>
              <div className="flex justify-center items-center md:justify-start space-x-4 pr-[28%] md:pr-0">
                <a
                  href="/"
                  aria-label="LinkedIn"
                  className="text-white hover:text-blue-300"
                >
                  <svg
                    className="w-[18px] h-[17px] md:w-5 md:h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="/"
                  aria-label="YouTube"
                  className="text-white hover:text-blue-300"
                >
                  <svg
                    className="w-[22px] h-[22px] md:w-6 md:h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="flex gap-8 lg:gap-[90px] md:gap-[50px] max-sm:flex-wrap">
              <div>
                <h3 className="font-semibold mb-4 lg:text-lg font-inter text-[16px] text-secondary lg:text-white">
                  Try our product
                </h3>
                <ul className="space-y-2">
                  <li>
                    <p className="hover:text-blue-300 font-inter text-[12px] lg:text-base">
                      Free trial
                    </p>
                  </li>
                  <li>
                    <p className="hover:text-blue-300 font-inter text-[12px] lg:text-base">
                      Download
                    </p>
                  </li>
                  <li>
                    <p className="hover:text-blue-300 font-inter text-[12px] lg:text-base">
                      Pricing & plans
                    </p>
                  </li>
                </ul>
              </div>
              <div className="block md:hidden">
                <h3 className="font-semibold mb-2 lg:text-lg font-inter text-[16px] text-secondary lg:text-white">
                  Account
                </h3>
                <ul className="space-y-2">
                  <li>
                    <p className="hover:text-blue-300 font-inter text-[12px] lg:text-base">
                      My account
                    </p>
                  </li>
                  <li>
                    <p className="hover:text-blue-300 font-inter text-[12px] lg:text-base">
                      My Orders
                    </p>
                  </li>
                  <li>
                    <p className="hover:text-blue-300 font-inter text-[12px] lg:text-base">
                      Login
                    </p>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4 lg:text-lg font-inter text-[16px] text-secondary lg:text-white">
                  Learn
                </h3>
                <ul className="space-y-2">
                  <li>
                    <p className="hover:text-blue-300 font-inter text-[12px] lg:text-base">
                      Features at a glance
                    </p>
                  </li>
                  <li>
                    <p className="hover:text-blue-300 font-inter text-[12px] lg:text-base">
                      Interactive tour
                    </p>
                  </li>
                  <li>
                    <p className="hover:text-blue-300 font-inter text-[12px] lg:text-base">
                      Watch Demo
                    </p>
                  </li>
                  <li>
                    <p className="hover:text-blue-300 font-inter text-[12px] lg:text-base">
                      Tutorials
                    </p>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-4 lg:text-lg font-inter text-[16px] text-secondary lg:text-white">
                  Purchase
                </h3>
                <ul className="space-y-2">
                  <li>
                    <p className="hover:text-blue-300 font-inter text-[12px] lg:text-base">
                      Buy new licences
                    </p>
                  </li>
                  <li>
                    <p className="hover:text-blue-300 font-inter text-[12px] lg:text-base">
                      Renew licence
                    </p>
                  </li>
                  <li>
                    <p className="hover:text-blue-300 font-inter text-[12px] lg:text-base">
                      Enterprise
                    </p>
                  </li>
                </ul>
              </div>

              <div className="hidden md:block">
                <h3 className="font-semibold mb-2 lg:text-lg font-inter text-[16px] text-secondary lg:text-white">
                  Account
                </h3>
                <ul className="space-y-2">
                  <li>
                    <p className="hover:text-blue-300 font-inter text-[12px] lg:text-base">
                      My account
                    </p>
                  </li>
                  <li>
                    <p className="hover:text-blue-300 font-inter text-[12px] lg:text-base">
                      My Orders
                    </p>
                  </li>
                  <li>
                    <p className="hover:text-blue-300 font-inter text-[12px] lg:text-base">
                      Login
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
