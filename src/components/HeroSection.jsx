import React, { useEffect, useRef, useState } from "react";
import { videos } from "../utils/videos";
// import CommonImage from "./common/CommonImage";
import CommonButton from "./common/CommonButton";
import CommonInput from "./common/CommonInput";
import CommonVideo from "./common/CommonVideo";
import GradientOverlay from "./common/GradientOverlay";
import useCustomWindowSize from "../Hooks/useCustomWindowSize";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { setEmail } from "../store/auth/authSlice";
import { useRegisterUserMutation } from "../store/auth/authApiSlice";

export default function HeroSection({
  freeTrialSectionRef,
  freeTrialInputFocus,
  setFreeTrialInputFocus,
}) {
  const size = useCustomWindowSize(); // Get screen size
  const [loginAPi, { data, isLoading }] = useRegisterUserMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const email = useSelector((state) => state.auth.email);
  const [userEmail, setUserEmail] = useState("");
  const emailInputRef = useRef(null);

  const handleEmailChange = (event) => {
    dispatch(setEmail(event.target.value));
    setUserEmail(event.target.value);
  };

  useEffect(() => {
    localStorage.removeItem("email");
    localStorage.removeItem("accountData");
    localStorage.removeItem("userDetails");
    if (!isLoading && data?.message === "OTP sent to your email please check") {
      dispatch(setEmail(email));
      setUserEmail(email);
      setTimeout(() => {
        navigate("/verify-mail");
      }, 3000);
    }
  }, [data, isLoading, dispatch, email, navigate]);

  const handleFormSubmit = async (event) => {
    localStorage.setItem("userType", "Freetrial");
    event.preventDefault();
    loginAPi(email);
  };

  // useEffect(() => {
  //   return () => {
  //     dispatch(setEmail("")); // Reset email to blank on unmount
  //   };
  // }, []);

  // Define responsive values for GradientOverlay based on screen width
  const gradientOverlayStyles =
    size.width <= 640
      ? {
          // Mobile styles
          width: "51px",
          height: "51px",
          // top: "157px",
          bottom: "140px",
          right: "104px",
          zIndex: "1",
          transform: "rotate(135deg)",
        }
      : size.width <= 1024
      ? {
          // Tablet styles
          width: "175px",
          height: "175px",
          top: "39px",
          left: "-20px",
          zIndex: "-999",
          transform: "rotate(70deg)",
        }
      : {
          // Desktop styles
          width: "108px",
          height: "108px",
          top: "-63px",
          left: "-58px",
          right: "inherit",
          zIndex: "-999",
          transform: "rotate(-70deg)",
        };

  const gradientOverlayStyles1 =
    size.width <= 640
      ? {
          // Mobile styles
          width: "80px",
          height: "80px",
          bottom: "-2px",
          zIndex: "999",
          transform: "rotate(-9deg)",
        }
      : size.width <= 1024
      ? {
          // Tablet styles
          width: "108px",
          height: "108px",
          bottom: "-10px",
          left: "-5px",
          zIndex: "1",
          // transform: "rotate(-70deg)",
        }
      : {
          // Desktop styles
          width: "155px",
          height: "155px",
          bottom: 0,
          left: "0px",
          transform: "rotate(-70deg)",
        };

  return (
    <div className="container flex items-center gap-0 px-0 xl:px-[10px] relative flex-col-reverse lg:flex-row pl-0 xl:pl-3 pr-[0px] xl:pr-2 pt-4 lg:pt-12">
      <div
        ref={freeTrialSectionRef}
        className="w-full lg:max-w-[465px] pl-[32px] md:pl-[57px] xl:pl-0 pr-[32px]  xl:pr-0 md:pr-[57px] mt-[40px] sm:mt-[81px] lg:mt-[104px]"
      >
        <div className=" w-[80%] lg:w-full lg:relative">
          <>
            <h1 className="text-[40px] leading-[48px] font-bold lg:text-banner text-paleBlue font-inter max-w-full lg:max-w-[100%] w-full">
              Create decks at lightning speed
            </h1>
            <p className="mt-6 xl:mt-[48px] lg:text-[18px] pr-0 md:pr-[100px] lg:pr-[16%] text-bodyColor text-heading font-inter text-[14px]">
              Drive impact and dramatically improve quality and speed using
              DeckUp
            </p>
          </>
          <GradientOverlay
            width={gradientOverlayStyles.width}
            height={gradientOverlayStyles.height}
            gradient="linear-gradient(to bottom, rgba(100,172,205,.5), rgba(100,172,205,0))"
            top={gradientOverlayStyles.top}
            left={gradientOverlayStyles.left}
            right={gradientOverlayStyles.right}
            zIndex={gradientOverlayStyles.zIndex}
            transform={gradientOverlayStyles.transform}
          />
        </div>
        <div className="w-[90%] sm:w-[100%] max-sm:max-w[124px] max-sm:block hidden">
          <CommonButton
            type="submit"
            className={
              "w-full font-medium text-white bg-primary shadow-sm rounded-[20px] max-w-[124px] mt-[32px] font-inter max-sm:p-2"
            }
            text={"Watch Demo"}
          />
        </div>
        <div className="mt-8 xl:mt-[70px] w-[90%] sm:w-[100%] max-sm:hidden">
          <p className="text-[12px] font-bold text-primary font-inter">
            START 30 DAY FREE TRIAL
          </p>
          <form
            action="#"
            method="POST"
            className="mt-[8px] gap-[8px] sm:flex"
            onSubmit={handleFormSubmit}
          >
            <CommonInput
              inputRef={emailInputRef}
              type={"email"}
              name="email"
              id="email"
              className={`w-[47.2%] xl:w-full py-3 text-[14px] placeholder-gray-500 shadow-sm rounded-[8px] bg-[#ECF1F6] border border-lightGray font-inter`}
              placeholder={"example@xyz.com"}
              value={userEmail}
              onChange={handleEmailChange}
              freeTrialInputFocus={freeTrialInputFocus}
              setFreeTrialInputFocus={setFreeTrialInputFocus}
            />

            <CommonButton
              type="submit"
              className={
                "w-full text-sm xl:text-base font-medium text-white bg-primary shadow-sm rounded-[20px] max-w-[123px] mt-[0px] font-inter"
              }
              text={isLoading ? "Loading..." : "Start now"}
              disabled={isLoading}
            />
          </form>
        </div>
      </div>
      <div className="relative flex justify-end xl:block w-[90%] md:w-[77%] ml-auto lg:ml-0 xl:max-w-[887.6px] lg:mr-[-148px] xl:mr-[-195px] lg:max-h-[568px]">
        {/* <CommonImage
          src="/images/left-logo.svg"
          alt={"Person working on a computer surrounded by charts and graphs"}
          className="w-full"
        /> */}
        <CommonVideo
          url={videos?.hero}
          gradientOverlayStyles1={gradientOverlayStyles1}
          className="w-[79.9%] h-[377px] xl:h-full mx-0 xl:mx-auto"
        />

        {/* <GradientOverlay
          width={gradientOverlayStyles1.width}
          height={gradientOverlayStyles1.height}
          gradient="linear-gradient(to right, rgba(255,114,95,0), rgba(255,114,95,1))"
          bottom={gradientOverlayStyles1.bottom}
          left={gradientOverlayStyles1.left}
          zIndex={gradientOverlayStyles1.zIndex}
          transform={gradientOverlayStyles1.transform}
          /> */}
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
      />
    </div>
  );
}
