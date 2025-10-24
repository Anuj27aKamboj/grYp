import React, { useState, useEffect } from "react";
import { RestaurantCard } from "./RestaurantCard";
import ShimmerCommponent from "./ShimmerCommponent";

export const BodyComponent = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204&lng=73.8567&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await response.json();

    setListOfRestaurants(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurantList(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    
  };

  // Conditional Rendering
  // if(listOfRestaurants.length === 0){
  //   return <div>
  //       <ShimmerCommponent />
  //   </div>
  // }

  return listOfRestaurants.length === 0 ? (<ShimmerCommponent />) : (
    <div className="body">
      <div className="search">
        <input
          type="text"
          className="search-input"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button className="search-btn" onClick={() => {
          console.log(searchText);
          const filteredRestaurant = listOfRestaurants.filter((restaurant)=>restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()));
          console.log(filteredRestaurant);
          setFilteredRestaurantList(filteredRestaurant);
        }}>
          Search
        </button>
      </div>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (restaurant) => restaurant.info.avgRating > 4.5
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurantList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}{" "}
      </div>
    </div>
  );
};
