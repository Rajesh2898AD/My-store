// FruitsPage.js
import React from 'react';
import GroceryList from './GroceryList';

const FruitsPage = ({ FruitItems, addToBasket, searchQuery }) => {
  return (
    <div>
      <GroceryList title="Fresh Fruits" items={FruitItems} searchQuery={searchQuery} addToBasket={addToBasket} />
    </div>
  );
};

export default FruitsPage;
