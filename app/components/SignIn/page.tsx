"use client";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignIn = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <div className="flex justify-end">
          <button aria-label="Close" className="text-gray-500 hover:text-gray-700">
            &times;
          </button>
        </div>
        <h2 className="text-2xl font-semibold text-center mb-4">Sign in</h2>
        <p className="text-sm text-center text-gray-600 mb-6">
          Dont have an account?{" "}
          <a href="/components/SignUp" className="text-blue-500 hover:underline">
            Sign up
          </a>
        </p>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="sr-only">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email address"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4 relative">
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              type={passwordVisible ? "text" : "password"}
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-3 flex items-center text-gray-500"
            >
              {passwordVisible ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <div className="text-right mb-4">
            <a href="/components/ForgotPassword" className="text-sm text-blue-500 hover:underline">
              Forgot your password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Sign in
          </button>
        </form>
        <div className="my-4 flex items-center justify-center">
          <span className="border-t border-gray-300 w-1/4"></span>
          <span className="text-sm text-gray-500 mx-4">OR</span>
          <span className="border-t border-gray-300 w-1/4"></span>
        </div>
        <button
          type="button"
          className="w-full flex items-center justify-center border border-gray-300 py-2 rounded-md hover:bg-gray-100 transition duration-300"
        >
          <img
            src="/assets/logo/logoGoogle.png"
            alt="Google"
            className="w-5 h-5 mr-2"
          />
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default SignIn;