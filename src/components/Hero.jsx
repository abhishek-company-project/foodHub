import React from "react";
import { NavLink } from "react-router";
import { FaLocationDot } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import Service from "./Service";
import foodImgleft from "../assets/Veggies_new.png";
import foodImgRight from '../assets/Sushi_replace.png'


function Hero() {
  const serviceList = [
    {
      service: "Home delivery",
      location: "from restaurants",
      discount: "upto 60% off",
      imageUrl:
        "https://images.pexels.com/photos/35072453/pexels-photo-35072453.jpeg",
    },
    {
      service: "instamart",
      location: "instant grocery",
      discount: "upto 60% off",
      imageUrl:
        "https://images.pexels.com/photos/35072453/pexels-photo-35072453.jpeg",
    },
    {
      service: "dineout",
      location: "eat out and save more",
      discount: "upto 50% off",
      imageUrl:
        "https://images.pexels.com/photos/35072453/pexels-photo-35072453.jpeg",
    },
  ];
  return (
    <div className="w-full h-screen px-0 py-5 flex flex-row justify-center items-center gap-5 bg-orange-500 relative ">
      <img src={foodImgleft} alt="dinner" className="w-[15%] h-3/5 absolute top-3 left-0" />
      <div className="w-8/10 h-full flex flex-col justify-center items-center gap-6 ">
        <span className="w-3/4 text-white text-center text-5xl font-bold">
          Order food & groceries. Discover best restaurants. Swiggy it!
        </span>
        <div className="w-4/5 flex justify-between items-center gap-3 ">
          <div className="w-2/5 h-15 bg-white  flex justify-around items-center rounded-2xl">
            <FaLocationDot className="text-orange-500" />
            <input
              type="text"
              className="w-[75%]"
              placeholder="Enter your delivery location"
            />
            <RiArrowDropDownLine className="text-4xl font-medium" />
          </div>
          <NavLink
            to="/search"
            className="w-3/5 h-15 p-3 bg-white  flex justify-around items-center rounded-2xl"
          >
            <input
              type="text"
              className="w-[90%] text-xl text-gray-900 "
              placeholder="Search for restaurant, item or more"
            />
            <CiSearch />
          </NavLink>
        </div>
        <div className="w-full h-3/5 flex flex-row justify-center items-center gap-3 ">
          {serviceList.map((serviceitem, index) => {
            return <Service key={index} serviceitem={serviceitem} />;
          })}
        </div>
      </div>
      <img src={foodImgRight} alt="dinner" className="w-[15%] h-3/5 absolute top-3 right-0 " />
    </div>
  );
}

export default Hero;
