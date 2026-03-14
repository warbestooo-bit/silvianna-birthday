"use client";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const welcomePhotos = [
    "/galeri/20.jpg", "/galeri/26.jpg", "/galeri/30.jpg", "/galeri/33.jpg",
    "/galeri/35.jpg", "/galeri/47.jpg", "/galeri/4.jpg", "/galeri/6.jpg",
    "/galeri/8.jpg", "/galeri/10.jpg", "/galeri/11.jpg", "/galeri/15.jpg",
    "/galeri/16.jpg", "/galeri/18.jpg", "/galeri/19.jpg"
];

export default function OpeningScreen({ onOpen }: { onOpen: () => void }) {
    return (
        <motion.div
            className="flex flex-col items-center justify-center min-h-screen absolute inset-0 z-50 p-4 text-center bg-gradient-to-br from-pink-100 via-rose-50 to-pink-200 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1 } }}
        >
            {/* Background Scattered Photos (Polaroid Style) */}
            <div className="absolute inset-0 z-0 opacity-40">
                {welcomePhotos.map((src, index) => {
                    // Random positions and rotations for album effect
                    const xPos = (index % 5) * 20 + (Math.random() * 10 - 5);
                    const yPos = Math.floor(index / 5) * 30 + (Math.random() * 10 - 5);
                    const rotate = Math.random() * 40 - 20;

                    return (
                        <motion.div
                            key={index}
                            className="absolute bg-white p-1 pb-4 shadow-md rounded-sm border border-pink-100 hidden md:block"
                            style={{
                                width: "120px",
                                left: `${xPos}%`,
                                top: `${yPos}%`,
                                rotate: `${rotate}deg`,
                            }}
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.1 * index, duration: 0.8 }}
                        >
                            <img src={src} alt="Memory" className="w-full h-24 object-cover" />
                        </motion.div>
                    );
                })}

                {/* Mobile version: More structured scattered layout to avoid messy overlaps */}
                {welcomePhotos.slice(0, 10).map((src, index) => {
                    // controlled scattering for mobile
                    const columns = 2;
                    const col = index % columns;
                    const row = Math.floor(index / columns);

                    // Positions based on grid but with slight offsets for "scrapbook" feel
                    const left = col === 0 ? (5 + Math.random() * 5) : (65 + Math.random() * 5);
                    const top = (row * 18) + (Math.random() * 5);
                    const rotate = index % 2 === 0 ? -10 + Math.random() * 5 : 10 - Math.random() * 5;

                    return (
                        <motion.div
                            key={`mb-${index}`}
                            className="absolute bg-white p-1 pb-3 shadow-md rounded-sm border border-pink-50 md:hidden"
                            style={{
                                width: "85px",
                                left: `${left}%`,
                                top: `${top}%`,
                                rotate: `${rotate}deg`,
                            }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.15 * index }}
                        >
                            <img src={src} alt="Memory" className="w-full h-16 object-cover rounded-tiny" />
                        </motion.div>
                    );
                })}
            </div>

            {/* Main Content */}
            <div className="relative z-10 flex flex-col items-center max-w-lg w-full">
                <motion.div
                    className="mb-8"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.5 }}
                >
                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-pink-200/50 shadow-2xl border-4 border-white">
                        <Heart className="text-rose-500 fill-rose-500" size={48} />
                    </div>
                </motion.div>

                <motion.h1
                    className="text-3xl md:text-5xl font-serif font-bold text-rose-600 mb-6 leading-tight drop-shadow-sm"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                >
                    Happy Birthday to the <br />
                    <span className="italic">Most Wonderful Girl</span>
                </motion.h1>

                <motion.p
                    className="text-rose-400 text-lg md:text-xl font-medium mb-10 px-4"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1 }}
                >
                    Hii Silvianna, ada kejutan kecil <br className="md:hidden" /> buat kamu di dalam...
                </motion.p>

                <motion.button
                    onClick={onOpen}
                    className="group relative flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-rose-400 to-pink-500 text-white rounded-full font-bold text-xl shadow-xl shadow-rose-200 hover:shadow-rose-300 hover:scale-110 active:scale-95 transition-all outline-none"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.2 }}
                >
                    <span>Tap to open your present!</span>
                    <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                        🎁
                    </motion.span>

                    {/* Subtle hover effect */}
                    <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.button>
            </div>

            {/* Background Floating Hearts */}
            <div className="absolute inset-0 pointer-events-none z-0">
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute text-rose-200 opacity-30"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`
                        }}
                        animate={{
                            y: [0, -40, 0],
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: i * 0.5
                        }}
                    >
                        <Heart size={24} fill="currentColor" />
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
