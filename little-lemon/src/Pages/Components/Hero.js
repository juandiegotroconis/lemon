import React from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.css";

function Hero() {
  const navigate = useNavigate();

  return (
    <div className='Hero'>
      <div className='text'>
        <p className='cta-text'>Little Lemon</p>
        <p className='paragraph'>Chicago</p>
        <p className='paragraph'>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <button
          className='button'
          onClick={() => {
            navigate("/booking");
          }}
        >
          Reserve a table
        </button>
      </div>
      <img src={require("../../icons_assets/restauranfood.jpg")} alt='' />
    </div>
  );
}

export default Hero;
