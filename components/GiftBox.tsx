"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { Heart } from "lucide-react";
import LetterExperience from "./LetterExperience";

export default function GiftBox() {
    const [isOpen, setIsOpen] = useState(false);
    const [showLetter, setShowLetter] = useState(false);
    const [showFloatingHearts, setShowFloatingHearts] = useState(false);

    const openGift = () => {
        if (isOpen) return;
        setIsOpen(true);

        // Confetti from box
        confetti({
            particleCount: 150,
            spread: 90,
            origin: { y: 0.7 },
            colors: ['#ffb6c1', '#ff69b4', '#fff0f5', '#ff1493']
        });

        // Show floating hearts
        setShowFloatingHearts(true);
        setTimeout(() => setShowFloatingHearts(false), 3000);

        // Show the romantic letter slides
        setTimeout(() => setShowLetter(true), 1500);
    };

    return (
        <div className="relative flex flex-col items-center my-10 min-h-[250px] w-full max-w-md mx-auto">
            <AnimatePresence>
                {showLetter && (
                    <LetterExperience onFinish={() => setShowLetter(false)} />
                )}
            </AnimatePresence>

            <AnimatePresence mode="wait">
                {!isOpen ? (
                    <motion.div
                        key="closed"
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.1, rotate: [-5, 5, -5, 5, 0] }}
                        exit={{ scale: 0, opacity: 0 }}
                        className="cursor-pointer text-8xl md:text-9xl drop-shadow-xl z-20"
                        onClick={openGift}
                    >
                        🎁
                    </motion.div>
                ) : (
                    <motion.div
                        key="opened"
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="flex flex-col items-center z-20 w-full"
                    >
                        <div className="text-8xl md:text-9xl mb-6 drop-shadow-xl">💝</div>
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-pink-200 text-center w-full"
                        >
                            <p className="text-pink-600 font-medium text-lg leading-relaxed italic">
                                “Nadhif bersyukur dari banyaknya orang di dunia, Nadhif dipertemukan dengan kamu. Semoga kita bisa terus saling menemani. Love you more than words can say ❤️❤️❤️"
                            </p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Mini Floating Hearts around the gift box when opened */}
            <AnimatePresence>
                {showFloatingHearts && Array.from({ length: 12 }).map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{
                            opacity: 1,
                            y: 0,
                            x: (Math.random() - 0.5) * 150,
                            scale: 0.5
                        }}
                        animate={{
                            opacity: 0,
                            y: -200 - Math.random() * 100,
                            scale: 1.5
                        }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5 + Math.random(), ease: "easeOut" }}
                        className="absolute top-1/2 left-1/2 text-pink-500 pointer-events-none -translate-x-1/2 -translate-y-1/2 z-10"
                    >
                        <Heart fill="currentColor" size={32} />
                    </motion.div>
                ))}
            </AnimatePresence>

            {!isOpen && (
                <p className="mt-6 text-pink-700/60 font-semibold animate-pulse text-sm">
                    Tap to open your present!
                </p>
            )}
        </div>
    );
}
