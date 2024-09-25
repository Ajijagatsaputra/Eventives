"use client";
import { useRouter } from "next/navigation";

const ForgotPassword = () => {
  const router = useRouter(); // Inisialisasi useRouter

  // Fungsi untuk menangani form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Mencegah reload halaman
    // Navigasi ke halaman password setelah submit
    router.push("/components/ChangePassword");
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
          Forgot password
        </h2>
        <p className="text-sm text-center text-gray-600 mb-6">
          Please enter the email you use to sign in, or back to {""}
          <a
            href="/components/SignIn"
            className="text-blue-500 hover:underline"
          >
            Sign In
          </a>
        </p>
        {/* Tambahkan event onSubmit ke form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="sr-only">
              Fullname
            </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Enter your email address"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Request reset link
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

export default ForgotPassword;
