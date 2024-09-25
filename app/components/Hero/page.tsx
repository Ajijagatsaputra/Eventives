import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-[#ED4690] to-[#5522CC] text-white py-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#ED4690] to-transparent opacity-20 z-0"></div>
      <div className="container mx-auto relative z-10 px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Image Section */}
        <div className="md:w-1/2 w-full flex justify-center md:justify-start animate-fadeInLeft">
          <Image
            src="/assets/logo/bgHeader.png"
            width={640}
            height={476}
            alt="bgHeader"
            className="rounded-lg"
          />
        </div>

        {/* Text Section */}
        <div className="md:w-1/2 w-full text-center md:text-left md:pl-10 animate-fadeInRight">
          <h2 className="text-5xl font-bold mb-4 max-md:text-3xl font-proximanova2 font-normaltracking-wide">
            SBS MTV The Kpop Show Ticket Package
          </h2>
          <p className="mb-8 max-md:text-base text-lg font-proximanova2 font-normal">
            Look no further! Our SBS The Show tickets are the simplest way for
            you to experience a live K-pop recording.
          </p>

          {/* Buttons */}
          <div className="space-x-4">
            {/* Link for Get Ticket */}
            <Link href="/ticket">
              <button className="px-6 py-4 bg-pink-600 rounded-full shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-110 hover:bg-pink-500 focus:outline-none focus:ring-4 focus:ring-pink-300 max-md:px-8 max-md:py-3 font-DM-Sans">
                Get Ticket
              </button>
            </Link>

            {/* Link for Learn More */}
            <Link href="/learn-more">
              <button className="px-6 py-3 border-2 border-white rounded-full shadow-lg transition-all duration-300 ease-in-out hover:bg-white hover:text-purple-800 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-purple-300 max-md:px-8 max-md:py-3 font-DM-Sans">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
