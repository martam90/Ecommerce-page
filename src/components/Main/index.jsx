import React from 'react';
import mainImage from '../../images/image-product-1.jpg';
import Basket from '../Basket';
// import iconPrev from '../../icons/icon-previous.svg';
// import iconNext from '../../icons/icon-next.svg';

const Main = () => {
  return (
    <main className="main">
      <section>
        <img className="main__image" src={mainImage} alt="shoes" />
        <div className="main__image--arrows">
          {/* <img src={iconPrev} alt="previous" />
          <img src={iconNext} alt="next" /> */}
        </div>
        <Basket />
      </section>
      <section>
        <p>Sneaker Company</p>
        <h1 className="main__heading">Fall Limited Edition Sneakers</h1>
        <p className="main__desc">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <div className="main__price">
          <div>
            <p>$125.00</p>
            <span>50%</span>
          </div>
          <span>
            <s>$250.00</s>
          </span>
        </div>
        <div className="main__items-count">
          <div>
            <span>0</span>
          </div>
          <a className="button button--primary" href="/">
            Add to cart
          </a>
        </div>
      </section>
    </main>
  );
};

export default Main;
