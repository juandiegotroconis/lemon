import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BookingForm.css";

function BookingForm(props) {
  const navigate = useNavigate();
  const [booking, setBooking] = useState({
    date: "",
    time: "",
    guests: "",
    occassion: "",
  });

  return (
    <div className='BookingForm'>
      <h1>Book Now</h1>
      <form id='booking-form'>
        <label htmlFor='res-date'>Choose date</label>
        <input
          type='date'
          id='res-date'
          onChange={(e) => {
            props.dispatch({ date: e.target.value });
            setBooking({ ...booking, date: e.target.value });
          }}
          value={booking.date}
        />
        <label htmlFor='res-time'>Choose time</label>
        <select
          id='res-time'
          onChange={(e) => {
            setBooking({ ...booking, time: e.target.value });
          }}
          value={booking.time}
        >
          {props.availableTimes.list
            ? props.availableTimes.list.map((time) => {
                return (
                  <option key={time} value={time}>
                    {time}
                  </option>
                );
              })
            : ""}
        </select>
        <label
          htmlFor='guests'
          aria-valuenow={booking.guests}
          aria-valuemin='1'
          aria-valuemax='10'
        >
          Number of guests
        </label>
        <input
          type='number'
          placeholder='1'
          min='1'
          max='10'
          id='guests'
          onChange={(e) => {
            setBooking({ ...booking, guests: e.target.value });
          }}
          value={booking.guests}
        />
        <label htmlFor='occasion'>Occasion</label>
        <select
          id='occasion'
          onChange={(e) => {
            setBooking({ ...booking, occassion: e.target.value });
          }}
          value={booking.occassion}
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <input
          type='submit'
          value='Make Your reservation'
          onClick={(e) => {
            e.preventDefault();
            if (props.submit()) {
              navigate("/booking-confirmation");
            }
          }}
        />
      </form>
    </div>
  );
}

export default BookingForm;
