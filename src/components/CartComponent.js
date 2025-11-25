import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemListAccordion from "./ItemListAccordion";
import { clearCart } from "../../utils/redux/cartSlice";

const CartComponent = () => {
  const cartItems = useSelector((store)=> store.cart.items); //Always subscribe to the correct portion of the store

  const dispatch = useDispatch();

  const handleClearCart =()=>{
    //Dispatch an action
    dispatch(clearCart());
  }

  return (
    <div className="w-6/12 p-5 mx-auto mt-[100px] text-center">
      <div className="w-full mx-auto my-5 ">
        <h1 className="font-extrabold text-3xl">Cart</h1>
        <button
          className="absolute right-0 top-[110px] m-2 p-3 rounded-[10px] border-none text-4xl hover:cursor-pointer"
          onClick={()=>handleClearCart()}
        >
          🗑️
        </button>
      </div>
      <div></div>
      <div>
        <ItemListAccordion items={cartItems} />
      </div>
      <div>
        {cartItems.length === 0 && <h2 className="text-gray-500">Uh-oh! It looks so empty here. Add tasty meals to your cart 😋</h2>}
      </div>
    </div>
  );
};

export default CartComponent;
