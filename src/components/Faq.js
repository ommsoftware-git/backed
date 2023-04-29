import React from "react";
import "./Faq.css";
import { Collapse } from "antd";
const Faq = () => {
  const { Panel } = Collapse;
  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
  return (
    <>
      <div className="Faq" id="faq">
        <div className="container">
          <h1>FAQs</h1>
          <div className="row">
            <div className="col-md-6 col-12 mb-4">
              <div className="faq-accordian">
                <Collapse defaultActiveKey={["1"]}>
                  <Panel header="What is a Payment Gateway?" key="1">
                    <p>{text}</p>
                  </Panel>
                  <Panel
                    header="Do I need to pay to Instapay even when there is no transaction going on in my business?"
                    key="2"
                  >
                    <p>{text}</p>
                  </Panel>
                  <Panel
                    header="What platforms does ACME payment gateway support?"
                    key="3"
                  >
                    <p>{text}</p>
                  </Panel>
                  <Panel
                    header="Does ACME provide international payments support?"
                    key="4"
                  >
                    <p>{text}</p>
                  </Panel>
                  <Panel
                    header="Is there any setup fee or annual maintainance fee that I need to pay regularly?"
                    key="5"
                  >
                    <p>{text}</p>
                  </Panel>
                </Collapse>
              </div>
            </div>
            <div className="col-md-6 col-12 mb-4">
              <div className="faq-card">
                <h6>
                  Do I need to pay to Instapay even when there is no transaction
                  going on in my business?
                </h6>
                <p className="mt-5">
                  No, you do not need to pay Instapay where there is no
                  transaction happening. With one of the lowest transaction
                  charges in the industry, pay only when you get paid!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
