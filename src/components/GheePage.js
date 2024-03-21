// TeaPage.js
import React from 'react';
import GroceryList from './GroceryList';

const GheePage = ({ GheeItems, addToBasket, searchQuery }) => {
  return (
    <div>
      <GroceryList title="Ghee" items={GheeItems} searchQuery={searchQuery} addToBasket={addToBasket} />
    </div>
  );
};

export default GheePage;
