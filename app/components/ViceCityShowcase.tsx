import { motion } from "framer-motion";
export default function ViceCityShowcase() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <p className="text-pink-400 uppercase tracking-[0.3em]">
        Ultimate Edition
      </p>

      <h2 className="mt-4 text-5xl font-black">
        Vice City Showcase
      </h2>

      <p className="mt-4 max-w-2xl text-zinc-400">
        Discover exclusive vehicles, weapons, locations and stories
        from across Leonida.
      </p>

      
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.2,
          }}
          viewport={{
            once: false,
            amount: 0.4,
          }}
          whileHover={{
            scale: 1.02,
          }}
          className="h-[600px] rounded-[32px] overflow-hidden border border-pink-500/20 shadow-[0_0_100px_rgba(236,72,153,0.18)]"
          style={{
            backgroundImage:
              "url('/gta6/showcase/featured-car.avif')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
    </section>
  );
}