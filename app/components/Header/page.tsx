"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-[#ED4690] to-[#5522CC] p-4 text-white shadow-lg relative">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo and Site Title with Link to Home */}
        <Link href="/" className="flex items-center space-x-4">
          <Image
            src="/assets/logo/logoHeader.png"
            width={24}
            height={32}
            alt="logo"
          />
          <h1 className="text-2xl font-bold font-['Inter'] transition-transform duration-300 transform hover:scale-110">
            Eventives
          </h1>
        </Link>

        {/* Hamburger Menu */}
        <button onClick={toggleMenu} className="md:hidden focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Navigation for larger screens */}
        <nav className="hidden md:flex ml-auto items-center text-base">
          <ul className="flex space-x-8 font-['DM-Sans'] font-bold">
            <li>
              <Link
                href="/schedule"
                className="hover:text-pink-400 transition-all duration-300 ease-in-out transform hover:scale-105 font-DMSans font-medium"
              >
                Schedule
              </Link>
            </li>
            <li>
              <Link
                href="/speaker"
                className="hover:text-pink-400 transition-all duration-300 ease-in-out transform hover:scale-105 font-DMSans font-medium"
              >
                Speakers
              </Link>
            </li>
            <li>
              <Link
                href="/ticket"
                className="hover:text-pink-400 transition-all duration-300 ease-in-out transform hover:scale-105 font-DMSans font-medium"
              >
                Ticket
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-pink-400 transition-all duration-300 ease-in-out transform hover:scale-105 font-DMSans font-medium"
              >
                Contact
              </Link>
            </li>
            </ul>
        </nav>

        {/* Mobile Menu */}
        <nav
          className={`${
            isMenuOpen ? "translate-y-full" : "-translate-y-full"
          } md:hidden fixed left-0 w-full bg-purple-700 text-white shadow-lg z-20 transition-transform duration-300 ease-in-out p-4`}
        >
          <ul className="flex flex-col items-start space-y-4 font-['DM-Sans'] font-medium px-6">
            <li>
              <Link
                href="/components/SignIn"
                className="block py-2 w-full text-left hover:text-pink-400 transition-all duration-300 ease-in-out"
              >
                Sign In
              </Link>
            </li>
            <li>
              <Link
                href="/schedule"
                className="block py-2 w-full text-left hover:text-pink-400 transition-all duration-300 ease-in-out"
              >
                Schedule
              </Link>
            </li>
            <li>
              <Link
                href="/speaker"
                className="block py-2 w-full text-left hover:text-pink-400 transition-all duration-300 ease-in-out"
              >
                Speakers
              </Link>
            </li>
            <li>
              <Link
                href="/ticket"
                className="block py-2 w-full text-left hover:text-pink-400 transition-all duration-300 ease-in-out"
              >
                Ticket
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block py-2 w-full text-left hover:text-pink-400 transition-all duration-300 ease-in-out"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Login Button */}
        <button
          type="button"
          onClick={() => router.push("/components/SignIn")}
          className="hidden md:block ml-8 px-4 py-1 border-2 border-white rounded-full transition-all duration-300 ease-in-out hover:bg-white hover:text-purple-800 hover:shadow-lg hover:scale-105 font-['DM-Sans'] font-bold"
        >
          Sign In
        </button>
      </div>
    </header>
  );
}
