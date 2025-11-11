import React, { useState, useEffect } from "react";
import { RestaurantCard } from "./RestaurantCard";
import ShimmerCommponent from "./ShimmerCommponent";
import { resAPI } from "../../utils/constants";
import { Link } from "react-router-dom";
import useInternetStatus from "../../utils/useInternetStatus";

export const BodyComponent = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState("");

  const internetStatus = useInternetStatus;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(resAPI);
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
          <Link key={restaurant.info.id} to={"restaurants/"+restaurant.info.id}><RestaurantCard resData={restaurant} /></Link>
        ))}{" "}
      </div>
      <img src={internetStatus}/>
    </div>
  );
};
