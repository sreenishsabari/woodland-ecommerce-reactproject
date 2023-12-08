import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

const Slider = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div className="slider-container">
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        infinite={true}
        autoPlaySpeed={2000}
        autoPlay={true}
      >
        <Link to="/shop1" className="sliderone">
          <img src="./src/images/image1.jpg" alt="imageOne" />
        </Link>
        <Link to="/shop2" className="slidertwo">
          <img src="./src/images/image2.jpg" alt="imageTwo" />
        </Link>
        <Link to="/shop3" className="sliderthree">
          <img src="./src/images/image3.jpg" alt="imageThree" />
        </Link>
      </Carousel>
    </div>
  );
};

export default Slider;
