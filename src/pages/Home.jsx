import React, { useState } from "react";
import { useRef } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FoodItem from "../components/FoodItem";
import foodImgRight from "../assets/Pizza.png";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import GroceryItem from "../components/GroceryItem";
import Restaurant from "../components/Restaurant";
import { NavLink } from "react-router";
import Footer from "../components/Footer";
import Authlayout from "../components/auth/Authlayout";

function Home() {
  const foodItemsArr = [
    [
      {
        id:101,
        name: "pizza",
        image:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Pizza.png",
      },
      {
        id:102,
        name: "cake",
        image:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Cake.png",
      },
    ],
    [
      {
        id:103,
        name: "biryani",
        image:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Biryani.png",
      },
      {
        id:104,
        name: "burger",
        image:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Burger.png",
      },
    ],
    [
      {
        id:105,
        name: "khichdi",
        image:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Khichdi.png",
      },
      {
        name: "noodles",
        image:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Noodles.png",
      },
    ],
    [
      {
        name: "momos",
        image:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Momo.png",
      },
      {
        name: "rolls",
        image:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Rolls.png",
      },
    ],
    [
      {
        name: "paratha",
        image:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Paratha.png",
      },
      {
        name: "ice%20cream",
        image:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Ice%20Cream.png",
      },
    ],
    [
      {
        name: "pasta",
        image:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Pasta.png",
      },
      {
        name: "rasmalai",
        image:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Rasmalai.png",
      },
    ],
    [
      {
        name: "pastry",
        image:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Pastry.png",
      },
      {
        name: "idli",
        image:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Idli.png",
      },
    ],
    [
      {
        name: "coffee",
        image:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Coffee.png",
      },
      {
        name: "jalebi",
        image:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Jalebi.png",
      },
    ],
    [
      {
        name: "salad",
        image:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Salad.png",
      },
      {
        name: "gulab%20jamun",
        image:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Gulab%20Jamun.png",
      },
    ],
    [
      {
        name: "pav%20bhaji",
        image:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Pav%20Bhaji.png",
      },
      {
        name: "dosa",
        image:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Dosa.png",
      },
    ],
  ];
  const groceryItemsArr = [
    {
      name: "Fresh Vegetables",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2025/5/14/43e3c412-4ca9-4894-82ba-24b69da80aa6_06c0d2a9-804c-4bf1-8725-7ebd234e144a",
    },
    {
      name: "Fresh Fruits",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2025/5/14/a1493d81-f21e-415f-9875-f78383590fc2_9f3f0f68-4fbe-40f6-8f5d-5472a03469bd",
    },
    {
      name: "Dairy, Bread and Eggs",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2025/5/14/6dea6676-ce07-45e6-b60c-a099c01c5462_6d33297a-5828-48ff-aa2a-c052ae97669e",
    },
    {
      name: "Rice, Atta and Dals",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2025/5/14/097900ca-5d2d-4bb0-8e54-aede1e58dfd8_eab3796c-ac17-48fd-bfc7-6356c6f89783",
    },
    {
      name: "Masalas and Dry Fruits",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2025/5/14/64714677-e6b6-41c1-b533-6644d43e55f7_76ef86af-0483-41a5-8387-37901bf4ca6a",
    },
    {
      name: "Oils and Ghee",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2025/5/14/8e48ee13-3b51-49ea-b765-5cf3e7a97c04_695caa8a-c2f6-4a1a-9672-53213fea21aa",
    },
    {
      name: "Munchies",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2025/5/14/8e48ee13-3b51-49ea-b765-5cf3e7a97c04_695caa8a-c2f6-4a1a-9672-53213fea21aa",
    },
    {
      name: "Sweet Tooth",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2024/7/6/83a9b71b-1db7-4cbe-a9f7-ead650d26326_3afbe8c8-f5c8-4dd7-8357-f5711f80646b",
    },
    {
      name: "Cold Drinks and Juices",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2024/7/6/37d399b1-52d2-47ef-bdd8-8951e51819fc_0361a93d-e864-49be-a57d-46c958eb7b56",
    },
    {
      name: "Biscuits and Cakes",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2024/7/6/76a7104c-0f11-4182-aa51-0d48efc2be7f_aae098f9-aaff-4504-a222-bf13595d58cd",
    },
    {
      name: "Instant and Frozen Food",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2024/7/6/76a7104c-0f11-4182-aa51-0d48efc2be7f_aae098f9-aaff-4504-a222-bf13595d58cd",
    },
    {
      name: "Meat and Seafood",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2025/5/14/25be4b2d-a9de-495e-a9a4-9a6d6a3d13c0_5f571281-eef0-4820-9982-d8bdd9af91c6",
    },
    {
      name: "Cereals and Breakfast",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2025/5/14/012beae1-c31a-4360-9b32-173080b64652_aa07a04e-5f2e-4c00-86f6-297344906f01",
    },
    {
      name: "Sauces and Spreads",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2024/7/6/e2f96940-2657-4a4b-a5e1-0c3413ba25cb_8b977351-a415-442a-bb9c-320e1642f740",
    },
    {
      name: "Tea, Coffee and More",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2025/5/14/5fc3d15a-26b0-41e0-93ab-39ada0f553c2_82e0ff9f-558c-45dd-af3e-fdc16d0aa471",
    },
    {
      name: "Cleaning Essentials",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2024/7/6/73a47bc4-c684-447f-9908-22da3ecd3ba2_c9948a61-3dca-4e29-82b4-31178d38746b",
    },
    {
      name: "Pharma and Hygiene",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2025/5/14/fc74f557-a203-4dba-8955-82d6c608e91e_7d2481f0-8614-400c-b25c-554a655c14c7",
    },
    {
      name: "Bath, Body and Hair",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2024/7/6/4342c814-6ff9-4bbe-a360-95200ad602a0_1905dc17-a04d-4a9e-9a4e-adde9b27f321",
    },
    {
      name: "Paan Corner",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2025/3/25/1eae2df9-95a5-40e5-a2c0-92bb4893637a_5e1e6c72-dde5-4a12-8bdf-c7cbc4b0644b",
    },
    {
      name: "Home and Kitchen",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2025/5/14/657a922d-067a-4e0b-b967-b3e0c7906fa9_485311db-2f22-4193-a05d-963f18a89150",
    },
    {
      name: "Office and Electricals",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2025/5/14/52a66c89-6516-489f-96ac-b15286900648_ebbfd2d1-9b36-4ce3-b08c-7378f1ca6d7d",
    },
  ];
  const restaurantsArr = [
    {
      name: "House of Candy",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2024/8/18/1d3b7151-be92-4f7a-b38b-fdc43e1ef281_20240818T103122936.jpg",
      rating: 3.8,
      type: "Dessert",
      location: "Chhoti Gwaltoli,Indore",
      price: 500,
      distance: 4.5,
      discount: "flat 10% off on pre booking",
      extraDiscount: 3,
    },
    {
      name: "Dosa Partner",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1685098373/0cd63a1236e00ae2082121283d3a6231.jpg",
      rating: 3.7,
      type: "South Indian",
      location: "Chhoti Gwaltoli,Indore",
      price: 700,
      distance: 3.1,
      discount: "flat 10% off on pre booking",
      extraDiscount: 2,
    },
    {
      name: "Saffron",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2024/10/3/b05b91e4-73f6-4cfc-ad32-83582dbba78b_image99c4be1fb26d742b4847a9c84c98fa1eb.JPG",
      rating: 3.9,
      type: "North Indian,Mughlai",
      location: "Chhoti Gwaltoli,Indore",
      price: 500,
      distance: 4.7,
      discount: "flat 10% off on pre booking",
      extraDiscount: 3,
    },
    {
      name: "House of Candy",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2024/8/18/1d3b7151-be92-4f7a-b38b-fdc43e1ef281_20240818T103122936.jpg",
      rating: 4.6,
      type: "Dessert",
      location: "Chhoti Gwaltoli,Indore",
      price: 500,
      distance: 4.9,
      discount: "flat 10% off on pre booking",
      extraDiscount: 3,
    },
    {
      name: "The Rocky's Cafe",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1672742133/ca035a5e57597bc8b7a32e2c869d7a5d.jpg",
      rating: 4.7,
      type: "Beverages,Fast Food",
      location: "Chhoti Gwaltoli,Indore",
      price: 900,
      distance: 3.5,
      discount: "flat 10% off on pre booking",
      extraDiscount: 2,
    },
    {
      name: "Jain Shree Sweets and Gajak",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2025/4/12/38423c58-c607-4a9c-b3a8-fe570ac84244_image27ff89e42544542e3a0e747b03e638fca.JPG",
      rating: 4.5,
      type: "Fast Food,Mangolian",
      location: "Chhoti Gwaltoli,Indore",
      price: 700,
      distance: 2.5,
      discount: "flat 10% off on pre booking",
      extraDiscount: 2,
    },
    {
      name: "Deuce",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2025/12/14/175586f7-b090-4679-8f13-5bac1daa30fe_image2af5e5e78b45f4ee29f4e4facffe408ed.JPG",
      rating: 3.4,
      type: "Multi Cusion",
      location: "Chhoti Gwaltoli,Indore",
      price: 900,
      distance: 4.5,
      discount: "flat 10% off on pre booking",
      extraDiscount: 3,
    },
    {
      name: "Nutritenic",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1669278113/5ddc4b402995b00f4d04169fccb5fa0f.jpg",
      rating: 3.8,
      type: "Continental",
      location: "Chhoti Gwaltoli,Indore",
      price: 500,
      distance: 4.5,
      discount: "flat 10% off on pre booking",
      extraDiscount: 3,
    },
    {
      name: "Tass Greens",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1675346369/2ac337db78b8aeef19f0d1b5ccaf3f43.webp",
      rating: 4.2,
      type: "Dessert",
      location: "Chhoti Gwaltoli,Indore",
      price: 600,
      distance: 4.5,
      discount: "flat 10% off on pre booking",
      extraDiscount: 3,
    },
    {
      name: "Chill-By Sarovar Portico",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1685098720/f07850de926446898c0a136911fa9957.jpg",
      rating: 3.6,
      type: "Dessert",
      location: "Chhoti Gwaltoli,Indore",
      price: 800,
      distance: 4.5,
      discount: "flat 10% off on pre booking",
      extraDiscount: 3,
    },
    {
      name: "Abhinav Cafe",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1693891567/f542aa304c84c161aa57eeac1f023c55.jpg",
      rating: 3.7,
      type: "Dessert",
      location: "Chhoti Gwaltoli,Indore",
      price: 700,
      distance: 4.5,
      discount: "flat 10% off on pre booking",
      extraDiscount: 3,
    },
    {
      name: "Destiny Cafe",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1707668018/6932b3c7d02ca64b9dda40cac8674c55.jpg",
      rating: 4.8,
      type: "Dessert",
      location: "Chhoti Gwaltoli,Indore",
      price: 500,
      distance: 4.5,
      discount: "flat 10% off on pre booking",
      extraDiscount: 3,
    },
  ];
  const cities = [
    "mumbai",
    "delhi",
    "indore",
    "jaipur",
    "Mumbai",
    "Delhi",
    "Bengaluru",
    "Chennai",
    "Hyderabad",
    "Pune",
    "Kolkata",
    "Jaipur",
    "Ahmedabad",
    "Surat",
  ];

  const foodScrollRef = useRef(null);
  const groceryScrollRef = useRef(null);
  const restaurantScrollRef = useRef(null);

  const scrollLeft = (ref) => {
    ref.current.scrollBy({
      left: -300,
    });
  };

  const scrollRight = (ref) => {
    ref.current.scrollBy({
      left: 300,
    });
  };

  const [authOpen, setAuthOpen] = useState(false);
const [authMode, setAuthMode] = useState("login");

const openLogin = () => {
  setAuthMode("login");
  setAuthOpen(true);
};

const openSignup = () => {
  setAuthMode("signup");
  setAuthOpen(true);
};

  return (
    <div className="w-full h-full border-2 flex flex-col justify-center items-center ">
      <Navbar openLogin={openLogin} />

    <Authlayout
      isOpen={authOpen}
      mode={authMode}
      close={() => setAuthOpen(false)}
      switchMode={setAuthMode}
    />

      <Hero />
      <div
        id="foodItems"
        className="w-4/5 h-1/2 flex flex-wrap flex-row justify-around items-center mx-auto my-5 "
      >
        <div className="w-full h-auto p-2 flex justify-between items-center ">
          <span className="text-2xl text-black font-bold">
            Order our best food options
          </span>
          <span className="w-[10%] flex flex-row justify-around items-center p-5 ">
            <a
              onClick={() => scrollLeft(foodScrollRef)}
              className="cursor-pointer bg-white px-4 py-2 rounded-full shadow-lg"
            >
              <FaArrowLeft />
            </a>
            <a
              onClick={() => scrollRight(foodScrollRef)}
              className="cursor-pointer bg-white px-4 py-2 rounded-full shadow-lg"
            >
              <FaArrowRight />
            </a>
          </span>
        </div>
        <div
          ref={foodScrollRef}
          className="w-full h-3/5 flex gap-3 overflow-x-scroll hide-scrollbar scroll-smooth items-center mx-auto"
        >
          {foodItemsArr.map((item, index) => {
            return <FoodItem key={index} item={item} />;
          })}
        </div>
      </div>
      <div
        id="groceryItems"
        className="w-4/5 h-1/2 flex flex-wrap flex-row justify-around items-center mx-auto my-5 "
      >
        <div className="w-full h-auto p-2 flex justify-between items-center ">
          <span className="text-2xl text-black font-bold">
            Shop groceries on Instamart
          </span>
          <span className="w-[10%] flex flex-row justify-around items-center p-5 ">
            <a
              onClick={() => scrollLeft(groceryScrollRef)}
              className="cursor-pointer bg-white px-4 py-2 rounded-full shadow-lg"
            >
              <FaArrowLeft />
            </a>
            <a
              onClick={() => scrollRight(groceryScrollRef)}
              className="cursor-pointer bg-white px-4 py-2 rounded-full shadow-lg"
            >
              <FaArrowRight />
            </a>
          </span>
        </div>
        <div
          ref={groceryScrollRef}
          className="w-full h-3/5 flex gap-10 overflow-x-scroll hide-scrollbar scroll-smooth items-center mx-auto"
        >
          {groceryItemsArr.map((item, index) => {
            return <GroceryItem key={index} item={item} />;
          })}
        </div>
      </div>
      <div
        id="restaurants"
        className="w-4/5 h-1/2 flex flex-wrap flex-row justify-around items-center mx-auto my-5 "
      >
        <div className="w-full h-auto p-2 flex justify-between items-center ">
          <span className="text-2xl text-black font-bold">
            Discover best restaurants on Dineout
          </span>
          <span className="w-[10%] flex flex-row justify-around items-center p-5 ">
            <a
              onClick={() => scrollLeft(restaurantScrollRef)}
              className="cursor-pointer bg-white px-4 py-2 rounded-full shadow-lg"
            >
              <FaArrowLeft />
            </a>
            <a
              onClick={() => scrollRight(restaurantScrollRef)}
              className="cursor-pointer bg-white px-4 py-2 rounded-full shadow-lg"
            >
              <FaArrowRight />
            </a>
          </span>
        </div>
        <div
          ref={restaurantScrollRef}
          className="w-full h-3/5 flex gap-10 overflow-x-scroll hide-scrollbar scroll-smooth items-center mx-auto"
        >
          {restaurantsArr.map((item, index) => {
            return <Restaurant key={index} restaurant={item} />;
          })}
        </div>
      </div>
      <div className="w-full max-h-70 border-2 ">
        <img
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/seo/App_download_banner.png"
          alt="swiggy"
        />
      </div>
      <div className="w-4/5 h-1/2 flex flex-col justify-start p-3 items-start gap-3 mx-auto my-5 ">
        <span className="text-2xl font-bold">Cities with food delivery</span>
        <div className="w-full h-auto flex flex-wrap justify-between items-center gap-2">
          {cities.map((city, index) => {
            return (
              <NavLink to={`/city/${city}`}
                key={index}
                className="min-w-[24%] h-20  flex items-center justify-center text-center
                   border border-gray-300 rounded-2xl
                   font-medium text-gray-800 "
              >
                Order food online in <br/> {city}
              </NavLink>
            );
          })}
        </div>
      </div>
       <div className="w-4/5 h-1/2 flex flex-col justify-start p-3 items-start gap-3 mx-auto my-5 border-2 ">
        <span className="text-2xl font-bold">Cities with grocery delivery</span>
        <div className="w-full h-auto flex flex-wrap justify-between items-center gap-2">
          {cities.map((city, index) => {
            return (
              <NavLink to={`/instamart/city/${city}`}
                key={index}
                className="min-w-[24%] h-20  flex items-center justify-center text-center
                   border border-gray-300 rounded-2xl
                   font-medium text-gray-800 "
              >
                Order grocery delivery in <br/> {city}
              </NavLink>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
