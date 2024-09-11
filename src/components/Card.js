import React from 'react';
import { IoLocationOutline } from "react-icons/io5";

const Card = ({ image, logo, title, location }) => {
  return (
    <div className=" max-w-72 rounded-3xl overflow-hidden shadow-lg font-sans group ">
      {/* Background Image */}
      <div className="relative ">
        <img className="w-full transform transition-transform duration-500 ease-in-out group-hover:scale-110 cursor-pointer" src={image} alt={title} />

        {/* Circle Logo/Image */}
        <div className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2">
          <img src={logo} alt="Logo" className="w-20 h-20 rounded-full shadow-lg" />
        </div>
      </div>

      {/* Content */}
      <div className="px-3 pt-12 pb-6 text-center relative z-10">
        <div className="font-semibold text-lg mb-2 tracking-tight">{title}</div>
      </div>
      <div className="px-3 flex pb-6 items-center justify-center gap-2 relative z-10">
        <IoLocationOutline className="text-orange-600 text-xl" />
        <div className="text-gray-500">{location}</div>
      </div>
    </div>
  );
};

export default Card;
