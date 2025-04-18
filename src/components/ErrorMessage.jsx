import React from "react";

const ErrorMessage = () => {
  let foodItems = ["Dal", "Green Vegetables", "Pulses", "Milk", "Salad"];
  return <>{foodItems.length === 0 && <h3>I am still hungry.</h3>}</>;
};

export default ErrorMessage;
