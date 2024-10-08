import GradientOverlay from "../common/GradientOverlay";
export default function FeatureHover() {
  return (
    <div className=" w-full flex flex-col  rounded-lg shadow-md md:flex-row justify-center bg-white items-stretch gap-4 p-4 relative">
      <div className="max-w-[270px] mx-auto p-6">
        <h2 className="text-paleBlue text-subhead mb-4 text-gray-800 ">
          Pricing & Plans
        </h2>
        <ul className="space-y-2">
          <li className="text-body text-paleBlue">Individual</li>
          <hr className="text-[#64A4C0]" />
          <li className="text-body text-paleBlue">Small teams</li>
          <hr className="text-[#64A4C0]" />

          <li className="text-body text-paleBlue">Enterprise</li>
        </ul>
      </div>
      <div class="border-l-2 border-smallBlue mx-5"></div>
      <div className="max-w-[270px] mx-auto p-6">
        <h2 className="text-paleBlue text-subhead  mb-4 text-gray-800 whitespace-nowrap">
          Subscription Management
        </h2>
        <ul className="space-y-2">
          <li className="text-body text-paleBlue">Manage users</li>
          <hr className="text-[#64A4C0]" />

          <li className="text-body text-paleBlue">Buy New licences</li>
          <hr className="text-[#64A4C0]" />

          <li className="text-body text-paleBlue">Renew licence</li>
        </ul>
      </div>
      <div class="border-l-2 border-smallBlue mx-5"></div>
      <div className="flex-1 bg-gradient-to-b from-slate-50 to-cyan-100 rounded-lg p-6 flex flex-col items-center justify-center max-w-[270px] mx-auto p-6">
        <h2 className="text-subhead text-left text-paleBlue mb-1">FAQs</h2>
        <p className="text-body text-paleBlue">
          Here's where you will find answers to those frequently asked questions
        </p>
      </div>
      <GradientOverlay
        width="150px"
        height="150px"
        gradient="linear-gradient(to bottom right, rgba(100, 172, 205, 0.1), rgba(100, 172, 205, 0))"
        bottom="0"
        left="0"
      />
    </div>
  );
}
