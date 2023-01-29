import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className='header'>
      <div className='text'>
        <p className='cta-text'>Little Lemon</p>
        <p className='paragraph'>Chicago</p>
        <p className='paragraph'>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <button className='button'>Reserve a table</button>
      </div>
      <img src={require("../icons_assets/restauranfood.jpg")} alt='' />
    </header>
  );
}

export default Header;
