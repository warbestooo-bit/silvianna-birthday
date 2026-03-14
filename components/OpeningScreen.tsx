"use client";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function OpeningScreen({ onOpen }: { onOpen: () => void }) {
    return (
        <motion.div
            className="flex flex-col items-center justify-center min-h-screen absolute inset-0 z-50 p-4 text-center bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)), url("/galeri/10.jpg")'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8 }}
        >
            <motion.p
                className="text-3xl md:text-5xl font-extrabold text-pink-600 mb-8 drop-shadow-md bg-white/50 px-8 py-5 rounded-3xl backdrop-blur-sm border border-white/60 mx-auto max-w-3xl leading-snug"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
            >
                Happy Birthday to the most wonderful girl🎉
            </motion.p>

            <motion.button
                onClick={onOpen}
                className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-400 to-rose-400 text-white rounded-full font-bold text-xl shadow-xl hover:shadow-pink-400/50 hover:scale-110 active:scale-95 transition-all outline-none border border-pink-200"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <div className="relative inline-block mr-2 animate-pulse text-white">
                    <Mail size={28} />
                    <span className="absolute -top-1 -right-1 text-red-500 text-sm">❤</span>
                </div>
                Tap to open your present! 🎁
            </motion.button>
        </motion.div>
    );
}
