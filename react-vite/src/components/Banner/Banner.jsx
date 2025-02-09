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

    return (
        <div className="relative w-full h-64 overflow-hidden flex justify-center items-center">
            <AnimatePresence>
                <motion.img
                    key={faceCards[index]}
                    src={faceCards[index]}
                    alt="Face Card"
                    className="absolute w-full h-full object-cover rounded-2xl shadow-lg"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                />
            </AnimatePresence>
        </div>
    );
}

export default FaceCardsBanner;
