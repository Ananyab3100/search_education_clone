import React from 'react'
import { useState,useEffect } from 'react'
import logoimg1 from "../assets/images/whitelogo.png"
import logoimg2 from "../assets/images/blacklogo.png"

const Navbar = () => {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 50) { // Adjust this value as needed
            setScrolled(true);
          } else {
            setScrolled(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);


  return (
    <div className={`fixed top-0 left-0 w-full h-24 text-sm flex justify-around items-center font-semibold text-gray-700 transition-all duration-300 ${scrolled ? 'bg-white ' : 'bg-transparent text-gray-800'} z-50`}>

     <img src={scrolled ? logoimg2 : logoimg1} className="h-12 transition-all duration-300" alt="Logo" />

     <div className="flex gap-4 justify-center items-center">
     <button className="py-2 transition-all duration-300 ease-in-out hover:border-b hover:border-orange-600 hover:text-orange-600 ">Home</button>
     <button className="py-2 transition-all duration-300 ease-in-out hover:border-b hover:border-orange-600 hover:text-orange-600 ">Find A Course</button>
     <button className="py-2 transition-all duration-300 ease-in-out hover:border-b hover:border-orange-600 hover:text-orange-600 ">Consult A Counsellor</button>
     <button className="py-2 transition-all duration-300 ease-in-out hover:border-b hover:border-orange-600 hover:text-orange-600 ">Our Services</button>
     <button className="py-2 transition-all duration-300 ease-in-out hover:border-b hover:border-orange-600 hover:text-orange-600 ">About Us</button>
     <div>
    <div>
    <button className="rounded-bl-full rounded-tl-full bg-orangecolor py-2 px-4 border-r-2 border-white hover:bg-gray-700 hover:text-white font-bold">Log In</button> 
    <button className="rounded-br-full rounded-tr-full bg-orangecolor py-2 px-4 hover:bg-gray-700 hover:text-white font-bold">Sign Up</button>  
    </div>
    
     </div>
     </div>
   
    </div>
  )
}

export default Navbar
