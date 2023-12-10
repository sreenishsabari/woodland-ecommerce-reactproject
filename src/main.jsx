import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/main.scss";
import { UserProvider } from "./components/context.jsx";
//import { CategoriesProvider } from "./context/categories.context.jsx";
//import CategoriesProvider from "./context/categories.context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>
);
