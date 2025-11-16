import { useState } from "react";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import ItemCategory from "./ItemCategory";
import ShimmerCommponent from "./ShimmerCommponent";
import { useParams } from "react-router";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const [showIndex, setShowIndex] = useState(0);

  //   console.log(resId);

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <ShimmerCommponent />;
  }

  const { name, avgRatingString, totalRatingsString, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  //   console.log(itemCards);

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  //   console.log(categories);

  return (
    <div className="p-5 w-6/12 justify-center mx-auto mt-[100px] text-slate-900">
      <div className="text-center mb-4">
        <h1 className="font-extrabold text-3xl mb-4">{name}</h1>
        <div className="font-bold text-[13px]">
          {/* <span className="font-bold">{cuisines.join(", ")} </span> */}
          <span>
            ✪ {avgRatingString}({totalRatingsString}){" "}
          </span>
          <span>
            <span className="text-slate-500"> • </span>
            {costForTwoMessage}
          </span>
        </div>
      </div>
      <div className="mt-8">
        {categories.map((category, index) => (
          <ItemCategory
            key={category?.card?.card?.title}
            categoryData={category?.card?.card}
            showItems={index === showIndex}
            setShowIndex={()=>setShowIndex(prevIndex => prevIndex === index? null:index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
