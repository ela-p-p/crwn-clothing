import React from "react";

import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_AIr98QfZvjn7y3175Rwr4wwM00xwbnRIqh";
  const onToken = token => {
    console.log("token", token);
    alert("Payment Successful");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      panelLabel="Pay Now"
      name="CRWN Clothing Ltd"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
