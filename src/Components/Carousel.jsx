import React, { useState, useEffect } from 'react';
import '../styles/Carousel.css'; // Import CSS file for styling

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // 5 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  return (
    <div className="carousel">
      {images.map((image, index) => (
        <div
          key={index}
          className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="carousel-content">
            <h1>JANANAM - 24</h1>
            <p>Ready to experience a new world.</p>
            <button className="cta-button">Get Tickets</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
