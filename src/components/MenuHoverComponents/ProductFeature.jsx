// import { Images } from "../../utils/images";
import GradientOverlay from "../common/GradientOverlay";
// import useCustomNavigation from "../../Hooks/useCustomNavigation";

export default function ProductFeatures({
  onClick = () => {},
  setActiveDropdown,
}) {
  const handleNavigate = () => {
    onClick();
    setActiveDropdown(false);
  };
  return (
    <div className="realtive flex flex-col md:flex-row  rounded-lg shadow-md bg-white justify-center items-stretch gap-4 pt-[58px] pb-[110px] px-4">
      <div
        className="flex-1 bg-gradient-to-b from-slate-50 to-cyan-100 rounded-lg pt-8 pb-6 px-6 flex flex-col items-center max-w-[270px] w-full cursor-pointer"
        onClick={() => handleNavigate()}
      >
        <h2 className="text-subhead text-paleBlue mb-1 font-inter">
          Free Trial
        </h2>
        <p className="text-[78px] text-secondary font-bold mb-[-30px] font-inter">
          30
        </p>
        <p className="text-head text-paleBlue font-inter">
        Days free trial
        </p>
      </div>
      <div class="border-l-2 border-smallBlue mx-5"></div>
      <div className="flex-1 bg-white p-6 flex flex-col items-start justify-center max-w-[270px] w-full">
        <h2 className="text-subhead text-paleBlue mb-1 font-inter">
          Watch Demo
        </h2>
        <img
          src="/videos/tutorial.gif"
          className="text-blue-500 mb-2"
          alt="demo"
        />
        <p className="text-[18px]  text-bodyColor text-start font-inter">
          Lorem ipsum dolor sit amet consectetur.
        </p>
      </div>
      <div className="border-l-2 border-smallBlue mx-5"></div>
      <div className="flex-1 bg-white p-6 flex flex-col items-start justify-around max-w-[270px] w-full">
        <div className="flex items-center gap-[46px]">
          <img
            src="/images/window.svg"
            className="h-[32px] w-[32px]"
            alt="windows"
          />
          <div>
            <p className="text-primary  text-[15px] font-medium font-inter">
              Windows OS
            </p>
            <p
              className="text-subhead text-paleBlue cursor-pointer font-inter"
              onClick={() => handleNavigate()}
            >
              Download
            </p>
          </div>
        </div>
        <div className="border-t-2 border-smallBlue  w-full lg:w-[154%] self-center"></div>
        <div className="flex items-center gap-[46px]">
          <img
            src="/images/ios.svg"
            className="h-[33px] w-[33px]"
            alt="windows"
          />

          <div>
            <p className="text-primary text-[15px] font-medium font-inter">
              Mac OS
            </p>
            <p className="text-subhead text-paleBlue whitespace-nowrap font-inter">
              Coming Soon!
            </p>
          </div>
        </div>
      </div>
      <GradientOverlay
        width="300px"
        height="300px"
        gradient="linear-gradient(to bottom, rgba(100,172,205,.5), rgba(100,172,205,0))"
        right="-85px"
        top="42px"
        transform="rotate(120deg)"
      />
    </div>
  );
}
