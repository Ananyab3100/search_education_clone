import React from 'react';
import image1 from '../assets/images/homepage1_img.jpg';
import Searchbar from './Searchbar';

const Home = () => {
  return (
    <div className="relative h-screen w-screen font-sans">
      <div
        className="h-5/6 w-full bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: `url(${image1})` }}
      >
        <div className="absolute inset-0 flex flex-col items-start justify-center gap-0 text-white text-4xl font-bold p-4 max-w-xl">
          <div className="pl-12 leading-relaxed text-shadow-xl">
            Expanding your Horizons with <span className="text-orange-600">Global Education</span>
          </div>
          <button className="rounded-full bg-orangecolor text-white font-semibold py-3 px-6 text-sm ml-12 mt-8 hover:bg-gray-700 transition-all duration-300 ease-in-out">
            Explore
          </button>
        </div>
      </div>
      <Searchbar />
    </div>
  );
};

export default Home;
