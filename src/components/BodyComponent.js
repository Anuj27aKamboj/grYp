import React, { useState, useEffect } from "react";
import { RestaurantCard, withPromotedLabel } from "./RestaurantCard";
import ShimmerCommponent from "./ShimmerCommponent";
import { resAPI, resAPI2 } from "../../utils/constants";
import { Link } from "react-router-dom";
import useInternetStatus from "../../utils/useInternetStatus";

export const BodyComponent = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState("");

  const internetStatus = useInternetStatus();

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(resAPI2);
    const jsonData = await response.json();

    setListOfRestaurants(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestaurantList(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  // Conditional Rendering
  // if(listOfRestaurants.length === 0){
  //   return <div>
  //       <ShimmerCommponent />
  //   </div>
  // }

  return listOfRestaurants.length === 0 ? (
    <ShimmerCommponent />
  ) : (
    <div className="mt-[120px]">
      <div className="fixed left-0 top-[110px] ml-2 text-[1.5rem] z-9999">
        <div>{internetStatus === true ? "🟢" : "🔴"}</div>
        {!internetStatus && (
          <div className="fixed inset-0 flex justify-center items-center backdrop-blur-sm z-10000">
            <div
              className="bg-[rgba(80,80,80,0.35)] border border-[rgba(255,255,255,0.15)]
           rounded-2xl px-[60px] py-10 text-center
           shadow-[0_8px_32px_rgba(0,0,0,0.4)]
           backdrop-blur-[25px]"
            >
              <h2 className="mb-2.5">Connection Error!</h2>
              <h4 className="font-normal opacity-85">
                Please check your internet connection and try again.
              </h4>
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-row w-[150px] my-2.5 mx-auto">
        <input
          type="text"
          data-testid= "searchInput"
          className="py-0.5 px-2.5 mx-[5px] border border-gray-300 rounded"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button
          className="py-[5px] px-2.5 mx-[5px] rounded-[10px] border-none 
           bg-slate-100 text-slate-900 hover:bg-slate-200 cursor-pointer"
          onClick={() => {
            console.log(searchText);
            const filteredRestaurant = listOfRestaurants.filter((restaurant) =>
              restaurant.info.name
                .toLowerCase()
                .includes(searchText.toLowerCase())
            );
            console.log(filteredRestaurant);
            setFilteredRestaurantList(filteredRestaurant);
          }}
        >
          Search
        </button>
      </div>
      <div className="">
        <button
          className="absolute right-0 top-[110px] m-2 p-3 rounded-[10px] border-none bg-slate-900 text-slate-100 hover:cursor-pointer"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (restaurant) => restaurant.info.avgRating > 4.4
            );
            setFilteredRestaurantList(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="flex flex-wrap justify-center w-9/12 py-[5px] px-5 mx-auto mt-[25px]">
        {filteredRestaurantList.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"restaurants/" + restaurant.info.id}
          >
            {restaurant.info.isOpen ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}{" "}
      </div>
    </div>
  );
};
