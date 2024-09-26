import React from "react";

const testimonials = [
  {
    company: "McKinsey & Company",
    logo: "/images/mckinsy.svg",
    quote:
      "Thankyou for building such an empowering tool! We can save precious time, rather than wasting it on formatting and standardizing slides.",
    author: "Michael Smith",
    position: "Sr. Consultant @McKinsey",
    avatar: "/images/avatar1.svg",
  },
  {
    company: "Teva",
    logo: "/images/teva.svg",
    quote:
      "This tool has made a huge difference in our work. Fast, easy, and reliable - it's exactly what we needed. It's intuitive, efficient, and perfect!",
    author: "Michael Smith",
    position: "Sr. Consultant @McKinsey",
    avatar: "/images/avatar2.svg",
  },
  {
    company: "Abbott",
    logo: "/images/abbott.svg",
    quote:
      "A fantastic addition to our toolkit. It makes slide creation quick and ensures all our presentations look professional.",
    author: "Michael Smith",
    position: "Sr. Consultant @McKinsey",
    avatar: "/images/avatar3.svg",
  },
 
];

export default function TestimonialsSection() {
  return (
    <section className="relative pb-[120px] bg-gradient-to-t from-[#ECF1F6] to-[rgba(236,241,246,0)]">
      <div className="container">
        <h2 className="text-headline text-center mb-[45px]  text-paleBlue font-extrabold">Loved by users</h2>
        <div className="grid gap-[24px] grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white py-[54px] text-center px-[54px] rounded-[10px] shadow-[0_0px_16px_0px_rgba(210,216,231,0.5)] flex flex-col justify-between">
              <div className="">
                <img
                  src={testimonial.logo}
                  alt={`${testimonial.company} logo`}
                  className="w-[144px] m-auto  mb-[47px]"
                />
                <p className="text-body text-bodyColor">{testimonial.quote}</p>
              </div>
              <div className="flex items-center mt-[79px] gap-[10px] justify-center ">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="rounded-full h-[39px] w-[39px]"
                />
                <div className="text-left leading-[14px] text-[#1D375E]">
                  <p className="font-semibold text-[13px]">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-gray-600 text-[10px]">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
