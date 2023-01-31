import { initializeTimes, updateTimes } from "./App";

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
