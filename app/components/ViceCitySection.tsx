"use client";

import { motion } from "framer-motion";

export default function ViceCitySection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="mx-auto max-w-7xl px-6 py-20"
    >
      <div
        className="relative overflow-hidden rounded-[32px] min-h-[600px]"
        style={{
          backgroundImage:
            "url('/gta6/hero/Jason_and_Lucia_02_landscape.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

        <div className="relative z-10 flex h-[600px] items-end p-12">
          <div>
            <p className="uppercase tracking-[0.4em] text-pink-300 font-bold text-lg
drop-shadow-[0_0_15px_rgba(236,72,153,0.9)]">
  VICE CITY, USA
</p>

          <div className="mt-2 h-[3px] w-32 rounded-full bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-400 shadow-[0_0_20px_rgba(236,72,153,0.8)]" />

            <h2 className="text-7xl font-black bg-gradient-to-r from-pink-400 via-purple-300 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(236,72,153,0.4)]">
  The Heart Of Leonida
</h2>

            <p className="mt-4 max-w-xl text-zinc-300">
              Neon lights, beaches, crime empires and endless
              opportunities. Welcome to the most vibrant city
              Rockstar has ever built.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}