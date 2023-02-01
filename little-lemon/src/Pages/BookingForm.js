import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BookingForm.css";
import Nav from "./Nav";

function BookingForm(props) {
  const navigate = useNavigate();
  const [booking, setBooking] = useState({
    date: "",
    time: "",
    guests: 0,
    occassion: "",
  });
  const [validations, setValidations] = useState({
    date: false,
    time: false,
    guests: false,
    occassion: false,
  });
  const [touched, setTouched] = useState({
    date: false,
    time: false,
    guests: false,
    occassion: false,
  });

  const submit = () => {
    if (Object.values(validations).some((val) => val)) {
      return undefined;
    }
  };

  return (
    <>
      <Nav sections={props.sections} />
      <div className='BookingForm'>
        <p className='cta-text'>Book a table now!</p>
        <form id='booking-form'>
          <label htmlFor='res-date'>Choose date</label>
          <input
            type='date'
            id='res-date'
            onChange={(e) => {
              props.dispatch({ date: e.target.value });
              setValidations({
                ...validations,
                date:
                  new Date(
                    booking.time
                      ? `${e.target.value} ${booking.time}`
                      : `${e.target.value} 00:00`
                  ).getTime() >= new Date().getTime(),
              });
              setBooking({ ...booking, date: e.target.value });
            }}
            onBlur={() => {
              setTouched({
                ...touched,
                date: true,
              });
            }}
            value={booking.date}
            style={{
              border:
                touched.date && touched.time && !validations.date
                  ? "solid red 1.5px"
                  : "",
            }}
            required
          />
          {
            <span
              style={{
                display:
                  touched.date && touched.time && !validations.date
                    ? ""
                    : "none",
              }}
            >
              {booking.date
                ? "You can't make a reservation in the past!"
                : "Please choose a valid date"}
            </span>
          }

          <label htmlFor='res-time'>Choose time</label>
          <select
            id='res-time'
            onChange={(e) => {
              setBooking({ ...booking, time: e.target.value });
              setValidations({
                ...validations,
                time: props.availableTimes.list.some(
                  (time) => time === e.target.value
                ),
                date:
                  new Date(
                    e.target.value
                      ? `${booking.date} ${e.target.value}`
                      : `${booking.date} 00:00`
                  ).getTime() >= new Date().getTime(),
              });
            }}
            onBlur={() => {
              setTouched({
                ...touched,
                time: true,
              });
            }}
            value={booking.time}
            style={{
              border:
                touched.time && !validations.date ? "solid red 1.5px" : "",
            }}
            required
          >
            <option />
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
          {
            <span
              style={{
                display:
                  touched.date && touched.time && !validations.date
                    ? ""
                    : "none",
              }}
            >
              {booking.time
                ? "You can't make a reservation in the past!"
                : "Please choose a valid time"}
            </span>
          }

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
              setValidations({
                ...validations,
                guests: e.target.value > 0 && e.target.value <= 10,
              });
            }}
            onBlur={() => {
              setTouched({
                ...touched,
                guests: true,
              });
            }}
            value={booking.guests}
            style={{
              border:
                touched.guests && !validations.guests ? "solid red 1.5px" : "",
            }}
            required
          />
          {
            <span
              style={{
                display: touched.guests && !validations.guests ? "" : "none",
              }}
            >
              {"You can have from 1 up to 10 guests!"}
            </span>
          }

          <label htmlFor='occasion'>Occasion</label>
          <select
            id='occasion'
            onChange={(e) => {
              setBooking({ ...booking, occassion: e.target.value });
              setValidations({
                ...validations,
                occassion: e.target.value !== "",
              });
            }}
            onBlur={() => {
              setTouched({
                ...touched,
                occassion: true,
              });
            }}
            value={booking.occassion}
            style={{
              border:
                touched.occassion && !validations.occassion
                  ? "solid red 1.5px"
                  : "",
            }}
            required
          >
            <option />
            <option value={"birthday"}>Birthday</option>
            <option value={"anniversary"}>Anniversary</option>
          </select>
          {
            <span
              style={{
                display:
                  touched.occassion && !validations.occassion ? "" : "none",
              }}
            >
              {"What's the occasion for?"}
            </span>
          }

          <input
            className='button'
            type='submit'
            value='Make Your reservation'
            aria-label='Submit'
            onClick={(e) => {
              e.preventDefault();
              if (props.submit()) {
                navigate("/booking-confirmation");
              }
            }}
            disabled={Object.values(validations).some((u) => !u)}
          />
        </form>
      </div>
    </>
  );
}

export default BookingForm;
