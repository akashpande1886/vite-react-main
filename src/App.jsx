import React from "react";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
const App = () => {
  let foodItems = ["Dal", "Green Vegetables", "Pulses", "Milk", "Salad"];
  return (
    <>
      <h1>Healthy Foods</h1>
      <ErrorMessage />
      <FoodItems />
    </>
  );
};

export default App;
