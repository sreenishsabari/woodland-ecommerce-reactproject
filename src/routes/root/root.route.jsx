import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../../components/navbar";

import Footer from "../../components/footer";

const Root = ({ cart, filterProducts, handlerFilter, wishlist }) => {
  const location = useLocation();
  const hideLayoutRoutes = ["/cartbag", "/cartbtn", "/wishlistheart"]; // Add routes where Navbar and Footer should be hidden

  const isHiddenLayoutRoute = hideLayoutRoutes.some((route) =>
    location.pathname.includes(route)
  );

  return (
    <>
      {
        <Navbar
          cart={cart}
          wishlist={wishlist}
          filterProducts={filterProducts}
          handlerFilter={handlerFilter}
        />
      }
      <Outlet />
      {!isHiddenLayoutRoute && <Footer />}
    </>
  );
};

export default Root;
