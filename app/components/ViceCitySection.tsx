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
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 flex h-[600px] items-end p-12">
          <div>
            <p className="text-pink-400 uppercase tracking-[0.3em]">
              Vice City, USA
            </p>

            <h2 className="mt-3 text-5xl font-black">
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