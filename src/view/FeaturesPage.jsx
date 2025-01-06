// import { PlayCircle, Volume2, SkipBack, SkipForward } from "lucide-react";
// import LeftImage from "../components/common/LeftImage";
import { Images } from "../utils/images";
import GradientOverlay from "../components/common/GradientOverlay";
import { useState } from "react";
import useCustomWindowSize from "../Hooks/useCustomWindowSize";

// Sample Filters for Dynamic Filtering
const filters = [
  "All",
  "Slide Elements",
  "Identical Select",
  "Quick Tool",
  "Insert",
  "Links",
  "Symbols",
  "Table",
  "Organise",
  "Icons",
  "Maps",
  "Flag",
  "Infographics",
  "Layout",
  "Agendas",
];

// List of tutorials for demo purposes
const tutorials = [
  {
    title: "{Company}'s Cybersecurity Awareness",
    thumbnail: Images.thumbnail,
    duration: "5:30",
    description:
      "Learn how to protect yourself and your organization from common cyber threats.",
  },
  {
    title: "From Everyone Here",
    thumbnail: Images.thumbnail,
    duration: "4:15",
    description:
      "A short message from everyone here at the company to all our customers and partners.",
  },
  {
    title: "Join Us",
    thumbnail: Images.thumbnail,
    duration: "3:45",
    description:
      "An invitation to join us and be a part of our growing community.",
  },
  {
    title: "From Everyone Here",
    thumbnail: Images.thumbnail,
    duration: "4:15",
    description:
      "A short message from everyone here at the company to all our customers and partners.",
  },
  {
    title: "{Company}'s Cybersecurity Awareness",
    thumbnail: Images.thumbnail,
    duration: "5:30",
    description:
      "Learn how to protect yourself and your organization from common cyber threats.",
  },
  {
    title: "Join Us",
    thumbnail: Images.thumbnail,
    duration: "3:45",
    description:
      "An invitation to join us and be a part of our growing community.",
  },
];

function TutorialCard({ title, thumbnail, duration, description }) {
  return (
    <div className="relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 min-h-[432px] max-sm:min-h-[360px]">
      <img
        src={thumbnail}
        alt={title}
        className="w-[355px] h-[197px] object-contain max-sm:w-full"
      />
      <div className="p-6">
        <div className="flex justify-between items-center lg:flex-col lg:items-start">
          <span className="text-[14px] text-primary">Side Element</span>
          <span className="bg-lightBlue p-1 text-[14px] max-sm:mt-2">
            Video Summary
          </span>
        </div>
        <p className="text-[18px] my-[52px] text-bodyColor max-sm:my-4">
          {description}
        </p>
      </div>
    </div>
  );
}

// const data = {
//   heading: "Sign Up Today",
//   description: [
//     {
//       text: ` Your superpower-packed plug-and-play PPT tool is just a click away.`,
//       class: "font-[500] text-bodyColor",
//     },
//   ],
//   btnText: "Get Started",
// };
// const customCSS = {
//   fontSize: "text-subhead",
//   fontColor: "text-paleBlue",
// };

