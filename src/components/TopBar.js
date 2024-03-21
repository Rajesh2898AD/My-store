import React, { useState } from 'react';
import '../styles/TopBar.css';
import { Link } from 'react-router-dom'; 
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';

function TopBar({ onSearchChange, cartItems }) {
  const handleSearchInputChange = (event) => {
    onSearchChange(event.target.value);
  };

  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);



  return (
    <div className="top-bar">
      <div className="top-row">
        <Link to="/groceries" className="big-basket">Big Store</Link>
        <input type="text" placeholder="Search for Products..." onChange={handleSearchInputChange} />
        <div className="login-signup">
          <Link to="/login">Login</Link>
        </div>
        <Link to="/basket" className="my-basket">My Cart ({cartItems.length})</Link>
      </div>
      <div className="bottom-row">
        <Link to="/fruits" className="fruits">
           Fruits 
        </Link>
        <Link to="/tea" className="tea">
          Tea
        </Link>
        <Link to="/ghee" className="ghee">
          Ghee
        </Link>
        <Link to="/vegetables" className="fresh-vegetables">
        Fresh Vegetables
        </Link>
      </div>
      {isLoginOpen && <LoginPage />}
      {isSignupOpen && <SignupPage />}
    </div>
  );
}

export default TopBar;
