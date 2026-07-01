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

      <p className="mt-8 max-w-4xl text-xl text-zinc-300 leading-relaxed">
  Welcome to Leonida, a vibrant state where luxury, ambition
  and chaos collide. From the neon-lit streets of Vice City
  to the untamed wetlands of Grassrivers and the rugged
  wilderness of Mount Kalaga, every region offers its own
  stories, secrets and opportunities.
</p>

<p className="mt-4 max-w-4xl text-lg text-zinc-400 leading-relaxed">
  Explore bustling nightlife, hidden backroads, breathtaking
  coastlines and dangerous criminal empires in Rockstar's
  most ambitious open world yet. Whether you're chasing
  fortune, adventure or survival, Leonida promises an
  unforgettable journey.
</p>
    </motion.section>
  );
}