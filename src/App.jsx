import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root/root.route";
import Login from "./components/loginsignuppage/login";
import MenSec from "./components/mensec";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/contact",
    element: <Login />,
  },
  {
    path: "/men",
    element: <MenSec />,
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
