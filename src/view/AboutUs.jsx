import React from "react";
// import Header from "../components/Header";
// import Footer from "../components/Foorter";
import LeftImage from "../components/common/LeftImage";
import { Images } from "../utils/images";
import { User, CheckCircle, Award, Smile } from "lucide-react";

const data = {
  heading: "DeckUp from Slide Expess",
  description: [
    {
      text: `This unique PowerPoint add-in has been developed by the communication design experts at SlideXpress.`,
      class: "mb-4 font-[500] text-bodyColor",
    },

    {
      text: "With over 10 years of creating expressive decks at express speeds, and over 100 satisfied clients (MNCs, leading pharma companies, independent consultants and more), SlideXpress was the natural place for DeckUp to be born.",
      class: "mb-4 text-bodyColor",
    },
    {
      text: "Recognizing the need to boost efficiency and productivity for our own design teams, we searched for existing tools that could help.When none met our specific requirements, we decided to create our own solution based on first-hand experience of the repetitive challenges of working with PowerPoint.",
      class: "mb-4 text-bodyColor",
    },
    {
      text: `The result was DeckUp. Designed to simplify and enhance the presentation creation process, making life easier for everyone.`,
      class: "font-[500] text-bodyColor",
    },
  ],
  btnText: "",
};

const features = [
  {
    icon: "/images/icon_user.svg",
    title: "Tailored Solutions",
    description: "Designed by experts, meets the unique needs of PPT users",
  },
  {
    icon: "/images/icons_check.svg",
    title: "Relevant Features",
    description: "Includes tools for professional, effective presentations",
  },
  {
    icon: "/images/icons.svg",
    title: "Professional Quality",
    description: "Ensures polished, credible presentations",
  },
  {
    icon: "/images/icons_star.svg",
    title: "User-Friendly",
    description: "Features an intuitive interface for ease of use",
  },
];

const AboutUS = () => {
  return (
    <>
      {/* <Header /> */}
      <LeftImage data={data} image={Images.about} />
      <div>
        <p className="text-paleBlue text-center text-headline">
          Made with you in mind
        </p>
        <p className="text-midGray ">
          We are delighted to have created a tool that reduces the time and
          effort it takes to prepare a professional and polished deck. Every
          feature has been designed to prioritize easy and efficient integration
          into existing workflows.
        </p>
      </div>
      <div className="bg-opacity-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center"
              >
                <div className="mb-4 p-3 bg-blue-100 rounded-full">
                  <img
                    src={feature.icon}
                    alt="icons"
                    className="w-[140px] h-[134px] text-blue-600"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default AboutUS;
