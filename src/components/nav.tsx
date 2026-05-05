import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full sticky top-0 z-50 bg-gradient-to-r from-green-600 via-green-700 to-green-800 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2">
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
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm text-white hover:text-gray-200 transition">
            Advantage
          </Link>
          <Link to="/" className="text-sm text-white hover:text-gray-200 transition">
            How It Works
          </Link>
          <Link to="/" className="text-sm text-white hover:text-gray-200 transition">
            Our Mission
          </Link>
          <Link to="/" className="text-sm text-white hover:text-gray-200 transition">
            FAQs
          </Link>

          <Link
            to="/"
            className="bg-black text-white px-4 py-2 rounded-md text-sm hover:bg-gray-900 transition"
          >
            Get Started — Free & Fast
          </Link>
        </div>

        {/* TOGGLE BUTTON */}
        <button
          className="md:hidden text-2xl text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-white px-6 pb-4 pt-4 space-y-4">
          <Link to="/" className="block text-sm text-black " onClick={() => setMenuOpen(false)}>
            Advantage
          </Link>
          <Link to="/" className="block text-sm text-black" onClick={() => setMenuOpen(false)}>
            How It Works
          </Link>
          <Link to="/" className="block text-sm text-black" onClick={() => setMenuOpen(false)}>
            Our Mission
          </Link>
          <Link to="/" className="block text-sm text-black" onClick={() => setMenuOpen(false)}>
            FAQs
          </Link>

          <Link
            to="/get-started"
            className="block w-full bg-green-700 text-white px-4 py-4 rounded-md text-sm text-center"
            onClick={() => setMenuOpen(false)}
          >
            Get Started — Free & Fast
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;