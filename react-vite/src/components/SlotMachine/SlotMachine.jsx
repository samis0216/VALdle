import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const symbols = ["🍒", "🍋", "🍉", "🍊", "⭐", "💎", "🔔"];

const getRandomSymbol = () => symbols[Math.floor(Math.random() * symbols.length)];

export default function SlotMachine() {
}
