import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
        <div className="sliderone">
          <img src="./src/images/image1.jpg" alt="imageOne" />
          <div className="shopbtn">
            <button className="sliderbtn">SHOP NOW</button>
          </div>
        </div>
        <div className="slidertwo">
          <img src="./src/images/image2.jpg" alt="imageTwo" />
        </div>
        <div className="sliderthree">
          <img src="./src/images/image3.jpg" alt="imageThree" />
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
