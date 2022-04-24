import React from 'react';
import iconDelete from "../../icons/icon-delete.svg";

const Basket = () => {
  return (
    <div className="modal">
      <p>Cart</p>
      <div className="modal__content">
        <img src="" alt="" />
        <span>test</span>
        <img src={iconDelete} alt="bin" />
      </div>
      <a href="/">Checkout</a>
    </div>
  )
}

export default Basket;