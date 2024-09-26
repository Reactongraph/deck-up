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
    <div className="p-6 flex items-center justify-center bg-pink-50">
      <div className="w-full max-w-3xl p-8 bg-white bg-opacity-70 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Clear up your doubts
        </h2>
        <div className="space-y-4">
          {questions.map((question, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 bg-white bg-opacity-70 rounded-lg shadow"
            >
              <span className="text-gray-700">{question}</span>
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M9 5l7 7-7 7"></path>
              </svg>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
