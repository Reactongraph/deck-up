import { PlayCircle, Volume2, SkipBack, SkipForward } from "lucide-react";
// import Header from "../components/Header";
// import Footer from "../components/Foorter";
import LeftImage from "../components/common/LeftImage";
import { Images } from "../utils/images";

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

const tutorials = [
  {
    title: "{Company}'s Cybersecurity Awareness",
    thumbnail: "/placeholder.svg?height=200&width=400&text=Cybersecurity",
    duration: "5:30",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis vero risus donec et fusce morbi.",
  },
  {
    title: "From Everyone Here",
    thumbnail: "/placeholder.svg?height=200&width=400&text=From+Everyone",
    duration: "4:15",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis vero risus donec et fusce morbi.",
  },
  {
    title: "Join us",
    thumbnail: "/placeholder.svg?height=200&width=400&text=Join+Us",
    duration: "3:45",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis vero risus donec et fusce morbi.",
  },
  {
    title: "From Everyone Here",
    thumbnail: "/placeholder.svg?height=200&width=400&text=From+Everyone+2",
    duration: "6:00",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis vero risus donec et fusce morbi.",
  },
  {
    title: "From Everyone Here",
    thumbnail: "/placeholder.svg?height=200&width=400&text=From+Everyone+3",
    duration: "5:15",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis vero risus donec et fusce morbi.",
  },
  {
    title: "From Everyone Here",
    thumbnail: "/placeholder.svg?height=200&width=400&text=From+Everyone+4",
    duration: "4:30",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis vero risus donec et fusce morbi.",
  },
];

function TutorialCard({ title, thumbnail, duration, description }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <div className="relative">
        <img src={thumbnail} alt={title} className="w-full h-48 object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <PlayCircle className="w-16 h-16 text-white opacity-80 hover:opacity-100 transition-opacity" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
          <h3 className="text-white text-lg font-semibold">{title}</h3>
        </div>
        <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
          {duration}
        </div>
      </div>
      <div className="px-4 py-2 bg-blue-600 flex justify-between items-center">
        <div className="flex space-x-2">
          <SkipBack className="w-5 h-5 text-white" />
          <SkipForward className="w-5 h-5 text-white" />
        </div>
        <div className="w-1/2 bg-white rounded-full h-1">
          <div className="bg-blue-300 h-1 rounded-full w-1/3"></div>
        </div>
        <Volume2 className="w-5 h-5 text-white" />
      </div>
      <div className="p-4">
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
}

const data = {
  heading: "Sign Up Today",
  description: ` Your superpower packed plug and play ppt tool is just a click
                away.`,
  btnText: "Get Started",
};

export default function TutorialGrid() {
  return (
    <>
      {/* <Header /> */}
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
            <span className="text-gray-600">Showing 6 of 9</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tutorials.map((tutorial, index) => (
              <TutorialCard key={index} {...tutorial} />
            ))}
          </div>
        </div>
      </div>
      <LeftImage image={Images.signup} data={data} />
      {/* <Footer /> */}
    </>
  );
}
