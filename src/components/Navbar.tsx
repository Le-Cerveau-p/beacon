import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo and Organization Name */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br flex items-center justify-center">
              <span className="text-white text-xl font-bold">
                <img src="/beaconlogo.png" alt="logo" />
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-[#0c6708] font-bold text-lg sm:text-xl leading-tight">
                BEACON OF
              </span>
              <span className="text-[#068c09] text-xs sm:text-sm">
                Transformative & Inclusive Development
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-[#0c6708] transition-colors"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-[#0c6708] transition-colors"
            >
              About
            </Link>
            <Link
              to="/#gallery"
              className="text-gray-700 hover:text-[#0c6708] transition-colors"
            >
              Gallery
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-[#0c6708] transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 hover:text-[#0c6708] transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link
              to="/"
              className="block py-2 text-gray-700 hover:text-[#0c6708] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block py-2 text-gray-700 hover:text-[#0c6708] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/#gallery"
              className="block py-2 text-gray-700 hover:text-[#0c6708] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Gallery
            </Link>
            <Link
              to="/contact"
              className="block py-2 text-gray-700 hover:text-[#0c6708] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
