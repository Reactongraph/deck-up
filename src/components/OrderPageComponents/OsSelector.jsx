import CommonButton from "../common/CommonButton";
import { Images } from "../../utils/images";

export default function OsSelector() {
  return (
    <div className="bg-gradient-to-t from-[#318BB4] to-[#64ACCD] py-12 px-8 md:py-[72px] md:px-[54px] xl:py-[120px] xl:px-[10px]">
      <div className="text-center ">
        <h2 className="text-3xl font-bold text-white mb-8 font-inter max-sm:text-[24px]">
          Thumbs up for choosing DeckUp!
        </h2>
        <div className="flex justify-center flex-col md:flex-row gap-[16px] md:gap-[27px] items-center h-auto md:h-[294px]">
          <div className="max-w-[444px] w-full h-full md:w-2/4 xl:w-full bg-white rounded-lg flex justify-center items-center shadow-custom lg:shadow-none">
            <div className="p-6 flex flex-col items-center">
              <img
                src={Images.window}
                alt="Windows"
                className="w-16 h-16 text-gray-600 mb-4"
              />
              <h2 className="text-xl font-semibold mb-4 font-inter max-sm:text-[24px]">
                Windows OS
              </h2>
              <CommonButton
                text={"Download"}
                className="font-inter max-w-[216px] w-full max-sm:text-[14px] bg-primary hover:bg-bprimary text-white font-semibold hover:text-white py-2 px-4 border border-primary hover:border-transparent rounded"
              />
            </div>
          </div>
          <div className="max-w-[444px] w-full h-full md:w-2/4 xl:w-full bg-white rounded-lg flex justify-center items-center shadow-custom lg:shadow-none">
            <div className="p-6 flex flex-col items-center">
              <img
                src={Images.ios}
                alt="ios"
                className="w-16 h-16 text-gray-600 mb-4"
              />
              <h2 className="text-xl font-semibold mb-4 font-inter max-sm:text-[24px]">
                Mac OS
              </h2>
              <p className="text-red-400 font-inter max-sm:text-[18px]">
                coming soon!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
