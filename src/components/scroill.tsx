export default function CallToAction() {
  const scrollToApply = () => {
    const el = document.getElementById("apply");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-gradient-to-b from-green-800 to-green-900 text-white px-6 py-16 md:px-16 md:py-24 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
          Ready to Take the First Step?
        </h2>

        <p className="text-lg md:text-xl text-green-100 mb-10 leading-relaxed">
          Join over 15,000 people who have used FashCashLoan to access fast, fair, and transparent financing.
          Free application, 10 minutes.
        </p>

        <button
          onClick={scrollToApply}
          className="relative bg-white text-green-800 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-gray-100 transition duration-300 animate-pulse"
        >
          Start My Application Now
        </button>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm md:text-base text-green-100">
          {[
            "Zero upfront fees or charges",
            "Scores from 550 considered",
            "Funding as early as next day",
            "All 50 states covered",
            "256-bit SSL protected",
            "Your approval supports charity",
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 text-green-300"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                  clipRule="evenodd"
                />
              </svg>

              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}