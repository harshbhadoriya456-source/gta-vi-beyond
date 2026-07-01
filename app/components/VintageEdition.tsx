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
<div className="mt-12 max-w-4xl rounded-3xl p-8 border border-purple-500/20 shadow-[0_0_70px_rgba(168,85,247,0.25)]">
  <p className="text-pink-400 uppercase tracking-[0.3em] font-bold">
    Legacy
  </p>

  <h3 className="mt-3 text-5xl font-black text-white">
    The Golden Era
  </h3>

  <p className="mt-6 text-xl text-zinc-400 leading-relaxed">
  Before Leonida became the modern playground of criminals and dreamers,
  Vice City was already building its legend. Neon-lit boulevards,
  luxury vehicles and a thriving nightlife transformed the city into
  a symbol of ambition and excess. Many of the landmarks, cultures
  and stories that define Leonida today trace their roots back to
  this unforgettable era.
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

<div className="mt-12 max-w-4xl rounded-3xl p-8 border border-white/10 bg-white/[0.02] backdrop-blur-sm">
  <p className="text-pink-400 uppercase tracking-[0.3em] font-bold">
    Nightlife
  </p>

  <h3 className="mt-3 text-5xl font-black bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-300 bg-clip-text text-transparent">
  Neon Nights
</h3>

  <p className="mt-6 text-xl text-zinc-400 leading-relaxed">
  Flashing signs, crowded clubs and endless nightlife made Vice City
  the entertainment capital of the coast. From rooftop parties to
  underground venues, the city never truly slept. Every night offered
  new opportunities, new connections and new stories waiting to be written.
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

<div className="mt-12 max-w-4xl rounded-3xl p-8 border border-white/10 bg-white/[0.02] backdrop-blur-sm">
  <p className="text-pink-400 uppercase tracking-[0.3em] font-bold">
    Culture
  </p>

  <h3 className="mt-3 text-5xl font-black bg-gradient-to-r from-pink-300 via-orange-300 to-pink-500 bg-clip-text text-transparent">
  Ocean Drive Memories
</h3>

  <p className="mt-6 text-xl text-zinc-400 leading-relaxed">
  Palm-lined boulevards, pastel architecture and classic nightlife
  defined a generation of Vice City legends. Ocean Drive became a
  symbol of freedom, style and ambition, attracting dreamers,
  entrepreneurs and outlaws alike. Its vibrant atmosphere remains
  one of the most recognizable parts of Leonida's history.
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

  <h3 className="mt-3 text-5xl font-black bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-400 bg-clip-text text-transparent">
  Classic Machines
</h3>

  <p className="mt-6 text-xl text-zinc-400 leading-relaxed">
  Relive the era of iconic vehicles that helped build the reputation
  of Vice City's streets. From luxury cruisers to high-performance
  sports cars, these machines represented power, status and freedom.
  Their legacy continues to influence the vehicles seen across Leonida today.
</p>
</div>
    </section>
  );
}