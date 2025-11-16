import React from "react";
import { imgURL } from "../../utils/constants";

export const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, sla, locality } = resData.info;

  return (
    <div className="w-[225px] h-[275px] rounded-t-[15px] transition-transform duration-300 ease-in-out m-[5px] mx-6 hover:scale-90 hover:cursor-pointer">
      <div className="res-info relative">
        <img className="w-full h-40 rounded-t-[15px] shadow-[2px_2px_10px_#a1a1aa]"alt="res logo" src={imgURL + cloudinaryImageId} />
        <h3 className="relative -top-6 z-1 w-full text-sm h-[25px] font-extrabold overflow-hidden wrap-break-word text-[#fafafa] bg-linear-to-t from-black to-transparent py-0.5 px-[5px]">{name}</h3>
      </div>
      <div className="w-full h-[110px] py-2.5 px-[5px] relative top-[-30px]">
        <h5 className="h-5 text-sm overflow-hidden wrap-break-word">{cuisines.join(", ")}</h5>
        <h5 className="h-5 text-sm overflow-hidden wrap-break-word">{avgRating}  ☆</h5>
        <h5 className="h-5 text-sm overflow-hidden wrap-break-word">Delivery: {sla.deliveryTime} min</h5>
        <h5 className="h-5 text-sm overflow-hidden wrap-break-word">{locality}</h5>
      </div>
    </div>
  );
};

//Higher Order Component

// imput- RestaurantCard => RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard)=>{
  return(props)=>{
    return (
      <div className="relative inline-block">
        <label className="absolute bg-slate-900 text-white rounded-[10px] px-3.5 m-[5px] mx-3.5 my-1 z-1001 shadow-md">Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

