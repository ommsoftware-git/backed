import React from "react";
import "./Work.css";
const Work = () => {
  return (
    <>
      <div className="work" id="work">
        <div className="container">
          <h1 className="mb-4 relative">How it’s Work</h1>
          <div className="row">
            <div className="col-md-6 col-12">
              <img src="img/Group 16.png" alt="" className="img-fluid" />
            </div>
            <div className="col-md-6 col-12">
              <div className="work-right-wrapper">
                <div className="work-right-content">
                  <img
                    src="img/communication 1.png"
                    alt="communication"
                    className="img-fluid"
                  />
                  <p>
                    Select your product. We've got mugs, phone cases, t-shirts,
                    and more.
                  </p>
                </div>
                <div className="work-right-content">
                  <img
                    src="img/communication 1.png"
                    alt="communication"
                    className="img-fluid"
                  />
                  <p>
                    Select your product. We've got mugs, phone cases, t-shirts,
                    and more.
                  </p>
                </div>
                <div className="work-right-content">
                  <img
                    src="img/communication 1.png"
                    alt="communication"
                    className="img-fluid"
                  />
                  <p>
                    Select your product. We've got mugs, phone cases, t-shirts,
                    and more.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
