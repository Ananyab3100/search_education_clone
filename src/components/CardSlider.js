import React from "react";
import Slider from "react-slick";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card";

import uni1 from "../assets/images/uni1.jpg";

import unilogo1 from "../assets/images/unilogo1.jpg";


// Custom Previous Arrow
const PreviousArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} bg-gray-800 p-2 rounded-full`}
      style={{ ...style, display: "block", left: "10px", zIndex: 1 }}
      onClick={onClick}
    >
      <IoChevronBackOutline className="text-white text-2xl" />
    </div>
  );
};

// Custom Next Arrow
const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} bg-gray-800 p-2 rounded-full`}
      style={{ ...style, display: "block", right: "10px", zIndex: 1 }}
      onClick={onClick}
    >
      <IoChevronForwardOutline className="text-white text-2xl" />
    </div>
  );
};

const CardSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Adjust the number of cards to show
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PreviousArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // Data for each card
  const cardData = [
    {
      image: uni1,
      logo: unilogo1,
      title: "University of Wollongong",
      location: "AUSTRALIA",
    },
    {
      image: uni1,
      logo: unilogo1,
      title: "Central Queensland University",
      location: "AUSTRALIA",
    },
    {
      image: uni1,
      logo: unilogo1,
      title: "Deakin University",
      location: "AUSTRALIA",
    },
    {
      image: uni1,
      logo: unilogo1,
      title: "University of Essex",
      location: "UNITED KINGDOM",
    },
  ];

  return (
    <div className="w-full py-8 px-4">
      <Slider {...settings}>
        {cardData.map((card, index) => (
          <div key={index} className="px-2">
            <Card
              image={card.image}
              logo={card.logo}
              title={card.title}
              location={card.location}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardSlider;
