import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const symbols = ["🍒", "🍋", "🍉", "🍊", "⭐", "💎", "🔔"];

const getRandomSymbol = () => symbols[Math.floor(Math.random() * symbols.length)];

export default function SlotMachine() {
    const [slots, setSlots] = useState(["❓", "❓", "❓"]);
    const [spinning, setSpinning] = useState(false);

    const spinReels = () => {
        setSpinning(true);

        setTimeout(() => {
            setSlots([getRandomSymbol(), getRandomSymbol(), getRandomSymbol()]);
            setSpinning(false);
        }, 2000);
    };
    return (
        <div className="flex flex-col items-center p-6 bg-gray-900 rounded-2xl shadow-lg text-white w-80">
            <h1 className="text-2xl font-bold mb-4">🎰 Slot Machine</h1>
            <div className="flex space-x-2 bg-gray-800 p-4 rounded-lg border border-gray-700">
                {slots.map((slot, index) => (
                    <motion.div
                        key={index}
                        className="text-5xl w-16 h-16 flex items-center justify-center bg-gray-700 rounded-lg shadow-md"
                        animate={{ y: spinning ? [0, -10, 10, -10, 0] : 0 }}
                        transition={{ duration: 0.5, repeat: spinning ? Infinity : 0 }}
                    >
                        {slot}
                    </motion.div>
                ))}
            </div>
            <Button onClick={spinReels} className="mt-4 bg-yellow-500 hover:bg-yellow-600" disabled={spinning}>
                {spinning ? "Spinning..." : "Spin"}
            </Button>
        </div>
    );
}
