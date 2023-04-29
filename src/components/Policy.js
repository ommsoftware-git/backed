import React from "react";
import "./Policy.css";
import logo from "./images/logo.png";
import { Link as RouterLink } from "react-router-dom";
import Footer from "./Footer";
const Policy = () => {
  return (
    <>
      <div className="">
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
      </div>
      <div className="container">
        <h2 className="mt-4 mb-4">Privacy policy</h2>
        <p>Last updated February 26, 2023</p>
        <h2>AGREEMENT TO OUR LEGAL TERMS</h2>
        <p>
          We are Make a Thing, LLC ("Company," "we," "us," "our"), a company
          registered in __________, United States at __________, __________.
        </p>
        <p>
          We operate the website https://www.baked-ai.com (the "Site"), as well
          as any other related products and services that refer or link to these
          legal terms (the "Legal Terms") (collectively, the "Services").
        </p>
        <p>
          We provide a platform to generate an AI image that users can then
          apply to a physical product of their choice (e.g. a mug, mousepad,
          etc.)
        </p>
        <p>
          You can contact us by email at support@baked-ai.com or by mail to
          __________, __________, United States.
        </p>
        <p>
          These Legal Terms constitute a legally binding agreement made between
          you, whether personally or on behalf of an entity ("you"), and Make a
          Thing, LLC, concerning your access to and use of the Services. You
          agree that by accessing the Services, you have read, understood, and
          agreed to be bound by all of these Legal Terms. IF YOU DO NOT AGREE
          WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM
          USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.
        </p>
        <p>
          Supplemental terms and conditions or documents that may be posted on
          the Services from time to time are hereby expressly incorporated
          herein by reference. We reserve the right, in our sole discretion, to
          make changes or modifications to these Legal Terms at any time and for
          any reason. We will alert you about any changes by updating the "Last
          updated" date of these Legal Terms, and you waive any right to receive
          specific notice of each such change. It is your responsibility to
          periodically review these Legal Terms to stay informed of updates. You
          will be subject to, and will be deemed to have been made aware of and
          to have accepted, the changes in any revised Legal Terms by your
          continued use of the Services after the date such revised Legal Terms
          are posted.
        </p>
        <p>
          The Services are intended for users who are at least 18 years old.
          Persons under the age of 18 are not permitted to use or register for
          the Services.
        </p>
        <p>
          We recommend that you print a copy of these Legal Terms for your
          records.
        </p>
        <h2>1. OUR SERVICES</h2>
        <p>
          The information provided when using the Services is not intended for
          distribution to or use by any person or entity in any jurisdiction or
          country where such distribution or use would be contrary to law or
          regulation or which would subject us to any registration requirement
          within such jurisdiction or country. Accordingly, those persons who
          choose to access the Services from other locations do so on their own
          initiative and are solely responsible for compliance with local laws,
          if and to the extent local laws are applicable.
        </p>
        <p>
          The Services are not tailored to comply with industry-specific
          regulations (Health Insurance Portability and Accountability Act
          (HIPAA), Federal Information Security Management Act (FISMA), etc.),
          so if your interactions would be subjected to such laws, you may not
          use the Services. You may not use the Services in a way that would
          violate the Gramm-Leach-Bliley Act (GLBA).
        </p>
        <h2>2. INTELLECTUAL PROPERTY RIGHTS</h2>
        <h4>Our intellectual property</h4>
        <p>
          We are the owner or the licensee of all intellectual property rights
          in our Services, including all source code, databases, functionality,
          software, website designs, audio, video, text, photographs, and
          graphics in the Services (collectively, the "Content"), as well as the
          trademarks, service marks, and logos containedOur Content and Marks
          are protected by copyright and trademark laws (and various other
          intellectual property rights and unfair competition laws) and treaties
          in the United States and around the world. The Content and Marks are
          provided in or through the Services "AS IS" for your personal,
          noncommercial use or internal business purpose only.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Policy;
