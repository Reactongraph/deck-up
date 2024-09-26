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
    <div className="p-6 flex items-center justify-center">
      <div className="w-full max-w-3xl p-8 bg-white bg-opacity-70">
        <h2 className="text-headline text-center text-paleBlue mb-6">
          Clear up your doubts
        </h2>
        <div className="space-y-4">
          {questions.map((question, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 bg-white border-t border-t-smallBlue"
            >
              <span className="text-midGray text-body">{question}</span>
              <img
                src="/images/right_arrow.svg"
                alt="right"
                className="h-6 w-6"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
