import React from 'react';
import { LuSearch } from 'react-icons/lu';

const Searchbar = () => {
  return (
    <div className="absolute inset-x-0 bottom-0 flex justify-center">
      <div className="w-3/4 h-24 bg-white rounded-3xl shadow-xl flex items-center justify-around px-6 py-4 -translate-y-1/2">
        {/* Text and dropdown */}
        <div className="pr-20 border-r-2 border-gray-400 font-bold ">
          SEARCH YOUR DREAM COURSE
        </div>
        <div className="pr-20  border-r-2 border-gray-400">
          Course
        </div>
        <input
          className="text-sm text-gray-400 min-w-80 border-none focus:outline-none focus:border-none"
          placeholder="Search Courses..."
        />
        <button className="bg-orange-600 rounded-lg h-14 w-14 flex items-center justify-center hover:bg-gray-700 transition-colors duration-300">
          <LuSearch className="text-white text-xl" />
        </button>
      </div>
    </div>
  );
};

export default Searchbar;
