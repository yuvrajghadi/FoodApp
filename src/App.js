import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
// import Contact from "./components/Contact";
import React, { Suspense } from "react";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
import { useState } from "react"; 
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
// import "../style.css"; // adjust if needed
import Cart from "./components/Cart";

// Lazy load Contact
const Contact = React.lazy(() => import("./components/Contact"));

const AppLayout = () => {
  const [userName, setUserName] =useState();
  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{ loginuser:"yuuv", userName, setUserName }}>
    <div className="app-layout">
      <Header />
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
    errorElement: <Error />,
    children: [
      {
        path: "",
        element: <Body />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: (
          // ✅ Wrap lazy component in Suspense
          <Suspense fallback={<h1>Loading Contact Page...</h1>}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
