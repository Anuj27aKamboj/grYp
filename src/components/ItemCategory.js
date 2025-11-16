import React, { useState } from 'react'
import ItemListAccordion from './ItemListAccordion'

const ItemCategory = ({categoryData, showItems, setShowIndex}) => {

    const handleclick=()=>{
        setShowIndex()
    };
    // console.log(categoryData);
    // console.log(categoryData.itemCards);
  return (
    <div className=" bg-white mt-4 rounded-[10px] shadow-[0_0_8px_#94a3b8] px-8 py-4">
        <div className="w-full flex justify-between font-bold py-2 my-4 hover:cursor-pointer" onClick={()=>handleclick()}>
            <span >{categoryData.title} ({categoryData.itemCards.length})</span>
            <span className="text-3xl">{showItems?"˄":"˅"}</span>
        </div>
        <div>
            { showItems && <ItemListAccordion items={categoryData?.itemCards}/>}
        </div>
    </div>
  )
}

export default ItemCategory;