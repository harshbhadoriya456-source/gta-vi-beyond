"use client";
import { motion } from "framer-motion";

export default function OnlyInLeonida() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <p className="text-pink-400 uppercase tracking-[0.3em]">People & Places</p>

      <h2 className="mt-4 text-5xl font-black">Only In Leonida</h2>

      <p className="mt-4 max-w-2xl text-zinc-400">Explore the most unique locations across Leonida.</p>

      <div className="mt-12 grid md:grid-cols-3 gap-6">

        <motion.div
          initial={{ opacity: 0, y: 80, filter: "blur(12px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.2 }}
          whileHover={{ scale: 1.04, y: -10 }}
          className="relative h-[350px] overflow-hidden rounded-[32px] border border-pink-500/20 shadow-[0_0_40px_rgba(236,72,153,0.08)] hover:shadow-[0_0_120px_rgba(236,72,153,0.35)]"
          style={{
            backgroundImage: "url('/gta6/hero/Jason_and_Lucia_02_landscape.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

          <div className="relative z-10 p-8">
            <h3 className="text-4xl font-black bg-gradient-to-r from-pink-400 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(236,72,153,0.4)]">
  Vice City
</h3>

<p className="mt-3 text-orange-50">
  Explore the most iconic locations across Leonida.
</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 80, filter: "blur(12px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.2 }}
          whileHover={{ scale: 1.04, y: -10 }}
          className="relative h-[350px] overflow-hidden rounded-[32px] border border-pink-500/20 shadow-[0_0_40px_rgba(236,72,153,0.08)] hover:shadow-[0_0_120px_rgba(236,72,153,0.35)]"
          style={{
            backgroundImage: "url('/gta6/hero/Grassrivers_04.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

          <div className="relative z-10 p-8">
            <h3 className="text-4xl font-black bg-gradient-to-r from-pink-400 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(236,72,153,0.4)]">
              Grassrivers
            </h3>
            <p className="mt-3 text-orange-50">
              Swamps, wildlife and hidden secrets.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 80, filter: "blur(12px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.2 }}
          whileHover={{ scale: 1.04, y: -10 }}
          className="relative h-[350px] overflow-hidden rounded-[32px] border border-pink-500/20 shadow-[0_0_40px_rgba(236,72,153,0.08)] hover:shadow-[0_0_120px_rgba(236,72,153,0.35)]"
          style={{
            backgroundImage: "url('/gta6/hero/Mount-park.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />

          <div className="relative z-10 p-8">
            <h3 className="text-4xl font-black bg-gradient-to-r from-pink-400 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(236,72,153,0.4)]">
              Mount Kalaga
            </h3>
            <p className="mt-3 text-orange-50">
              Mount Kalaga is Leonida's rugged wilderness, filled with forests, rivers, and breathtaking mountain views.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

