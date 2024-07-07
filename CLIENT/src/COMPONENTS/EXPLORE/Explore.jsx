import React from 'react';
import './Explore.css';
import { assets, boxlist, chairlist } from '../../assets/assest';
import About from '../../PAGES/ABOUT/About';

const Explore = () => {
  return (
    <section className='section'>
      <div className="explore-content">
        <div className="heading">
          <h1>Browse The Range</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
        </div>
        <div className="collection">
          <div className="collection-item">
            <img src={assets.Dinning} alt="Dining" className="explore-img" />
            <p>Dining</p>
          </div>
          <div className="collection-item">
            <img src={assets.Bedroom} alt="Bedroom" className="explore-img" />
            <p>Bedroom</p>
          </div>
          <div className="collection-item">
            <img src={assets.Livingroom} alt="Livingroom" className="explore-img" />
            <p>Livingroom</p>
          </div>
        </div>
      </div>

      <div className="shop">
        <div className="left">
          <h1 className="title">Crafted with Excellence</h1>
          <p>Explore our premium collection of meticulously crafted items.</p>
          <button className="shop-button">Explore</button>
        </div>
        <div className="right">
          <div className="shop-gallery">
            {boxlist.map((box, index) => (
              <div key={index} className="shop-item">
                <img src={box.box_img} alt={`Box ${index + 1}`} className="shop-img" />
                <div className="item-details">
                  <p>{box.box_name} </p>
                  <p>${box.box_price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Explore;
