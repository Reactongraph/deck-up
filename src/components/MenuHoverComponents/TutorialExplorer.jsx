import GradientOverlay from "../common/GradientOverlay";

export default function TutorialExplorer({
  onClick = () => {},
  setActiveDropdown,
}) {
  const leftColumnItems = [
    "Slide Elements",
    "Identical Select",
    "Quick Tool",
    "Insert",
    "Links",
    "Symbols",
    "Table",
  ];
  const middleColumnItems = [
    "Organise",
    "Icons",
    "Maps",
    "Flag",
    "Infographics",
    "Layout",
    "Agendas",
  ];

  const handleNavigate = () => {
    onClick();
    setActiveDropdown(false);
  };

  return (
    <div className="realtive flex flex-col md:flex-row  rounded-lg shadow-md bg-white justify-center items-stretch gap-4 p-4">
      {/* <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200"> */}
      <GradientOverlay
        width="300px"
        height="300px"
        gradient="linear-gradient(to bottom, rgba(100,172,205,.5), rgba(100,172,205,0))"
        left="0"
        bottom="0"
        transform="rotate(247deg)"
      />
      <div className="p-2 max-w-[270px] w-full">
        <h2 className="text-subhead text-paleBlue mb-2 font-inter">
          Explore Tutorials
        </h2>
        <ul className="min-w-[270px]">
          {leftColumnItems.map((item, index) => (
            <>
              <li
                key={index}
                className="flex items-center gap-[20px] cursor-pointer"
                onClick={() => handleNavigate()}
              >
                <img
                  src="/images/play.svg"
                  className="h-[24px] w-[24px]"
                  alt="play"
                />
                <p className="text-head text-paleBlue font-inter">{item}</p>
              </li>
              <hr className="text-[#64A4C0]" />
            </>
          ))}
        </ul>
      </div>
      <div class="border-l-2 border-smallBlue mx-5"></div>
      <div className="p-2 max-w-[270px] w-full">
        <ul className="min-w-[270px] mt-10">
          {middleColumnItems.map((item, index) => (
            <>
              <li
                key={index}
                className="flex items-center gap-[20px] cursor-pointer"
                onClick={() => handleNavigate()}
              >
                <img
                  src="/images/play.svg"
                  className="h-[24px] w-[24px]"
                  alt="play"
                />
                <p className="text-head text-paleBlue font-inter">{item}</p>
              </li>
              <hr className="text-[#64A4C0]" />
            </>
          ))}
        </ul>
      </div>
      <div class="border-l-2 border-smallBlue mx-5"></div>
      <div className="p-2 max-w-[270px] w-full">
        <h2 className="text-subhead text-paleBlue mb-2 font-inter">
          Simplified Management
        </h2>
        <div className="mb-4">
          <img
            src="/videos/tutorial.gif"
            alt="Dashboard preview"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
        <p className="text-bodyColor text-[18px] mb-2 font-inter">
          Manage all users and billing at one place. Login to check your
          Dashboard.
        </p>
        <a
          href="/login"
          className="text-primary text-[16px] hover:underline font-inter"
        >
          Login
        </a>
      </div>
      {/* </div> */}
    </div>
  );
}
