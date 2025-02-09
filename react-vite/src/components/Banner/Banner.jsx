import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FaceCardsBanner = ({ faceCards }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % faceCards.length);
        }, 3000)
        return () => clearInterval(interval);
    }, [faceCards.length]);
}
