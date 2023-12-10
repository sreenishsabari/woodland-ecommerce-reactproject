import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
  Root,
  Home,
  Login,
  MenSec,
  Sneaker,
  ErrorPage,
  SignUp,
  Bags,
  Belts,
  Boots,
  Boxers,
  Casuals,
  Kids,
  Women,
  MenApparel,
  CategoryPage,
} from "./routes/root/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Login />,
      },
      {
        path: "/men",
        element: <MenSec />,
      },
      {
        path: "/newacbtn",
        element: <SignUp />,
      },

      {
        path: "/bestseller",
        element: <CategoryPage />,
      },

      {
        path: "/casuals",
        element: <Casuals />,
      },
      {
        path: "/womenbtn",
        element: <Women />,
      },
      {
        path: "/women",
        element: <Women />,
      },
      {
        path: "/kids",
        element: <Kids />,
      },
      {
        path: "/bags&gear",
        element: <Bags />,
      },
      {
        path: "/bagbtn",
        element: <Bags />,
      },
      {
        path: "/beltsbtn",
        element: <Belts />,
      },
      {
        path: "/boxerbtn",
        element: <Boxers />,
      },
      {
        path: "/outdoor",
        element: <Boots />,
      },
      {
        path: "/menapparel",
        element: <MenApparel />,
      },
      {
        path: "/shop1",
        element: <MenSec />,
      },
      {
        path: "/shop2",
        element: <MenApparel />,
      },
      {
        path: "/shop3",
        element: <Sneaker />,
      },
    ],
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};
export default App;
