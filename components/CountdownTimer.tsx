"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

export default function CountdownTimer({ targetDate }: { targetDate: Date }) {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });
    const [isFinished, setIsFinished] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate.getTime() - now;

            if (distance <= 0) {
                clearInterval(interval);
                setIsFinished(true);
                confetti({
                    particleCount: 150,
                    spread: 100,
                    origin: { y: 0.6 },
                    colors: ['#ffc0cb', '#ff69b4', '#ff1493', '#c71585']
                });
            } else {
                setTimeLeft({
                    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((distance % (1000 * 60)) / 1000)
                });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);

    if (isFinished) {
        return (
            <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center my-8 p-6 bg-white/50 backdrop-blur-md rounded-2xl shadow-lg border border-pink-200"
            >
                <h2 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 animate-pulse">
                    It's Silvianna Santika Wijaya's Birthday 🎉
                </h2>
            </motion.div>
        );
    }

    return (
        <div className="flex flex-col items-center my-8">
            <div className="flex space-x-4 max-w-sm justify-center">
                {Object.entries(timeLeft).map(([unit, value]) => (
                    <div key={unit} className="flex flex-col items-center">
                        <div className="bg-white/60 backdrop-blur-md w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-2xl shadow-md border border-pink-100 text-3xl font-bold text-pink-500">
                            {value.toString().padStart(2, '0')}
                        </div>
                        <span className="text-xs font-semibold mt-2 text-pink-700 uppercase tracking-widest">{unit}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
