"use client";

import { motion } from "framer-motion";

export default function WelcomeLeonida() {
  return (
    <motion.section
    id="leonida"
      initial={{
  opacity: 0,
  y: 100,
  scale: 0.9,
}}

whileInView={{
  opacity: 1,
  y: 0,
  scale: 1,
}}

transition={{
  duration: 1,
}}
      viewport={{ once: true }}
      className="mx-auto max-w-7xl px-6 py-32"
    >
      <p className="text-pink-400 uppercase tracking-[0.3em] mb-4">
        State of Leonida
      </p>

      <h2 className="text-5xl md:text-7xl font-black">
        Welcome To Leonida
      </h2>

      <p className="mt-8 max-w-3xl text-xl text-zinc-400 leading-relaxed">
        Home to Vice City and beyond. From neon-soaked beaches
        to dangerous backroads, Leonida is Rockstar's biggest
        and most ambitious world yet.
      </p>
    </motion.section>
  );
}