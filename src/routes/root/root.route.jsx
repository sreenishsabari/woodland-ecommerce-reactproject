import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../../components/navbar";

import Footer from "../../components/footer";

const Root = () => {
  const location = useLocation();
  const hideLayoutRoutes = ["/cartbag", "/cartbtn"]; // Add routes where Navbar and Footer should be hidden

  const isHiddenLayoutRoute = hideLayoutRoutes.some((route) =>
    location.pathname.includes(route)
  );
  return (
    <>
      {<Navbar />}
      <Outlet />
      {!isHiddenLayoutRoute && <Footer />}
    </>
  );
};

export default Root;
