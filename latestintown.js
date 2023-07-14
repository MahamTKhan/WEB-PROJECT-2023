import React from 'react';
import { Link } from 'react-router-dom';
import './latestintown.css';
import img1 from './images/weird.jpg';
import img2 from './images/Tändelei _ makeup.png';

const ImageSlider = () => {
  const images = [
    {
      src: img1,
      description: "Nurturing healthy Vision",
      blog: './blog4'
    },
    {
      src: img2,
      description: "Glaucoma Science",
      blog: './blog3'
    },
  ];

  return (
    <section className="trend">
      <h1>LATEST IN TOWN!</h1>
      <div className="image-container">
        {images.map((image, index) => (
          <div className="trendcard" key={index}>
            <div className="trendcard-image">
              <img src={image.src} alt="Image" />
            </div>
            <div className="trendcard-description">
              <p>{image.description}</p>
              <div className="readmore-button">
                <Link to={image.blog}>Read More</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageSlider;
