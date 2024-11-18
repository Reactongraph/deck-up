import GradientOverlay from "./GradientOverlay";
import useCustomWindowSize from "../../Hooks/useCustomWindowSize";

export default function CommonLoginLayout({ form, className = "" }) {
  const size = useCustomWindowSize(); // Get screen size

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
        {/* <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          closeOnClick
          pauseOnHover
        /> */}
        <div className="flex flex-col-reverse lg:flex-row container lg:pt-[48px] lg:pb-[48px] sm:pt-[72px] sm:pb-[24px] relative z-[100]">
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
          <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 order-2 lg:order-1">
            <div
              className={`${className} max-w-[536px] bg-white w-full rounded-xl shadow-xl pt-[32px] pr-[24px] pb-[186px] pl-[24px] sm:pr-[80px] sm:pl-[80px]`}
            >
              {form}
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
