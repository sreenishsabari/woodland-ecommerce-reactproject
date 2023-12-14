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
      element: <Root cart={cart} />,
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
          element: <CategoryPage category={"Bestseller"} AddToCart={AddCart} />,
        },

        {
          path: "/sneaker",
          element: <CategoryPage category={"Sneakers"} AddToCart={AddCart} />,
        },

        {
          path: "/casuals",
          element: <CategoryPage category={"Boots"} AddToCart={AddCart} />,
        },
        {
          path: "/boot",
          element: <CategoryPage category={"casuals"} AddToCart={AddCart} />,
        },
        {
          path: "/menbtn",
          element: <CategoryPage category={"Men's"} AddToCart={AddCart} />,
        },
        {
          path: "/womenbtn",
          element: <CategoryPage category={"Women's"} AddToCart={AddCart} />,
        },
        {
          path: "/t-shirt",
          element: (
            <MenWomenApparelPage category={"Menapparel"} AddToCart={AddCart} />
          ),
        },
        {
          path: "/menapparel",
          element: (
            <MenWomenApparelPage category={"Menapparel"} AddToCart={AddCart} />
          ),
        },
        {
          path: "/womenapparel",
          element: (
            <MenWomenApparelPage
              category={"Womenapparel"}
              AddToCart={AddCart}
            />
          ),
        },

        {
          path: "/women",
          element: <Women AddToCart={AddCart} />,
        },
        {
          path: "/kids",
          element: <Kids AddToCart={AddCart} />,
        },
        {
          path: "/bags&gear",
          element: <Bags AddToCart={AddCart} />,
        },
        {
          path: "/bagbtn",
          element: <Bags AddToCart={AddCart} />,
        },
        {
          path: "/beltsbtn",
          element: <Belts AddToCart={AddCart} />,
        },
        {
          path: "/boxerbtn",
          element: <Boxers AddToCart={AddCart} />,
        },
        {
          path: "/outdoor",
          element: <Boots AddToCart={AddCart} />,
        },

        {
          path: "/shop1",
          element: <MenSec AddToCart={AddCart} />,
        },

        {
          path: "/shop3",
          element: <Sneaker AddToCart={AddCart} />,
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
