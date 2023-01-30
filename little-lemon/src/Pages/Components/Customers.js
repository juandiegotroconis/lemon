import React from "react";
import "./Customers.css";
import TestimonialCard from "./TestimonialCard";

function Customers(props) {
  return (
    <div className='Customers'>
      <div className='cta-text'>Testimonials</div>
      <div className='content'>
        {props.reviews.map((customer) => {
          return (
            <TestimonialCard
              key={customer.name}
              name={customer.name}
              rating={customer.rating}
              comment={customer.comment}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Customers;
