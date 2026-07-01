import { motion } from "framer-motion";
const showcaseItems = [
  {
    image: "/gta6/showcase/featured-car.avif",
    category: "VEHICLE",
    title: "'95 Grotti Cheetah",
    description: "A legendary Vice City sports car built for speed and style."
  },
  {
    image: "/gta6/showcase/Hawk-revolver.avif",
    category: "WEAPON",
    title: "Hawk & Little Revolver",
    description: "Premium firepower inspired by classic Vice City craftsmanship."
  },
  {
    image: "/gta6/showcase/safehouse.avif",
    category: "SAFEHOUSE",
    title: "Jason's Safehouse",
    description: "A secluded coastal hideout perfect for planning the next score."
  },
  {
    image: "/gta6/showcase/saras-salon.avif",
    category: "STYLE",
    title: "Sara's Salon",
    description: "Customize your appearance with the latest Leonida fashion trends."
  },
  {
    image: "/gta6/showcase/saras-salon2.avif",
    category: "CUSTOMIZATION",
    title: "Premium Looks",
    description: "Exclusive hairstyles and cosmetic upgrades across Vice City."
  },
  {
    image: "/gta6/showcase/squalo-boat.avif",
    category: "BOAT",
    title: "Squalo Speedboat",
    description: "Explore Leonida's coastline and hidden waterways in style."
  },
  {
    image: "/gta6/showcase/buggy.avif",
    category: "OFFROAD",
    title: "Desert Buggy",
    description: "Built to conquer the rough backroads beyond the city lights."
  }
];
export default function LeonidaStory() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 relative">
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-pink-500/10 blur-[150px]" />

      <p className="text-[#ff6db2] uppercase tracking-[0.3em]">
        STATE OF LEONIDA
      </p>

      <h2 className="mt-4 text-5xl md:text-7xl font-black">
        Welcome To Leonida
      </h2>

      <p className="mt-8 max-w-4xl text-xl text-zinc-300 leading-relaxed">
  Leonida is a land of contrasts where luxury and danger exist side by side.
  From the neon skyline of Vice City to the remote wilderness beyond its borders,
  every region offers its own culture, opportunities and secrets waiting to be discovered.
</p>

      <p className="mt-6 max-w-4xl text-lg text-zinc-400 leading-relaxed">
  Ambitious entrepreneurs, career criminals, tourists and dreamers all compete
  for a place in Leonida's ever-changing story. Every district, highway and coastline
  holds the potential for new adventures and unexpected encounters.
</p>

      <p className="mt-6 max-w-4xl text-lg text-zinc-400 leading-relaxed">
  Whether you're chasing fortune in Vice City, exploring forgotten backroads
  or uncovering mysteries hidden in the wilderness, Leonida rewards those willing
  to take risks and write their own story.
</p>
      <div className="grid md:grid-cols-3 gap-4 mt-10">
  <div className="bg-white/5 p-8 rounded-2xl border border-pink-500/20 shadow-[0_0_40px_rgba(236,72,153,0.12)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_60px_rgba(236,72,153,0.25)]">
    <h3 className="text-pink-400 font-bold mb-2">VICE CITY</h3>
    <p className="text-gray-300">
      Neon lights, luxury yachts and endless opportunities.
    </p>
  </div>

  <div className="bg-white/5 p-8 rounded-2xl border border-pink-500/20 shadow-[0_0_40px_rgba(236,72,153,0.12)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_60px_rgba(236,72,153,0.25)]">
    <h3 className="text-pink-400 font-bold mb-2">GRASSRIVERS</h3>
    <p className="text-gray-300">
      Wild wetlands hiding secrets and danger.
    </p>
  </div>

  <div className="bg-white/5 p-8 rounded-2xl border border-pink-500/20 shadow-[0_0_40px_rgba(236,72,153,0.12)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_60px_rgba(236,72,153,0.25)]">
    <h3 className="text-pink-400 font-bold mb-2">MOUNT KALAGA</h3>
    <p className="text-gray-300">
      Remote peaks, forests and breathtaking views.
    </p>
  </div>
</div>
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  whileHover={{ scale: 1.02 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="relative mt-12 h-[600px] rounded-[32px] overflow-hidden border border-pink-500/20 shadow-[0_0_100px_rgba(236,72,153,0.18)]"
  style={{
    backgroundImage: "url('/gta6/showcase/ULTIMATE_EDITION_01.avif')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <div className="absolute bottom-8 left-8 bg-black/50 backdrop-blur-md border border-pink-500/20 rounded-2xl px-6 py-4">
  <p className="text-pink-400 uppercase tracking-[0.3em] text-sm">
    Featured Location
  </p>

  <h3 className="text-2xl font-bold text-white mt-1">
    Vice City, Leonida
  </h3>
</div>
</motion.div>
      <motion.div
  initial={{ opacity: 0, y: 0.3 }}
  whileInView={{ opacity: 1, y: 1 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: false, amount: 0.4 }}
  className="mt-16 h-[650px] rounded-[32px] overflow-hidden"
  style={{
    backgroundImage:
      "url('/gta6/showcase/ultimate-edition.avif')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    
  }}
/>
<div className="grid md:grid-cols-2 gap-8 mt-12">
  {showcaseItems.map((item) => (
    <motion.div
  key={item.title}
  initial={{
    opacity: 0,
    y: 80,
    filter: "blur(12px)",
  }}
  whileInView={{
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
  }}
  transition={{
    duration: 0.8,
  }}
  viewport={{
    once: false,
    amount: 0.2,
  }}
  whileHover={{
    y: -10,
    scale: 1.03,
  }}
  className="bg-white/5 rounded-[24px] overflow-hidden border border-pink-500/20 shadow-[0_0_40px_rgba(236,72,153,0.08)] hover:shadow-[0_0_70px_rgba(236,72,153,0.25)]"
>
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-[280px] object-cover transition-all duration-700 hover:scale-105"
      />

      <div className="p-6">
        <p className="text-pink-400 text-sm tracking-[0.2em]">
          {item.category}
        </p>

        <h3 className="text-2xl font-bold mt-2">
          {item.title}
        </h3>

        <p className="text-zinc-400 mt-3">
          {item.description}
        </p>
      </div>
    </motion.div>
  ))}
</div>
<div className="text-center mt-16">
  <p className="text-pink-400 uppercase tracking-[0.3em] text-sm">
    Scroll To Explore
  </p>

  <div className="text-3xl animate-bounce mt-2">
    ↓
  </div>
</div>

<p className="text-center text-zinc-400 max-w-2xl mx-auto mt-12 text-lg">
  Discover exclusive vehicles, weapons, safehouses and collectibles
  hidden throughout Leonida.
</p>

    </section>
  );
}