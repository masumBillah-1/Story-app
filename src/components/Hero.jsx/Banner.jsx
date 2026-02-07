import React from "react";

const Banner = () => {
  return (
    <div className="max-w-6xl mt-2 mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2">
        
        <div className="h-full">
          <img
            src="https://i.ibb.co.com/r2j9FC3j/Annotation-2026-02-07-203254-2.jpg"
            alt="Banner"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="p-8 flex flex-col justify-center">
          <span className="text-blue-600 text-sm font-semibold mb-2">
            ● EDITOR'S CHOICE
          </span>

          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            The Architecture of Tomorrow: Building Digital Sanctuaries
          </h1>

          <p className="text-gray-600 mb-6">
            In a world of constant noise and infinite notifications, we explore
            how designers are creating spaces for deep work and genuine human
            connection.
          </p>

          <div className="flex items-center justify-between">
            {/* Author */}
            <div className="flex items-center gap-3">
              <img
                src="https://i.pravatar.cc/40"
                alt="Author"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="text-sm font-semibold text-gray-800">
                  Julian Thorne
                </p>
                <p className="text-xs text-gray-500">
                  Oct 24 · 12 min read
                </p>
              </div>
            </div>

            {/* Read more */}
            <button className="text-blue-600 font-medium hover:underline">
              Read More →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
