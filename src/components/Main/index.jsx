import React from 'react';
import Gallery from '../Gallery';

const Main = () => {
  return (
    <main className="main">
      <section className="slide__wrap">
        <Gallery />
      </section>

      {/* <section className="main__basket">
        <Basket />
      </section> */}
      <section className="main__content container">
        <h1 className="main__heading"> Sneaker Company</h1>
        <h2>Fall Limited Edition Sneakers</h2>
        <p className="main__desc">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <div className="main__price--wrapper">
          <div>
            <p className="main__price--final">$125.00</p>
            <span className="main__discount">50%</span>
          </div>
          <span>
            <s className="main__price--original">$250.00</s>
          </span>
        </div>
        <div className="main__items-basket">
          <div className="items__count--wrapper">
            <button className="button button--secondary button--add"></button>
            <span className="count">0</span>
            <button className="button button--secondary button--remove"></button>
          </div>
          <a className="button button--primary button--icon" href="/">
            Add to cart
          </a>
        </div>
      </section>
    </main>
  );
};

export default Main;
