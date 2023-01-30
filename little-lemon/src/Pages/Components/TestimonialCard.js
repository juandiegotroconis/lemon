import React from "react";
import "./TestimonialCard.css";

function TestimonialCard(props) {
  const rating = [];

  for (var i = 0; i < props.rating; i++) {
    rating.push(<img src={require("../../icons_assets/star.png")} alt='' />);
  }
  return (
    <div className='TestimonialCard'>
      <p className='section-comment'>{props.name}</p>
      <div className='stars'>{rating}</div>
      <p className='section-comment'>{props.comment}</p>
    </div>
  );
}

export default TestimonialCard;
