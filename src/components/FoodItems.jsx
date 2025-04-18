import React from "react";

const FoodItems = () => {
  let foodItems = ["Dal", "Green Vegetables", "Pulses", "Milk", "Salad"];
  return (
    <div>
      <ul className="list-group">
        {foodItems.map((foodItem) => (
          <li key={foodItem} className="list-group-item">
            {foodItem}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FoodItems;
