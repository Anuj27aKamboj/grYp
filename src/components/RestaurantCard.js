import React from "react";

export const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, sla } = resData.info;
  const imgURL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

  return (
    <div className="res-card">
      <div className="res-info">
        <img alt="res logo" src={imgURL + cloudinaryImageId} />
        <h3>{name}</h3>
      </div>
      <div className="res-content">

        <h5>{cuisines.join(", ")}</h5>
        <h5>{avgRating}  ☆</h5>
        <h5>Delivery: {sla.deliveryTime} min</h5>
      </div>
    </div>
  );
};
