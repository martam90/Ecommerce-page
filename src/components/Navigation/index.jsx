import React from 'react';
import menuItems from '../../assets/menuData.js';

const Navigation = ({ isOpen }) => {
  return (
    <nav className={isOpen ? 'nav is-active' : 'nav'}>
      <ul className="nav__list">
        {menuItems.map((item) => (
          <li className="nav__item" key={item.name}>
            <a href="/" className="nav__link">
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
