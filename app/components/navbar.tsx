"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import SignInModal from "./SignInModal";
import SignUpModal from "./SignUpModal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const openSignInModal = () => {
    setShowSignInModal(true);
    setShowSignUpModal(false);
  };

  const openSignUpModal = () => {
    setShowSignUpModal(true);
    setShowSignInModal(false);
  };

  const closeModal = () => {
    setShowSignInModal(false);
    setShowSignUpModal(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          isScrolled ? "bg-black shadow-lg backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="relative w-full h-20">
          <div className="absolute inset-0 bg-gradient-to-r from-[#ED4690] to-[#5522CC] opacity-20" />
          <div className="container px-6 py-4 mx-auto relative z-10">
            <div className="lg:flex lg:items-center lg:justify-between">
              <div className="flex items-center justify-between">
                <a href="/">
                  <Image
                    className={`w-auto h-6 sm:h-7 ${
                      isScrolled ? "opacity-100" : "opacity-80"
                    }`}
                    src="/assets/logo/logoEventives.png"
                    alt="Logo"
                    width={100}
                    height={40}
                  />
                </a>

                <div className="flex lg:hidden">
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    type="button"
                    className="text-white hover:text-gray-400 focus:outline-none"
                    aria-label="toggle menu"
                  >
                    {isOpen ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 8h16M4 16h16"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              <div
                className={`${
                  isOpen
                    ? "translate-x-0 opacity-100"
                    : "opacity-0 -translate-x-full"
                } absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-black lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center`}
              >
                <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
                  <a href="#" className={`px-3 py-2 mx-3 mt-2 ${isScrolled ? "text-white" : "text-white"} transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-gray-300`}>
                    Schedule
                  </a>
                  <a href="#" className={`px-3 py-2 mx-3 mt-2 ${isScrolled ? "text-white" : "text-white"} transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-gray-300`}>
                    Speakers
                  </a>
                  <a href="#" className={`px-3 py-2 mx-3 mt-2 ${isScrolled ? "text-white" : "text-white"} transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-gray-300`}>
                    Tickets
                  </a>
                  <a href="#" className={`px-3 py-2 mx-3 mt-2 ${isScrolled ? "text-white" : "text-white"} transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-gray-300`}>
                    Contact
                  </a>
                </div>

                {/* Show Sign In button if not logged in */}
                <div className="flex flex-col mt-4 lg:mt-0 lg:flex-row lg:items-center">
                  <button
                    onClick={openSignInModal}
                    className="mx-4 py-2 px-6 text-white bg-transparent border border-white rounded-full transition-colors duration-300 transform hover:bg-gray-300 hover:text-white focus:outline-none"
                  >
                    Sign In
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Import Sign In and Sign Up Modals */}
      <SignInModal
        isOpen={showSignInModal}
        onClose={closeModal}
        openSignUp={openSignUpModal}
      />
      <SignUpModal
        isOpen={showSignUpModal}
        onClose={closeModal}
        openSignIn={openSignInModal}
      />
    </>
  );
};

export default Navbar;
