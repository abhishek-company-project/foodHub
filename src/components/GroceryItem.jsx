import React from "react";
import { NavLink } from "react-router";

function GroceryItem(props) {
  const { item } = props;
  return (
    <div className="min-w-1/7 h-1/2 flex flex-col justify-between items-center gap-3 ">
      <NavLink  to={`/${item.name}`} className="w-40 h-40 ">
        <img src={item.image} alt="fooditem" className="w-full h-full object-contain" />
      </NavLink>
      <span className="text-xl h-20 w-full  text-gray-800 font-bold text-center">
        {item.name}
      </span>
    </div>
  );
}

export default GroceryItem;

