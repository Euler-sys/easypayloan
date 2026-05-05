export default function Footer() {
  return (
    <footer className="text-white px-6 py-14 md:px-16 bg-gradient-to-r from-green-600 via-green-700 to-green-800 shadow-md">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* BRAND */}
        <div>
          <div className="flex items-center gap-2">
            <div className="bg-amber-400 rounded-full w-8 h-8 flex items-center justify-center shadow-md">
              <svg
                className="w-4 h-4 text-green-800"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>

            <span className="text-xl font-bold text-white select-none">
              EasyPayLoan
            </span>
          </div>

          <p className="text-sm leading-relaxed mt-3 opacity-95">
            Fast, secure personal loans designed to help you get approved and funded quickly.
          </p>

          <div className="mt-4 space-y-1 text-sm opacity-90">
            <p>FDIC Compliant</p>
            <p>BBB A+ Rated</p>
            <p>NMLS #195624</p>
          </div>
        </div>

        {/* NAVIGATION */}
        <div>
          <h3 className="font-semibold mb-4">Navigation</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#advantages" className="hover:text-white/80">Why Choose Us</a></li>
            <li><a href="#process" className="hover:text-white/80">How It Works</a></li>
            <li><a href="#mission" className="hover:text-white/80">Our Mission</a></li>
            <li><a href="#faq" className="hover:text-white/80">FAQs</a></li>
            <li><a href="#apply" className="hover:text-white/80">Apply Now</a></li>
          </ul>
        </div>

        {/* LEGAL */}
        <div>
          <h3 className="font-semibold mb-4">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white/80">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white/80">Terms of Service</a></li>
            <li><a href="#" className="hover:text-white/80">Responsible Lending</a></li>
            <li><a href="#" className="hover:text-white/80">NMLS Registry</a></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>support@easypayloan.com</li>
            <li>1-888-555-0100</li>
            <li>24/7 Live Chat Support</li>
            <li>Nationwide Coverage</li>
          </ul>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-white/20 mt-10 pt-6 text-sm text-center space-y-3">

        <p>
          © 2019–2026 EasyPayLoan. All rights reserved.
        </p>

        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <a href="#" className="hover:text-white/80">Privacy</a>
          <a href="#" className="hover:text-white/80">Terms</a>
          <a href="#" className="hover:text-white/80">Accessibility</a>
        </div>

        <p className="max-w-3xl mx-auto text-xs leading-relaxed opacity-90">
          APR ranges from 5.99% to 24.99%. Loan amounts from $1,000 to $80,000.
          Repayment terms 12–60 months. All loans subject to credit approval.
          EasyPayLoan Financial Corp, NMLS #195624.
        </p>

      </div>
    </footer>
  );
}