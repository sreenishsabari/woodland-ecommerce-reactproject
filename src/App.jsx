import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";
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
  MenWomenApparelPage,
  Addcart,
  Kids,
  Women,
  CategoryPage,
} from "./routes/root/index";

const App = () => {
  const [cart, setCart] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);

  const AddCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      const updatedCart = cart.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );

      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,

      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/home",
          element: <Home />,
        },

        {
          path: "/cartbag",
          element: <Addcart cart={cart} setCart={setCart} />,
        },
        {
          path: "/cartbtns",
          element: <Addcart cart={cart} setCart={setCart} />,
        },
        {
          path: "/contact",
          element: <Login />,
        },
        {
          path: "/men",
          element: <MenSec AddToCart={AddCart} />,
        },
        {
          path: "/newacbtn",
          element: <SignUp />,
        },
        {
          path: "/bestseller",
          element: <CategoryPage category={"Bestseller"} />,
        },

        {
          path: "/sneaker",
          element: <CategoryPage category={"Sneakers"} />,
        },

        {
          path: "/casuals",
          element: <CategoryPage category={"Boots"} />,
        },
        {
          path: "/boot",
          element: <CategoryPage category={"casuals"} />,
        },
        {
          path: "/menbtn",
          element: <CategoryPage category={"Men's"} />,
        },
        {
          path: "/t-shirt",
          element: <MenWomenApparelPage category={"Menapparel"} />,
        },
        {
          path: "/womenbtn",
          element: <CategoryPage category={"Women's"} />,
        },
        {
          path: "/menapparel",
          element: <MenWomenApparelPage category={"Menapparel"} />,
        },
        {
          path: "/womenapparel",
          element: <MenWomenApparelPage category={"Womenapparel"} />,
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
          path: "/shop1",
          element: <MenSec />,
        },

        {
          path: "/shop3",
          element: <Sneaker />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};
export default App;
