import { useState } from "react";
import Slider from "react-slick";
import Slide from "./Slide";
import Download from "../../../components/Download";
import { MajorHeading } from "../../../components/styled/Headings";
import { SliderArrow } from "../../../components/styled/Button";
import Launch from "../../../assets/images/Launch.svg";
import Manage from "../../../assets/images/manage.png";
import Wallet from "../../../assets/images/wallet.svg";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomeSlider = () => {
  const [sliderRef, setSliderRef] = useState(null);

  const NextArrow = () => {
    return (
      <SliderArrow onClick={sliderRef?.slickNext}>
        <HiOutlineArrowSmRight />
      </SliderArrow>
    );
  };

  const sliderInfo = [
    {
      message: "Deliver your package with ease",
      image: Launch,
    },
    {
      message: "Manage your riders without stressing",
      image: Manage,
    },
    {
      message: "Earn more with ‘Rence",
      image: Wallet,
    },
  ];

  const sliderTemplate = sliderInfo.map((slide) => {
    return (
      <Slide key={slide.message}>
        <div className="slide-container">
          <div className="message">
            <div className="info">
              <MajorHeading className="slide-heading">
                {slide.message}
              </MajorHeading>
              <Download />
            </div>
          </div>
          <div className="image">
            <img src={slide.image} alt="" />
          </div>
        </div>
      </Slide>
    );
  });

  const settings = {
    infinite: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
  };

  return (
    <>
      <Slider ref={setSliderRef} {...settings}>
        {sliderTemplate}
      </Slider>
    </>
  );
};

export default HomeSlider;
