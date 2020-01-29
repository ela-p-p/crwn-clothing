import React from "react";
import { connect } from "react-redux";
import CartItem from "../CartItem/CartItem";
import CustomButton from "../CustomButton/CustomButton";

import "./cartDropdown.scss";

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>

    <CustomButton>go to checkout</CustomButton>
  </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems
});
export default connect(mapStateToProps)(CartDropdown);
