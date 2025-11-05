import React, { useEffect, useState } from 'react'
import { menuAPI} from '../utils/constants';
import ShimmerCommponent from './components/ShimmerCommponent';
import { useParams } from 'react-router';

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);

    const {resId} = useParams();

    console.log(resId);

    useEffect(()=>{
        fetchMenuData();
    },[])

    const fetchMenuData=async()=>{
        const menuData = await fetch(menuAPI);
        const menuJSON = await menuData.json();
        console.log(menuJSON);
        setResInfo(menuJSON.data)
    };

    if(resInfo === null){
    return <ShimmerCommponent />};

    const{name, cuisines, cloudinaryImageId, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;

    const {itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    console.log(itemCards);


  return (
    <div className='res-menu'>
        <div className='menu-info'>
            <h1>{name}</h1>
            <div><span>{cuisines.join(", ")} </span><span>- {costForTwoMessage}</span></div>
        </div>
        <div className='menu-items'>
            <ul>
                {itemCards.map(menuItem=><li key={menuItem?.card?.info?.name}>{menuItem?.card?.info?.name} - {"Rs. "} {menuItem?.card?.info?.price/100 || menuItem?.card?.info?.defaultPrice/100}</li>)}
            </ul>
        </div>
        
    </div>
  )
};

export default RestaurantMenu