import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { BodyComponent } from "../BodyComponent";
import MOCK_DATA from "../mocks/mockRestList.json";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should search BodyComponent with search button", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <BodyComponent />
      </BrowserRouter>
    )
  );

  const cardsBeforeSearch = await screen.findAllByTestId("resCard");

  expect(cardsBeforeSearch.length).toBe(8);

  const searchBtn = screen.getByRole("button", { name: "Search" });

  const searchInput = await screen.findByTestId("searchInput");

  //   console.log(searchInput);
  fireEvent.change(searchInput, { target: { value: "pizza" } });
  fireEvent.click(searchBtn);

  // screen should load 2 cards

  const cardsAfterSearch = screen.getAllByTestId("resCard");

  expect(cardsAfterSearch.length).toBe(2);

  expect(searchBtn).toBeInTheDocument();
});

it("should filter BodyComponent with filter button", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <BodyComponent />
      </BrowserRouter>
    )
  );

  await waitFor(() => {
    expect(screen.getAllByTestId("resCard").length).toBeGreaterThan(0);
  });

  const cardsBeforeFilter = await screen.findAllByTestId("resCard");

  expect(cardsBeforeFilter.length).toBe(8);

  const topRatedBtn = screen.getByRole("button", { name: "Top Rated Restaurant" });

//   console.log(filterBtn);

  expect(topRatedBtn).toBeInTheDocument();

  fireEvent.click(topRatedBtn);

//   // screen should load 2 cards

  const cardsAfterFilter = await screen.findAllByTestId("resCard");

  expect(cardsAfterFilter.length).toBe(4);
});

