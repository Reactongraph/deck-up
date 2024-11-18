import React from "react";
import CommonButton from "./CommonButton";
// import GradientOverlay from "./GradientOverlay";
export default function LeftImage({
  image = "",
  data = {},
  customCSS = {},
  showGradient = false,
}) {
  return (
    <section className="flex items-center">
      <div
        style={{ maxWidth: "1450px" }}
        className="container mx-auto py-8 lg:py-16 "
      >
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="mb-10 lg:mb-0 lg:w-1/2 w-[100%]">
            <div className="relative w-full max-w-[816px] mr-[-195px] lg:block">
              <img
                src={image}
                alt="Person relaxing in office chair"
                className="w-[90%] lg:w-full"
              />
            </div>
          </div>
          <div className="flex flex-col sm:1/2 xl:max-w-[600px] lg:w-[600px] xl:pr-[126px] lg:pr-[50px] px-14">
            <div
              className="
                 text-wrap text-left"
            >
              <p
                className={`${
                  customCSS?.fontSize ? customCSS.fontSize : "text-headline"
                } ${
                  customCSS?.fontColor ? customCSS?.fontColor : "text-paleBlue"
                }  lg:text-banner mb-6 font-bold"`}
              >
                {data?.heading}
              </p>
              {data?.description?.map((item) => {
                return <p className={item.class}>{item?.text}</p>;
              })}
            </div>
            {data?.btnText !== "" && (
              <div className="flex flex-col sm:flex-row gap-4">
                <CommonButton
                  type={"button"}
                  className="w-full bg-primary hover:bg-bprimary text-white font-semibold hover:text-white py-2 px-4 border border-primary hover:border-transparent rounded"
                  text={data?.btnText}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
