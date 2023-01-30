import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div className='Hero'>
      <div className='text'>
        <p className='cta-text'>Little Lemon</p>
        <p className='paragraph'>Chicago</p>
        <p className='paragraph'>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <button className='button'>Reserve a table</button>
      </div>
      <img src={require("../../icons_assets/restauranfood.jpg")} alt='' />
    </div>
  );
}

export default Hero;
