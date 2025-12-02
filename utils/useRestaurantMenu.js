import React, {useEffect, useState} from 'react'
import { menuAPI, menuAPI3 } from './constants';


const useRestaurantMenu = (resId) => {
    
    const [resInfo, setResInfo] = useState(null);

    useEffect(()=>{
        fetchMenuData();
    },[])

  const fetchMenuData=async()=>{
        // const menuData = await fetch(menuAPI3+resId);
        const menuData = await fetch(menuAPI);
        const menuJSON = await menuData.json();
        console.log(menuJSON);
        setResInfo(menuJSON.data)
    };

    return resInfo
}

export default useRestaurantMenu