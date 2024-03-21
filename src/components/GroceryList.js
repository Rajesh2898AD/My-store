import React, { useState } from 'react';
import '../styles/GroceryList.css';

function GroceryList({ title, items, addToBasket, searchQuery }) {
  const filteredItems = items && items.length > 0 ? items.filter(item => {
    return item && item.name && item.name.toLowerCase().includes(searchQuery.toLowerCase());
  }) : [];

  const [selectedQuantity, setSelectedQuantity] = useState({});

  const handleQuantityChange = (event, itemName) => {
    setSelectedQuantity({ ...selectedQuantity, [itemName]: event.target.value });
  };

  const handleAddToCart = (itemName, price) => {
    const item = items.find(item => item.name === itemName);
    const quantityOptions = Object.keys(item.prices);
    const defaultQuantity = quantityOptions[0]; // Set the default quantity option
    
    const quantity = selectedQuantity[itemName] || defaultQuantity;
    addToBasket({ name: itemName, quantity, price, image: item.image }); // Include the image property
  };
  

  return (
    <div className="grocery-list">
      <h2>{title}</h2>
      <div className="items">
        {filteredItems.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.image} alt={item.name} />
            <div className="card-content">
              <p>{item.name}</p>
              {/* Display dropdown for quantity */}
              <select value={selectedQuantity[item.name] || Object.keys(item.prices)[0]} onChange={(e) => handleQuantityChange(e, item.name)}>
                {Object.keys(item.prices).map((quantityOption, index) => (
                  <option key={index} value={quantityOption}>{quantityOption}</option>
                ))}
              </select>
              {/* Display the price based on selected quantity */}
              <p>Price: {item.prices[selectedQuantity[item.name] || Object.keys(item.prices)[0]]}</p>
              <button onClick={() => handleAddToCart(item.name, item.prices[selectedQuantity[item.name] || Object.keys(item.prices)[0]])}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GroceryList;
