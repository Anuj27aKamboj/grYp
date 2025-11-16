import React, { useState } from "react";
import { Link } from "react-router-dom";

export const HeaderComponent = () => {
  const [loginBtn, setLoginBtn] = useState("login");

  return (
    <div className="box-border flex bg-white justify-between text-slate-900 px-[15px] py-0 w-[99%] h-20 m-2 rounded-[15px] items-center fixed top-0 z-1001 shadow-[0_0_10px_#94a3b8]">
      <div className="w-[30%] flex items-center font-extrabold">
        <img
          className="h-[50px] rounded-[15px] ml-[50px] mr-[15px]"
          src="https://github.com/Anuj27aKamboj/grYp/blob/main/public/image-new.jpg?raw=true"
          alt="logo image"
        />
        <h1 className="text-4xl">grYp</h1>
      </div>
      <div className="pr-1.5">
        <ul className="flex justify-between items-center list-none p-[5px]">
          <li className="py-2.5 px-3.5 m-2.5 font-black rounded-[15px] hover:bg-slate-200 cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="py-2.5 px-3.5 m-2.5 font-black rounded-[15px] hover:bg-slate-200 cursor-pointer">
            <Link to="/about">About Us</Link>
          </li>
          <li className="py-2.5 px-3.5 m-2.5 font-black rounded-[15px] hover:bg-slate-200 cursor-pointer">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="py-2.5 px-3.5 m-2.5 font-black rounded-[15px] cursor-pointer text-lime-500 hover:text-black hover:bg-lime-500">
            <Link to="/qwik">Qwik</Link>
          </li>
          <li className="py-2.5 px-3.5 m-2.5 font-black rounded-[15px] hover:bg-slate-200 cursor-pointer">
            Cart
          </li>
          <button
            className="py-2.5 px-3.5 m-2.5 rounded-[15px] border-none bg-slate-900 text-slate-100"
            onClick={() => {
              loginBtn === "login"
                ? setLoginBtn("logout")
                : setLoginBtn("login");
            }}
          >
            {loginBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};
