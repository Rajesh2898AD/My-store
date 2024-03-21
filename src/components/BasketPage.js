import React from 'react';
import '../styles/BasketPage.css';

function BasketPage({ cartItems, removeFromBasket, isAuthenticated }) {
  // Calculate total price
  const totalPrice = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  const handleRemoveFromBasket = (index) => {
    removeFromBasket(index);
  };

  const handleBuyClick = () => {
    // Display an alert when the Buy button is clicked
    alert('Successfully bought items!');
  };

  return (
    <div>
      <h1>Cart Items</h1>
      {cartItems.length > 0 ? (
        <div>
          <ul className="basket-list">
            {cartItems.map((item, index) => (
              <li key={index} className="basket-item">
                <div>
                  <img src={item.image} alt={item.name} className="item-image" />
                  <span>{item.name} - Quantity: {item.quantity} - Price: {item.price}</span>
                  <button className="remove-button" onClick={() => handleRemoveFromBasket(index)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <p className="total-price">Total Price: {totalPrice}</p>
          {/* Display the Buy button */}
          <button onClick={handleBuyClick}>Buy</button>
        </div>
      ) : (
        <p>Your basket is empty.</p>
      )}
    </div>
  );
}

export default BasketPage;
