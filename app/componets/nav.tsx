'use client';

import Link from "next/link";
import { useState } from "react";

interface Bar {
  id: number;
  name: string;
  slug: string;
}

const bars: Bar[] = [
  { id: 1, slug: "/", name: "Destinations" },
  { id: 2, slug: "/members", name: "Members" },
  { id: 3, slug: "/gallery", name: "Gallery" },
];

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-transparent max-w-[1440px] mx-auto px-4 relative">
      {/* Desktop menu */}
      <ul className="hidden md:flex justify-center items-center gap-10 lg:gap-14">
        {bars.map((bar) => (
          <li
            key={bar.id}
            className="
              cursor-pointer text-white
              text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px]
              hover:underline
              whitespace-nowrap
            "
          >
            <Link href={bar.slug}>
              <strong>{bar.name}</strong>
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile burger menu */}
      <div className="md:hidden flex justify-between items-center py-3">
        <button
          onClick={toggleMenu}
          aria-label="Toggle menu"
          className="text-white focus:outline-none"
        >
          {/* Hamburger icon */}
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              // Close icon (X)
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              // Hamburger icon (3 lines)
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu dropdown */}
   {menuOpen && (
  <div
    className="md:hidden fixed inset-0 bg-[#00000096] bg-opacity-90 z-50 flex flex-col justify-center items-center h-[200px]"
    onClick={() => setMenuOpen(false)} // Սեղմում ենք ֆոնի վրա՝ փակում
  >
    <ul
      className="flex flex-col items-center gap-6"
      onClick={(e) => e.stopPropagation()} // Սա կանխում է՝ մենյուի վրա սեղմելը չփակի
    >
      {bars.map((bar) => (
        <li
          key={bar.id}
          className="cursor-pointer text-white text-[18px] sm:text-[20px] hover:underline whitespace-nowrap"
        >
          <Link href={bar.slug} onClick={() => setMenuOpen(false)}>
            <strong>{bar.name}</strong>
          </Link>
        </li>
      ))}
    </ul>
  </div>
)}
    </nav>
  );
}

export default Nav;
