import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import BookingForm from "./Pages/BookingForm";
import { useReducer } from "react";
import { fetchAPI, submitAPI } from "./api/api";
import BookingConfirmation from "./Pages/BookingConfirmation";
import { AlertProvider } from "./context/alertContext";
import Alert from "./Pages/Components/Alert";

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
      url: "#",
    },
    {
      name: "menu",
      url: "#",
    },
    {
      name: "reservations",
      url: "booking",
    },
    {
      name: "order online",
      url: "#",
    },
    {
      name: "login",
      url: "#",
    },
  ];

  const [availableTimes, setAvailableTimes] = useReducer(
    updateTimes,
    initialState
  );

  return (
    <AlertProvider>
      <Router>
        <Alert />
        <Routes>
          <Route path='/' element={<Home sections={sections} />} />
          <Route path='/home' element={<Home sections={sections} />} />
          <Route
            path='/booking'
            element={
              <BookingForm
                availableTimes={availableTimes}
                dispatch={setAvailableTimes}
                submit={submitAPI}
                sections={sections}
              />
            }
          />
          <Route
            path='/booking-confirmation'
            element={<BookingConfirmation sections={sections} />}
          />
        </Routes>
      </Router>
    </AlertProvider>
  );
}

export default App;
