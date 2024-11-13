import CommonButton from "../common/CommonButton";
import { orderData } from "../../utils/data";
import GradientOverlay from "../common/GradientOverlay";
import useCustomWindowSize from "../../Hooks/useCustomWindowSize";
import { useNavigate } from "react-router-dom";

export default function PricingSection() {
  const size = useCustomWindowSize();
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/create-account");
  };

  const gradientOverlayStyles =
    size.width <= 640
      ? {
          // Mobile styles
          width: "70px",
          height: "70px",
          gradient: "linear-gradient(to right, #fee2e2, #fecaca, #f87171)",
          top: "-41px",
          right: "2px",
          zIndex: "-999",
        }
      : size.width <= 1024
      ? {
          width: "70px",
          height: "70px",
          gradient: "linear-gradient(to right, #fee2e2, #fecaca, #f87171)",
          top: "-41px",
          right: "2px",
          zIndex: "-999",
        }
      : {
          width: "116px",
          height: "116px",
          gradient: "linear-gradient(to right, #fee2e2, #fecaca, #f87171)",
          top: "43px",
          right: "-89px",
          zIndex: "-999",
        };

  const gradientOverlayStyles1 =
    size.width <= 640
      ? {
          // Mobile styles
          width: "51px",
          height: "51px",
          gradient:
            "linear-gradient(to bottom, rgba(100,172,205,.5), rgba(100,172,205,0))",
          bottom: "-55px",
          top: "inherit",
          right: "inherit",
          left: "0",
          zIndex: "-999",
        }
      : size.width <= 1024
      ? {
          width: "51px",
          height: "51px",
          gradient:
            "linear-gradient(to bottom, rgba(100,172,205,.5), rgba(100,172,205,0))",
          bottom: "-30px",
          top: "inherit",
          right: "inherit",
          left: "0",
          zIndex: "-999",
        }
      : {
          width: "116px",
          height: "116px",
          gradient:
            "linear-gradient(to bottom, rgba(100,172,205,.5), rgba(100,172,205,0))",
          top: "inherit",
          right: "inherit",
          zIndex: "-999",
          left: "-78px",
          bottom: "-43px",
        };
  return (
    <div className="relative pt-[40px] pb-[50px] bg-gradient-to-t from-[#ECF1F6] to-[rgba(236,241,246,0)]">
      <div className="container mx-auto px-4">
        <div className="max-w-[500px]">
          <h2 className="text-[32px] md:text-[45px]  text-paleBlue font-extrabold leading-tight font-inter max-sm:text-[40px]">
            Pick up your
          </h2>
          <h2 className="text-[32px] md:text-[45px]  text-paleBlue font-extrabold leading-tight font-inter max-sm:text-[40px]">
            best plan and pricing
          </h2>
          <p className="mt-[16px] md:mt-[24px] text-body text-bodyColor mb-[40px] md:mb-[68px] text-[16px] md:text-[18px] font-inter max-sm:text-[14px]">
            Whether you are a single user, a small team, or an enterprise, we
            have just the right package for you.
          </p>
          <p className="text-[#5C6E81] mb-[16px] md:mb-[24px] text-[14px] md:text-[16px] font-inter">
            Price in $ USD
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-[9999]">
          <GradientOverlay
            width={gradientOverlayStyles.width}
            height={gradientOverlayStyles.height}
            gradient={gradientOverlayStyles.gradient}
            top={gradientOverlayStyles.top}
            right={gradientOverlayStyles.right}
            zIndex={gradientOverlayStyles.zIndex}
          />
          {orderData.map((plan, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-10 flex flex-col justify-between lg:h-[467px] md:h-[340px]"
            >
              <div>
                <h3 className="text-2xl font-semibold text-[#2B3674] mb-2 font-inter max-sm:text-[24px]">
                  {plan.title}
                </h3>
                <p className="text-[#FF7F5C] mb-6 font-inter max-sm:text-[14px]">
                  {plan.subtitle}
                </p>
                <div className="text-4xl md:text-5xl font-bold text-[#2B3674] mb-2 font-inter max-sm:text-[48px]">
                  {plan.price}{" "}
                  <span className="text-base font-normal text-[#5C6E81] font-inter">
                    {plan.period}
                  </span>
                </div>
                <p className="pt-10 text-[#5C6E81] font-inter">
                  {plan.description}
                </p>
              </div>
              <CommonButton
                className={`w-full mt-8 border ${
                  plan.buttonVariant === "default"
                    ? "bg-[#FF7F5C] hover:bg-[#FF7F5C]/90 text-[#fff]"
                    : "border-[#FF7F5C] text-[#FF7F5C] hover:bg-[#FF7F5C] hover:text-white font-inter"
                }`}
                variant="outline"
                text={plan.buttonText}
                onClick={handleGetStarted}
              />
            </div>
          ))}
          <GradientOverlay
            width={gradientOverlayStyles1.width}
            height={gradientOverlayStyles1.height}
            gradient={gradientOverlayStyles1.gradient}
            top={gradientOverlayStyles1.top}
            right={gradientOverlayStyles1.right}
            bottom={gradientOverlayStyles1.bottom}
            left={gradientOverlayStyles1.left}
            zIndex={gradientOverlayStyles1.zIndex}
          />
        </div>
      </div>

      {/* {/ Decorative elements /} */}
      {/* {/ <div className="hidden md:block absolute top-1/2 right-0 w-32 h-32 bg-gradient-to-br from-red-300 to-red-400 rounded-full opacity-50"></div> /} */}
    </div>
  );
}
