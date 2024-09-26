import CommonButton from "../common/CommonButton";

export default function PricingSection() {
  return (
    <div className="relative  pt-[80px] pb-[120px] bg-gradient-to-t from-[#ECF1F6] to-[rgba(236,241,246,0)]">
      <div className="container">
        <div className="max-w-[500px]">
        <h2 className="text-[55px] text-paleBlue font-extrabold">
          Pick up your best plan and pricing
        </h2>
        <p className="mt-[24px] text-body text-bodyColor mb-[68px]">
          Whether you are a single user, a small team, or an enterprise, we have
          just the right package for you.
        </p>
        <p className="text-[#5C6E81] mb-[24px]">Price in $ USD</p>
        </div>

        <div className="grid grid-cols-4 gap-[24px]">
          {/* Free trial */}
          <div class="relative bg-white rounded-[10px] min-h-[482px] shadow-[0_0px_16px_0px_rgba(210,216,231,0.5)] px-[20px] py-[20px] flex justify-between flex-col">
           <div className="flex flex-col">
           <h3 className="text-[24px] font-semibold text-paleBlue">Free trial</h3>
            <p className="text-primary mb-[30px] text-[18px]">for 30 days</p>
            <div className="text-[55px] font-bold text-paleBlue">
              $0 <span className="text-[18px] text-[#576676] font-normal">per user</span>
            </div>
            <p className="text-bodyColor text-[18px] mt-[41px]">*no billing</p>
            </div>


            <CommonButton
              variant="outline"
              className="w-full bg-primary text-[#fff] border border-primary  font-semibold rounded-[100px] h-[48px]"
              text={"Create account"}
            />
          </div>
        

          

          {/* Single user */}
          <div class="relative bg-white rounded-[10px] min-h-[482px] shadow-[0_0px_16px_0px_rgba(210,216,231,0.5)] px-[20px] py-[20px] flex justify-between flex-col">
           <div className="flex flex-col">
           <h3 className="text-[24px] font-semibold text-paleBlue">Single user</h3>
            <p className="text-primary mb-[30px] text-[18px]">Only 1 user</p>
            <div className="text-[55px] font-bold text-paleBlue">
              $99 <span className="text-[18px] text-[#576676] font-normal">per user</span>
            </div>
            <p className="text-bodyColor text-[18px] mt-[41px]">*billed annually</p>
            </div>


            <CommonButton
              variant="outline"
              className="w-full bg-[#fff] border border-primary  text-primary font-semibold rounded-[100px] h-[48px]"
              text={"Get started"}
            />
          </div>

          {/* Multiuser */}

          <div class="relative bg-white rounded-[10px] min-h-[482px] shadow-[0_0px_16px_0px_rgba(210,216,231,0.5)] px-[20px] py-[20px] flex justify-between flex-col">
           <div className="flex flex-col">
           <h3 className="text-[24px] font-semibold text-paleBlue">Multiuser</h3>
            <p className="text-primary mb-[30px] text-[18px]">Upto 20 users</p>
            <div className="text-[55px] font-bold text-paleBlue">
              $89 <span className="text-[18px] text-[#576676] font-normal">per user</span>
            </div>
            <p className="text-bodyColor text-[18px] mt-[41px]">*billed annually</p>
            </div>


            <CommonButton
              variant="outline"
              className="w-full bg-[#fff] border border-primary  text-primary font-semibold rounded-[100px] h-[48px]"
              text={"Get started"}
            />
          </div>

          <div class="relative bg-white rounded-[10px] min-h-[482px] shadow-[0_0px_16px_0px_rgba(210,216,231,0.5)] px-[20px] py-[20px] flex justify-between flex-col">
           <div className="flex flex-col">
           <h3 className="text-[24px] font-semibold text-paleBlue">Enterprise plan</h3>
            <p className="text-primary mb-[30px] text-[18px]">Teams of 50+ users</p>
            <div className="text-[55px] font-bold text-paleBlue">
              50+ <span className="text-[18px] text-[#576676] font-normal">user</span>
            </div>
            <p className="text-bodyColor text-[18px] mt-[41px]">corporate requirements</p>
            </div>


            <CommonButton
              variant="outline"
              className="w-full bg-[#fff] border border-primary  text-primary font-semibold rounded-[100px] h-[48px]"
              text={"Contact us"}
            />
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="hidden md:block absolute top-1/2 right-0 w-32 h-32 bg-gradient-to-br from-red-300 to-red-400 rounded-full opacity-50"></div>
      {/* <div className="hidden md:block absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-300 to-blue-400 rounded-full opacity-50"></div> */}
    </div>
  );
}
