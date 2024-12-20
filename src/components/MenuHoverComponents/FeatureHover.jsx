import GradientOverlay from "../common/GradientOverlay";
export default function FeatureHover({
  onClick = () => {},
  setActiveDropdown,
}) {
  const handleNavigate = () => {
    onClick();
    setActiveDropdown(false);
  };
  return (
    <div className=" w-full flex flex-col  rounded-lg shadow-md md:flex-row justify-center bg-white items-stretch gap-4 px-[246px] py-[108px] relative">
      <GradientOverlay
        width="300px"
        height="300px"
        gradient="linear-gradient(to bottom, rgba(100,172,205,.5), rgba(100,172,205,0))"
        left="0"
        bottom="0"
        transform="rotate(247deg)"
      />
      <div className="max-w-[270px] w-full mx-auto p-6 flex flex-col justify-between">
        <h2 className="text-paleBlue text-subhead mb-4 text-gray-800 font-inter">
          Pricing & Plans
        </h2>
        <ul className="space-y-2">
          <li
            className="text-body text-paleBlue cursor-pointer font-inter"
            onClick={() => handleNavigate()}
          >
            Individual
          </li>
          <hr className="text-[#64A4C0]" />
          <li
            className="text-body text-paleBlue cursor-pointer font-inter"
            onClick={() => handleNavigate()}
          >
            Small teams
          </li>
          <hr className="text-[#64A4C0]" />

          <li
            className="text-body text-paleBlue cursor-pointer font-inter"
            onClick={() => handleNavigate()}
          >
            Enterprise
          </li>
        </ul>
      </div>
      <div class="border-l-2 border-smallBlue mx-5"></div>
      <div className="max-w-[270px] w-full mx-auto p-6">
        <h2 className="text-paleBlue text-subhead  mb-4 text-gray-800 font-inter">
          Subscription Management
        </h2>
        <ul className="space-y-2">
          <li
            className="text-body text-paleBlue cursor-pointer font-inter"
            onClick={() => handleNavigate()}
          >
            Manage users
          </li>
          <hr className="text-[#64A4C0]" />

          <li
            className="text-body text-paleBlue cursor-pointer font-inter"
            onClick={() => handleNavigate()}
          >
            Buy New licences
          </li>
          <hr className="text-[#64A4C0]" />

          <li
            className="text-body text-paleBlue cursor-pointer font-inter"
            onClick={() => handleNavigate()}
          >
            Renew licence
          </li>
        </ul>
      </div>
      <div class="border-l-2 border-smallBlue mx-5"></div>
      <div className="flex-1 bg-gradient-to-b from-slate-50 to-cyan-100 rounded-lg w-full flex flex-col items-start justify-center max-w-[270px] mx-auto p-6">
        <h2 className="text-subhead text-left text-paleBlue mb-1">FAQs</h2>
        <p className="text-body text-paleBlue font-inter">
          Here's where you will find answers to those frequently asked questions
        </p>
      </div>
    </div>
  );
}
