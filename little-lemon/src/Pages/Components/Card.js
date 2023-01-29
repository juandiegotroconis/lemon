import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className='Card'>
      <img src={props.img} alt='' className='card-img' />
      <div className='text'>
        <div className='card-header'>
          <p className='title'>{props.title}</p>
          <p className='price'>${props.price}</p>
        </div>
        <div className='description'>{props.description}</div>
        <div className='cta'>
          <p>Order a delivery</p>
          <img
            className='icon'
            src={require("../../icons_assets/Delivery Scooter.png")}
            alt=''
          />
        </div>
      </div>
    </div>
  );
}

export default Card;
