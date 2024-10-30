import CommonButton from "../common/CommonButton";
import { Images } from "../../utils/images";

export default function OsSelector() {
  return (
    <div className="bg-gradient-to-t from-[#318BB4] to-[#64ACCD] py-[120px] ps-2.5 pe-2.5">
      <div className="text-center ">
        <h2 className="text-3xl font-bold text-white mb-8 font-inter">
          Thumbs up for choosing DeckUp!
        </h2>
        <div className="flex space-x-4 justify-center">
          <div className="max-w-[444px] w-full bg-white rounded-lg">
            <div className="p-6 flex flex-col items-center">
              <img
                src={Images.window}
                alt="Windows"
                className="w-16 h-16 text-gray-600 mb-4"
              />
              <h2 className="text-xl font-semibold mb-4 font-inter">Windows OS</h2>
              <CommonButton
                text={"Download"}
                className="font-inter max-w-[216px] w-full bg-primary hover:bg-bprimary text-white font-semibold hover:text-white py-2 px-4 border border-primary hover:border-transparent rounded"
              />
            </div>
          </div>
          <div className="max-w-[444px] w-full bg-white rounded-lg">
            <div className="p-6 flex flex-col items-center">
              <img
                src={Images.ios}
                alt="ios"
                className="w-16 h-16 text-gray-600 mb-4"
              />
              <h2 className="text-xl font-semibold mb-4 font-inter">Mac OS</h2>
              <p className="text-red-400 font-inter">coming soon!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
