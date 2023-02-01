import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import BookingForm from "./Pages/BookingForm";
import { useReducer } from "react";
import { fetchAPI, submitAPI } from "./api/api";
import BookingConfirmation from "./Pages/BookingConfirmation";

export const initializeTimes = () => {
  return { list: fetchAPI(new Date()) };
};

export const updateTimes = (state, action) =>
  action.date !== undefined ? { list: fetchAPI(new Date(action.date)) } : state;

function App() {
  const initialState = initializeTimes();

  const sections = [
    {
      name: "home",
      url: "home",
    },
    {
      name: "about",
      url: "about",
    },
    {
      name: "menu",
      url: "menu",
    },
    {
      name: "reservations",
      url: "booking",
    },
    {
      name: "order online",
      url: "order-online",
    },
    {
      name: "login",
      url: "login",
    },
  ];

  const [availableTimes, setAvailableTimes] = useReducer(
    updateTimes,
    initialState
  );

  const submitForm = (data) => {
    return submitAPI(data);
  };

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home sections={sections} />} />
        <Route path='/home' element={<Home sections={sections} />} />
        <Route
          path='/booking'
          element={
            <BookingForm
              availableTimes={availableTimes}
              dispatch={setAvailableTimes}
              submit={submitForm}
              sections={sections}
            />
          }
        />
        <Route path='/booking-confirmation' element={<BookingConfirmation />} />
      </Routes>
    </Router>
  );
}

export default App;
