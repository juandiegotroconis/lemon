import { fireEvent, render, waitFor, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { fetchAPI } from "./api/api";
import { initializeTimes, updateTimes } from "./App";
import { AlertProvider } from "./context/alertContext";
import BookingForm from "./Pages/BookingForm";

describe("Two tests", () => {
  test("Test the initializeTimes function", () => {
    const result = initializeTimes();

    expect(result).not.toEqual([]);
  });

  test("Test the updateTimes function", () => {
    const testValue = { date: "2023/02/02" };
    const result = updateTimes(10, testValue);

    expect(result).not.toEqual([]);
  });
});

describe("Booking form", () => {
  test("Doesn't call submitAPI", async () => {
    const availableTimes = fetchAPI(new Date()),
      updateTimes = jest.fn(),
      submitAPI = jest.fn(),
      sections = [
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

    render(
      <AlertProvider>
        <BrowserRouter>
          <BookingForm
            availableTimes={availableTimes}
            dispatch={updateTimes}
            submit={submitAPI}
            sections={sections}
          />
        </BrowserRouter>
      </AlertProvider>
    );

    fireEvent.click(screen.getByText("Make your reservation"));

    await waitFor(() => {
      expect(submitAPI).not.toHaveBeenCalled();
    });
  });
});

describe("Booking form", () => {
  test("Succesfully calls submitAPI", async () => {
    const availableTimes = { list: fetchAPI(new Date()) },
      updateTimes = jest.fn(),
      submitAPI = jest.fn(),
      sections = [
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

    render(
      <AlertProvider>
        <BrowserRouter>
          <BookingForm
            availableTimes={availableTimes}
            dispatch={updateTimes}
            submit={submitAPI}
            sections={sections}
          />
        </BrowserRouter>
      </AlertProvider>
    );

    fireEvent.change(screen.getByLabelText("Name"), {
      target: { value: "John Doe" },
    });

    fireEvent.change(screen.getByLabelText("Email address"), {
      target: { value: "johndoe@mail.com" },
    });

    fireEvent.change(screen.getByLabelText("Choose date"), {
      target: { value: "2030-03-02" },
    });

    fireEvent.change(screen.getByLabelText("Choose time"), {
      target: { value: "17:00" },
    });

    fireEvent.change(screen.getByLabelText("Number of guests"), {
      target: { value: 10 },
    });

    fireEvent.change(screen.getByLabelText("Occasion"), {
      target: { value: "Birthday" },
    });

    const submitMock = jest.spyOn(BookingForm.prototype, "submit");

    fireEvent.click(screen.getByText("Make your reservation"));

    expect(submitMock).toHaveBeenCalled();
  });
});
