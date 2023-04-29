import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Work from "./components/Work";
import Coustomer from "./components/Coustomer";
import Faq from "./components/Faq";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Work />
      <Coustomer />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
