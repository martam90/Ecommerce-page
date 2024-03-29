import React from 'react';

const Footer = () => {
  return (
    <>
      <footer className="footer container">
        Challenge by{' '}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          rel="noreferrer"
          target="_blank"
        >
          Frontend Mentor
        </a>
        <p>
          © {new Date().getFullYear()} | Coded by{' '}
          <a href="https://github.com/martam90">Marta</a>.
        </p>
      </footer>
    </>
  );
};

export default Footer;
