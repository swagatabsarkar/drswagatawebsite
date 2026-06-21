"use client";

import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menu = [
    "Home",
    "About",
    "Education",
    "Experience",
    "Research",
    "Publications",
    "Patents",
    "Books",
    "Funds",
    "Achievements",
    "Awards",
    "Gallery",
    "Contact",
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <a href="#home" className="flex items-center">
            <img
              src="/images/logo.png"
              alt="Dr. Swagata Sarkar"
              className="h-14 md:h-16 w-auto"
            />
          </a>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-6 text-[15px] font-medium text-gray-700">
            {menu.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-blue-700 transition-colors duration-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-md"
          >
            {open ? (
              <XMarkIcon className="h-8 w-8 text-gray-800" />
            ) : (
              <Bars3Icon className="h-8 w-8 text-gray-800" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="lg:hidden bg-white border-t shadow-lg">
            <ul className="flex flex-col py-4">
              {menu.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setOpen(false)}
                    className="block px-6 py-3 hover:bg-blue-50 hover:text-blue-700 transition"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}