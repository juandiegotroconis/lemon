import React from "react";
import { useNavigate } from "react-router-dom";
import "./BookingConfirmation.css";
import Nav from "./Nav";

function BookingConfirmation(props) {
  const navigate = useNavigate();
  return (
    <>
      <Nav sections={props.sections} />
      <div className='BookingConfirmation'>
        <h1>Your reservation has been confirmed!</h1>
        <div
          className='button'
          onClick={() => {
            navigate("/home");
          }}
        >
          Go to home
        </div>
      </div>
    </>
  );
}

export default BookingConfirmation;
