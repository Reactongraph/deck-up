import React from "react";
import GradientOverlay from "./common/GradientOverlay";

export default function PowerUsers() {
  return (
    <section className="bg-linear py-16 px-4 relative overflow-hidden ps-2.5 pe-2.5">
      <div className="max-w-6xl mx-auto text-white">
        <h2 className="text-4xl font-bold text-center mb-4">
          Designed for power users across industries
        </h2>
        <p className="text-center mb-12 max-w-2xl mx-auto">
          Whether you are an independent consultant, work in a small team or a
          large corporation, we understand your needs and have come up with a
          solution specially for you.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="bg-[rgba(255,255,255,.8)] shadow-[4px_5px_24px_0px_rgba(0,0,0,0.2)] mr-[-70px] rounded-full px-[150px] py-[100px] w-full max-w-[491px]  relative max-sm:ml-[-75px]">
            <div className="flex justify-center items-start flex-col">
              <img src="/images/building.svg" className="w-[64px] mb-[20px]" />
              <h3 className="text-subhead text-paleBlue mb-4">By Sectors</h3>
              <ul className="space-y-1">
                <li className="text-body text-gray">Consulting Companies</li>
                <hr className="text-[#64A4C0]" />
                <li className="text-body text-gray">Education Institutes</li>
                <hr className="text-[#64A4C0]" />
                <li className="text-body text-gray">Marketing Agencies</li>
                <hr className="text-[#64A4C0]" />
                <li className="text-body text-gray">Entrepreneurs</li>
                <hr className="text-[#64A4C0]" />
                <li className="text-body text-gray">Small Businesses</li>
                <hr className="text-[#64A4C0]" />
                <li className="text-body text-gray">Government</li>
              </ul>
            </div>
            <GradientOverlay
              width="146px"
              height="146px"
              gradient="linear-gradient(to right, rgba(255,114,95,0), rgba(255,114,95,1))"
              top="0"
              left="-41px"
              transform="rotate(90deg)"
            />
          </div>

          <div className="bg-[rgba(255,255,255,.8)] shadow-[4px_5px_24px_0px_rgba(0,0,0,0.2)] rounded-full px-[150px] py-[100px] w-full max-w-[491px]  relative max-sm:mt-[-50px]">
            <div className="flex justify-center items-center flex-col">
              <img
                src="/images/function.svg"
                className="w-12 h-12 text-red-400 mb-4"
              />

              <h3 className="text-subhead text-paleBlue mb-4">By Functions</h3>
              <ul className="space-y-1">
                <li className="text-body text-gray">Marketing</li>
                <hr className="text-[#64A4C0]" />

                <li className="text-body text-gray">Sales</li>
                <hr className="text-[#64A4C0]" />

                <li className="text-body text-gray whitespace-nowrap">
                  HR (Human Resource)
                </li>
                <hr className="text-[#64A4C0]" />

                <li className="text-body text-gray whitespace-nowrap">
                  IT (Information Technology)
                </li>
                <hr className="text-[#64A4C0]" />

                <li className="text-body text-gray whitespace-nowrap">
                  Learning & Development
                </li>
                <hr className="text-[#64A4C0]" />

                <li className="text-body text-gray whitespace-nowrap">
                  Internal Communication
                </li>
              </ul>
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-300 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
