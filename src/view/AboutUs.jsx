import React from "react";
// import Header from "../components/Header";
// import Footer from "../components/Foorter";
import LeftImage from "../components/common/LeftImage";
import { Images } from "../utils/images";
// import { User, CheckCircle, Award, Smile } from "lucide-react";
import GradientOverlay from "../components/common/GradientOverlay";

const data = {
  heading: "DeckUp from SlideXpress",
  description: [
    {
      text: `This unique PowerPoint add-in has been developed by the communication design experts at SlideXpress.`,
      class: "text-sm lg:text-base mb-4 font-[500] text-bodyColor",
    },

    {
      text: "With over 10 years of creating expressive decks at express speeds, and over 100 satisfied clients (MNCs, leading pharma companies, independent consultants and more), SlideXpress was the natural place for DeckUp to be born.",
      class: "text-sm lg:text-base mb-4 text-bodyColor",
    },
    {
      text: "Recognizing the need to boost efficiency and productivity for our own design teams, we searched for existing tools that could help.When none met our specific requirements, we decided to create our own solution based on first-hand experience of the repetitive challenges of working with PowerPoint.",
      class: "text-sm lg:text-base mb-4 text-bodyColor",
    },
    {
      text: `The result was DeckUp. Designed to simplify and enhance the presentation creation process, making life easier for everyone.`,
      class: "text-sm lg:text-base font-[500] text-bodyColor",
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
    <div className="bg-gradient-to-b from-[#fff] to-[#ECF1F6] font-inter">
      <LeftImage data={data} image={Images.about} />
      <div className="max-w-[1090px] m-auto lg-[60%] w-[83%] lg:pt-10">
        <p className="text-paleBlue text-start text-subhead md:text-headline font-bold">
          Made with you in mind
        </p>
        <p className="text-midGray mt-4 max-w-6xl text-sm lg:text-base">
          We are delighted to have created a tool that reduces the time and
          effort it takes to prepare a professional and polished deck. Every
          feature has been designed to prioritize easy and efficient integration
          into existing workflows.
        </p>
        <div className="bg-opacity-50 py-0 pt-8 pb-14 lg:py-16">
          <div className="max-w-7xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-12 lg:gap-x-4 relative">
              <GradientOverlay
                width="106px"
                height="106px"
                gradient="linear-gradient(rgb(191, 219, 254), rgb(224, 242, 254), rgb(219, 234, 254))"
                top="-27px"
                left="-39px"
              />
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white max-w-[100%] lg:max-w-[256px] rounded-lg shadow-md pt-[21px] pb-[31px] px-[46px] xl:pt-[42px] xl:pb-[57px] xl:px-[57px] flex flex-col items-center text-center z-10"
                >
                  <img
                    src={feature.icon}
                    alt="icons"
                    className="w-[140px] h-[140px] text-blue-600"
                  />
                  <div className="max-w-[197px] pt-[10px]">
                    <h3 className="text-xl text-paleBlue mb-2 font-bold">
                      {feature.title}
                    </h3>
                    <p className="text-bodyColor">{feature.description}</p>
                  </div>
                </div>
              ))}
              <GradientOverlay
                width="374px"
                height="374px"
                gradient="linear-gradient(rgb(191, 219, 254), rgb(224, 242, 254), rgb(219, 234, 254))"
                bottom="-63px"
                right="-10%"
              />
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default AboutUS;
