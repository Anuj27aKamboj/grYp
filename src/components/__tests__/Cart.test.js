import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import { act } from "react";
import { Provider } from "react-redux";
import MOCK_DATA from "../mocks/restMenuMock.json";
import appStore from "../../../utils/redux/appStore";
import { HeaderComponent } from "../HeaderComponent";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import CartComponent from "../CartComponent";

global.fetch = jest.fn(() =>
  Promise.resolve({ json: () => Promise.resolve(MOCK_DATA) })
);

test("should load Restaurant menu component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <HeaderComponent />
          <RestaurantMenu />
          <CartComponent />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordionHeader = screen.getByText("Specialty Pizzas (2)");

  expect(screen.getByText("Cart-0")).toBeInTheDocument();

  fireEvent.click(accordionHeader);

  expect(screen.getAllByTestId("menuItem").length).toBe(2);

  const addBtns = screen.getAllByRole("button", { name: "+" });

  fireEvent.click(addBtns[0]);

  expect(screen.getByText("Cart-1")).toBeInTheDocument();

  fireEvent.click(addBtns[1]);

  expect(screen.getByText("Cart-2")).toBeInTheDocument();
});
