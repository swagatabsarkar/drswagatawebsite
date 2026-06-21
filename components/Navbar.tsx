"use client";

import { useState } from "react";

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
      <div className="max-w-7xl mx-auto px-4 lg:px-8">

        <div className="flex justify-between items-center h-20">

          {/* Logo */}

          <a href="#home" className="flex items-center">
            <img
              src="/images/logo.png"
              alt="Logo"
              className="h-16 w-auto"
            />
          </a>

          {/* Desktop Menu */}

          <ul className="hidden lg:flex items-center gap-7 font-medium text-gray-700">
            {menu.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-blue-700 transition duration-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Button */}

          <button
            className="lg:hidden text-3xl"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>

        </div>

        {/* Mobile Menu */}

        {open && (
          <ul className="lg:hidden pb-6 flex flex-col gap-4 text-center font-medium">
            {menu.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="block py-2 hover:text-blue-700"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        )}

      </div>
    </nav>
  );
}