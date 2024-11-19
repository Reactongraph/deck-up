import React from "react";
import GradientOverlay from "./common/GradientOverlay";
import useCustomWindowSize from "../Hooks/useCustomWindowSize";

export default function PowerUsers() {
  const size = useCustomWindowSize(); // Get screen size
  const gradientOverlayStyles =
    size.width <= 640
      ? {
          // Mobile styles
          width: "80px",
          height: "80px",
          top: "inherit",
          right: "inherit",
          zIndex: "0",
          left: 0,
          bottom: "-35px",
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

  const gradientOverlayStylesBottom =
    size.width <= 640
      ? {
          // Mobile styles
          width: "80px",
          height: "80px",
          top: "inherit",
          right: 0,
          zIndex: "0",
          left: "inherit",
          bottom: 0,
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
  // //width="146px"
  // height="146px"
  // gradient="linear-gradient(to right, rgba(255,114,95,0), rgba(255,114,95,1))"
  // top="0"
  // left="-41px"
  // transform="rotate(90deg)"
  return (
    <section className="bg-linear py-16 px-4 relative overflow-hidden ps-2.5 pe-2.5">
      <div className="max-w-6xl mx-auto text-white">
        <h2 className="text-2xl xl:text-4xl font-bold text-center mb-4">
          Designed for power users across industries
        </h2>
        <p className="text-sm text-center w-[62.7%] xl:w-full mb-8 xl:mb-12 max-w-2xl mx-auto">
          Whether you are an independent consultant, work in a small team or a
          large corporation, we understand your needs and have come up with a
          solution specially for you.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="bg-[rgba(255,255,255,.8)] shadow-[4px_5px_24px_0px_rgba(0,0,0,0.2)] mr-[-50px] xl:mr-[-70px] rounded-full xl:px-[150px] xl:py-[100px] w-[48.2%] xl:w-full max-w-[491px] relative ml-0 xl:ml-[-75px] px-0 py-0 flex justify-center min-h-[370px] text-center">
            <div className="flex justify-center items-center xl:items-start flex-col">
              <img
                src="/images/building.svg"
                className="w-[64px] mb-[20px] hidden"
              />
              <h3 className="xl:text-subhead text-paleBlue mb-4 text-base font-inter font-bold">
                By Sectors
              </h3>
              <ul className="space-y-1">
                <li className="text-body text-gray text-sm font-inter">
                  Consulting Companies
                </li>
                <hr className="text-[#64A4C0] hidden" />
                <li className="text-body text-gray text-sm font-inter">
                  Education Institutes
                </li>
                <hr className="text-[#64A4C0] hidden" />
                <li className="text-body text-gray text-sm font-inter">
                  Marketing Agencies
                </li>
                <hr className="text-[#64A4C0] hidden" />
                <li className="text-body text-gray text-sm font-inter">
                  Entrepreneurs
                </li>
                <hr className="text-[#64A4C0] hidden" />
                <li className="text-body text-gray text-sm font-inter">
                  Small Businesses
                </li>
                <hr className="text-[#64A4C0] hidden" />
                <li className="text-body text-gray text-sm font-inter">
                  Government
                </li>
              </ul>
            </div>
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

          <div className="bg-[rgba(255,255,255,.8)] shadow-[4px_5px_24px_0px_rgba(0,0,0,0.2)] rounded-full px-0 xl:px-[150px] py-0 xl:py-[100px] w-[48.2%] xl:w-full max-w-[491px] relative mt-0 xl:mt-[-50px] flex justify-center min-h-[370px] text-center">
            <div className="flex justify-center items-center flex-col">
              <img
                src="/images/function.svg"
                className="w-12 h-12 text-red-400 mb-4 hidden"
              />

              <h3 className="xl:text-subhead text-paleBlue mb-4 text-base font-bold font-inter">
                By Functions
              </h3>
              <ul className="space-y-1">
                <li className="text-body text-gray text-sm font-inter">
                  Marketing
                </li>
                <hr className="text-[#64A4C0] hidden" />

                <li className="text-body text-gray text-sm font-inter">
                  Sales
                </li>
                <hr className="text-[#64A4C0] hidden" />

                <li className="text-body text-gray whitespace-nowrap text-sm font-inter">
                  HR (Human Resource)
                </li>
                <hr className="text-[#64A4C0] hidden" />

                <li className="text-body text-gray whitespace-nowrap text-sm font-inter">
                  IT (Information Technology)
                </li>
                <hr className="text-[#64A4C0] hidden" />

                <li className="text-body text-gray whitespace-nowrap text-sm font-inter">
                  Learning & Development
                </li>
                <hr className="text-[#64A4C0] hidden" />

                <li className="text-body text-gray whitespace-nowrap text-sm font-inter">
                  Internal Communication
                </li>
              </ul>
            </div>

            <GradientOverlay
              width={gradientOverlayStylesBottom.width}
              height={gradientOverlayStylesBottom.height}
              gradient="linear-gradient(to bottom, rgba(100,172,205,.5), rgba(100,172,205,0))"
              top={gradientOverlayStylesBottom.top}
              bottom={gradientOverlayStylesBottom.bottom}
              left={gradientOverlayStylesBottom.left}
              right={gradientOverlayStylesBottom.right}
              zIndex={gradientOverlayStylesBottom.zIndex}
              transform={gradientOverlayStylesBottom.transform}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
