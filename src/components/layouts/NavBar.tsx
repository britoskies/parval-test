// src/components/common/NavBar.tsx
import React, { useState } from "react";
import { Link } from "react-router";
import { AVATAR_URL } from "../../utils/constants";

// SVG imports
import boxIcon from "../../assets/box3d.svg";
import notificationIcon from "../../assets/notification.svg";

const NavBar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative flex items-center justify-between border-b border-[#f0f2f5] px-10 py-3 bg-white z-50">
      {/* Logo / Title */}
      <Link
        to="/"
        className="flex items-center gap-2 text-[#111418] text-lg font-bold hover:opacity-80"
      >
        <img src={boxIcon} alt="Box icon" className="w-6 h-6" />
        <span className="hidden min-[685px]:inline-flex">
          Customer Support Portal
        </span>
      </Link>

      {/* Desktop nav links */}
      <div className="flex items-center gap-4">
        <nav className="flex gap-8 max-[685px]:hidden">
          <Link
            to="/"
            className="text-[#111418] text-sm font-medium hover:underline"
          >
            Dashboard
          </Link>
          <Link
            to="/create"
            className="text-[#111418] text-sm font-medium hover:underline"
          >
            Request Form
          </Link>
        </nav>

        {/* Right side: menu button on mobile, else bell + avatar */}
        <div className="flex items-center gap-4">
          {/* Hamburger for mobile */}
          <button
            className="hidden max-[685px]:inline-flex p-2 rounded hover:bg-[#f0f2f5] transition"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M4 6h16M4 12h16M4 18h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>

          {/* Bell + Avatar */}
          <button className="p-2 rounded-full hover:bg-[#f0f2f5] transition">
            <img
              src={notificationIcon}
              alt="Notifications"
              className="w-5 h-5"
            />
          </button>
          <img
            src={AVATAR_URL}
            alt="User avatar"
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          className="absolute top-full left-0 w-full bg-white border-b border-[#f0f2f5]
                     flex flex-col items-center gap-4 py-4 max-[685px]:flex md:hidden z-40"
        >
          <Link
            to="/"
            className="text-[#111418] text-base font-medium hover:underline"
            onClick={() => setMenuOpen(false)}
          >
            Dashboard
          </Link>
          <Link
            to="/create"
            className="text-[#111418] text-base font-medium hover:underline"
            onClick={() => setMenuOpen(false)}
          >
            Request Form
          </Link>
        </div>
      )}
    </header>
  );
};

export default NavBar;
