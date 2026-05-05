import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      
      {/* TOP HERO */}
      <div className="relative px-6 py-10 md:px-16 md:py-28 bg-gradient-to-b from-white via-gray-50 to-white">
        
        {/* BACKGROUND BLOBS */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-100 rounded-full mix-blend-multiply opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-green-200 rounded-full mix-blend-multiply opacity-50 blur-3xl"></div>

        <div className="relative max-w-5xl mx-auto text-center">
          
          {/* BADGE */}
          <span className="inline-flex items-center justify-center gap-2 text-xs font-semibold px-4 py-2 rounded-full mb-6 bg-yellow-400/90 text-black shadow-sm mx-auto">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"/>
            </svg>
            Funds Delivered as Fast as 24hrs
          </span>

          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight text-gray-900 max-w-3xl mx-auto">
            EasyPayLoan — Personal Loans That Work for
            <span className="text-amber-400"> Real People</span>
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Borrow up to{" "}
            <span className="font-semibold text-gray-900">$80,000</span> at zero
            interest. We evaluate your current income, not your credit history —
            giving everyone a fair shot at the funds they need.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center">
            <Link
              to="/apply"
              className="px-8 py-3.5 bg-green-800 text-white rounded-full hover:bg-green-900 transition font-medium shadow-lg text-center"
            >
              Apply in 10 Minutes
            </Link>

            <button className="px-8 py-3.5 border border-gray-300 text-gray-800 rounded-full hover:bg-gray-100 transition font-medium shadow-sm">
              See the Process
            </button>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-14 max-w-4xl mx-auto">
            
            <div className="flex flex-col items-center gap-2">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"/>
              </svg>
              <p className="text-3xl font-bold text-gray-900">0%</p>
              <p className="text-sm text-gray-500">Interest Rate</p>
            </div>

            <div className="flex flex-col items-center gap-2">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33"/>
              </svg>
              <p className="text-3xl font-bold text-gray-900">$80K</p>
              <p className="text-sm text-gray-500">Max Loan</p>
            </div>

            <div className="flex flex-col items-center gap-2">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479"/>
              </svg>
              <p className="text-3xl font-bold text-gray-900">15K+</p>
              <p className="text-sm text-gray-500">Clients Served</p>
            </div>

            <div className="flex flex-col items-center gap-2">
              <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.5 13.6 8.6l5.5.44-4.2 3.6 1.28 5.38-4.7-2.88-4.7 2.88 1.28-5.38-4.2-3.6 5.5-.44L11.48 3.5Z"/>
              </svg>
              <p className="text-3xl font-bold text-gray-900">4.8/5</p>
              <p className="text-sm text-gray-500">Client Rating</p>
            </div>

          </div>
        </div>
      </div>

      {/* TRUST SECTION */}
      <div className="px-6 py-16 md:px-16 bg-gradient-to-b from-green-600 via-green-700 to-green-800 text-white">
        <div className="max-w-5xl mx-auto text-center">

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-left">

            {[
              "256-Bit SSL Encryption",
              "FDIC Insured Institution",
              "BBB A+ Accredited",
              "NMLS Licensed #123456",
              "Serving All 50 States",
              "Established 2019",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75"/>
                </svg>
                <span>{item}</span>
              </div>
            ))}

          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;