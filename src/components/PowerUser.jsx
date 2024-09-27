import React from "react";

export default function PowerUsers() {
  return (
    <section className="bg-linear py-16 px-4 relative overflow-hidden ps-2.5 pe-2.5">
      <div className="max-w-6xl mx-auto text-white">
        <h2 className="text-4xl font-bold text-center mb-4">
          Designed for power users across industries
        </h2>
        <p className="text-center mb-12 max-w-2xl mx-auto">
          Whether you are an independent consultant, work in a small team or a
          large corporation, we understand your needs and have come up with a
          solution specially for you.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-full p-8 w-full md:w-96 relative">
            <div className="flex justify-center items-center flex-col">
              <img
                src="/images/building.svg"
                className="w-12 h-12 text-red-400 mb-4"
              />
              <h3 className="text-2xl font-semibold mb-4">By Sectors</h3>
              <ul className="space-y-2">
                <li>Consulting Companies</li>
                <li>Education Institutes</li>
                <li>Marketing Agencies</li>
                <li>Entrepreneurs</li>
                <li>Small Businesses</li>
                <li>Government</li>
              </ul>
            </div>
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-red-300 rounded-full opacity-20"></div>
          </div>

          <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-full p-8 w-full md:w-96 relative md:-ml-16">
            <div className="flex justify-center items-center flex-col">
              <img
                src="/images/function.svg"
                className="w-12 h-12 text-red-400 mb-4"
              />

              <h3 className="text-2xl font-semibold mb-4">By Functions</h3>
              <ul className="space-y-2">
                <li>Marketing</li>
                <li>Sales</li>
                <li>HR (Human Resource)</li>
                <li>IT (Information Technology)</li>
                <li>Learning & Development</li>
                <li>Internal Communication</li>
              </ul>
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-300 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
