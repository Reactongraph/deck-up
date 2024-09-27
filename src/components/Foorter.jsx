import React from "react";

const Footer = () => {
  return (
    <footer className="bg-darkBlue text-white py-12 px-[1.5rem] md:px-[6.5rem]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-row justify-between border-b-2 border-b-[#6592BF] mb-12 text-center xl:text-left">
          <div className="flex flex-col items-start mb-8 xl:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Need some answers or want to catch up with us!
            </h2>
            <p className="text-blue-200 text-sm md:text-base mb-4">
              Here's where you will find answers and can get to know us!
            </p>
          </div>

          <div className="flex justify-center xl:justify-end space-x-6 mb-6 xl:mb-0">
            <p className="text-secondary text-nowrap underline underline-offset-2 hover:cursor-pointer">
              FAQs
            </p>
            <p className="text-secondary text-nowrap underline underline-offset-2 hover:cursor-pointer">
              Get in touch
            </p>
          </div>
        </div>

        <div className="pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center mb-[25px] text-center md:text-left">
            <div>
              <p className="text-2xl md:text-4xl font-bold inline-block">
                DECK<span className="text-red-500">UP</span>
              </p>
            </div>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <button className="bg-primary hover:bg-primary text-white font-bold py-2 px-4 rounded-[20px] text-sm md:text-base">
                Download
              </button>
              <button className="bg-secondary text-white font-bold py-2 px-4 rounded-[20px] text-sm md:text-base">
                Buy now
              </button>
            </div>
          </div>
          <div className="flex flex-col-reverse lg:flex-row justify-between  gap-8 mb-12">
            <div className="flex flex-row justify-between lg:justify-start lg:flex-col items-center md:items-start text-center md:text-left">
              <p className="mb-4">info@deckup.com</p>
              <div className="flex justify-center md:justify-start space-x-4">
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="text-white hover:text-blue-300"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="YouTube"
                  className="text-white hover:text-blue-300"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="flex gap-[90px]">
              
            <div>
              <h3 className="font-semibold mb-4 text-lg">Try our product</h3>
              <ul className="space-y-2">
                <li>
                  <p className="hover:text-blue-300">Free trial</p>
                </li>
                <li>
                  <p className="hover:text-blue-300">Download</p>
                </li>
                <li>
                  <p className="hover:text-blue-300">Pricing & plans</p>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-lg">Learn</h3>
              <ul className="space-y-2">
                <li>
                  <p className="hover:text-blue-300">Features at a glance</p>
                </li>
                <li>
                  <p className="hover:text-blue-300">Interactive tour</p>
                </li>
                <li>
                  <p className="hover:text-blue-300">Watch Demo</p>
                </li>
                <li>
                  <p className="hover:text-blue-300">Tutorials</p>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-lg">Purchase</h3>
              <ul className="space-y-2">
                <li>
                  <p className="hover:text-blue-300">Buy new licences</p>
                </li>
                <li>
                  <p className="hover:text-blue-300">Renew licence</p>
                </li>
                <li>
                  <p className="hover:text-blue-300">Enterprise</p>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2 text-lg">Account</h3>
              <ul className="space-y-2">
                <li>
                  <p className="hover:text-blue-300">My account</p>
                </li>
                <li>
                  <p className="hover:text-blue-300">My Orders</p>
                </li>
                <li>
                  <p className="hover:text-blue-300">Login</p>
                </li>
              </ul>
            </div>
</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
