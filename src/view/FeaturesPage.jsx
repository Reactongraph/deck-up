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
    <div className="relative  bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 min-h-[432px]">
      <img
        src={thumbnail}
        alt={title}
        className="w-[355px] h-[197px] object-contain"
      />
      {/* <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 hover:bg-opacity-60 transition-colors duration-300">
        <PlayCircle className="w-16 h-16 text-white opacity-80 hover:opacity-100 transition-opacity" />
      </div> */}
      {/* <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
        {duration}
      </div> */}
      <div className="p-6 ">
        <div className="flex justify-between items-center">
          <span className="text-[14px] text-primary">Side Element</span>
          <span className="bg-lightBlue p-1 text-[14px]">Video Summary</span>
        </div>
        <p className="text-[18px] my-[52px] text-bodyColor">{description}</p>
      </div>
      {/* <div className="bg-blue-600 text-white p-2 flex justify-between items-center">
        <div className="flex space-x-2">
          <SkipBack className="w-5 h-5" />
          <SkipForward className="w-5 h-5" />
        </div>
        <div className="w-1/2 bg-white rounded-full h-1">
          <div className="bg-blue-300 h-1 rounded-full w-1/3"></div>
        </div>
        <Volume2 className="w-5 h-5" />
      </div> */}
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
      {/* Header Component can be uncommented and used */}
      <div className="p-6 bg-lightBlue">
        <div className="container">
          <h1 className="text-headline text-paleBlue text-center mb-[56px] px-[180px] mt-[40px]">
            Tutorials to help you quickly figure out and turn around
          </h1>
          <div className="flex flex-wrap justify-center gap-[16px] mb-8">
            {filters.map((filter) => (
              <button
                key={filter}
                className="px-8 py-1 rounded-[80px] text-head bg-white text-bodyColor hover:bg-gray-10 border border-smallGray leading-7"
              >
                {filter}
              </button>
            ))}
          </div>
          <div className="mb-4 flex justify-between items-center">
            <h2 className="text-subhead text-paleBlue text-left">
              Slide Elements
            </h2>
            <span className="text-regularGray text-head">
              Showing {tutorials.length} of 9
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {tutorials.map((tutorial, index) => (
              <TutorialCard key={index} {...tutorial} />
            ))}
          </div>
        </div>
      </div>
      <div className="relative overflow-hidden">
        {/* <LeftImage
          image={Images.signup}
          data={data}
          customCSS={customCSS}
          showGradient={true}
        /> */}
        <div className="container pt-[99px] pb-[60px] flex gap-[104px] item-center ps-2.5 pe-2.5">
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
              // zIndex="999"
            />
          </div>
          <div className="max-w-[444px] w-full flex flex-col justify-center ">
            <h2 className="text-headline  text-paleBlue font-extrabold">
              Sign up today
            </h2>
            <p className="mt-[24px] text-body text-bodyColor">
              Your superpower-packed plug-&-play PPT tool is just a click away!
            </p>
            <div className="flex flex-row gap-[12px]">
              <button className="mt-[40px] bg-primary text-white px-[24px] py-[12px] rounded-[100px]">
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
      {/* Footer Component can be uncommented and used */}
    </>
  );
}
