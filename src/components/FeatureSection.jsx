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
    <div className="relative  pt-[100px] pb-[120px] bg-gradient-to-t from-[#ECF1F6] to-[rgba(236,241,246,0)]">
        <div className="container">
        <h2 className="text-headline text-center  text-paleBlue font-extrabold">Features that help you save time and <br/> work smart</h2>
        <div className="mt-[81px]">
          <div className="grid grid-cols-1 gap-[24px] sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-[10px] min-h-[384px] shadow-[0_0px_16px_0px_rgba(210,216,231,0.5)] py-[24px] transition-shadow duration-300"
              >
                <div className="flex justify-center">
                  <CommonImage
                    src={feature.img}
                    alt={feature.title}
                    className={"w-[147px]"}
                  />
                </div>
                <h3 className="mt-[24px] text-lg text-paleBlue font-medium text-[24px] text-center">
                  {feature.title}
                </h3>
                <p className="mt-5 text-center px-[36px] text-body text-bodyColor">
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
