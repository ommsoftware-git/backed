import React, { useState } from "react";
import "./Art.css";
import { Collapse } from "antd";
import logo from "./images/logo.png";
import { Link as RouterLink } from "react-router-dom";
import { Button, Modal, Form } from "antd";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Footer from "./Footer";
const Art = () => {
  const { Panel } = Collapse;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const showModal1 = () => {
    setIsModalOpen1(true);
  };

  const handleCancel1 = () => {
    setIsModalOpen1(false);
  };
  return (
    <>
      <div className="art">
        <div className="art-nav">
          <div className="row">
            <div className="col-md-10 col-6">
              <RouterLink to="/">
                <img src={logo} alt="logo" />
              </RouterLink>
            </div>
            <div className="col-md-2 col-6">
              <div className="exit-btn">
                <RouterLink to="/">Exit</RouterLink>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="art-title">
            <h1>Choose a product. Then, generate art to apply to it.</h1>
          </div>
          <div className="row">
            <div className="col-md-6 col-12">
              <Collapse defaultActiveKey={["3"]}>
                <Panel header="Clear phone case" key="1" className="panel">
                  <div className="art-list">
                    <ul class="list-group">
                      <li class="list-group-item list-group-item-action">
                        {" "}
                        <RouterLink to="">Clear phone case</RouterLink>
                      </li>
                      <li class="list-group-item list-group-item-action">
                        {" "}
                        <RouterLink to="">Mouse pad</RouterLink>
                      </li>
                      <li class="list-group-item list-group-item-action">
                        <RouterLink to="">Coffee mug</RouterLink>
                      </li>
                      <li class="list-group-item list-group-item-action">
                        <RouterLink to="">Notebook</RouterLink>
                      </li>
                      <li class="list-group-item list-group-item-action">
                        <RouterLink to="">Poster</RouterLink>
                      </li>
                      <li class="list-group-item list-group-item-action">
                        <RouterLink to="">T-Shirt</RouterLink>
                      </li>
                      <li class="list-group-item list-group-item-action">
                        <RouterLink to="">Hoodie sweatshirt</RouterLink>
                      </li>
                      <li class="list-group-item list-group-item-action">
                        <RouterLink to="">Square Sticker </RouterLink>
                      </li>
                    </ul>
                  </div>
                </Panel>
                <Panel
                  header="Model   :   i phone 14"
                  key="2"
                  className="panel"
                >
                  <div className="art-list">
                    <ul class="list-group">
                      <li class="list-group-item list-group-item-action">
                        <RouterLink to="">iPhone 11</RouterLink>
                      </li>
                      <li class="list-group-item list-group-item-action">
                        <RouterLink to="">iPhone 12 </RouterLink>
                      </li>
                      <li class="list-group-item list-group-item-action">
                        <RouterLink to="">iPhone 12 pro max</RouterLink>
                      </li>
                      <li class="list-group-item list-group-item-action">
                        <RouterLink to="">
                          iPhone 13 pro maxiPhone 11
                        </RouterLink>
                      </li>
                      <li class="list-group-item list-group-item-action">
                        <RouterLink to="">iPhone 14 pro max</RouterLink>
                      </li>
                    </ul>
                  </div>
                </Panel>
                <div className="p-3">
                  <div className="art-list-last">
                    <h4>$19.99 with free shipping</h4>
                    <ul>
                      <li>Flexible and durable clear phone case</li>
                      <li>Supports wireless charging</li>
                      <li>Image printed in matte style</li>
                      <li>
                        Materials: Clear polycarbonate with soft, clear TPU
                        sides
                      </li>
                    </ul>
                  </div>
                </div>
              </Collapse>
              <div className="art-desc-box mb-4">
                <div className="art-desc-title">
                  <div className="row">
                    <div className="col-md-6 col-6">
                      <h6>Art Description</h6>
                    </div>
                    <div className="col-md-6 col-6">
                      <Button
                        type=""
                        onClick={showModal}
                        className="art-model-btn"
                      >
                        How do I write descriptions?
                      </Button>
                    </div>
                  </div>

                  <Modal
                    title="How do I write descriptions?"
                    open={isModalOpen}
                    centered
                    onCancel={handleCancel}
                  >
                    <p>
                      Image descriptions consist of phrases, separated by
                      commas, that help guide the AI towards your ideal image.
                    </p>
                    <p>
                      Example: "frog, riding a bicycle, by pablo picasso,
                      painting, bright colors, surrealist"
                    </p>
                    <p>
                      The best results tend to come from detailed descriptions
                      with lots of styles and phrases.
                    </p>
                    <p>
                      Example: "a cabin in the woods, blue skies, mountain range
                      in the background, impressionist style, by vincent van
                      gogh, bright colors, oil painting"
                    </p>
                    <p>
                      Sometimes it takes a few tries to get it right.
                      Re-generate images with the same prompt, or try making
                      small changes to see what happens!
                    </p>
                  </Modal>
                  <Form>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      placeholder="Write here..."
                    ></textarea>
                  </Form>
                  <div class="mb-3 mt-3 form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                    <label className="form-check-label" for="exampleCheck1">
                      I agree to
                      <Button
                        type=""
                        onClick={showModal1}
                        style={{ borderBottom: "1px solid #000" }}
                      >
                        Baked's generation agreement.
                      </Button>
                      <Modal
                        title="Baked's generation agreement"
                        centered
                        open={isModalOpen1}
                        onCancel={handleCancel1}
                      >
                        <p>
                          In order to use our platform, you must agree to the
                          usage restrictions in the Stable Diffusion License.
                          You must also agree not to try generating and/or using
                          images that:
                        </p>
                        <p>
                          <ul>
                            <li>Are in the likeness of any living person</li>
                            <li>Depict copyrighted works</li>
                            <li>Depict violence or graphic content</li>
                          </ul>
                        </p>
                        <p>
                          We reserve the right to cancel orders that we believe
                          violate any of our terms.
                        </p>
                      </Modal>
                    </label>
                  </div>
                  <Button type="primary" block className="mb-3">
                    Generate art on a phone case
                  </Button>
                  <Button disabled block className="mb-3">
                    Checkout the script
                  </Button>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <Carousel
                autoPlay
                interval="5000"
                transitionTime="5000"
                infiniteLoop
              >
                <div>
                  <img
                    src="https://media.istockphoto.com/photos/concept-picture-id1154231467"
                    alt=""
                  />
                  <p className="legend">My Photo 1</p>
                </div>
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1656268164012-119304af0c69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80"
                    alt=""
                  />
                  <p className="legend">My Photo 2</p>
                </div>
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1655745653127-4d6837baf958?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt=""
                  />
                  <p className="legend">My Photo 3</p>
                </div>
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1516527653392-602455dd9cf7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80"
                    alt=""
                  />
                  <p className="legend">My Photo 4</p>
                </div>
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1655365225165-8d727fe3a091?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=80"
                    alt=""
                  />
                  <p className="legend">My Photo 5</p>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Art;
