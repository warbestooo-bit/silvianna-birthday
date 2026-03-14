"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BirthdayCard() {
    const [isOpen, setIsOpen] = useState(false);

    const textMessage = `Selamat ulang tahun! 🎂✨ Hari ini adalah hari yang sangat spesial, karena pada hari ini dunia kedatangan seseorang yang luar biasa… ya, kamu. 💖\n\nWalaupun kadang sedikit beteann 😝, kadang suka bikin orang bingung 🤭, tapi tetap saja kamu itu spesial dengan caramu sendiri. And honestly, the world feels brighter just because you are in it. 🌍💫\n\nSekarang kamu resmi bertambah umur satu tahun lagi. Tenang saja, bertambah umur bukan berarti bertambah tua kok… cuma bertambah pengalaman, bertambah cerita, dan mungkin bertambah cintanya sama Nadhif hahaha. 🫶\n\nAnother year older, another year more beautiful, wiser, and stronger. I'm so proud of the person you are becoming every single day. 💐\n\nSemoga di umur yang baru ini hidupmu dipenuhi banyak hal baik. Semoga harimu lebih sering diisi dengan tawa daripada sedih, lebih banyak kebahagiaan daripada overthinking, dan mari kita explore dunia ini lebih jauh bersama. ✨🌍\n\nMay this year bring you endless happiness, warm memories, and dreams that slowly come true. You deserve every beautiful thing life has to offer. 💫\n\nTerima kasih sudah menjadi seseorang yang bisa membuat hari terasa lebih menyenangkan. Thank you for being someone who makes my days feel lighter, happier, and more meaningful. ☀️💖\n\nDi hari ulang tahunmu ini ada satu tugas penting: tersenyum lebih banyak 😊, menikmati setiap momen, makan yang enak 🍰, dan merasa bahagia karena hari ini benar-benar tentang kamu.\n\nSo today, celebrate yourself, enjoy every second, and remember that you are deeply loved. 💝\n\nSelamat ulang tahun Silvianna Santika Wijaya. 🎉 Semoga kebahagiaan selalu menemukan jalan untuk datang ke hidupmu.\n\nHappy Birthday to the most wonderful girl. May your life be filled with love, laughter, and beautiful moments. 💐\n\nLove you sayang ❤️\n\nAlways and forever. ♾️\n\nFrom Mas Nadhif 🫶`;

    return (
        <motion.div
            className="max-w-2xl w-full mx-auto my-12 bg-white/40 backdrop-blur-xl border border-white/50 shadow-2xl rounded-3xl p-6 md:p-12 text-center"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
        >
            {/* Cake Emoji Animation */}
            <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="text-7xl md:text-9xl mb-8 select-none"
            >
                🎂
            </motion.div>

            <AnimatePresence mode="wait">
                {!isOpen ? (
                    <motion.div
                        key="closed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="flex flex-col items-center"
                    >
                        <p className="text-lg md:text-xl text-pink-800 font-medium mb-8">
                            Ada pesan spesial untukmu!
                        </p>
                        <button
                            onClick={() => setIsOpen(true)}
                            className="px-8 py-4 bg-gradient-to-r from-pink-400 to-purple-400 text-white rounded-full font-bold text-lg shadow-lg hover:shadow-pink-300/50 hover:scale-105 active:scale-95 transition-all outline-none"
                        >
                            Buka Kartu Ucapan 💌
                        </button>
                    </motion.div>
                ) : (
                    <motion.div
                        key="opened"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        transition={{ duration: 0.5 }}
                        className="text-left w-full space-y-4"
                    >
                        {textMessage.split("\n\n").map((paragraph, idx) => (
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 + (idx * 0.2), duration: 0.5 }}
                                key={idx}
                                className="text-pink-900/90 text-2xl md:text-3xl leading-relaxed whitespace-pre-wrap font-medium font-caveat tracking-wide"
                            >
                                {paragraph}
                            </motion.p>
                        ))}

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5 }}
                            className="pt-8 text-center"
                        >
                            <p className="text-2xl font-bold text-pink-500 font-serif italic">
                                Happy Birthday Silvianna Santika Wijaya ❤️
                            </p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
