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
}
