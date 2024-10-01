import CommonButton from "../common/CommonButton";
import { orderData } from "../../utils/data";
import GradientOverlay from "../common/GradientOverlay";
export default function PricingSection() {
  return (
    <div className="relative pt-[40px] pb-[50px] bg-gradient-to-t from-[#ECF1F6] to-[rgba(236,241,246,0)]">
      <div className="container mx-auto px-4">
        <div className="max-w-[500px]">
          <h2 className="text-[32px] md:text-[45px]  text-paleBlue font-extrabold leading-tight">
            Pick up your
          </h2>
          <h2 className="text-[32px] md:text-[45px]  text-paleBlue font-extrabold leading-tight">
            best plan and pricing
          </h2>
          <p className="mt-[16px] md:mt-[24px] text-body text-bodyColor mb-[40px] md:mb-[68px] text-[16px] md:text-[18px]">
            Whether you are a single user, a small team, or an enterprise, we
            have just the right package for you.
          </p>
          <p className="text-[#5C6E81] mb-[16px] md:mb-[24px] text-[14px] md:text-[16px]">
            Price in $ USD
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-[999]">
          <GradientOverlay
            width="106px"
            height="106px"
            gradient="linear-gradient(to right, #fee2e2, #fecaca, #f87171)"
            top="43px"
            right="-74px"
            zIndex="-999"
          />
          {orderData.map((plan, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-10 flex flex-col justify-between lg:h-[467px] md:h-[340px]"
            >
              <div>
                <h3 className="text-2xl font-semibold text-[#2B3674] mb-2">
                  {plan.title}
                </h3>
                <p className="text-[#FF7F5C] mb-6">{plan.subtitle}</p>
                <div className="text-4xl md:text-5xl font-bold text-[#2B3674] mb-2">
                  {plan.price}{" "}
                  <span className="text-base font-normal text-[#5C6E81]">
                    {plan.period}
                  </span>
                </div>
                <p className="pt-10 text-[#5C6E81]">{plan.description}</p>
              </div>
              <CommonButton
                className={`w-full mt-8 ${
                  plan.buttonVariant === "default"
                    ? "bg-[#FF7F5C] hover:bg-[#FF7F5C]/90 text-[#fff]"
                    : "border-[#FF7F5C] text-[#FF7F5C] hover:bg-[#FF7F5C] hover:text-white"
                }`}
                variant="outline"
                text={plan.buttonText}
              />
            </div>
          ))}
          <GradientOverlay
            width="108px"
            height="108px"
            gradient="linear-gradient(to bottom, #bfdbfe, #e0f2fe, #dbeafe)"
            bottom="-32px"
            left="-55px"
            zIndex="-999"
          />
        </div>
      </div>

      {/* {/ Decorative elements /} */}
      {/* {/ <div className="hidden md:block absolute top-1/2 right-0 w-32 h-32 bg-gradient-to-br from-red-300 to-red-400 rounded-full opacity-50"></div> /} */}
    </div>
  );
}
