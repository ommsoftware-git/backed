import React from "react";
import "./Hero.css";
import { Link as RouterLink } from "react-router-dom";
import Slider from "react-slick";
import Img1 from "./images/1.png";
import Img2 from "./images/2.png";
import Img3 from "./images/3.png";

const Hero = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,

    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="hero" id="hero">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-12 col-lg-6">
            <div className="content">
              <h1>
                Turn your idea into <br /> <span>art with Al.</span>{" "}
              </h1>
              <p>Get it printed on just about anything.</p>
              <button className="button">
                <RouterLink to="/start-generating-art">
                  Start generating art
                </RouterLink>
              </button>
            </div>
          </div>
          <div className="col-md-12 col-12 col-lg-6">
            <div className="heroImgWrapper">
              <Slider {...settings}>
                <div className="heroImg">
                  <img src={Img1} alt="img" />
                </div>
                <div className="heroImg">
                  <img src={Img2} alt="img" />
                </div>
                <div className="heroImg">
                  <img src={Img3} alt="img" />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