export default function TutorialGrid() {
  const [showAll, setShowAll] = useState(false);
  const size = useCustomWindowSize();

  const handleViewMore = () => {
    setShowAll(true);
  };

  const gradientOverlayStyles =
    size.width <= 640
      ? {
          // Mobile styles
          width: "63px",
          height: "63px",
          right: "20px",
          top: "8px",
          transform: "rotate(90deg)",
        }
      : size.width <= 1024
      ? {
          // Tablet styles
          width: "46px",
          height: "46px",
          top: "3px",
          right: "20px",
        }
      : {
          // // Desktop styles
          width: "141px",
          height: "141px",
          top: "-26px",
          right: "10%",
        };

  return (
    <>
      <div className="p-8 md:px-14 md:pt-[47px] md:pb-[72px] lg:pb-0 lg:px-0 lg:pt-0 lg:p-6 bg-lightBlue font-inter">
        <div className="container">
          <h1 className="w-[88%] md:w-[70%] lg:w-full font-bold lg:font-extrabold lg:text-headline text-paleBlue lg:text-center pb-2 lg:pb-[56px] px-0 lg:px-[180px] pt-2 text-[24px] m-0 text-left leading-9">
            Tutorials to help you quickly figure out and turn around
          </h1>
          <div className="w-full mt-6 md:mt-4 lg:mt-0 justify-center lg:gap-[16px] mb-[51px] md:mb-10 lg:mb-8 flex-row gap-2 overflow-x-auto whitespace-nowrap">
            <div className="flex sm:flex-wrap gap-2 lg:gap-[16px]">
              {filters.map((filter) => (
                <button
                  key={filter}
                  className="px-8 py-1 rounded-[80px] text-head bg-white hover:bg-disableGray text-bodyColor hover:bg-gray-10 border border-smallGray leading-7 max-sm:px-4 max-sm:text-sm"
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
          <div className="mb-4 flex justify-between items-center max-sm:flex-col max-sm:items-start md:mb-6">
            <h2 className="text-subhead text-paleBlue text-left">
              Slide Elements
            </h2>
          </div>
          <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-[22px] lg:gap-8 gap-4">
            {tutorials.map((tutorial, index) => (
              <TutorialCard key={index} {...tutorial} />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:hidden gap-4 md:gap-[22px] lg:gap-4">
            {(showAll ? tutorials : tutorials.slice(0, 2)).map(
              (tutorial, index) => (
                <TutorialCard key={index} {...tutorial} />
              )
            )}
          </div>

          {!showAll && (
            <div className="flex mt-4 mb-2">
              <button
                onClick={handleViewMore}
                className="text-sm md:text-base block lg:hidden bg-transparent text-secondary underline hover:bg-darkPrimary"
              >
                View More
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="relative overflow-hidden font-inter">
        <div className="lg:pt-[99px] pb-14 lg:pl-4 pl-0 md:pb-[71px] lg:pb-[60px] pr-0 md:pr-20 lg:pr-0 flex md:gap-16 lg:gap-[30px] item-center lg:ps-2.5 lg:pe-2.5 flex-col md:flex-row pt-[57px] md:pt-[72px] gap-[41px]">
          <div className="w-full lg:w-[60%] relative">
            <img
              src={Images.signup}
              alt="Microsoft PowerPoint interface with DeckUp add-in"
              className="w-full h-full lg:h-[569px]"
            />
            <GradientOverlay
              width={gradientOverlayStyles.width}
              height={gradientOverlayStyles.height}
              gradient="linear-gradient(to right, rgba(255,114,95,0), rgba(255,114,95,1))"
              top={gradientOverlayStyles.top}
              right={gradientOverlayStyles.right}
            />
          </div>
          <div className="w-full lg:w-[40%] flex items-center">
            <div className="max-w-[444px] w-full px-8 md:px-0 flex flex-col justify-center lg:text-start">
              <h2 className="lg:text-headline text-paleBlue font-bold lg:font-extrabold text-[24px]">
                Sign up today
              </h2>
              <p className="mt-[24px] text-sm leading-[20px] lg:text-body text-bodyColor lg:mt-4">
                Your superpower-packed plug-&-play PPT tool is just a click
                away!
              </p>
              <div className="flex flex-row md:gap-[12px] lg:justify-start gap-4">
                <button className="text-sm md:text-base lg:mt-[40px] bg-primary hover:bg-hoverButton text-white md:px-[24px] md:py-[12px] rounded-[100px] px-5 py-[12px] mt-6 md:mt-8">
                  Watch demo
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block">
          <GradientOverlay
            width="500px"
            height="500px"
            gradient="linear-gradient(to bottom, rgba(100,172,205,.5), rgba(100,172,205,0))"
            right="-70px"
            bottom="-70px"
            transform="rotate(110deg)"
          />
        </div>
      </div>
    </>
  );
}
