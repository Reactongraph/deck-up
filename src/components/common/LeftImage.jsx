import React from "react";
import CommonButton from "./CommonButton";

export default function LeftImage({ image = "", data = {} }) {
  console.log("data", data, "image", image);
  return (
    <section className="flex items-center">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <div className="relative w-full h-[400px] lg:h-[500px]">
              <img
                src={image}
                alt="Person relaxing in office chair"
                layout="fill"
                objectFit="contain"
                priority
                className="w-full h-[550px]"
              />
            </div>
          </div>
          <div className="flex flex-col lg:w-1/2">
            <div className="text-left">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-[60px]">
                {data?.heading}
              </h1>
              <p className="text-lg text-gray-600 mb-8">{data?.description}</p>
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
      <div className="absolute inset-0 bg-stripes opacity-10 pointer-events-none" />
    </section>
  );
}
