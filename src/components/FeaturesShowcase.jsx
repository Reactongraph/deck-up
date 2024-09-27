import React from "react";
const features = [
  {
    title: "Create connector diagrams instantly",
    icon: "/placeholder.svg?height=48&width=48",
    illustration: "/placeholder.svg?height=120&width=200",
    img: "/images/network.svg",
  },
  {
    title: "Edit sizes and shapes of components in one click",
    icon: "/placeholder.svg?height=48&width=48",
    illustration: "/placeholder.svg?height=120&width=200",
    img: "/images/component.svg",
  },
  {
    title: "Track content flow and annotate slides for smoother collaboration",
    icon: "/placeholder.svg?height=48&width=48",
    illustration: "/placeholder.svg?height=120&width=200",
    img: "/images/track.svg",
  },
  {
    title: "Create and format a wide variety of tables",
    icon: "/placeholder.svg?height=48&width=48",
    illustration: "/placeholder.svg?height=120&width=200",
    img: "/images/tables.svg",
  },
];

export default function FeaturesShowcase() {
  return (
    <div className="bg-gradient-to-t from-[#318BB4] to-[#64ACCD] pt-[130px] pb-[160px] ps-2.5 pe-2.5">
      <div className="container">
        <div className="grid grid-cols-1 gap-[24px] md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden px-[20px] pt-[30px]"
            >
              <h3 className="text-[18px] font-semibold text-paleBlue mb-[25px]">
                {feature.title}
              </h3>
              <div className="mt-4">
                <img
                  src={feature.img}
                  alt={feature.title}
                  className="w-full h-auto"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="flex justify-center mt-8 space-x-2">
        <button className="w-8 h-1 bg-white rounded-full opacity-50"></button>
        <button className="w-8 h-1 bg-white rounded-full"></button>
        <button className="w-8 h-1 bg-white rounded-full opacity-50"></button>
      </div> */}
    </div>
  );
}
