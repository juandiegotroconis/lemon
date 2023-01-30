import React from "react";
import "./About.css";

function About() {
  return (
    <div className='About'>
      <div className='text'>
        <p className='cta-text'>Little Lemon</p>
        <p className='paragraph'>Chicago</p>
        <p className='paragraph'>
          "We are a family owned Mediterranean restaurant, focused on
          traditional recipes served with a modern twist."
        </p>
      </div>
      <div className='img-container'>
        <img
          src={require("../../icons_assets/Mario and Adrian A.jpg")}
          alt=''
        />
        <img src={require("../../icons_assets/restaurant.jpg")} alt='' />
      </div>
    </div>
  );
}

export default About;
