import React from 'react';
import { useNavigate } from 'react-router-dom';
import './header.css';

const Header = ({ page, loggedIn }) => {
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div id="header">
      <img src="./img/Logo.png" alt="logo" id="logoImg" />
      <h2>{page}</h2>
      {loggedIn && (
        <button id="logOutBtn" onClick={logOut}>
          Log Out
        </button>
      )}
    </div>
  );
};

export default Header;
