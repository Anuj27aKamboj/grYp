import React from "react";
import { resList } from "./resList";
import { RestaurantCard } from "./RestaurantCard";
import { useState } from "react";

export const BodyComponent = () => {
   const [listOfRestaurants, setListOfRestaurants] = useState(resList)
  return (
    <div className="body">
      <div className="search">
        <span className="search-input">
          <input></input>
        </span>
        <button className="search-btn">Search</button>
      </div>
      <div className="filter">
        <button className="filter-btn" onClick={()=>{
          const filteredList = listOfRestaurants.filter((restaurant)=> restaurant.info.avgRating > 4.5);
          setListOfRestaurants(filteredList);
        }}>Top Rated Restaurant</button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}{" "}
      </div>
    </div>
  );
};
