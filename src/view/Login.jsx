import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CommonButton from "../components/common/CommonButton";
import CommonInput from "../components/common/CommonInput";
import GradientOverlay from "../components/common/GradientOverlay";
import useCustomWindowSize from "../Hooks/useCustomWindowSize";
import { useDispatch, useSelector } from "react-redux";
import {
  useLoginWithGoogleMutation,
  useRegisterUserMutation,
} from "../store/auth/authApiSlice";
import { setEmail } from "../store/auth/authSlice";
import { GoogleAuthProvider, signInWithPopup } from "@firebase/auth";
import { auth } from "../firebaseConfig";
import { toast, ToastContainer } from "react-toastify";
// import Footer from "../components/Foorter";
// import Header from "../components/Header";

export default function LoginPage() {
  const size = useCustomWindowSize(); // Get screen size

  const [loginAPi, { data, isLoading }] = useRegisterUserMutation();
  const [googleLoginPostApi] = useLoginWithGoogleMutation();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  let email = useSelector((state) => state.auth.email);

  const handleEmailChange = (event) => {
    const email = event.target.value;
    dispatch(setEmail(email));
  };

  useEffect(() => {
    if (!isLoading && data?.message === "OTP sent to your email please check") {
      const storedEmail = localStorage.getItem("email");
      if (storedEmail) {
        dispatch(setEmail(storedEmail));
      }
      dispatch(setEmail(email));
      setTimeout(() => {
        localStorage.setItem("loginSource", "login");
        navigate("/verify-mail");
      }, 3000);
    }
  }, [data, isLoading, dispatch, email, navigate]);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    loginAPi(email);
    localStorage.setItem("email", email);
  };

  const handleGoogleLogin = () => {
    email = "";
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(async (result) => {
        const tokenResponse = result._tokenResponse;

        localStorage.setItem("email", tokenResponse.email);
        localStorage.setItem("idToken", tokenResponse.idToken);

        try {
          const responseData = await googleLoginPostApi(
            tokenResponse.email,
            tokenResponse.localId
          );
          if (responseData.data.message === "Email verified") {
            localStorage.removeItem("idToken");
            localStorage.setItem(
              "accessToken",
              responseData.data.tokens.accessToken
            );
            localStorage.setItem(
              "refreshToken",
              responseData.data.tokens.refreshToken
            );
            toast.success("Google login successfully");

            setTimeout(() => {
              localStorage.setItem("loginSource", "login");
              navigate("/setup");
            }, 3000);
          }
        } catch (error) {
          console.log("error: ", error);
          toast.error(error?.response?.data?.error);
        }
      })
      .catch((error) => {
        console.error("Google Login Error:", error);
      });
  };

  // Define responsive values for GradientOverlay based on screen width

  const gradientOverlayStyles =
    size.width <= 640
      ? {
          // Mobile styles
          width: "80px",
          height: "80px",
          top: "57px",
          right: "18px",
          zIndex: "-999",
          transform: "rotate(90deg)",
        }
      : size.width <= 1024
      ? {
          // Tablet styles
          width: "108px",
          height: "108px",
          top: "39px",
          left: "-60px",
          zIndex: "-999",
          transform: "rotate(-70deg)",
        }
      : {
          // Desktop styles
          width: "300px",
          height: "300px",
          top: "-44px",
          left: "-152px",
          right: "inherit",
          zIndex: "-99",
          transform: "rotate(188deg)",
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
          bottom: "39px",
          left: "-60px",
          zIndex: "-999",
          transform: "rotate(-70deg)",
        }
      : {
          // Desktop styles
          width: "485px",
          height: "485px",
          top: "inherit",
          right: "-206px",
          bottom: 0,
          left: "inherit",
          transform: "rotate(158deg)",
        };
  return (
    <>
      {/* <Header /> */}
      <div className="bg-lightBlue min-h-[100%] flex flex-col">
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          closeOnClick
          pauseOnHover
        />
        <div className="flex flex-col-reverse lg:flex-row container lg:pt-[48px] lg:pb-[48px] xl:pt-[48px] pt-[55.5px] sm:pt-[72px] sm:pb-[24px] relative z-[100]">
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
          {/* Left section for the login form */}
          <div className="flex-1 flex items-center justify-center px-8 sm:px-6 lg:px-[23px] order-2 lg:order-1">
            <div className="max-w-[536px] bg-white w-full rounded-xl shadow-xl pt-[32.5px] pr-[32px] pb-[31.6px] sm:pb-[186px] pl-[32px] sm:pr-[80px] sm:pl-[80px]">
              <div className="flex justify-between items-center">
                <h2 className="text-[16px] md:text-subhead text-paleBlue font-inter">
                  Login
                </h2>
                <p className="mt-2 text-sm text-gray-600">
                  <a
                    href="/"
                    className="font-normal text-[10px] md:text-[12px] text-darklue hover:text-indigo-500 underline underline-offset-4 text-darkBlue font-inter"
                  >
                    Create account
                  </a>
                </p>
              </div>

              <form
                className="mt-[42px] md:mt-8 space-y-4 lg:space-y-6"
                action="/"
                method="POST"
                onSubmit={handleFormSubmit}
              >
                <div className="rounded-md shadow-sm -space-y-px">
                  <div>
                    <p className="text-bodyColor text-[12px] md:text-[14px] mb-2 font-inter">
                      Enter your email ID{" "}
                      <span className="text-[9px] md:text-[12px]">
                        (OTP will be sent to entered email)
                      </span>
                    </p>
                    <CommonInput
                      id="email-address"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="text-bodyColor text-[9px] md:text-[14px] appearance-none rounded-lg relative block w-full px-[11px] md:px-3 py-[9px] md:py-3 border border-lightGray placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-lightBlue font-inter"
                      placeholder="Enter your email ID"
                      value={email}
                      onChange={handleEmailChange}
                    />
                  </div>
                </div>

                <div>
                  <CommonButton
                    type="submit"
                    className="font-inter group relative w-full flex justify-center py-[6px] md:py-3 px-4 border border-transparent text-sm font-medium rounded-[20px] text-white text-[14px] bg-primary hover:bg-red-500"
                    text={isLoading ? "Loading..." : "Submit"}
                    disabled={isLoading}
                  />
                </div>

                <div className="mt-6">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-lightGray" />
                    </div>
                    <div className="relative flex justify-center text-[11px] md:text-sm">
                      <span className="py-4 h-12 md:h-[80px] text-head bg-white text-lightGray font-inter flex items-center md:block">
                        OR
                      </span>
                    </div>
                  </div>

                  <div className="mt-0 md:mt-6">
                    <button
                      onClick={handleGoogleLogin}
                      type="button"
                      className="font-inter text-[9px] md:text-[14px] font-normal w-full bg-transparent text-bodyColor  border border-lightGray rounded-[50px] flex justify-center items-center p-2 py-[6px] md:py-3"
                    >
                      <span className="sr-only font-inter">
                        Sign in with Google
                      </span>
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

              <p className="mt-[11px] md:mt-2 text-[8px] md:text-[14px] text-bodyColor text-center pt-0 md:pt-2 font-normal font-inter">
                By signing up, you agree to the{" "}
                <a
                  href="/"
                  className="font-medium text-bodyColor underline underline-offset-2 font-inter"
                >
                  Terms and Conditions
                </a>{" "}
                <br />
                <p className="mt-2 text-[8px] md:text-xs text-gray-500 text-center font-inter">
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
          <GradientOverlay
            width={gradientOverlayStyles1.width}
            height={gradientOverlayStyles1.height}
            gradient="linear-gradient(to bottom, rgba(100,172,205,.5), rgba(100,172,205,0))"
            top={gradientOverlayStyles1.top}
            bottom={gradientOverlayStyles1.bottom}
            left={gradientOverlayStyles1.left}
            right={gradientOverlayStyles1.right}
            zIndex={gradientOverlayStyles1.zIndex}
            transform={gradientOverlayStyles1.transform}
          />
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}
