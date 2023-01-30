import React from "react";
import Card from "./Card";
import "./Specials.css";

function Specials(props) {
  return (
    <div className='Specials'>
      <div className='title'>
        <p className='cta-text'>This weeks specials!</p>
        <button className='button'>Online menu</button>
      </div>
      <div className='content'>
        {props.specials.map((dish) => {
          return (
            <Card
              key={dish.title}
              img={dish.img}
              title={dish.title}
              price={dish.price}
              description={dish.description}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Specials;
