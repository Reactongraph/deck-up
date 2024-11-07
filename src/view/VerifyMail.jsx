import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { setOtp, selectAuthState } from "../store/auth/authSlice";
import { useVerifyOtpForLoginMutation } from "../store/auth/authApiSlice";

const VerifyMail = () => {
  const dispatch = useDispatch();
  const { email, otp } = useSelector(selectAuthState);

  const navigate = useNavigate();
  const [verifyApi, { data, isLoading, error }] =
    useVerifyOtpForLoginMutation();

  useEffect(() => {
    if (!isLoading && data?.message === "OTP verified") {
      setTimeout(() => {
        navigate("/setup");
      }, 3000);
    }

    if (error) {
      toast.error("An error occurred. Please try again later.");
    }
  }, [data, isLoading, error, navigate]);

  const handleOtpChange = (e, index) => {
    const value = e.target.value;

    if (/^\d$/.test(value) || value === "") {
      const newOtp = [...otp];
      newOtp[index] = value;
      dispatch(setOtp(newOtp));

      if (value && index < otp.length - 1) {
        const nextInput = document.getElementById(`otp-input-${index + 1}`);
        if (nextInput) {
          nextInput.focus();
        }
      }
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (otp.length !== 6 || otp.some((digit) => digit === "")) {
      toast.error("Please enter the full 6-digit OTP.");
      return;
    }

    if (!email || !otp || otp.length !== 6) {
      toast.error("Invalid email or OTP. Please check your input.");
      return;
    }

    const otpString = otp.join("");

    verifyApi({ email, otp: otpString });
  };

  return (
    <div className="bg-lightBlue min-h-screen flex flex-col">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
      />
      <div className="flex flex-col lg:flex-row container lg:pt-[48px] xl:pt-[48px] lg:pb-[80px] xl:pt-[80px] sm:pt-[72px] sm:pb-[24px] relative z-[100]">
        <div className="flex-1 flex items-center justify-center mt-10">
          <div className="max-w-[536px] w-full bg-white rounded-lg sm:px-[66px] px-[40px] pt-[50px] pb-[300px] text-start mx-[40px] xl:mx-[0px]">
            <h2 className="text-2xl font-semibold text-paleBlue mb-2">
              Verify your email
            </h2>
            <p className="text-gray-600 mb-14 text-bodyColor">
              Enter the OTP sent to{" "}
              <span className="font-medium text-bodyColor">{email}</span>
              <a
                href="/"
                className="text-blue-500 font-medium hover:underline underline underline-offset-1 pl-[5px]"
              >
                Change
              </a>
            </p>

            <div className="flex justify-start gap-2 sm:gap-7 mb-6 pt-13">
              {Array.isArray(otp) &&
                otp.map((digit, index) => (
                  <input
                    key={index}
                    id={`otp-input-${index}`}
                    type="text"
                    maxLength="1"
                    value={digit}
                    onChange={(e) => handleOtpChange(e, index)}
                    className="w-12 h-14 text-center text-lg border-2 border-lightGray bg-lightBlue rounded-md focus:outline-none focus:border-blue-500"
                  />
                ))}
            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-primary hover:bg-red-600 text-white font-medium py-3 rounded-full"
              disabled={isLoading}
            >
              {isLoading ? "Verifying..." : "Submit"}
            </button>
          </div>
        </div>
        {/* Right section for the image */}
        <div className="hidden lg:block relative w-0 flex-1 m-auto order-1 lg:order-2">
          <img
            className="absolute inset-0 w-full max-w-[659px] m-auto object-contain"
            src="/images/login-logo.svg"
            alt="Productivity illustration"
          />
        </div>

        {/* For smaller screens, image will be shown below the form */}
        <div className="block lg:hidden w-full order-1">
          <img
            className="w-full max-w-[659px] mx-auto object-contain pt-6 px-4"
            src="/images/login-logo.svg"
            alt="Productivity illustration"
          />
        </div>
      </div>
    </div>
  );
};

export default VerifyMail;
