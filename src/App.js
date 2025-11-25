import React, { lazy, Suspense, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { HeaderComponent } from "./components/HeaderComponent";
import { BodyComponent } from "./components/BodyComponent";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import UserContext from "../utils/UserContext";
import appStore from "../utils/redux/appStore";
import About from "./components/About";
import Profile from "./components/Profile";
import ErrorComponent from "./components/ErrorComponent";
import RestaurantMenu from "./components/RestaurantMenu";
import ShimmerCommponent from "./components/ShimmerCommponent";
import CartComponent from "./components/CartComponent";

const QwikComponent = lazy(() => import("./components/QwikComponent"));

const AppLayout = () => {
  const [userDetails, setUserDetails] = useState();

  useEffect(() => {
    const data = {
      name: "New User",
    };
    setUserDetails(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider
        value={{ loggedInUser: userDetails, setUserDetails }}
      >
        <div className="app">
          <HeaderComponent />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <BodyComponent />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/qwik",
        element: (
          <Suspense fallback={<ShimmerCommponent />}>
            <QwikComponent />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<ShimmerCommponent />}>
            <CartComponent />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <ErrorComponent />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
