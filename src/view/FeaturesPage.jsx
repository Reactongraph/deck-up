import { PlayCircle, Volume2, SkipBack, SkipForward } from "lucide-react";
import LeftImage from "../components/common/LeftImage";
import { Images } from "../utils/images";
import GradientOverlay from "../components/common/GradientOverlay";

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
        <div className="flex justify-between items-center max-sm:flex-col max-sm:items-start">
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

const data = {
  heading: "Sign Up Today",
  description: [
    {
      text: ` Your superpower-packed plug-and-play PPT tool is just a click away.`,
      class: "font-[500] text-bodyColor",
    },
  ],
  btnText: "Get Started",
};
const customCSS = {
  fontSize: "text-subhead",
  fontColor: "text-paleBlue",
};

export default function TutorialGrid() {
  return (
    <>
      <div className="p-6 bg-lightBlue">
        <div className="container">
          <h1 className="text-headline text-paleBlue text-center mb-[56px] px-[180px] mt-[40px] max-sm:text-[24px] max-sm:p-2 max-sm:m-0 max-sm:text-left max-sm:leading-9">
            Tutorials to help you quickly figure out and turn around
          </h1>
          <div className="flex flex-wrap justify-center gap-[16px] mb-8 max-sm:flex-row max-sm:gap-2 max-sm:overflow-x-auto max-sm:whitespace-nowrap">
            {filters.map((filter) => (
              <button
                key={filter}
                className="px-8 py-1 rounded-[80px] text-head bg-white text-bodyColor hover:bg-gray-10 border border-smallGray leading-7 max-sm:px-4 max-sm:text-sm"
              >
                {filter}
              </button>
            ))}
          </div>
          <div className="mb-4 flex justify-between items-center max-sm:flex-col max-sm:items-start max-sm:mb-6">
            <h2 className="text-subhead text-paleBlue text-left max-sm:text-[18px]">
              Slide Elements
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-sm:gap-4">
            {tutorials.map((tutorial, index) => (
              <TutorialCard key={index} {...tutorial} />
            ))}
          </div>
        </div>
      </div>
      <div className="relative overflow-hidden">
        <div className="container pt-[99px] pb-[60px] flex gap-[104px] item-center ps-2.5 pe-2.5 max-sm:flex-col max-sm:pt-[40px] max-sm:gap-4">
          <div className="w-full relative">
            <img
              src={Images.signup}
              alt="Microsoft PowerPoint interface with DeckUp add-in"
              className="w-full"
            />
            <GradientOverlay
              width="141px"
              height="141px"
              gradient="linear-gradient(to right, rgba(255,114,95,0), rgba(255,114,95,1))"
              top="-10px"
              right="0"
            />
          </div>
          <div className="max-w-[444px] w-full flex flex-col justify-center max-sm:text-center">
            <h2 className="text-headline text-paleBlue font-extrabold max-sm:text-[24px]">
              Sign up today
            </h2>
            <p className="mt-[24px] text-body text-bodyColor max-sm:mt-4">
              Your superpower-packed plug-&-play PPT tool is just a click away!
            </p>
            <div className="flex flex-row gap-[12px] max-sm:justify-center max-sm:gap-4">
              <button className="mt-[40px] bg-primary text-white px-[24px] py-[12px] rounded-[100px] max-sm:px-8 max-sm:py-2 max-sm:mt-6">
                Get Started
              </button>
            </div>
          </div>
        </div>
        <GradientOverlay
          width="500px"
          height="500px"
          gradient="linear-gradient(to bottom, rgba(100,172,205,.5), rgba(100,172,205,0))"
          right="-70px"
          bottom="-70px"
          transform="rotate(110deg)"
        />
      </div>
    </>
  );
}
