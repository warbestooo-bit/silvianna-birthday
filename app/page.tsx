"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, PauseCircle, PlayCircle } from "lucide-react";
import confetti from "canvas-confetti";

import OpeningScreen from "@/components/OpeningScreen";
import LetterExperience from "@/components/LetterExperience";

import GiftBox from "@/components/GiftBox";
import BirthdayCard from "@/components/BirthdayCard";
import PhotoGallery from "@/components/PhotoGallery";

export default function Home() {
    const [hasOpenedSurprise, setHasOpenedSurprise] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        // Load custom music from public/music.mp3
        audioRef.current = new Audio("/music.mp3");
        audioRef.current.loop = true;

        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
            }
        };
    }, []);

    const handleOpenSurprise = () => {
        setHasOpenedSurprise(true);
        // Play music when opening the surprise
        if (audioRef.current) {
            audioRef.current.play().catch(e => console.log("Audio play prevented:", e));
            setIsPlaying(true);
        }

        // Initial Confetti on main screen after opening
        setTimeout(() => {
            confetti({
                particleCount: 150,
                spread: 100,
                origin: { y: 0.3 },
                colors: ['#ffc0cb', '#ff69b4', '#ff1493']
            });
        }, 800);
    };

    const toggleAudio = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play().catch(e => console.log("Audio play prevented by browser:", e));
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <main className="min-h-screen relative overflow-hidden bg-gradient-to-br from-pink-100 via-pink-50 to-purple-100 text-pink-950 font-sans selection:bg-pink-300">

            <AnimatePresence mode="wait">
                {!hasOpenedSurprise ? (
                    <OpeningScreen key="opening" onOpen={handleOpenSurprise} />
                ) : (
                    <motion.div
                        key="main"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="relative z-10 w-full"
                    >
                        {/* Background Floating Elements */}
                        <BackgroundBalloons />
                        <BackgroundFloatingHearts />

                        {/* Audio Control */}
                        <button
                            onClick={toggleAudio}
                            className="fixed top-4 right-4 md:top-6 md:right-6 z-50 p-2 md:p-3 bg-white/60 backdrop-blur-md rounded-full shadow-lg text-pink-600 hover:bg-white hover:scale-110 transition-all cursor-pointer border border-pink-200"
                        >
                            {isPlaying ? <PauseCircle size={28} /> : <PlayCircle size={28} />}
                        </button>

                        {/* Main Content Container */}
                        <div className="container mx-auto px-4 min-h-screen flex flex-col items-center py-8 md:py-16 text-center">

                            <motion.div
                                initial={{ y: -50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="mb-8 mt-12"
                            >
                                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 drop-shadow-sm px-1 leading-tight tracking-tight">
                                    Happy Birthday <br className="md:hidden" /> Silvianna Santika Wijaya ❤️
                                </h1>
                            </motion.div>

                            {/* Photo Replacement for Countdown */}
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="w-[85%] sm:w-full max-w-sm mx-auto mb-6 md:mb-8 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/50"
                            >
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src="/galeri/1.jpg"
                                    alt="Silvianna"
                                    className="w-full h-auto object-cover"
                                />
                            </motion.div>

                            {/* Card Message Section */}
                            <BirthdayCard />

                            {/* Surprise Gift Section */}
                            <GiftBox />

                            {/* Photo Gallery */}
                            <PhotoGallery />

                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
}

// Background Balloon Animation Components
function BackgroundBalloons() {
    const balloons = [
        { id: 1, color: "bg-pink-300", left: "10%", delay: 0 },
        { id: 2, color: "bg-purple-300", left: "30%", delay: 2 },
        { id: 3, color: "bg-pink-400", left: "50%", delay: 1 },
        { id: 4, color: "bg-rose-300", left: "70%", delay: 3 },
        { id: 5, color: "bg-fuchsia-300", left: "85%", delay: 1.5 },
    ];

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {balloons.map((balloon) => (
                <motion.div
                    key={balloon.id}
                    className={`absolute w-12 text-5xl md:text-7xl`}
                    style={{ left: balloon.left, top: "-10%" }}
                    animate={{
                        y: ["-10vh", "110vh"],
                        x: ["0px", "20px", "-20px", "0px"]
                    }}
                    transition={{
                        y: {
                            duration: 10 + Math.random() * 5,
                            repeat: Infinity,
                            ease: "linear",
                            delay: balloon.delay,
                        },
                        x: {
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: balloon.delay,
                        }
                    }}
                >
                    🎈
                </motion.div>
            ))}
        </div>
    );
}

// Background Floating Hearts Components
function BackgroundFloatingHearts() {
    const hearts = Array.from({ length: 15 }).map((_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        size: Math.random() * 20 + 10,
        delay: Math.random() * 5,
        duration: Math.random() * 10 + 10,
    }));

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-30">
            {hearts.map((heart) => (
                <motion.div
                    key={heart.id}
                    className="absolute text-pink-400"
                    style={{ left: heart.left, bottom: "-5%" }}
                    animate={{
                        y: ["0vh", "-110vh"],
                        x: ["0px", `${Math.random() * 50 - 25}px`, "0px"],
                        rotate: [0, Math.random() * 360],
                    }}
                    transition={{
                        y: {
                            duration: heart.duration,
                            repeat: Infinity,
                            ease: "linear",
                            delay: heart.delay,
                        },
                        x: {
                            duration: heart.duration / 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: heart.delay,
                        },
                        rotate: {
                            duration: heart.duration,
                            repeat: Infinity,
                            ease: "linear"
                        }
                    }}
                >
                    <Heart fill="currentColor" size={heart.size} />
                </motion.div>
            ))}
        </div>
    );
}
