import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar";
import Slider from "../../components/slider";
import ProductImage from "../../components/product";
import CategoryImage from "../../components/categories";
import SectionImage from "../../components/section";
import ItemsImage from "../../components/items";
import Footer from "../../components/footer";

const Root = () => {
  return (
    <>
      <Navbar />
      <Slider />
      <ProductImage />
      <CategoryImage />
      <SectionImage />
      <ItemsImage />
      <Footer />
    </>
  );
};

export default Root;
