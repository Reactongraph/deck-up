import React, { useRef } from "react";
import GradientOverlay from "./common/GradientOverlay";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CommonSlider from "./common/CommonSlider";
import useCustomWindowSize from "../Hooks/useCustomWindowSize";

const testimonials = [
  {
    company: "McKinsey & Company",
    logo: "/images/mckinsy.svg",
    quote:
      "Thankyou for building such an empowering tool! We can save precious time, rather than wasting it on formatting and standardizing slides.",
    author: "Michael Smith",
    position: "Sr. Consultant @McKinsey",
    avatar: "/images/avatar1.svg",
  },
  {
    company: "Teva",
    logo: "/images/teva.svg",
    quote:
      "This tool has made a huge difference in our work. Fast, easy, and reliable - it's exactly what we needed. It's intuitive, efficient, and perfect!",
    author: "Michael Smith",
    position: "Sr. Consultant @McKinsey",
    avatar: "/images/avatar2.svg",
  },
  {
    company: "Abbott",
    logo: "/images/abbott.svg",
    quote:
      "A fantastic addition to our toolkit. It makes slide creation quick and ensures all our presentations look professional.",
    author: "Michael Smith",
    position: "Sr. Consultant @McKinsey",
    avatar: "/images/avatar3.svg",
  },
  {
    company: "Teva",
    logo: "/images/teva.svg",
    quote:
      "This tool has made a huge difference in our work. Fast, easy, and reliable - it's exactly what we needed. It's intuitive, efficient, and perfect!",
    author: "Michael Smith",
    position: "Sr. Consultant @McKinsey",
    avatar: "/images/avatar2.svg",
  },
  {
    company: "Teva",
    logo: "/images/teva.svg",
    quote:
      "This tool has made a huge difference in our work. Fast, easy, and reliable - it's exactly what we needed. It's intuitive, efficient, and perfect!",
    author: "Michael Smith",
    position: "Sr. Consultant @McKinsey",
    avatar: "/images/avatar2.svg",
  },
  {
    company: "Teva",
    logo: "/images/teva.svg",
    quote:
      "This tool has made a huge difference in our work. Fast, easy, and reliable - it's exactly what we needed. It's intuitive, efficient, and perfect!",
    author: "Michael Smith",
    position: "Sr. Consultant @McKinsey",
    avatar: "/images/avatar2.svg",
  },
];

export default function TestimonialsSection() {
  const sliderRef = useRef(null);
  const size = useCustomWindowSize(); // Get screen size

  const sliderSettings = {
    dots: false,
    infinite: false,
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
          slidesToShow: 2.03,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
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
          bottom: "-45px",
          transform: "rotate(90deg)",
        }
      : size.width <= 1024
      ? {
          // Tablet styles
          width: "108px",
          height: "108px",
          // top: "39px",
          left: "-60px",
          bottom: "-60px",
          // zIndex: "-999",
          // transform: "rotate(-70deg)",
        }
      : {
          // Desktop styles
          width: "146px",
          height: "146px",
          top: "inherit",
          left: "-41px",
          right: "inherit",
          // zIndex: "-999",
          bottom: "-80px",
          // transform: "rotate(-70deg)",
        };
  return (
    <section className="relative pb-8 lg:pb-[120px] bg-gradient-to-t from-[#ECF1F6] to-[rgba(236,241,246,0)] ps-2.5 pe-2.5">
      <h2 className="text-2xl lg:text-headline text-center mb-[45px] text-paleBlue font-extrabold font-inter">
        Loved by users
      </h2>
      <div className="pl-[139px] pr-[0] mr-[-10px] lg:max-w-[1440px] xl:container xl:my-0 xl:mx-auto max-sm:p-0">
        <div className="slider-container relative testimonial mb-[40px]">
          <CommonSlider settings={sliderSettings} ref={sliderRef}>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="" // Add horizontal margin here
              >
                <div className="bg-white z-10 py-[54px] text-center px-[54px] rounded-[10px] shadow-[0_0px_16px_0px_rgba(210,216,231,0.5)] flex flex-col justify-between mx-2 min-h-[500px]">
                  <div>
                    <img
                      src={testimonial.logo}
                      alt={`${testimonial.company} logo`}
                      className="w-[144px] m-auto mb-[47px] h-[45px]"
                    />
                    <p className="text-body text-bodyColor font-inter">
                      {testimonial.quote}
                    </p>
                  </div>
                  <div className="flex items-center  gap-[10px] justify-center mt-[">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className="rounded-full h-[39px] w-[39px]"
                    />
                    <div className="text-left leading-[14px] text-[#1D375E]">
                      <p className="font-semibold text-[13px] font-inter">
                        {testimonial.author}
                      </p>
                      <p className="text-sm text-gray-600 text-[10px] font-inter">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </CommonSlider>
          <GradientOverlay
            width={gradientOverlayStyles.width}
            height={gradientOverlayStyles.height}
            gradient="linear-gradient(to right, rgba(255,114,95,0), rgba(255,114,95,1))"
            top={gradientOverlayStyles.top}
            bottom={gradientOverlayStyles.bottom}
            left={gradientOverlayStyles.left}
            right={gradientOverlayStyles.right}
            zIndex={gradientOverlayStyles.zIndex}
            transform={gradientOverlayStyles.transform}
          />
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
            alt="right"
            className="w-[42px] cursor-pointer"
            onClick={handleNextClick}
          />
        </div>
      </div>
    </section>
  );
}
