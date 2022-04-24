import React from 'react';

const Footer = () => {
  return (
    <>
      <footer className="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" rel="noreferrer" target="_blank">Frontend Mentor</a>.
          © {(new Date().getFullYear())} | Coded by <a href="https://github.com/martam90">Marta</a>.
      </footer>
    </>
  )
}

export default Footer;