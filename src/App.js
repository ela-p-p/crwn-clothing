import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { selectCurrentUser } from "./redux/user/user.selectors";

import CheckoutPage from "./pages/Checkout/Checkout";
import Header from "./components/Header/Header";
import SignInSignUpPage from "./pages/SignInSignUpPage/SignInSignUpPage";
import ShopPage from "./pages/ShopPage/ShopPage";
import Homepage from "./pages/HomePage/HomePage";

import { checkUserSession } from "./redux/user/user.actions";
import "./App.css";

class App extends React.Component {
  unSubscribeFromAuth = null;
  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    console.log("App.js loaded");

    return (
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/shop/*" element={<ShopPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route
            path="/signin"
            element={this.props.currentUser ? <Navigate to="/" /> : <SignInSignUpPage />}
          />
        </Routes>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
});
const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
