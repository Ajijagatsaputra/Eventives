import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa"; 

interface SignInModalProps {
  isOpen: boolean;
  onClose: () => void;
  openSignUp: () => void;
}

const SignInModal: React.FC<SignInModalProps> = ({
  isOpen,
  onClose,
  openSignUp,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  if (!isOpen) return null;

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validasi sederhana untuk email dan password
    if (!email || !password) {
      setErrorMessage("Please fill in both email and password.");
      return;
    }

    // Reset error message
    setErrorMessage("");

    // Logic otentikasi, misalnya:
    // panggil API untuk sign in atau lakukan sesuatu di sini
    console.log("Sign in with:", { email, password });

    // Jika berhasil login, tutup modal
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-sm relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          &times;
        </button>
        
        {/* Title and Switch to Sign Up */}
        <h2 className="text-center text-2xl font-semibold">Sign in</h2>
        <p className="text-center text-gray-500 mt-2">
          Don’t have an account?{" "}
          <span
            onClick={openSignUp}
            className="text-blue-500 cursor-pointer hover:underline"
          >
            Sign up
          </span>
        </p>

        {/* Error message */}
        {errorMessage && (
          <div className="text-red-500 text-sm text-center mt-2">
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="mt-4">
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Password Input with Toggle */}
          <div className="mt-4 relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <span
              onClick={togglePasswordVisibility}
              className="absolute right-4 top-3 text-gray-500 cursor-pointer"
            >
              {showPassword ? (
                <FaEyeSlash className="w-5 h-5" />
              ) : (
                <FaEye className="w-5 h-5" />
              )}
            </span>
          </div>

          {/* Forgot Password Link */}
          <p className="text-right text-sm text-blue-500 hover:underline mt-2">
            Forgot your password?
          </p>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full py-3 mt-4 text-white bg-blue-500 rounded-full hover:bg-blue-600 focus:outline-none"
          >
            Sign in
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center justify-center my-6">
          <span className="h-px w-full bg-gray-300"></span>
          <span className="px-2 text-gray-500">OR</span>
          <span className="h-px w-full bg-gray-300"></span>
        </div>

        {/* Google Sign In */}
        <button className="w-full py-3 flex items-center justify-center bg-white border border-gray-300 rounded-full hover:bg-gray-100">
          <img
            src="/assets/logo/logoGoogle.png"
            alt="Google Icon"
            className="w-5 h-5 mr-2"
          />
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default SignInModal;
