import React from 'react'
import CardSlider from './CardSlider'

const SearchUniversitySection = () => {
  return (
    <div className="mt-6 mb-6 ">
        <div className="font-sans ml-10">
            <div className="text-sm text-gray-400 font-bold tracking-wider my-2">OUR POPULAR</div>
            <div className="text-2xl font-bold tracking-tighter my-2">Search <span className="font-bold text-orange-600 tracking-tighter">Universities</span></div>
        </div>
       <CardSlider/>

    </div>
  )
}

export default SearchUniversitySection
