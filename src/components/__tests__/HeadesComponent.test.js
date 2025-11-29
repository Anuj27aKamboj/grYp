import { fireEvent, render, screen } from "@testing-library/react";
import { HeaderComponent } from "../HeaderComponent";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../../utils/redux/appStore";
import "@testing-library/jest-dom";

test("should load Header Component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <HeaderComponent />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", {name:'login'})

  //Assertion
  expect(loginButton).toBeInTheDocument();
});

test("should render Header Component with a Cart items", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <HeaderComponent />
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText("Cart-0");

  //Assertion
  expect(cartItems).toBeInTheDocument();
});

test("should render Header Component with a Cart", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <HeaderComponent />
      </Provider>
    </BrowserRouter>
  );

  const cart= screen.getByText(/Cart/);

  //Assertion
  expect(cart).toBeInTheDocument();
});

test("should load Header Component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <HeaderComponent />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", {name:'login'})

  fireEvent.click(loginButton)

  const logoutButton = screen.getByRole("button", {name:'logout'})
  //Assertion
  expect(logoutButton).toBeInTheDocument();
});

