import { useState } from "react";
import CommonImage from "./common/CommonImage";
import CommonButton from "./common/CommonButton";
import { Images } from "../utils/images";
import { HeaderData } from "../utils/data";
import ProductFeatures from "./MenuHoverComponents/ProductFeature";
import FeatureHover from "./MenuHoverComponents/FeatureHover";
import useCustomNavigation from "../Hooks/useCustomNavigation";

export default function Header() {
  // State to track hover for menu items
  const [hoveredItem, setHoveredItem] = useState(null);
  const navigate = useCustomNavigation();

  const handleNavigate = (path = "") => {
    if (path !== "") {
      navigate(path);
    }
  };

  return (
    <div className="shadow-sm w-full mb-[48px]">
      <nav className="container relative flex items-center justify-between min-h-[80px] bg-white ">
        <div className="flex items-center">
          <CommonImage
            src={Images?.logo}
            className={"h-[29px] w-[161px]"}
            alt="logo"
          />
        </div>
        <div className="hidden md:flex space-x-4">
          {HeaderData?.map((item, index) => {
            return (
              <div
                key={index}
                className="flex gap-[10px] items-center relative"
                onMouseEnter={() => setHoveredItem(item?.label)} // Set hover on enter
                onMouseLeave={() => setHoveredItem(null)}
                onClick={() => handleNavigate(item?.href)}
                // Clear hover on leave
              >
                <p className="text-gray font-head hover:text-blue-600 cursor-pointer">
                  {item?.label}
                </p>
                <CommonImage
                  src={Images?.expand}
                  alt={"expand"}
                  className={"h-[16px] w-[16px]"}
                />

                {/* Conditionally render ProductFeatures or FeatureHover based on hover */}
              </div>
            );
          })}
        </div>
        <div className="flex items-center justify-between gap-[32px]">
          <p
            className="text-gray font-head cursor-pointer"
            onClick={() => handleNavigate("/login")}
          >
            Login
          </p>
          <CommonButton
            type={"button"}
            text={"Try For Free"}
            className={
              "hidden md:inline-flex bg-primary text-[#fff] cursor-pointer  h-[48px] rounded-[100px] w-full d-flex items-center px-[24px]"
            }
          />
          <button className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        {hoveredItem === "Order" && (
          <div className="absolute top-full left-[35%] mt-2 z-[999]">
            <ProductFeatures />
          </div>
        )}
        {hoveredItem === "About Us" && (
          <div className="absolute top-full left-[35%] mt-2 z-[999]">
            <FeatureHover />
          </div>
        )}
      </nav>
    </div>
  );
}
