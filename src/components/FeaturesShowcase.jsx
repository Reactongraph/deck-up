import React, { useRef } from "react";
import CommonSlider from "./common/CommonSlider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    img: "/images/table1.svg",
  },
  {
    title: "One-click selection to edit identical elements",
    icon: "/placeholder.svg?height=48&width=48",
    illustration: "/placeholder.svg?height=120&width=200",
    img: "/images/identical.svg",
  },
  {
    title: "Create connector diagrams instantly",
    icon: "/placeholder.svg?height=48&width=48",
    illustration: "/placeholder.svg?height=120&width=200",
    img: "/images/network.svg",
  },
];

export default function FeaturesShowcase() {
  const sliderRef = useRef(null);
  const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    speed: 500,
    autoplaySpeed: 1000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const handlePrevClick = () => {
    console.log("handleprev", sliderRef);
    sliderRef.current.slickPrev();
  };

  // Handler for next button click
  const handleNextClick = () => {
    console.log("handleNext", sliderRef);

    sliderRef.current.slickNext();
  };
  return (
    <div className="bg-gradient-to-t digram-slider  from-[#318BB4] to-[#64ACCD] pt-12 md:pt-[72px] lg:pt-[130px] pb-[101px] md:pb-10 lg:pb-[160px] pl-[15px] sm:ps-2.5 pe-2.5 pr-[0px]">
      <div className="lg:pl-[139px] xl:container pr-[0] lg:mr-[-10px] lg:max-w-[1440px] xl:my-0 xl:mx-auto">
        <div className="slider-container lg:mb-[40px]">
          <CommonSlider settings={sliderSettings} ref={sliderRef}>
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden px-[20px] pt-[30px] pb-9 max-w-[303px] lg:max-w-[350px] h-[260px] md:h-[369px] lg:min-h-[420px]"
              >
                <h3 className="text-sm md:text-base lg:text-[18px] md:font-semibold text-[#282828] md:text-paleBlue mb-[25px] font-inter">
                  {feature.title}
                </h3>
                <div className="mt-4">
                  <img
                    src={feature.img}
                    alt={feature.title}
                    className="w-full max-h-[211px]"
                  />
                </div>
              </div>
            ))}
          </CommonSlider>
          {/* {features.map((feature, index) => (
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
          ))} */}
        </div>
        <div className="flex justify-end space-x-4 ml-[0px] container">
          <img
            src="/images/left.svg"
            alt="left"
            className="w-[42px] cursor-pointer"
            onClick={handlePrevClick}
          />
          <img
            src="/images/right.svg"
            alt="left"
            className="w-[42px] cursor-pointer"
            onClick={handleNextClick}
          />
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
