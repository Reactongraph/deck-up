import React from "react";
import CommonImage from "./common/CommonImage";

const features = [
  {
    icon: "/placeholder.svg?height=64&width=64",
    title: "Speed",
    description: "Create professional-looking presentations in half the time",
    img: "/images/speed.svg",
  },
  {
    icon: "/placeholder.svg?height=64&width=64",
    title: "Simplification",
    description: "Format, edit and design polished slides easily",
    img: "/images/simplification.svg",
  },
  {
    icon: "/placeholder.svg?height=64&width=64",
    title: "Creative",
    description:
      "Includes maps, charts, and infographics for effective presentations",
    img: "/images/creative.svg",
  },
  {
    icon: "/placeholder.svg?height=64&width=64",
    title: "Consistency",
    description:
      "Helps maintain consistent style and formatting, following best practices",
    img: "/images/consistency.svg",
  },
];

export default function FeaturesSection() {
  return (
    <div className="relative pt-[82px] xl:pt-[100px] pb-[72px] xl:pb-[120px] bg-gradient-to-t from-[#ECF1F6] to-[rgba(236,241,246,0)] px-[32px] xs:px-14 xl:px-[10px]">
      <div className="container">
        <h2 className="lg:text-headline xl:text-headline text-subhead text-center  text-paleBlue font-extrabold m-auto w-[80%] sm:m-none sm:w-[100%] font-inter">
          Features that help you save time and <br /> work smart
        </h2>
        <div className="mt-6 xl:mt-[81px]">
          <div className="grid grid-cols-2 gap-[16px] sm:gap-[24px] sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-[10px] min-h-auto xs:min-h-[384px] shadow-[0_0px_16px_0px_rgba(210,216,231,0.5)] py-[24px] transition-shadow duration-300"
              >
                <div className="flex justify-center">
                  <CommonImage
                    src={feature.img}
                    alt={feature.title}
                    className={"max-w-[147px] w-full max-sm:w-[89px]"}
                  />
                </div>
                <h3 className="mt-[24px] text-lg max-sm:text-[16px] text-paleBlue font-semibold text-[24px] text-center font-inter">
                  {feature.title}
                </h3>
                <p className="mt-5 text-center px-[16px] xs:px-[36px] max-sm:text-[14px] text-body text-bodyColor font-inter leading-5">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
