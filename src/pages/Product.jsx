import React from "react";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div>
      <div className="navbar">
        <Link to="/cart">
          <div className="cart">
            <i className="bi bi-basket"></i>
            <div id="cartAmount" className="cartAmount">
              0
            </div>
          </div>
        </Link>
      </div>

      <div className="shop" id="shop"></div>
    </div>
  );
};

export default Product;
