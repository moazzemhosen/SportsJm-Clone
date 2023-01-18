import React, { useState } from "react";
import "./cart.css";
import { Footer } from "../footer/footer";
import { AbTrainers as cartItems } from "../../configs/AbTrainers";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


export const Cart = () => {
  const navigate = useNavigate();
  const [value,setValue]=useState(1)
  const {cart} = useSelector((store) => store.loginReducer);
  const [data,setData]=useState(cart||[])
  
  const goCheckout = () => {
    navigate("/Checkout");
  };

  let total = 0;
  cart.forEach((item) => {
    total = total + Number(item.price);
  });
  const handleinc=()=>{
setValue(value+1)
  }
  const handledec=()=>{
    setValue(value-1)
  }
  const handleremove=(id)=>{
    console.log(id);
   let update= cart.filter((e)=>e.id!==id)
   setData([...update])
  }

  return (
    <div>
      <div className="cart-items">
        <div className="cart-items-header">Cart Items</div>

        {cart.length == 0 && (
          <div className="cart-items-empty">No Items Are Added.</div>
        )}

        <div>
          {/* {console.log(cart)} */}
          {data.length>0&&data.map((item,i) => (
            <div key={i} className="cart-items-list">
              <img
                className="cart-items-image"
                src={item.img}
                alt={item.name}
              />
              <div className="cart-items-name">{item.title}</div>
              <div className="cart-items-function">
                <button className="cart-items-add" onClick={handleinc}>+</button>
                <div className="cart-items-quantity-display">{value }</div>
                <button className="cart-items-remove" onClick={handledec}>-</button>
              </div>
              <div>
              <button className="remove_item" onClick={()=>handleremove(item.id)}>remove</button>
              </div>
              <div className="cart-items-price">₹{item.price}</div>
            </div>
          ))}
        </div>

        <div className="cart-items-total-price-name">
          Total Price
          <div className="cart-items-total-price">₹{total*value}</div>
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
