import React from "react";
import "./Customer.css";
import { Link as RouterLink } from "react-router-dom";
import Slider from "react-slick";
const Customer = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    autoplay: true,

    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
    <>
      <div className="customer" id="customer-purchase">
        <div className="container">
          <h1 className="">Customer Purchase</h1>

          <Slider {...settings}>
            <div>
              <div className="row">
                <div className=" col-md-10 col-10 mx-3">
                  <div className="customer-card">
                    <div className="row">
                      <div className="col-md-12 col-lg-6 col-12 mb-4c-first-img">
                        <img
                          src="img/Rectangle 4.png"
                          alt="img"
                          className="img-fluid"
                        />
                      </div>
                      <div className="col-md-12 col-lg-6 col-12 mb-4 c-second-img">
                        <img src="img/Rectangle 5.png" alt="img" />
                      </div>
                      <div className="c-bottom-text">
                        <p>
                          Purchased by Dana in Los Angeles, CA <br />
                          <span className="c-text">
                            "swimming oasis" on a notebook
                          </span>
                        </p>
                      </div>
                      <div className="button">
                        <RouterLink to="/start-generating-art">
                          Remix or Purchase
                        </RouterLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="row">
                <div className=" col-md-10 col-10 mx-3">
                  <div className="customer-card">
                    <div className="row">
                      <div className="col-md-12 col-lg-6 col-12 mb-4c-first-img">
                        <img
                          src="img/Rectangle 4.png"
                          alt="img"
                          className="img-fluid"
                        />
                      </div>
                      <div className="col-md-12 col-lg-6 col-12 mb-4 c-second-img">
                        <img src="img/Rectangle 5.png" alt="img" />
                      </div>
                      <div className="c-bottom-text">
                        <p>
                          Purchased by Dana in Los Angeles, CA <br />
                          <span className="c-text">
                            "swimming oasis" on a notebook
                          </span>
                        </p>
                      </div>
                      <div className="button">
                        <RouterLink to="/start-generating-art">
                          Remix or Purchase
                        </RouterLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="row">
                <div className=" col-md-10 col-10 mx-3">
                  <div className="customer-card">
                    <div className="row">
                      <div className="col-md-12 col-lg-6 col-12 mb-4c-first-img">
                        <img
                          src="img/Rectangle 4.png"
                          alt="img"
                          className="img-fluid"
                        />
                      </div>
                      <div className="col-md-12 col-lg-6 col-12 mb-4 c-second-img">
                        <img src="img/Rectangle 5.png" alt="img" />
                      </div>
                      <div className="c-bottom-text">
                        <p>
                          Purchased by Dana in Los Angeles, CA <br />
                          <span className="c-text">
                            "swimming oasis" on a notebook
                          </span>
                        </p>
                      </div>
                      <div className="button">
                        <RouterLink to="/start-generating-art">
                          Remix or Purchase
                        </RouterLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="row">
                <div className=" col-md-10 col-10 mx-3">
                  <div className="customer-card">
                    <div className="row">
                      <div className="col-md-12 col-lg-6 col-12 mb-4c-first-img">
                        <img
                          src="img/Rectangle 4.png"
                          alt="img"
                          className="img-fluid"
                        />
                      </div>
                      <div className="col-md-12 col-lg-6 col-12 mb-4 c-second-img">
                        <img src="img/Rectangle 5.png" alt="img" />
                      </div>
                      <div className="c-bottom-text">
                        <p>
                          Purchased by Dana in Los Angeles, CA <br />
                          <span className="c-text">
                            "swimming oasis" on a notebook
                          </span>
                        </p>
                      </div>
                      <div className="button">
                        <RouterLink to="/start-generating-art">
                          Remix or Purchase
                        </RouterLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Customer;
