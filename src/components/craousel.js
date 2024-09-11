import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../assets/images/homepage1_img.jpg'

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
        <div
        className="h-5/6 bg-cover bg-center bg-no-repeat  relative" 
        style={{  backgroundImage: `url(${image1})`}} 
 >
  
    <div className="absolute inset-0  flex flex-col items-start justify-center text-white text-4xl font-bold  p-4 max-w-xl ">
            <div className="pl-12 leading-relaxed text-shadow-xl">
              Expanding your Horizons with  <span className="text-orange-600 ">Global Education</span>
            </div>
            <button className="rounded-full bg-orangecolor text-white font-semibold py-3 px-6 text-sm ml-12 mt-8 hover:bg-gray-700 transition-all duration-300 ease-in-out">Explore</button>
          </div>
</div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
  );
}

