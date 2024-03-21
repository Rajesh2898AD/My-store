// App.js
import React, { useState } from 'react';
import './App.css';
import TopBar from './components/TopBar';
import GroceryList from './components/GroceryList';
import TeaPage from './components/TeaPage'; // Import the TeaPage component
import GheePage from './components/GheePage';
import Exotic from './components/FruitsPage';
import VegetablesPage from './components/VegetablesPage'; import BasketPage from './components/BasketPage';
import FruitsPage from './components/FruitsPage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Apple from './images/Apple.jpg';
import Mango from './images/Mango.jpg';
import Banana from './images/Banana.jpg';
import Grapes from './images/Grapes.jpg';
import Pomegranate from './images/Pomegranate.jpg';
import Papaya from './images/Papaya.jpg';
import Watermelon from './images/Watermelon.jpg';
import Orange from './images/Orange.jpg';
import Guava from './images/Guava.jpg';

import Tomato from './images/Tomato.jpg';
import Potato from './images/Potato.jpg';
import Spinach from './images/Spinach.jpg';
import BellPepper from './images/BellPepper.jpg';
import Cabbage from './images/Cabbage.jpg';
import Carrot from './images/carrot.jpg';
import Broccoli from './images/broccoli.jpg';
import ThreeRosesImage from './images/ThreeRoses.jpg';
import LiptonGreenTeaImage from './images/LiptonGreenTea.jpg';
import TajMahalImage from './images/TajMahal.jpg';
import EmperiaGreenTeaImage from './images/EmperiaGreenTea.jpg';
import RedLabelImage from './images/RedLabel.jpg';
import NadiniImage from './images/nadini.jpg';
import AmulImage from './images/Amul.jpg';
import GRBImage from './images/Grb.jpg';
import FreshoImage from './images/Fresho.jpg';




function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [cartItems, setCartItems] = useState([]);

  const handleSearchInputChange = (query) => {
    setSearchQuery(query);
  };

  const groceryLists = [
    {
      title: 'Fruits',
      items: [
        { name: 'Apple', image: Apple, prices: { '500g': 12, '1kg': 15, '5kg': 20 } },
        { name: 'Mango', image: Mango, prices: { '500g': 10, '1kg': 15, '5kg': 20 } },
        { name: 'Banana', image: Banana, prices: { '500g': 8, '1kg': 12, '5kg': 20 } },
        { name: 'Grapes', image: Grapes, prices: { '500g': 20, '1kg': 35, '5kg': 60 } },
        { name: 'Pomegranate', image: Pomegranate, prices: { '1kg': 50, '2kg': 90 } },
        { name: 'Papaya', image: Papaya, prices: { '1kg': 25, '2kg': 45 } },
        { name: 'Watermelon', image: Watermelon, prices: { '1kg': 10, '2kg': 18 } },
        { name: 'Orange', image: Orange, prices: { '1kg': 15, '2kg': 28 } },
        { name: 'Guava', image: Guava, prices: { '500g': 15, '1kg': 25 } }
      ]
    },
    {
      title: 'Vegetables',
      items: [
        { name: 'Carrot', image: Carrot, prices: { '500g': 13, '1kg': 45, '5kg': 45 } },
        { name: 'Broccoli', image: Broccoli, prices: { '500g': 14, '1kg': 41, '5kg': 45 } },
        // Additional vegetables
        { name: 'Spinach', image: Spinach, prices: { '500g': 10, '1kg': 18, '2kg': 30 } },
        { name: 'Tomato', image: Tomato, prices: { '500g': 8, '1kg': 15, '5kg': 25 } },
        { name: 'Potato', image: Potato, prices: { '500g': 7, '1kg': 12, '5kg': 20 } },
        { name: 'Cabbage', image: Cabbage, prices: { '500g': 10, '1kg': 20, '2kg': 35 } },
        { name: 'Bell Pepper', image: BellPepper, prices: { '500g': 15, '1kg': 25, '5kg': 45 } }
      ]
    },
    {
      title: 'Tea',
      items: [
        { name: '3 Roses', image: ThreeRosesImage, prices: { '100g': 50, '250g': 120 } },
        { name: 'Lipton Green Tea', image: LiptonGreenTeaImage, prices: { '100g': 60, '250g': 150 } },
        { name: 'Taj Mahal', image: TajMahalImage, prices: { '100g': 70, '250g': 180 } },
        { name: 'Emperia Green Tea', image: EmperiaGreenTeaImage, prices: { '100g': 80, '250g': 200 } },
        { name: 'Red Label', image: RedLabelImage, prices: { '100g': 90, '250g': 220 } },
      ]
    },
    {
    title: 'Ghee',
    items: [
      { name: 'Nadini', image: NadiniImage, prices: { '500g': 120, '1kg': 240 } },
      { name: 'Amul', image: AmulImage, prices: { '500g': 110, '1kg': 220 } },
      { name: 'GRB', image: GRBImage, prices: { '500g': 100, '1kg': 200 } },
      { name: 'Fresho', image: FreshoImage, prices: { '500g': 130, '1kg': 260 } }
    ]
    }
  ];
  
  

  const addToBasket = (item) => {
    const existingItemIndex = cartItems.findIndex((cartItem) => cartItem.name === item.name);
    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += 1;
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
      console.log(cartItems);
    }
  };
  
  const removeFromBasket = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  return (
    <Router>
      <div className="App">
        <TopBar onSearchChange={handleSearchInputChange} cartItems={cartItems} />
        <Routes>
          <Route path="/" element={<GroceryListsPage groceryLists={groceryLists} searchQuery={searchQuery} addToBasket={addToBasket} />} />
          <Route path="/groceries" element={<GroceryListsPage groceryLists={groceryLists} searchQuery={searchQuery} addToBasket={addToBasket} />} />
          <Route path="/tea" element={<TeaPage teaItems={groceryLists.find(list => list.title === 'Tea').items} searchQuery={searchQuery} addToBasket={addToBasket} removeFromBasket={removeFromBasket}  />} />
          <Route path="/ghee" element={<GheePage GheeItems={groceryLists.find(list => list.title === 'Ghee').items} searchQuery={searchQuery} addToBasket={addToBasket} removeFromBasket={removeFromBasket} />} />
          <Route path="/exotic-fruits-vegetables" element={<Exotic />} />
          <Route path="/vegetables" element={<VegetablesPage VegetableItems={groceryLists.find(list => list.title === 'Vegetables').items} searchQuery={searchQuery} addToBasket={addToBasket} removeFromBasket={removeFromBasket} />} />          <Route path="/basket" element={<BasketPage cartItems={cartItems} removeFromBasket={removeFromBasket} />} />
          <Route path="/fruits" element={<FruitsPage FruitItems={groceryLists.find(list => list.title === 'Fruits').items} searchQuery={searchQuery} addToBasket={addToBasket} removeFromBasket={removeFromBasket} />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/basket" element={<BasketPage cartItems={cartItems} removeFromBasket={removeFromBasket} />} />
        </Routes>
      </div>
    </Router>
  );
}

function GroceryListsPage({ groceryLists, searchQuery, addToBasket }) {
  return (
    <div>
      {groceryLists.map((list, index) => (
        <GroceryList key={index} title={list.title} items={list.items} searchQuery={searchQuery} addToBasket={addToBasket} />     
      ))}
    </div>
  );
}

export default App;
