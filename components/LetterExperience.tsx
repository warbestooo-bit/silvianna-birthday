"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Heart } from "lucide-react";

const slides = [
    {
        content: "Semoga di ulang tahun kamu yang akan datang, aku masih menjadi orang yang kamu lihat pertama kali saat kamu merayakannya.",
        content2: "Karena harapanku sederhana, setiap tahun kita bisa terus tumbuh bersama, sampai suatu hari nanti kita benar-benar menjadi pasangan seumur hidup."
    },
    {
        content: "Aku tidak tahu bagaimana masa depan akan berjalan. Aku juga tidak tahu jalan seperti apa yang akan kita lewati nanti.",
        content2: "Tapi satu hal yang selalu aku tahu dan aku inginkan sejak awal… aku ingin tetap berjalan bersama kamu."
    },
    {
        content: "Aku ingin ada di setiap cerita hidup kamu.",
        content2: "Di saat kamu bahagia, di saat kamu lelah, bahkan di saat dunia terasa berat. Aku ingin menjadi orang yang selalu kamu ingat untuk pulang."
    },
    {
        content: "Mungkin waktu akan membuat kita berubah, mungkin hidup akan memberi banyak ujian,",
        content2: "tapi semoga satu hal tidak pernah berubah: kita yang tetap memilih satu sama lain."
    },
    {
        content: "Karena buat aku, melihat kamu tersenyum, tumbuh, dan bahagia…",
        content2: "sudah lebih dari cukup untuk membuat aku bersyukur setiap hari."
    },
    {
        content: "Dan kalau suatu hari nanti kita benar-benar sampai di masa itu, masa di mana kita menoleh ke belakang melihat perjalanan panjang kita,",
        content2: "aku ingin kita tersenyum dan berkata:\n\n“Ternyata dari awal sampai sejauh ini… kita tetap memilih untuk bersama.” 🤍"
    }
];

export default function LetterExperience({ onFinish }: { onFinish: () => void }) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isLastSlide, setIsLastSlide] = useState(false);

    useEffect(() => {
        if (currentSlide < slides.length - 1) {
            const timer = setTimeout(() => {
                setCurrentSlide((prev) => prev + 1);
            }, 6000); // 6 seconds per slide
            return () => clearTimeout(timer);
        } else {
            setIsLastSlide(true);
        }
    }, [currentSlide]);

    return (
        <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-[#fdfaf3] overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {/* Paper Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/parchment.png')]" />

            <div className="relative w-full max-w-2xl px-8 md:px-12 py-16 mx-auto">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -100, opacity: 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        className="flex flex-col items-center justify-center text-center space-y-8"
                    >
                        {/* Decorative Icon */}
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.4, type: "spring" }}
                        >
                            <Heart className="text-rose-300 fill-rose-100" size={48} />
                        </motion.div>

                        {/* Letter Content */}
                        <div className="space-y-6 font-serif">
                            <motion.p
                                className="text-2xl md:text-3xl text-gray-800 leading-relaxed italic"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                {slides[currentSlide].content}
                            </motion.p>

                            {slides[currentSlide].content2 && (
                                <motion.p
                                    className="text-xl md:text-2xl text-gray-700 leading-relaxed italic border-t border-rose-100 pt-6"
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                >
                                    {slides[currentSlide].content2}
                                </motion.p>
                            )}
                        </div>

                        {/* Final Slide Button */}
                        {isLastSlide && (
                            <motion.button
                                onClick={onFinish}
                                className="mt-12 group flex items-center gap-2 px-8 py-3 bg-rose-400 text-white rounded-full font-bold text-lg shadow-lg hover:bg-rose-500 hover:scale-105 transition-all"
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 1 }}
                            >
                                Ke Memori kita
                                <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                            </motion.button>
                        )}
                    </motion.div>
                </AnimatePresence>

                {/* Progress Indicators */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-2">
                    {slides.map((_, idx) => (
                        <div
                            key={idx}
                            className={`h-1.5 rounded-full transition-all duration-1000 ${idx === currentSlide ? "w-8 bg-rose-400" : "w-2 bg-rose-200"
                                }`}
                        />
                    ))}
                </div>
            </div>

            {/* Background Decorative Patterns */}
            <div className="absolute top-0 left-0 w-32 h-32 md:w-64 md:h-64 border-l-4 border-t-4 border-rose-100/50 rounded-tl-3xl -m-4 md:-m-8" />
            <div className="absolute bottom-0 right-0 w-32 h-32 md:w-64 md:h-64 border-r-4 border-b-4 border-rose-100/50 rounded-br-3xl -m-4 md:-m-8" />
        </motion.div>
    );
}
