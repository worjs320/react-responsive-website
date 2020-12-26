import React from "react";
import "../../App.css";
import Cards from "../Cards";
import Footer from "../Footer";

const backgroundImage = {
  backgroundImage: "url(/images/img-2.jpg)",
};

function Services() {
  return (
    <>
      <h1 className="services" style={backgroundImage}>
        Services
      </h1>
      <Cards />
      <Footer />
    </>
  );
}

export default Services;
