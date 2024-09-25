"use client";

import { useRouter } from "next/navigation";

const SignUp = () => {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/components/SignUpByName");
  };
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <div className="flex justify-end">
          <button
            aria-label="Close"
            className="text-gray-500 hover:text-gray-700"
          >
            &times;
          </button>
        </div>
        <h2 className="text-2xl font-semibold text-center mb-4">
          Sign up for free
        </h2>
        <p className="text-sm text-center text-gray-600 mb-6">
          Already have an account?{" "}
          <a
            href="/components/SignIn"
            className="text-blue-500 hover:underline"
          >
            Log in
          </a>
        </p>
        {/* Form dengan handleSubmit */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="sr-only">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email address"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Continue
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
            src="/assets/logo/logoGoogle.png" // Tambahkan ikon Google di sini
            alt="Google"
            className="w-5 h-5 mr-2"
          />
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default SignUp;
