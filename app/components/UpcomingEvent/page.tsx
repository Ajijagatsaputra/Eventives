"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function UpcomingEvents() {
  const events = [
    {
      title: "Wonder Girls 2010 Wonder Girls World Tour San Francisco",
      date: "Apr 14",
      place: "San Francisco",
      description:
        "We'll get you directly seated and inside for you to enjoy the show.",
      image: "/assets/events/events1.png",
      weekday: "Weekdays",
      eventType: "Concert",
      category: "Music",
    },
    {
      title: "JYJ 2011 JYJ Worldwide Concert Barcelona",
      date: "AUG 20",
      place: "Barcelona",
      description:
        "Directly seated and inside for you to enjoy the show.",
      image: "/assets/events/events2.png",
      weekday: "Wednesday",
      eventType: "Festival",
      category: "Art",
    },
    {
      title: "2011 Super JUnior World Tour New York City",
      date: "Apr 18",
      place: "New York City",
      description:
        "Directly seated and inside for you to enjoy the show.",
      image: "/assets/events/events3.png",
      weekday: "Wednesday",
      eventType: "Festival",
      category: "Art",
    },
    {
      title: "Wonder Girls 2010 World Tour San Francisco",
      date: "Apr 14",
      place: "San Francisco",
      description:
        "We'll get you directly seated and inside for you to enjoy the show.",
      image: "/assets/events/events4.png",
      weekday: "Monday",
      eventType: "Concert",
      category: "Music",
    },
    {
      title: "Wonder Girls 2010 World Tour San Francisco",
      date: "Apr 20",
      place: "San Francisco",
      description:
        "We'll get you directly seated and inside for you to enjoy the show.",
      image: "/assets/events/events5.png",
      weekday: "Monday",
      eventType: "Concert",
      category: "Music",
    },
    {
      title: "Wonder Girls 2010 World Tour San Francisco",
      date: "Apr 18",
      place: "San Francisco",
      description:
        "We'll get you directly seated and inside for you to enjoy the show.",
      image: "/assets/events/events6.png",
      weekday: "Tuesday",
      eventType: "Concert",
      category: "Music",
    },
  ];

  const [filter, setFilter] = useState({
    location: "All",
    weekday: "All",
    eventType: "All",
    category: "All",
  });

  // Handle filter changes
  const handleFilterChange = (
    filterType: keyof typeof filter,
    value: string
  ) => {
    setFilter((prevState) => ({
      ...prevState,
      [filterType]: value,
    }));
  };

  // Filter events based on filter state
  const filteredEvents = events.filter((event) => {
    return (
      (filter.location === "All" || event.place === filter.location) &&
      (filter.weekday === "All" || event.weekday === filter.weekday) &&
      (filter.eventType === "All" || event.eventType === filter.eventType) &&
      (filter.category === "All" || event.category === filter.category)
    );
  });

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-5">
        {/* Title and Filters */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-12">
          {" "}
          {/* Increased bottom margin */}
          {/* Title */}
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6 lg:mb-0">
            Upcoming Events
          </h2>
          {/* Filter Menus */}
          <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 w-full lg:w-auto">
            <select
              className="px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200 ease-in-out"
              value={filter.location}
              onChange={(e) => handleFilterChange("location", e.target.value)}
            >
              <option value="All">All Locations</option>
              <option value="San Francisco">San Francisco</option>
              <option value="Barcelona">Barcelona</option>
              <option value="New York City">New York City</option>
            </select>

            <select
              className="px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200 ease-in-out"
              value={filter.weekday}
              onChange={(e) => handleFilterChange("weekday", e.target.value)}
            >
              <option value="All">Weekdays</option>
              <option value="Monday">Monday</option>
              <option value="Tuesday">Tuesday</option>
              <option value="Wednesday">Wednesday</option>
              {/* Add more weekdays */}
            </select>

            <select
              className="px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200 ease-in-out"
              value={filter.eventType}
              onChange={(e) => handleFilterChange("eventType", e.target.value)}
            >
              <option value="All">Event Type</option>
              <option value="Concert">Concert</option>
              <option value="Festival">Festival</option>
              {/* Add more event types */}
            </select>

            <select
              className="px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200 ease-in-out"
              value={filter.category}
              onChange={(e) => handleFilterChange("category", e.target.value)}
            >
              <option value="All">Any Category</option>
              <option value="Music">Music</option>
              <option value="Art">Art</option>
              {/* Add more categories */}
            </select>
          </div>
        </div>

        {/* Event Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-transform duration-300 ease-in-out group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-4 relative z-10 flex">
                {/* Date Box */}
                <div className="bg-gray-100 text-center p-2 rounded-lg w-16 h-16 flex-shrink-0">
                  <p className="text-sm text-gray-500 uppercase">
                    {event.date.split(" ")[0]}
                  </p>
                  <p className="text-xl font-bold text-black">
                    {event.date.split(" ")[1]}
                  </p>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-gray-800 mb-1">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-1">{event.place}</p>
                  <p className="text-gray-600 text-sm">{event.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="flex justify-center items-center w-full mt-8">
          <Link href="load-more">
            <button className="px-10 py-4 text-lg font-bold text-center text-indigo-600 bg-white border-2 border-indigo-600 rounded-full shadow-lg hover:bg-indigo-600 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105">
              Load More
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
