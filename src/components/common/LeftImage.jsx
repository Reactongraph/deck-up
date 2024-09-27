import React from "react";
import CommonButton from "./CommonButton";

export default function LeftImage({ image = "", data = {} }) {
  console.log("data", data, "image", image);
  return (
    <section className="flex items-center">
      <div
        style={{ maxWidth: "1450px" }}
        className="container mx-auto px-4 py-16 "
      >
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="mb-10 lg:mb-0 lg:w-1/2 w-[85%]">
            <div className="relative w-full max-w-[816px] mr-[-195px]">
              <img
                src={image}
                alt="Person relaxing in office chair"
                className="w-full"
              />
            </div>
          </div>
          <div className="flex flex-col lg:w-1/2 w-[85%]">
            <div className="text-left">
              <p className="text-paleBlue text-banner mb-6">{data?.heading}</p>
              {data?.description?.map((item) => {
               return <p className={item.class}>
                {item?.text}
              </p>
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
      <div className="absolute inset-0 bg-stripes opacity-10 pointer-events-none" />
    </section>
  );
}
