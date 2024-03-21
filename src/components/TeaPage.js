// TeaPage.js
import React from 'react';
import GroceryList from './GroceryList';

const TeaPage = ({ teaItems, addToBasket, searchQuery }) => {
  return (
    <div>
      <GroceryList title="Tea" items={teaItems} searchQuery={searchQuery} addToBasket={addToBasket} />
    </div>
  );
};

export default TeaPage;
