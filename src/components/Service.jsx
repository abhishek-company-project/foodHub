import React from 'react'
import { NavLink } from 'react-router'
import { FaArrowRight } from "react-icons/fa";

function Service(props) {
    const {service,location,imageUrl,discount}=props.serviceitem;
  return (
    <div className='w-[30%] h-[90%] px-3 py-4 pr-0 flex flex-col justify-between items-start mx-auto  bg-white rounded-4xl'>
        <div className='w-full flex flex-col gap-1 text-black '>
            <span className='text-3xl text-gray-800 font-bold uppercase ' >{service}</span>
            <span className='text-xl uppercase text-gray-400 '>{location}</span>
            <span className='uppercase text-[18px] text-orange-600 font-bold '>{discount}</span>
        </div>
        <NavLink to='/restaurant' className='w-full h-1/2 flex justify-between items-center p-1 object-cover cursor-pointer'>
            <span className="text-white border-2 p-2 text-xl rounded-full cursor-pointer bg-orange-600"><FaArrowRight /></span>
            <img src={imageUrl} alt="foodItem" className='w-1/2 h-full cursor-pointer border-2 ' />
        </NavLink>

    </div>
  )
}

export default Service