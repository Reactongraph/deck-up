import { Images } from "../../utils/images";

export default function ProductFeatures() {
  return (
    <div className="flex flex-col md:flex-row  rounded-lg shadow-md bg-white justify-center items-stretch gap-4 p-4">
      <div className="flex-1 bg-blue-50 rounded-lg p-6 flex flex-col items-center justify-center">
        <h2 className="text-lg font-semibold text-gray-700 mb-2">Free Trial</h2>
        <p className="text-6xl font-bold text-blue-500">30</p>
        <p className="text-sm text-gray-600">Days Free Trial</p>
      </div>

      <div className="flex-1 bg-white p-6 flex flex-col items-center justify-center">
        <h2 className="text-lg font-semibold text-gray-700 mb-2">Watch Demo</h2>
        <img
          src={Images.demoImage}
          className="w-12 h-12 text-blue-500 mb-2"
          alt="demo"
        />
        <p className="text-sm text-gray-600 text-center">
          Lorem ipsum dolor sit amet consectetur.
        </p>
      </div>

      <div className="flex-1 bg-white p-6 flex flex-col items-center justify-center">
        <h2 className="text-lg font-semibold text-gray-700 mb-2">Download</h2>
        <div className="flex gap-4 mb-2">
          <svg
            className="w-8 h-8"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 5.5C3 4.11929 4.11929 3 5.5 3H18.5C19.8807 3 21 4.11929 21 5.5V18.5C21 19.8807 19.8807 21 18.5 21H5.5C4.11929 21 3 19.8807 3 18.5V5.5Z"
              fill="#0078D4"
            />
            <path
              d="M11.5 11.5H3V5.5C3 4.11929 4.11929 3 5.5 3H11.5V11.5Z"
              fill="#90C300"
            />
            <path
              d="M11.5 11.5H21V18.5C21 19.8807 19.8807 21 18.5 21H11.5V11.5Z"
              fill="#FDB813"
            />
            <path
              d="M11.5 11.5H3V18.5C3 19.8807 4.11929 21 5.5 21H11.5V11.5Z"
              fill="#F25022"
            />
          </svg>
          <svg
            className="w-8 h-8"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.7101 19.7589C17.4476 20.9456 16.0475 20.7237 14.7038 20.1257C13.2889 19.5138 11.9882 19.4855 10.5022 20.1257C8.67797 20.9456 7.70636 20.6813 6.5863 19.7589C1.44528 14.5119 2.26637 6.71396 8.13605 6.33965C9.88679 6.42459 11.1494 7.23168 12.2129 7.31662C13.7993 7.03724 15.3151 6.20121 16.9733 6.31509C18.9305 6.45751 20.4181 7.23168 21.4038 8.6223C17.5341 10.8979 18.4487 15.9025 22 17.4345C21.2354 18.3825 20.3491 19.3164 18.7101 19.7589ZM12.1264 6.31509C11.9452 3.41498 14.3296 1 17.0452 0.75"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <p className="text-sm font-semibold text-blue-500">Coming Soon!</p>
      </div>
    </div>
  );
}
