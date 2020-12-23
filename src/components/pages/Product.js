import React from "react";
import "../../App.css";

const backgroundImage = {
  backgroundImage: "url(/images/img-1.jpg)",
};

function Product() {
  return (
    <h1 className="products" style={backgroundImage}>
      Product
    </h1>
  );
}

export default Product;
