import React from "react";
import CommonInput from "../common/CommonInput";
import CommonButton from "../common/CommonButton";
import { ToastContainer } from "react-toastify";

export default function CreateAccountForm({
  email ="",
  isLoading = false,
  handleEmailChange = () => {},
  handleOtpLogin = () => {},
  handleGoogleLogin = () => {},
}) {
  return (
    <div>
      <div className="flex justify-between items-center">
      <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          closeOnClick
          pauseOnHover
        />
        <h2 className="text-subhead text-paleBlue font-inter">
          Create account
        </h2>
        <p className="text-sm text-gray-600">
          <a
            href="/"
            className="font-normal text-[12px] text-darklue hover:text-indigo-500 underline underline-offset-4 text-darkBlue font-inter"
          >
            I have an account
          </a>
        </p>
      </div>

      <form className="mt-8 space-y-6" action="#" method="POST">
        <div className="rounded-md shadow-sm -space-y-px">
          <div>
            <p className="text-bodyColor text-[14px] mb-2 font-inter">
              Enter your email ID (OTP will be sent to entered email)
            </p>
            <CommonInput
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="text-bodyColor text-[14px] appearance-none rounded-lg relative block w-full px-3 py-3 border border-lightGray placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-lightBlue font-inter"
              placeholder="Enter your email ID"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
        </div>

        <div>
          <CommonButton
            type="submit"
            className="font-inter group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-[20px] text-white text-[14px] bg-primary hover:bg-red-500"           
            text={isLoading ? "Loading..." : "Submit"}
            disabled={isLoading}
            onClick={handleOtpLogin}
          />
        </div>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-lightGray" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="py-4 text-head bg-white text-lightGray font-inter">
                OR
              </span>
            </div>
          </div>

          <div className="mt-6">
            <button
              onClick={handleGoogleLogin}
              type="button"
              className=" font-inter text-[14px] font-normal w-full bg-transparent text-bodyColor  border border-lightGray rounded-[50px] flex justify-center items-center p-2 py-3"
            >
              <span className="sr-only font-inter">Sign in with Google</span>
              <svg
                className="w-5 h-5 mr-2"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0)">
                  <path
                    d="M20.3081 10.2303C20.3081 9.55056 20.253 8.86711 20.1354 8.19836H10.7031V12.0492H16.1046C15.8804 13.2911 15.1602 14.3898 14.1057 15.0879V17.5866H17.3282C19.2205 15.8449 20.3081 13.2728 20.3081 10.2303Z"
                    fill="#3F83F8"
                  />
                  <path
                    d="M10.7019 20.0006C13.3989 20.0006 15.6734 19.1151 17.3306 17.5865L14.1081 15.0879C13.2115 15.6979 12.0541 16.0433 10.7056 16.0433C8.09669 16.0433 5.88468 14.2832 5.091 11.9169H1.76562V14.4927C3.46322 17.8695 6.92087 20.0006 10.7019 20.0006V20.0006Z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.08857 11.9169C4.66969 10.6749 4.66969 9.33008 5.08857 8.08811V5.51233H1.76688C0.348541 8.33798 0.348541 11.667 1.76688 14.4927L5.08857 11.9169V11.9169Z"
                    fill="#FBBC04"
                  />
                  <path
                    d="M10.7019 3.95805C12.1276 3.936 13.5055 4.47247 14.538 5.45722L17.393 2.60218C15.5852 0.904587 13.1858 -0.0287217 10.7019 0.000673888C6.92087 0.000673888 3.46322 2.13185 1.76562 5.51234L5.08732 8.08813C5.87733 5.71811 8.09302 3.95805 10.7019 3.95805V3.95805Z"
                    fill="#EA4335"
                  />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect
                      width="20"
                      height="20"
                      fill="white"
                      transform="translate(0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
              Continue with Google
            </button>
          </div>
        </div>
      </form>

      <p className="mt-2 text-[14px] text-bodyColor text-center pt-2 font-normal font-inter">
        By signing up, you agree to the{" "}
        <a
          href="/"
          className="font-medium text-bodyColor underline underline-offset-2 font-inter"
        >
          Terms and Conditions
        </a>{" "}
        <br />
        <p className="mt-2 text-xs text-gray-500 text-center font-inter">
          and{" "}
          <a
            href="/"
            className="font-medium text-bodyColor underline underline-offset-2 font-inter"
          >
            Privacy Policy
          </a>
        </p>
      </p>
    </div>
  );
}
