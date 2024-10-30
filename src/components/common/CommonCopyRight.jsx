import React from "react";

export default function CommonCopyRight() {
  return (
    <footer className="flex justify-between items-center py-4 px-6 text-sm text-gray-600  container">
      <p className="text-[14px] text-smallBlack font-inter">
        © Copyright {new Date().getFullYear()} SlideXpress, Inc.
      </p>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <p href="" className="text-[14px] text-smallBlack hover:underline font-inter">
              Terms of use
            </p>
          </li>
          <li>
            <p href="" className="text-[14px] text-smallBlack hover:underline font-inter">
              Privacy policy
            </p>
          </li>
          <li>
            <p className="text-[14px] text-smallBlack hover:underline font-inter">
              Cookie preferences
            </p>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
