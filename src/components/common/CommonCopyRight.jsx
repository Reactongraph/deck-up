import React from "react";

export default function CommonCopyRight() {
  return (
    <footer className="flex justify-between items-center py-4 px-6 text-sm text-gray-600  container max-sm:flex-col max-sm:p-2 max-sm:items-baseline">
      <p className="text-[14px] text-smallBlack font-inter max-sm:text-[10px]">
        © Copyright {new Date().getFullYear()} SlideXpress, Inc.
      </p>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <p
              href=""
              className="text-[14px] text-smallBlack hover:underline font-inter  max-sm:text-[10px]"
            >
              Terms of use
            </p>
          </li>
          <div className="border border-[#828282] mx-2 my-0"></div>
          <li>
            <p
              href=""
              className="text-[14px] text-smallBlack hover:underline font-inter  max-sm:text-[10px]"
            >
              Privacy policy
            </p>
          </li>
          <div className="border border-[#828282] mx-2 my-0"></div>
          <li>
            <p className="text-[14px] text-smallBlack hover:underline font-inter  max-sm:text-[10px]">
              Cookie preferences
            </p>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
