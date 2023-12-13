import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/main.scss";
import { UserProvider } from "./components/context.jsx";
//import { CategoriesProvider } from "./context/categories.context.jsx";
//import CategoriesProvider from "./context/categories.context.jsx";
import { CartProvider } from "./components/cartcontext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </CartProvider>
  </React.StrictMode>
);
