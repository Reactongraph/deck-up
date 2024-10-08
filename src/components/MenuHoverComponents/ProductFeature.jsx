import { Images } from "../../utils/images";
import GradientOverlay from "../common/GradientOverlay";

export default function ProductFeatures() {
  return (
    <div className="realtive flex flex-col md:flex-row  rounded-lg shadow-md bg-white justify-center items-stretch gap-4 p-4">
      <div className="flex-1 bg-gradient-to-b from-slate-50 to-cyan-100 rounded-lg p-6 flex flex-col items-center justify-center max-w-[270px]">
        <h2 className="text-subhead text-paleBlue mb-1">Free Trial</h2>
        <p className="text-[78px] text-secondary font-bold mb-[-30px]">30</p>
        <p className="text-head text-paleBlue">Days Free Trial</p>
      </div>
      <div class="border-l-2 border-smallBlue mx-5"></div>
      <div className="flex-1 bg-white p-6 flex flex-col items-center justify-center max-w-[270px]">
        <h2 className="text-subhead text-paleBlue mb-1">Watch Demo</h2>
        <img
          src="/videos/tutorial.gif"
          className="text-blue-500 mb-2"
          alt="demo"
        />
        <p className="text-[18px]  text-bodyColor text-center">
          Lorem ipsum dolor sit amet consectetur.
        </p>
      </div>
      <div className="border-l-2 border-smallBlue mx-5"></div>
      <div className="flex-1 bg-white p-6 flex flex-col items-start justify-around max-w-[270px]">
        <div className="flex items-center gap-[46px]">
          <img
            src="/images/window.svg"
            className="h-[32px] w-[32px]"
            alt="windows"
          />
          <div>
            <p className="text-primary  text-[15px] font-medium">Windows OS</p>
            <p className="text-subhead text-paleBlue">Download</p>
          </div>
        </div>
        <div className="border-t-2 border-smallBlue  w-full self-center"></div>
        <div className="flex items-center gap-[46px]">
          <img
            src="/images/ios.svg"
            className="h-[33px] w-[33px]"
            alt="windows"
          />

          <div>
            <p className="text-primary text-[15px] font-medium">Mac OS</p>
            <p className="text-subhead text-paleBlue whitespace-nowrap">
              Coming Soon!
            </p>
          </div>
        </div>
      </div>
      <GradientOverlay
        width="300px"
        height="300px"
        gradient="linear-gradient(to bottom right, rgba(100, 172, 205, 0.3), rgba(100, 172, 205, 0))"
        right="0"
        top="10px"
        transform="rotate(180deg)"
      />
    </div>
  );
}
