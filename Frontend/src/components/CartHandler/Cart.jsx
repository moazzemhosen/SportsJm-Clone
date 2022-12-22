import React, { useState } from "react";
import "./cart.css";
import { Footer } from "../footer/footer";
import { AbTrainers as cartItems } from "../../configs/AbTrainers";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


export const Cart = () => {
  const navigate = useNavigate();
  const myState = useSelector((store) => store.loginReducer);
  
  const goCheckout = () => {
    navigate("/Checkout");
  };

  let total = 0;
  myState.cart.forEach((item) => {
    total = total + Number(item.price);
  });

  return (
    <div>
      <div className="cart-items">
        <div className="cart-items-header">Cart Items</div>

        {cartItems.length == 0 && (
          <div className="cart-items-empty">No Items Are Added.</div>
        )}

        <div>
          {console.log(myState.cart)}
          {myState.cart.map((item) => (
            <div key={item.id} className="cart-items-list">
              <img
                className="cart-items-image"
                src={item.img}
                alt={item.name}
              />
              <div className="cart-items-name">{item.title}</div>
              <div className="cart-items-function">
                <button className="cart-items-add">+</button>
                <div className="cart-items-quantity-display">1</div>
                <button className="cart-items-remove">-</button>
              </div>
              <div className="cart-items-price">₹{item.price}</div>
            </div>
          ))}
        </div>

        <div className="cart-items-total-price-name">
          Total Price
          <div className="cart-items-total-price">₹{total}</div>
          <div>
            <button className="checkout" onClick={goCheckout}>
              Proceed to CheckOut
            </button>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Cart;
