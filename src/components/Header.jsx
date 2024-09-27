import { useState } from "react";
import CommonImage from "./common/CommonImage";
import CommonButton from "./common/CommonButton";
import { Images } from "../utils/images";
import { HeaderData } from "../utils/data";
import ProductFeatures from "./MenuHoverComponents/ProductFeature";
import FeatureHover from "./MenuHoverComponents/FeatureHover";
import useCustomNavigation from "../Hooks/useCustomNavigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // State to track hover for menu items
  const [hoveredItem, setHoveredItem] = useState(null);
  const navigate = useCustomNavigation();

  const handleNavigate = (path = "") => {
    if (path !== "") {
      navigate(path);
    }
  };

  return (
    <div className="shadow-sm w-full mb-[48px] relative">
      <nav className="max-w-[1443px] w-full m-auto pl-[50px] pr-[30px] lg:px-6 xl:px-[150px] relative flex items-center justify-between min-h-[80px] bg-white ">
        <div className="flex items-center">
          <CommonImage
            src={Images?.logo}
            className={"h-[18px] w-[111px] md:h-[29px] md:w-[161px]"}
            alt="logo"
          />
        </div>
        <div className="hidden lg:flex space-x-4">
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
            className="max-lg:hidden text-gray font-head cursor-pointer"
            onClick={() => handleNavigate("/login")}
          >
            Login
          </p>
          <CommonButton
            type={"button"}
            text={"Try For Free"}
            className={
              "hidden lg:inline-flex bg-primary text-[#fff] cursor-pointer  h-[48px] rounded-[100px] w-full d-flex items-center px-[24px]"
            }
          />
          <button className="lg:hidden" onClick={toggleMenu}>
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
          {isOpen && (
            <div
              className={`absolute z-[999] w-full right-0 top-0 mt-[80px] bg-white rounded-lg shadow-lg p-6 py-[50px] transform transition-all duration-300 ease-in-out ${
                isOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-4"
              }`}
              style={{ display: isOpen ? "block" : "none" }}
            >
              <button
                className="absolute top-5 right-[60px] text-gray-500 hover:text-gray-700"
                onClick={toggleMenu}
              >
                <img src="/images/close.svg" alt="close" />
              </button>
              <div className="w-[80%] sm:w-[60%] m-auto">
                <ul className="space-y-10">
                  <li>
                    <p
                      onClick={() => {
                        handleNavigate("/");
                        setIsOpen(false);
                      }}
                      className="text-subhead text-paleBlue pl-[18px] cursor-pointer"
                    >
                      Home
                    </p>
                  </li>
                  <hr className="text-[#64A4C0]" />
                  <li>
                    <p
                      onClick={() => {
                        handleNavigate("/orders");
                        setIsOpen(false);
                      }}
                      className="text-subhead text-paleBlue pl-[18px] cursor-pointer"
                    >
                      Order
                    </p>
                  </li>
                  <hr className="text-[#64A4C0]" />
                  <li>
                    <p
                      onClick={() => {
                        handleNavigate("/features");
                        setIsOpen(false);
                      }}
                      className="text-subhead text-paleBlue pl-[18px] cursor-pointer"
                    >
                      Features
                    </p>
                  </li>
                  <hr className="text-[#64A4C0]" />
                  <li>
                    <p
                      onClick={() => {
                        handleNavigate("/about");
                        setIsOpen(false);
                      }}
                      className="text-subhead text-paleBlue pl-[18px] cursor-pointer"
                    >
                      About Us
                    </p>
                  </li>
                  <hr className="text-[#64A4C0]" />
                  <li>
                    <p
                      onClick={() => {
                        handleNavigate("/login");
                        setIsOpen(false);
                      }}
                      className="text-subhead font-medium	 pl-[18px] text-secondary"
                    >
                      Login
                    </p>
                  </li>
                </ul>
                <div className="flex space-x-2 mt-[60px]">
                  <a
                    href="#linkedin"
                    className="text-3xl pl-[18px]  text-gray-700 hover:text-gray-900"
                  >
                    <img src="/images/linkdin.svg" alt="linkedin" />
                  </a>
                  <a
                    href="#youtube"
                    className="text-gray-700 pl-[18px] hover:text-gray-900"
                  >
                    <img src="/images/youtube.svg" alt="youtube" />
                  </a>
                </div>
              </div>
            </div>
          )}
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
