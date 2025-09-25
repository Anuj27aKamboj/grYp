import React from "react";

export const HeaderComponent = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo-img" src="https://github.com/Anuj27aKamboj/grYp/blob/main/public/image-new.jpg?raw=true" alt="logo image" />
        <h1>grYp</h1>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
