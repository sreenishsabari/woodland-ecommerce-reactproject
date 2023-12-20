import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";
import Categories from "./constants/index";
import Filter from "./components/filter";
import {
  Root,
  Home,
  Login,
  MenSec,
  ErrorPage,
  SignUp,
  Bags,
  Belts,
  Boxers,
  MenWomenApparelPage,
  Addcart,
  Wishlist,
  Kids,
  Women,
  CategoryPage,
} from "./routes/root/index";

const App = () => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

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

  const AddWishlist = (item) => {
    const existingItem = wishlist.find(
      (wishlistItem) => wishlistItem.id === item.id
    );

    if (existingItem) {
      console.log(`${item.name} is already in the wishlist.`);
      // Optionally, you can show a message to the user or take other actions for duplicates.
    } else {
      setWishlist([...wishlist, { ...item }]);
      console.log(`${item.name} added to the wishlist.`);
    }
  };

  //searchfinder
  const getData = () => {
    const filter = Categories.filter((product) => product);
    setFilterProducts(filter);
  };

  // console.log(Filter);

  useEffect(() => {
    getData();
  }, []);

  console.log(filterProducts);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Root
          cart={cart}
          wishlist={wishlist}
          filterProducts={filterProducts}
          handlerFilter={setFilterProducts}
        />
      ),
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
          path: "/wishlistheart",
          element: <Wishlist wishlist={wishlist} setWishlist={setWishlist} />,
        },

        {
          path: "/contact",
          element: <Login />,
        },
        {
          path: "/men",
          element: <MenSec AddToCart={AddCart} AddToWishlist={AddWishlist} />,
        },
        {
          path: "/newacbtn",
          element: <SignUp />,
        },
        {
          path: "/bestseller",
          element: (
            <CategoryPage
              category={"Bestseller"}
              AddToCart={AddCart}
              AddToWishlist={AddWishlist}
            />
          ),
        },

        {
          path: "/sneaker",
          element: (
            <CategoryPage
              category={"Sneakers"}
              AddToCart={AddCart}
              AddToWishlist={AddWishlist}
            />
          ),
        },

        {
          path: "/casuals",
          element: (
            <CategoryPage
              category={"casuals"}
              AddToCart={AddCart}
              AddToWishlist={AddWishlist}
            />
          ),
        },
        {
          path: "/boot",
          element: (
            <CategoryPage
              category={"Boots"}
              AddToCart={AddCart}
              AddToWishlist={AddWishlist}
            />
          ),
        },
        {
          path: "/menbtn",
          element: (
            <CategoryPage
              category={"Men's"}
              AddToCart={AddCart}
              AddToWishlist={AddWishlist}
            />
          ),
        },
        {
          path: "/womenbtn",
          element: (
            <CategoryPage
              category={"Women's"}
              AddToCart={AddCart}
              AddToWishlist={AddWishlist}
            />
          ),
        },
        {
          path: "/t-shirt",
          element: (
            <MenWomenApparelPage
              category={"Menapparel"}
              AddToCart={AddCart}
              AddToWishlist={AddWishlist}
            />
          ),
        },
        {
          path: "/menapparel",
          element: (
            <MenWomenApparelPage
              category={"Menapparel"}
              AddToCart={AddCart}
              AddToWishlist={AddWishlist}
            />
          ),
        },
        {
          path: "/womenapparel",
          element: (
            <MenWomenApparelPage
              category={"Womenapparel"}
              AddToCart={AddCart}
              AddToWishlist={AddWishlist}
            />
          ),
        },
        {
          path: "/filter",
          element: (
            <Filter
              filterProducts={filterProducts}
              Categories={Categories}
              AddToCart={AddCart}
              AddToWishlist={AddWishlist}
            />
          ),
        },
        {
          path: "/women",
          element: <Women AddToCart={AddCart} AddToWishlist={AddWishlist} />,
        },
        {
          path: "/kids",
          element: (
            <CategoryPage
              category={"kids"}
              AddToCart={AddCart}
              AddToWishlist={AddWishlist}
            />
          ),
        },
        {
          path: "/bags&gear",
          element: (
            <CategoryPage
              category={"Bag"}
              AddToCart={AddCart}
              AddToWishlist={AddWishlist}
            />
          ),
        },
        {
          path: "/bagbtn",
          //element: <Bags AddToCart={AddCart} AddToWishlist={AddWishlist} />,
          element: (
            <CategoryPage
              category={"Bag"}
              AddToCart={AddCart}
              AddToWishlist={AddWishlist}
            />
          ),
        },
        {
          path: "/beltsbtn",
          element: (
            <CategoryPage
              category={"Belt"}
              AddToCart={AddCart}
              AddToWishlist={AddWishlist}
            />
          ),
        },
        {
          path: "/boxerbtn",
          //element: <Boxers AddToCart={AddCart} AddToWishlist={AddWishlist} />,
          element: (
            <CategoryPage
              category={"Boxer"}
              AddToCart={AddCart}
              AddToWishlist={AddWishlist}
            />
          ),
        },
        {
          path: "/outdoor",
          // element: (
          //   <MenWomenApparelPage
          //     category={"Outdoor"}
          //     AddToCart={AddCart}
          //     AddToWishlist={AddWishlist}
          //   />
          // ),
          element: (
            <CategoryPage
              category={"Boots"}
              AddToCart={AddCart}
              AddToWishlist={AddWishlist}
            />
          ),
        },

        {
          path: "/shop1",
          element: <MenSec AddToCart={AddCart} AddToWishlist={AddWishlist} />,
        },

        {
          path: "/shop2",
          element: <Boxers AddToCart={AddCart} AddToWishlist={AddWishlist} />,
        },
        {
          path: "/shop3",
          element: (
            <CategoryPage
              category={"Sneakers"}
              AddToCart={AddCart}
              AddToWishlist={AddWishlist}
            />
          ),
        },
        {
          path: "/explore",
          element: <MenSec AddToCart={AddCart} AddToWishlist={AddWishlist} />,
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
