import React, { useState, useEffect } from "react";
import "./Slideshow.css";

const Slideshow = ({ images, interval = 3000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, interval);

        return () => clearInterval(timer);
    }, [currentIndex, interval]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="slideshow-container">
            <button className="nav-button prev" onClick={prevSlide}>
                &#10094;
            </button>

            <div className="slide">
                <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
            </div>

            <button className="nav-button next" onClick={nextSlide}>
                &#10095;
            </button>

            <div className="dots">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${currentIndex === index ? "active" : ""}`}
                        onClick={() => setCurrentIndex(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};
