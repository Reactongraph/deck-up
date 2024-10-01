import GradientOverlay from "../common/GradientOverlay";
export default function FeatureHover() {
  return (
    <div className="flex flex-col  rounded-lg shadow-md md:flex-row justify-center bg-white items-stretch gap-4 p-4 relative">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-[100px] py-[50px] relative z-10">
        <div className="border-r-paleBlue border-r border-paleBlue pr-3">
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
        <div className="border-r-paleBlue border-r border-paleBlue pr-3">
          <h2 className="text-paleBlue text-subhead  mb-4 text-gray-800">
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
        <div className="bg-blue-50 p-4 rounded-lg">
          <h2 className="text-paleBlue text-subhead mb-4 text-gray-800">
            FAQs
          </h2>
          <p className="text-body text-paleBlue">
            Here's where you will find answers to those frequently asked
            questions
          </p>
        </div>
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
