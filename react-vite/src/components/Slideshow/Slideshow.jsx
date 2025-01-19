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
