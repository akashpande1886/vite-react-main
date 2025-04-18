import React from "react";
let foodItems = ["Dal", "Green Vegetables", "Pulses", "Milk", "Salad"];

const App = () => {
  return (
    <>
      <h1>Healthy Foods</h1>
      {foodItems.length === 0 && <h3>I am still hungry.</h3>}
      <ul className="list-group">
        {foodItems.map((foodItem) => (
          <li key={foodItem} className="list-group-item">
            {foodItem}
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
