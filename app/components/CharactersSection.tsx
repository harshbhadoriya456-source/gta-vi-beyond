import { motion } from "framer-motion";
import { useState } from "react";
import { useEffect } from "react";


const characters = [
  {
    name: "Jason Duval",
    image: "/gta6/characters/Jason_Duval_06.jpg",
    role: "Protagonist",
    description:
  "Jason wants an easy life, but trouble always seems to find him. After years among criminals, hustlers and dangerous opportunities, he dreams of something more stable. His partnership with Lucia could become the key to a new future—or pull him deeper into Leonida's criminal underworld.",
  },

  {
    name: "Lucia Caminos",
    image: "/gta6/characters/Lucia_Caminos_03.jpg",
    role: "Protagonist",
    description:
  "Fresh out of prison and determined to take control of her future, Lucia refuses to let setbacks define her. Intelligent, ambitious and fearless, she is prepared to do whatever it takes to secure the life she believes she deserves.",
  },

  {
    name: "Cal Hampton",
    image: "/gta6/characters/Cal_Hampton_03.jpg",
    role: "Friend & Conspiracy Enthusiast",
    description:
  "Cal prefers staying at home, browsing the internet and exploring conspiracy theories rather than chasing danger. Despite his laid-back personality, his unusual observations often reveal truths that others overlook.",
  },

  {
    name: "Boobie Ike",
    image: "/gta6/characters/Boobie_Ike_03.jpg",
    role: "Businessman",
    description:
  "A Vice City legend who transformed street hustle into a growing empire of clubs, real estate and entertainment ventures. Boobie understands that influence and business can be just as powerful as money.",
  },

  {
    name: "DreQuan Priest",
    image: "/gta6/characters/DreQuan_Priest_02.jpg",
    role: "Music Promoter",
    description:
  "Driven by ambition and a passion for music, Dre'Quan is determined to build a lasting entertainment empire. Every connection, performance and opportunity brings him closer to becoming one of Vice City's major power players.",
  },

  {
    name: "Real Dimez",
    image: "/gta6/characters/Real_Dimez_03.jpg",
    role: "Music Duo",
    description:
  "Known for turning social media attention into real-world success, Real Dimez represents the new generation of Vice City celebrities. Their influence extends far beyond music, shaping trends and culture across Leonida.",
  },
];
export default function CharactersSection() {
  const [selectedCharacter, setSelectedCharacter] =
    useState<{ name: string; image: string; role: string; description:string; } | null>(null);

  const currentIndex = characters.findIndex(
  (c) => c.name === selectedCharacter?.name
);

const goNext = () => {
  const nextIndex = (currentIndex + 1) % characters.length;
  setSelectedCharacter(characters[nextIndex]);
};

const goPrevious = () => {
  const prevIndex =
    (currentIndex - 1 + characters.length) % characters.length;
  setSelectedCharacter(characters[prevIndex]);
};
useEffect(() => {
  const handleKey = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setSelectedCharacter(null);
    }
  };

  window.addEventListener("keydown", handleKey);

  return () =>
    window.removeEventListener("keydown", handleKey);
}, []);

  return (
    <section id="characters"
    className="px-8 py-32">
      <div className="max-w-7xl mx-auto">

        <p className="text-pink-400 uppercase tracking-[0.3em] font-bold">
          Main Cast
        </p>

        <h2 className="mt-4 text-7xl font-black text-white">
          Meet The Characters
        </h2>

        <p className="mt-6 text-xl text-zinc-400 max-w-3xl">
          From ambitious criminals to powerful entrepreneurs,
          Leonida is filled with unforgettable personalities.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
  {characters.map((character) => (
    <motion.div
  key={character.name}
  onClick={() => setSelectedCharacter(character)}
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  whileHover={{y: -10, scale: 1.03}}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  
      className="overflow-hidden rounded-[24px] border border-zinc-800 bg-zinc-900 cursor-pointer shadow-[0_0_30px_rgba(236,72,153,0.12)]"
    >
      <img
        src={character.image}
        alt={character.name}
        className="h-[450px] w-full object-cover transition all duration-700 group-hover:scale-110"
      />

      <div className="p-4">
        <h3 className="text-2xl font-bold text-white">
          {character.name}
        </h3>
      </div>
    </motion.div>
  ))}
</div>


  

  

</div>
{selectedCharacter && (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-8"
    onClick={() => setSelectedCharacter(null)}
  >
    <motion.div
  initial={{ scale: 0.9, opacity: 0, rotateX: -10 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ duration: 0.5 }}
  className="bg-zinc-900 rounded-[32px] max-w-5xl w-full grid md:grid-cols-2 overflow-hidden"
      onClick={(e) => e.stopPropagation()}
    >
      <motion.img
  src={selectedCharacter.image}
  alt={selectedCharacter.name}
  initial={{ x: -120, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 0.8 }}
  className="h-full w-full object-cover"
/>
        
      

      <motion.div
  initial={{ x: 120, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ delay: 0.2, duration: 0.8 }}
  className="p-8"
>
        <h2 className="text-5xl font-black text-white">
          {selectedCharacter.name}
        </h2>
        <p className="mt-2 uppercase tracking-[0.3em] text-pink-400 font-bold">
  {selectedCharacter.role}
</p>

        <p className="mt-6 text-lg text-zinc-400 leading-relaxed">
  {selectedCharacter.description}
</p>

        <div className="mt-8 border-t border-zinc-700 pt-6">
  <p className="text-zinc-500 uppercase tracking-[0.3em] text-sm">
    Status
  </p>

  <p className="mt-2 text-white">
    Active in Leonida
  </p>
</div>

<div className="mt-6 border-t border-zinc-700 pt-6">
  <p className="text-zinc-500 uppercase tracking-[0.3em] text-sm">
    Region
  </p>

  <p className="mt-2 text-white">
    Vice City
  </p>
  <div className="mt-10 flex gap-4">
  <button
  onClick={goPrevious}
  className="rounded-full border border-zinc-700 px-6 py-3"
>
  ← Previous
</button>

  <button
  onClick={goNext}
  className="rounded-full border border-zinc-700 px-6 py-3"
>
  Next →
</button>
</div>
</div>

        <button
          onClick={() => setSelectedCharacter(null)}
          className="mt-8 rounded-full bg-pink-500 px-6 py-3 font-bold"
        >
          
          Close
        </button>
      </motion.div>
    </motion.div>
    </motion.div>
  
)}

    </section>
  );
}