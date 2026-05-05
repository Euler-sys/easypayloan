const advantages = [
  {
    title: "Zero Interest Rate",
    desc: "You borrow $5,000, you pay back $5,000. No interest, no origination fees, no prepayment penalties.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    ),
  },
  {
    title: "No Minimum Credit Score",
    desc: "Scores below 580 are welcome. We look at your employment and income, not just a three-digit number.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
    ),
  },
  {
    title: "Same-Day Decisions",
    desc: "Submit your application before 2 PM and receive a lending decision the same business day.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    ),
  },
  {
    title: "Human-Reviewed Applications",
    desc: "Every application is personally reviewed by a loan specialist who understands real-life circumstances.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
      />
    ),
  },
];

const Advantages = () => {
  return (
    <section className="px-6 py-16 md:px-16 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        
        {/* TITLE */}
        <h2 className="inline-flex items-center justify-center gap-2 text-2xl font-semibold px-4 py-2 rounded-full mb-6 bg-yellow-400/90 text-black shadow-sm mx-auto">
          EasyPayLoan Advantages
        </h2>

        {/* DESCRIPTION */}
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
          Built to Remove Financial Barriers <br />
          Traditional lenders turn away millions of qualified borrowers every
          year over technicalities. We built EasyPayLoan to fix that —
          permanently.
        </p>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
          {advantages.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 rounded-lg transition transform hover:-translate-y-1 hover:shadow-lg duration-300 group cursor-pointer bg-white hover:bg-gradient-to-r hover:from-green-600 hover:via-green-700 hover:to-green-800"
            >
              {/* ICON */}
              <div className="mt-1">
                <svg
                  className="w-6 h-6 text-green-600 group-hover:text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  {item.icon}
                </svg>
              </div>

              {/* TEXT */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-white">
                  {item.title}
                </h3>
                <p className="text-gray-600 mt-1 group-hover:text-gray-100">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Advantages;