import React from "react";
import "./About.css";

function About() {
  return (
    <div className='About' id='about-section'>
      <div className='text'>
        <p className='cta-text'>Little Lemon</p>
        <p className='paragraph'>Chicago</p>
        <p className='paragraph'>
          "Established in the heart of Chicago, our Mediterranean restaurant has
          a rich history dating back several years. What started as a small
          family-owned eatery has now grown into a beloved establishment known
          for its authentic cuisine and warm hospitality. From the very
          beginning, our focus has been on using the freshest ingredients to
          create traditional dishes with a contemporary twist. Over the years,
          we have built a loyal following of customers who appreciate the care
          we put into every dish we prepare."
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
