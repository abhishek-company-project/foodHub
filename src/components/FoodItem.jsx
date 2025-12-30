import React from "react";
import { NavLink } from "react-router";

function FoodItem(props) {
  const { item } = props;
  return (
    <div className="min-w-1/6 h-1/2">
      <NavLink to={`/collection/${item[0].id}`} className="w-full h-1/2 ">
        <img src={item[0].image} alt="fooditem"  />
      </NavLink>

      <NavLink to={`/collection/${item[1].id}`} className="w-full h-1/2 ">
        <img src={item[1].image} alt="fooditem"  />
      </NavLink>
    </div>
  );
}
  
export default FoodItem;
