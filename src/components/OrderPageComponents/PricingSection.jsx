import CommonButton from "../common/CommonButton";

export default function PricingSection() {
  return (
    <div className="relative pt-[40px] pb-[50px] bg-gradient-to-t from-[#ECF1F6] to-[rgba(236,241,246,0)]">
      <div className="container mx-auto px-4">
        <div className="max-w-[500px]">
          <h2 className="text-[32px] md:text-[45px] lg:text-[55px] text-paleBlue font-extrabold leading-tight">
            Pick up your best plan and pricing
          </h2>
          <p className="mt-[16px] md:mt-[24px] text-body text-bodyColor mb-[40px] md:mb-[68px] text-[16px] md:text-[18px]">
            Whether you are a single user, a small team, or an enterprise, we
            have just the right package for you.
          </p>
          <p className="text-[#5C6E81] mb-[16px] md:mb-[24px] text-[14px] md:text-[16px]">
            Price in $ USD
          </p>
        </div>

        {/* Grid Layout for Pricing Plans */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[16px] md:gap-[24px]">
          {/* Free trial */}
          <div className="relative bg-white rounded-[10px] min-h-[400px] md:min-h-[482px] shadow-[0_0px_16px_0px_rgba(210,216,231,0.5)] px-[16px] md:px-[20px] py-[16px] md:py-[20px] flex justify-between flex-col">
            <div className="flex flex-col">
              <h3 className="text-[20px] md:text-[24px] font-semibold text-paleBlue">
                Free trial
              </h3>
              <p className="text-primary mb-[20px] md:mb-[30px] text-[16px] md:text-[18px]">
                for 30 days
              </p>
              <div className="text-[40px] md:text-[55px] font-bold text-paleBlue">
                $0{" "}
                <span className="text-[16px] md:text-[18px] text-[#576676] font-normal">
                  per user
                </span>
              </div>
              <p className="text-bodyColor text-[16px] md:text-[18px] mt-[24px] md:mt-[41px]">
                *no billing
              </p>
            </div>
            <CommonButton
              variant="outline"
              className="w-full bg-primary text-[#fff] border border-primary font-semibold rounded-[100px] h-[48px]"
              text={"Create account"}
            />
          </div>

          {/* Single user */}
          <div className="relative bg-white rounded-[10px] min-h-[400px] md:min-h-[482px] shadow-[0_0px_16px_0px_rgba(210,216,231,0.5)] px-[16px] md:px-[20px] py-[16px] md:py-[20px] flex justify-between flex-col">
            <div className="flex flex-col">
              <h3 className="text-[20px] md:text-[24px] font-semibold text-paleBlue">
                Single user
              </h3>
              <p className="text-primary mb-[20px] md:mb-[30px] text-[16px] md:text-[18px]">
                Only 1 user
              </p>
              <div className="text-[40px] md:text-[55px] font-bold text-paleBlue">
                $99{" "}
                <span className="text-[16px] md:text-[18px] text-[#576676] font-normal">
                  per user
                </span>
              </div>
              <p className="text-bodyColor text-[16px] md:text-[18px] mt-[24px] md:mt-[41px]">
                *billed annually
              </p>
            </div>
            <CommonButton
              variant="outline"
              className="w-full bg-[#fff] border border-primary text-primary font-semibold rounded-[100px] h-[48px]"
              text={"Get started"}
            />
          </div>

          {/* Multiuser */}
          <div className="relative bg-white rounded-[10px] min-h-[400px] md:min-h-[482px] shadow-[0_0px_16px_0px_rgba(210,216,231,0.5)] px-[16px] md:px-[20px] py-[16px] md:py-[20px] flex justify-between flex-col">
            <div className="flex flex-col">
              <h3 className="text-[20px] md:text-[24px] font-semibold text-paleBlue">
                Multiuser
              </h3>
              <p className="text-primary mb-[20px] md:mb-[30px] text-[16px] md:text-[18px]">
                Upto 20 users
              </p>
              <div className="text-[40px] md:text-[55px] font-bold text-paleBlue">
                $89{" "}
                <span className="text-[16px] md:text-[18px] text-[#576676] font-normal">
                  per user
                </span>
              </div>
              <p className="text-bodyColor text-[16px] md:text-[18px] mt-[24px] md:mt-[41px]">
                *billed annually
              </p>
            </div>
            <CommonButton
              variant="outline"
              className="w-full bg-[#fff] border border-primary text-primary font-semibold rounded-[100px] h-[48px]"
              text={"Get started"}
            />
          </div>

          {/* Enterprise plan */}
          <div className="relative bg-white rounded-[10px] min-h-[400px] md:min-h-[482px] shadow-[0_0px_16px_0px_rgba(210,216,231,0.5)] px-[16px] md:px-[20px] py-[16px] md:py-[20px] flex justify-between flex-col">
            <div className="flex flex-col">
              <h3 className="text-[20px] md:text-[24px] font-semibold text-paleBlue">
                Enterprise plan
              </h3>
              <p className="text-primary mb-[20px] md:mb-[30px] text-[16px] md:text-[18px]">
                Teams of 50+ users
              </p>
              <div className="text-[40px] md:text-[55px] font-bold text-paleBlue">
                50+{" "}
                <span className="text-[16px] md:text-[18px] text-[#576676] font-normal">
                  user
                </span>
              </div>
              <p className="text-bodyColor text-[16px] md:text-[18px] mt-[24px] md:mt-[41px]">
                corporate requirements
              </p>
            </div>
            <CommonButton
              variant="outline"
              className="w-full bg-[#fff] border border-primary text-primary font-semibold rounded-[100px] h-[48px]"
              text={"Contact us"}
            />
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="hidden md:block absolute top-1/2 right-0 w-32 h-32 bg-gradient-to-br from-red-300 to-red-400 rounded-full opacity-50"></div>
    </div>
  );
}
