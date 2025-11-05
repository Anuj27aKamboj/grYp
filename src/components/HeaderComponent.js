import React, { useState } from "react";
import { Link } from "react-router-dom";

export const HeaderComponent = () => {
  const [loginBtn, setLoginBtn] = useState("login");

  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo-img"
          src="https://github.com/Anuj27aKamboj/grYp/blob/main/public/image-new.jpg?raw=true"
          alt="logo image"
        />
        <h1>grYp</h1>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            Cart
          </li>
          <button
            className="login-btn"
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
