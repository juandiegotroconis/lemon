import React, { useState } from "react";
import { useAlert } from "../context/alertContext";
import "./BookingForm.css";
import Nav from "./Nav";

function BookingForm(props) {
  const { onOpen } = useAlert();
  const [booking, setBooking] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    guests: "",
    occassion: "",
  });
  const [validations, setValidations] = useState({
    name: false,
    email: false,
    date: false,
    time: false,
    guests: false,
    occassion: false,
  });
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    date: false,
    time: false,
    guests: false,
    occassion: false,
  });

  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/; //eslint-disable-line

  const submit = () => {
    if (Object.values(validations).some((val) => !val)) {
      setTouched({
        name: true,
        email: true,
        date: true,
        time: true,
        guests: true,
        occassion: true,
      });
      return undefined;
    }
    onOpen("success", "loading");
    props.submit();
    setTimeout(() => {
      setBooking({
        name: "",
        email: "",
        date: "",
        time: "",
        guests: "",
        occassion: "",
      });
      onOpen(
        "success",
        "Your reservation has been submitted",
        "/booking-confirmation"
      );
    }, 2000);
  };

  return (
    <>
      <Nav sections={props.sections} />
      <div className='BookingForm'>
        <p className='cta-text'>Book a table now!</p>
        <div className='container'>
          <form id='booking-form'>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              id='name'
              onChange={(e) => {
                setValidations({
                  ...validations,
                  name: e.target.value !== "",
                });
                setBooking({
                  ...booking,
                  name: e.target.value,
                });
              }}
              onBlur={() => {
                setTouched({
                  ...touched,
                  name: true,
                });
              }}
              value={booking.name}
              style={{
                border:
                  touched.name && !validations.name ? "solid red 1.5px" : "",
              }}
            />
            {
              <span
                style={{
                  display: touched.name && !validations.name ? "" : "none",
                }}
              >
                {"Please enter your name"}
              </span>
            }

            <label htmlFor='email'>Email address</label>
            <input
              type='email'
              id='email'
              onChange={(e) => {
                setValidations({
                  ...validations,
                  email: emailRegex.test(e.target.value),
                });
                setBooking({
                  ...booking,
                  email: e.target.value,
                });
              }}
              onBlur={() => {
                setTouched({
                  ...touched,
                  email: true,
                });
              }}
              value={booking.email}
              style={{
                border:
                  touched.email && !validations.email ? "solid red 1.5px" : "",
              }}
            />
            {
              <span
                style={{
                  display: touched.email && !validations.email ? "" : "none",
                }}
              >
                {"Please enter a valid email"}
              </span>
            }

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
              placeholder='Number between 1 to 10'
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
                  touched.guests && !validations.guests
                    ? "solid red 1.5px"
                    : "",
              }}
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
            >
              <option />
              <option value={"birthday"}>Birthday</option>
              <option value={"anniversary"}>Anniversary</option>
              <option value={"other"}>Other</option>
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
              value='Make your reservation'
              aria-label='On click'
              onClick={(e) => {
                e.preventDefault();
                submit();
              }}
              disabled={Object.values(validations).some((u) => !u)}
            />
          </form>
        </div>
      </div>
    </>
  );
}

export default BookingForm;
