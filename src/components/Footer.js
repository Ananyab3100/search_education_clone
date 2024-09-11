import React from 'react'
import logo1 from "../assets/images/whitelogo.png"
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="bg-blue-950  text-white py-12 font-sans px-5">
  <div className="container mx-auto flex flex-col ">
    
    {/* Subscribe Section */}
    <div className="flex justify-between">
        <div className="flex flex-col">
      <h3 className="text-3xl tracking-tighter font-semibold mb-4">Subscribe Our Newsletter</h3>
      <p className="mb-4">to receive course information as well as the latest news and contests in your mailbox.</p>
      </div>
      <form>
        <label htmlFor="email" className="block mb-2">Enter Your Email</label>
        <input 
          type="email" 
          id="email" 
          placeholder="Enter Your Email" 
          className="px-4 py-2 w-full text-black rounded mb-4"
        />
        <button className="bg-orange-500 px-6 py-2 rounded text-white">Send</button>
      </form>

    </div>

    {/* About Section */}

    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
    <div>
      <img src={logo1} alt="Logo" className="w-24 mb-4" />
      <p className="mb-4 text-sm">Facilitating students acquire perfect-fit education placements that ultimately change their lives!</p>
      <div className="flex space-x-4">
        {/* Social Icons */}
        <FaInstagram  className="w-6 text-2xl"/>
        <FaFacebook className="w-6 text-2xl"/>
        <FaWhatsapp className="w-6 text-2xl"/>
        <FaLinkedin className="w-6 text-2xl"/>
          
      </div>
    </div>


   <div className="flex space-x-14 ">
    {/* Quick Links Section */}
    <div>
      <h3 className="text-lg font-semibold mb-4">Company</h3>
      <ul className="space-y-2 text-sm">
        <li><a href="#find-course" className="hover:underline">Find A Course</a></li>
        <li><a href="#consult-counselor" className="hover:underline">Consult A Counselor</a></li>
        <li><a href="#career" className="hover:underline">Career</a></li>
        <li><a href="#services" className="hover:underline">Our Services</a></li>
        <li><a href="#about-us" className="hover:underline">About Us</a></li>
        <li><a href="#events" className="hover:underline">Events</a></li>
        <li><a href="#contact-us" className="hover:underline">Contact Us</a></li>
      </ul>
    </div>

    {/* Services Section */}
    <div>
      <h3 className="text-lg font-semibold mb-4">Services</h3>
      <ul className="space-y-2 text-sm">
        <li><a href="#student-visa" className="hover:underline">Student Visa</a></li>
        <li><a href="#employer-visa" className="hover:underline">Employer Visa 482</a></li>
        <li><a href="#family-sponsored" className="hover:underline">Family Sponsored Visa</a></li>
        <li><a href="#forex" className="hover:underline">Forex</a></li>
        <li><a href="#get-visa" className="hover:underline">Get Visa</a></li>
        <li><a href="#housing-partner" className="hover:underline">Housing Partner</a></li>
        <li><a href="#loans" className="hover:underline">Loans</a></li>
      </ul>
    </div>
  </div>

  {/* Footer Bottom Section */}
 
  </div>

  <div className="border-t border-gray-700 mt-12 pt-6">
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
      <p className="text-sm">© {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
      <ul className="flex space-x-4 text-sm">
        <li><a href="#terms" className="hover:underline">Terms & Conditions</a></li>
        <li><a href="#privacy" className="hover:underline">Privacy Policy</a></li>
        <li><a href="#site-map" className="hover:underline">Site Map</a></li>
      </ul>
    </div>
  </div>

  </div>
</footer>

    </div>
  )
}

export default Footer
