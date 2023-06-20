import React, { useState } from "react";
import "./Navbar.scss";
import CartCard from "../cartcard/CartCard";
import shoppingCart from "../../images/shopping-cart.png";
import { Link } from "react-router-dom";
import { CartState } from "../../context/Context";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const {
    state: { cart },dispatch,
    productDispatch
  } = CartState();
  return (
    <div className="navbar">
      <div className="container">
        <Link to="./">Shopping-cart</Link>
        <input type="text"
        onChange={(e) => {
          productDispatch({
            type: "FILTER_BY_SEARCH",
            payload: e.target.value,
          });
        }}
        
        placeholder="Search your product here" />

        {/* <div class="dropdown">
                 <button class="dropdown-toggle" onClick={()=> setOpen(!open)}>
                 <img src={shoppingCart} alt="" />
                 </button>
                 {open && <ul class="dropdown-menu">
                <li><a href="#">Option 1</a></li>
                <li><a href="#">Option 2</a></li>
                <li><a href="#">Option 3</a></li>
                 </ul>}
                  </div> */}

        <button onClick={() => setOpen(!open)}>
          <img src={shoppingCart} alt="" />
          <span>{cart.length}</span>
        </button>
        {open && <CartCard cart={cart} />}
      </div>
    </div>
  );
};

export default Navbar;
