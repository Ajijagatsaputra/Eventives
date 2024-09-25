import React from "react";

export default function BrandSection() {
  return (
    <section className="mt-[130px] flex flex-col items-center gap-10 sm:gap-8 px-4">
      {/* Header Section */}
      <div className="text-center max-w-xl">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#202E57] mb-4 sm:mb-6 font-proximanova2">
          Join these brands
        </h2>
        <p className="mt-2 text-gray-600">
          We&apos; ve had the pleasure of working with industry-defining brands.
          These are just some of them.
        </p>
      </div>

      {/* Brand Logo Section */}
      <div className="w-full sm:w-[80%]">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-8 gap-y-10 justify-items-center items-center">
          {[
            { src: "/assets/brand/spotify.png", alt: "Spotify" },
            { src: "/assets/brand/googlebrands.png", alt: "Google" },
            { src: "/assets/brand/stripe.png", alt: "Stripe" },
            { src: "/assets/brand/youtube.png", alt: "YouTube" },
            { src: "/assets/brand/microsoft.png", alt: "Microsoft" },
            { src: "/assets/brand/medium.png", alt: "Medium" },
            { src: "/assets/brand/zoom.png", alt: "Zoom" },
            { src: "/assets/brand/uber.png", alt: "Uber" },
            { src: "/assets/brand/grab.png", alt: "Grab" },
          ].map((brand, index) => (
            <img
              key={index}
              src={brand.src}
              alt={brand.alt}
              className="w-[100px] h-auto sm:w-[130px] object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
