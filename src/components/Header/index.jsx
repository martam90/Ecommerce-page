import React, { useState } from 'react';
import Navigation from '../Navigation';
import logo from '../../icons/logo.svg';
import iconNavOpen from '../../icons/icon-menu.svg';
import iconNavClose from '../../icons/icon-close.svg';
import iconCart from '../../icons/icon-cart.svg';
import avatar from '../../images/image-avatar.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(true);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="header container">
      <div className="header__btn">
        <span>Menu</span>
        <img
          className={isOpen ? "header__btn--open is-hidden" : "header__btn--open"}
          src={iconNavOpen}
          alt="icon menu open"
          onClick={openMenu}
        />
        <img
          className={
            isOpen ? 'header__btn--close is-active' : 'header__btn--close'
          }
          src={iconNavClose}
          alt="icon menu close"
          onClick={closeMenu}
        />
      </div>
      <a href="/" className="header__logo">
        <img src={logo} alt="Sneakers ltd." />
      </a>
      <div className="header__icons--wrapper">
        <a href="/">
          <img className="header__icon--cart" src={iconCart} alt="cart" />
        </a>
        <a href="/">
          <img className="header__icon--avatar" src={avatar} alt="avatar" />
        </a>
      </div>

      <Navigation isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
};

export default Header;
