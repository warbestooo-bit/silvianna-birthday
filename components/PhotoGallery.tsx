"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Camera } from "lucide-react";

export default function PhotoGallery() {
    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    // Load actual photos from public/galeri folder
    const photos = [
        ...Array.from({ length: 50 }).map((_, i) => ({
            id: i + 1,
            src: `/galeri/${i + 1}.jpg`,
            type: "image"
        })),
        { id: 51, src: "/galeri/IMG_2217.MP4", type: "video" },
        { id: 52, src: "/galeri/IMG_6746.MP4", type: "video" }
    ];

    const nextPhoto = () => {
        setCurrentIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
    };

    const prevPhoto = () => {
        setCurrentIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
    };

    return (
        <>
            <div className="my-10 text-center w-full z-20 relative">
                <motion.button
                    onClick={() => setIsOpen(true)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 mx-auto px-6 py-3 bg-white/60 backdrop-blur-md rounded-full shadow-lg border border-pink-200 text-pink-600 font-bold hover:bg-pink-100 transition-all cursor-pointer outline-none"
                >
                    <Camera size={24} />
                    Memori Kita 📸
                </motion.button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
                    >
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-6 right-6 text-white bg-white/20 hover:bg-white/40 p-2 rounded-full transition-all"
                        >
                            <X size={32} />
                        </button>

                        <div className="relative w-full max-w-4xl flex items-center justify-center">
                            <button
                                onClick={prevPhoto}
                                className="absolute left-2 md:-left-12 text-white bg-white/20 hover:bg-white/40 p-3 rounded-full transition-all z-10"
                            >
                                <ChevronLeft size={32} />
                            </button>

                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="w-full max-h-[80vh] flex justify-center items-center rounded-2xl overflow-hidden"
                            >
                                {photos[currentIndex].type === "video" ? (
                                    <video
                                        src={photos[currentIndex].src}
                                        controls
                                        autoPlay
                                        className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl border-4 border-white/20"
                                    />
                                ) : (
                                    /* eslint-disable-next-line @next/next/no-img-element */
                                    <img
                                        src={photos[currentIndex].src}
                                        alt={`Memory ${currentIndex + 1}`}
                                        className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl border-4 border-white/20"
                                    />
                                )}
                            </motion.div>

                            <button
                                onClick={nextPhoto}
                                className="absolute right-2 md:-right-12 text-white bg-white/20 hover:bg-white/40 p-3 rounded-full transition-all z-10"
                            >
                                <ChevronRight size={32} />
                            </button>
                        </div>

                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 font-medium">
                            {currentIndex + 1} / {photos.length}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
