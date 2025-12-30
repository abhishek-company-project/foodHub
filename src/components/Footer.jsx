import React from "react";
import { NavLink } from "react-router";

function Footer() {
  return (
    <div className="w-4/5 min-h-96 flex justify-between py-10 px-5 items-start gap-3 mx-auto my-8 bg-gray-300  ">
      <div className="h-full flex flex-col justify-start items-start p-2 ">
        <img
          src="https://media-assets.swiggy.com/portal/testing/seo-home/Group.svg"
          alt="swiggyLogo"
        />
        <span className="text-gray-700 font-medium">© 2025 Swiggy Limited</span>
      </div>
      <ul className="h-full flex flex-col  text-gray-700 gap-3">
        <li className="text-black text-xl font-bold">Company</li>
        <li>About us</li>
        <li>Swiggy Coroprate</li>
        <li>Careers</li>
        <li>Team</li>
        <li>Swiggy One</li>
        <li>Swiggy Instamart</li>
        <li>Swiggy Dineout</li>
        <li>Minis</li>
        <li>Pyng</li>
      </ul>
      <div className="min-h-90 flex flex-col justify-between items-start ">
        <ul className="min-h-50  flex flex-col text-gray-700 gap-3">
          <li className="text-black text-xl font-bold">Contact us</li>
          <li>Help and Support</li>
          <li>Partner with Us</li>
          <li>Ride with Us</li>
        </ul>
        <ul className="min-h-40 flex flex-col text-gray-700 gap-3">
          <li className="text-black text-xl font-bold">Legal</li>
          <li>Terms and Conditions</li>
          <li>Cookie Policy</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <ul className="h-full  flex flex-col text-gray-700 gap-3">
        <li className="text-black text-xl font-bold">Available In:</li>
        <li>Mumbai</li>
        <li>Delhi</li>
        <li>Ahmedabad</li>
        <li>Indore</li>
        <li>Jaipur</li>
        <li>Raipur</li>
      </ul>
      <div className="min-h-70 flex flex-col justify-between gap-4 items-center">
        <ul className="h-full flex flex-col  text-gray-700 gap-3">
          <li className="text-black text-xl font-bold">Life at Swiggy</li>
          <li>Explore with Swiggy</li>
          <li>Swiggy News</li>
          <li>Snackables</li>
        </ul>
        <div className="h-full  flex flex-col jusify-center items-start text-gray-700 gap-5">
          <span className="font-bold text-xl text-black ">Social Links</span>
          <ul className="h-full flex text-gray-700 gap-2">
            <li>
              <NavLink>
                <img
                  src="https://media-assets.swiggy.com/portal/testing/seo-home/Linkedin.svg"
                  alt="linkdln"
                />
              </NavLink>
            </li>
            <li>
              <NavLink>
                <img
                  src="https://media-assets.swiggy.com/portal/testing/seo-home/icon-instagram.svg"
                  alt="instagram"
                />
              </NavLink>
            </li>
            <li>
              <NavLink>
                <img
                  src="https://media-assets.swiggy.com/portal/testing/seo-home/icon-facebook.svg"
                  alt="facebook"
                />
              </NavLink>
            </li>
            <li>
              <NavLink>
                <img
                  src="https://media-assets.swiggy.com/portal/testing/seo-home/icon-pinterest.svg"
                  alt="pinterest"
                />
              </NavLink>
            </li>
            <li>
              <NavLink>
                <img
                  src="https://media-assets.swiggy.com/portal/testing/seo-home/Twitter.svg"
                  alt="twitter"
                />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
