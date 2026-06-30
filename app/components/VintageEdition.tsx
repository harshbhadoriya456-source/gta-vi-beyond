import {motion} from "framer-motion";
export default function VintageEdition() {
  return (
    <section className="px-8 py-32">
      <p className="text-pink-400 uppercase tracking-[0.3em] font-bold">
        Vintage Edition
      </p>

      <h2 className="mt-4 text-6xl md:text-7xl font-black text-white">
        A Love Letter To Vice City
      </h2>

      <p className="mt-8 max-w-3xl text-xl text-zinc-400 leading-relaxed">
        Inspired by the neon-soaked legacy of Vice City,
        Vintage Edition celebrates the classic era that
        shaped Leonida's culture, fashion and criminal empire.
      </p>
      <motion.div
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  whileHover={{ scale: 1.02 }}
  className="mt-20 h-[700px] rounded-[32px] overflow-hidden"
  style={{
    backgroundImage:
      "url('/gta6/vintage/vintage-car-2.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
/>
<div className="mt-12 max-w-4xl">
  <p className="text-pink-400 uppercase tracking-[0.3em] font-bold">
    Legacy
  </p>

  <h3 className="mt-3 text-5xl font-black text-white">
    The Golden Era
  </h3>

  <p className="mt-6 text-xl text-zinc-400 leading-relaxed">
    Before Leonida became the modern playground of criminals
    and dreamers, Vice City was already building its legend.
  </p>
</div>
<motion.div
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  whileHover={{ scale: 1.02 }}
  className="mt-20 h-[700px] rounded-[32px] overflow-hidden"
  style={{
    backgroundImage: "url('/gta6/vintage/vintage-neon.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
/>

<div className="mt-12 max-w-4xl">
  <p className="text-pink-400 uppercase tracking-[0.3em] font-bold">
    Nightlife
  </p>

  <h3 className="mt-3 text-5xl font-black text-white">
    Neon Nights
  </h3>

  <p className="mt-6 text-xl text-zinc-400 leading-relaxed">
    Flashing signs, crowded clubs and endless nightlife made
    Vice City the entertainment capital of the coast.
  </p>
</div>

<motion.div
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  whileHover={{ scale: 1.02 }}
  className="mt-20 h-[700px] rounded-[32px] overflow-hidden"
  style={{
    backgroundImage: "url('/gta6/vintage/vintage-nightclub.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
/>

<div className="mt-12 max-w-4xl">
  <p className="text-pink-400 uppercase tracking-[0.3em] font-bold">
    Culture
  </p>

  <h3 className="mt-3 text-5xl font-black text-white">
    Ocean Drive Memories
  </h3>

  <p className="mt-6 text-xl text-zinc-400 leading-relaxed">
    Palm-lined boulevards, pastel architecture and classic
    nightlife defined a generation of Vice City legends.
  </p>
</div>

<motion.div
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  whileHover={{ scale: 1.02 }}
  className="mt-20 h-[700px] rounded-[32px] overflow-hidden"
  style={{
    backgroundImage: "url('/gta6/vintage/vintage-car.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
/>

<div className="mt-12 max-w-4xl">
  <p className="text-pink-400 uppercase tracking-[0.3em] font-bold">
    Classics
  </p>

  <h3 className="mt-3 text-5xl font-black text-white">
    Classic Machines
  </h3>

  <p className="mt-6 text-xl text-zinc-400 leading-relaxed">
    Relive the era of iconic vehicles that helped build
    the reputation of Vice City's streets.
  </p>
</div>
    </section>
  );
}