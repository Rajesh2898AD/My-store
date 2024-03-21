// VegetablesPage.js
import React from 'react';
import GroceryList from './GroceryList';

const VegetablesPage = ({ VegetableItems, addToBasket, searchQuery }) => {
  return (
    <div>
      <GroceryList title="Fresh Vegetables" items={VegetableItems} searchQuery={searchQuery} addToBasket={addToBasket} />
    </div>
  );
};

export default VegetablesPage;
