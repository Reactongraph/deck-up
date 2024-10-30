import GradientOverlay from "../common/GradientOverlay";

export default function FaqComponent() {
  const questions = [
    "What is DeckUp?",
    "What are enterprise plans?",
    "Do I need developer help for installation?",
    "Do you offer discounts on annual plans?",
    "Is this a full-time collaboration?",
    "What is your refund policy?",
  ];

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-3xl  bg-white bg-opacity-70 pt-20 relative z-[999]">
        <GradientOverlay
          width="108px"
          height="108px"
          gradient="linear-gradient(to bottom right, rgba(100, 172, 205, 0.3), rgba(100, 172, 205, 0))"
          top="16px"
          left="109px"
          zIndex="-999"
        />
        <h2 className="text-headline text-center text-paleBlue font-bold font-inter">
          Clear up your doubts
        </h2>
        <div className="mt-[113px] mb-[116px] border-b border-b-smallBlue sm:mx-20 mx-8 relative z-[-999]">
          {questions.map((question, index) => (
            <div
              key={index}
              className="flex items-center justify-between  py-7 bg-white border-t border-t-smallBlue"
            >
              <span className="text-midGray text-body font-inter">{question}</span>
              <span className="h-8 w-8 mr-6">
                <img
                  src="/images/right_arrow.svg"
                  alt="right"
                  className="h-5 w-4"
                />
              </span>
            </div>
          ))}
          <GradientOverlay
            width="465px"
            height="465px"
            gradient="linear-gradient(to bottom right, rgba(100, 172, 205, 0.1), rgba(100, 172, 205, 0))"
            top="177px"
            left="342px"
            zIndex="999"
          />
        </div>
      </div>
    </div>
  );
}
