import { PlayCircle, Volume2, SkipBack, SkipForward } from "lucide-react";
import LeftImage from "../components/common/LeftImage";
import { Images } from "../utils/images";

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
    thumbnail: "/placeholder.svg?height=200&width=400&text=Cybersecurity",
    duration: "5:30",
    description:
      "Learn how to protect yourself and your organization from common cyber threats.",
  },
  {
    title: "From Everyone Here",
    thumbnail: "/placeholder.svg?height=200&width=400&text=From+Everyone",
    duration: "4:15",
    description:
      "A short message from everyone here at the company to all our customers and partners.",
  },
  {
    title: "Join Us",
    thumbnail: "/placeholder.svg?height=200&width=400&text=Join+Us",
    duration: "3:45",
    description:
      "An invitation to join us and be a part of our growing community.",
  },
];

function TutorialCard({ title, thumbnail, duration, description }) {
  return (
    <div className="relative rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img
        src={thumbnail}
        alt={title}
        className="w-full h-48 object-cover md:h-56 lg:h-64"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 hover:bg-opacity-60 transition-colors duration-300">
        <PlayCircle className="w-16 h-16 text-white opacity-80 hover:opacity-100 transition-opacity" />
      </div>
      <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
        {duration}
      </div>
      <div className="p-4 bg-white">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600 mt-2">{description}</p>
      </div>
      <div className="bg-blue-600 text-white p-2 flex justify-between items-center">
        <div className="flex space-x-2">
          <SkipBack className="w-5 h-5" />
          <SkipForward className="w-5 h-5" />
        </div>
        <div className="w-1/2 bg-white rounded-full h-1">
          <div className="bg-blue-300 h-1 rounded-full w-1/3"></div>
        </div>
        <Volume2 className="w-5 h-5" />
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

export default function TutorialGrid() {
  return (
    <>
      {/* Header Component can be uncommented and used */}
      <div className="p-6 bg-pink-50 bg-opacity-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-center text-indigo-900 mb-8">
            Tutorials to help you quickly figure out and turn around
          </h1>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {filters.map((filter) => (
              <button
                key={filter}
                className="px-4 py-2 rounded-full bg-white text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                {filter}
              </button>
            ))}
          </div>
          <div className="mb-4 flex justify-between items-center">
            <h2 className="text-xl font-semibold text-indigo-900">
              Slide Elements
            </h2>
            <span className="text-gray-600">Showing {tutorials.length} of 9</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {tutorials.map((tutorial, index) => (
              <TutorialCard key={index} {...tutorial} />
            ))}
          </div>
        </div>
      </div>
      <LeftImage image={Images.signup} data={data} />
      {/* Footer Component can be uncommented and used */}
    </>
  );
}
