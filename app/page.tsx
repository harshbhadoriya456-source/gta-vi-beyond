"use client";
import CustomCursor from "./components/CustomCursor";

import Footer from "./components/Footer";
import PreOrderSection from "./components/PreOrderSection";
import MediaGallery from "./components/MediaGallery";
import WeaponsSection from "./components/WeaponsSection";
import VehiclesSection from "./components/VehiclesSection";
import CharactersSection from "./components/CharactersSection";
import VintageEdition from "./components/VintageEdition";
import UltimateEditionStories from "./components/UltimateEditionStories";
import LeonidaStory from "./components/LeonidaStory";
import ViceCityShowcase from "./components/ViceCityShowcase";
import OnlyInLeonida from "./components/OnlyInLeonida";
import ViceCitySection from "./components/ViceCitySection";
import WelcomeLeonida from "./components/WelcomeLeonida"; 
import {motion} from "framer-motion";
import Countdown from "./components/Countdown";

import { useEffect, useState} from "react";
const heroImages = [
  "/gta6/hero/Boobie_Ike_landscape.jpg",
  "/gta6/hero/Cal_Hampton_landscape.jpg",
  "/gta6/hero/Jason_and_Lucia_01_With_Logos_landscape.jpg",
  "/gta6/hero/Jason_and_Lucia_02_landscape.jpg",
  "/gta6/hero/Official_Cover_Art_landscape.jpg",
  "/gta6/hero/Real_Dimez_landscape.jpg",

  "/gta6/hero/Boobie_Ike_03.jpg",
  "/gta6/hero/Cal_Hampton_03.jpg",
  "/gta6/hero/DreQuan_Priest_02.jpg",
  "/gta6/hero/Grassrivers_04.jpg",
  "/gta6/hero/Jason_Duval_06.jpg",
  "/gta6/hero/Lucia_Caminos_03.jpg",
  "/gta6/hero/Mount-park.jpg",
  "/gta6/hero/Real_Dimez_03.jpg",
  "/gta6/hero/vintage-car.jpg",
  "/gta6/hero/vintage-car-2.jpg",
  "/gta6/hero/vintage-neon.jpg",
  "/gta6/hero/vintage-nightclub.jpg",
];

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentImage((prev) => (prev + 1) % heroImages.length);
  }, 7000);

  return () => clearInterval(interval);
}, []);
  const [entered, setEntered] = useState(false);

  if (!entered) {
  return (
    <main className="bg-black text-white">
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <motion.div
  key={currentImage}
  initial={{ scale: 1.15, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ duration: 2 }}
  className="absolute inset-0 bg-cover bg-center"
  style={{
    backgroundImage: `url(${heroImages[currentImage]})`,
  }}
/>

<div className="absolute inset-0 bg-black/60" />

        <div className="absolute -top-40 h-96 w-96 rounded-full bg-pink-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl" />

        <div className="relative z-10 text-center px-6">
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-purple-300">
            NOVEMBER 19 • 2026
          </p>

          <div className="flex flex-col items-center">
  <h1
  className="text-7xl md:text-[10rem] font-black tracking-tight leading-none drop-shadow-2xl"
  
>
    <span className="bg-gradient-to-r from-white via-pink-200 to-pink-400 bg-clip-text text-transparent">
      GTA
    </span>

    <span className="ml-4 bg-gradient-to-b from-pink-400 to-purple-500 bg-clip-text text-transparent">
      VI
    </span>
  </h1>

  <p className="mt-2 text-4xl md:text-6xl font-bold text-pink-300 tracking-wide">
    BEYOND
  </p>
</div>

          <p className="mx-auto mt-6 max-w-xl text-zinc-400">
  Beyond the Trailer. Explore characters, updates, media,
  countdowns, and everything known about GTA VI.
</p>

<div className="mt-12 flex justify-center gap-10 text-center">
  <div>
    <p className="text-4xl font-bold text-pink-400">6</p>
    <p className="text-sm text-zinc-300">Characters</p>
  </div>

  <div>
    <p className="text-4xl font-bold text-pink-400">100+</p>
    <p className="text-sm text-zinc-300">Screenshots</p>
  </div>

  <div>
    <p className="text-4xl font-bold text-pink-400">2026</p>
    <p className="text-sm text-zinc-300">Release</p>
  </div>
</div>
<div className="mt-8 flex justify-center"><Countdown /></div>

<div className="mt-10 flex flex-wrap justify-center gap-4">

  <a
    href="https://store.playstation.com"
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-full bg-pink-500 px-8 py-3 font-bold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(236,72,153,0.7)]"
  >
    Pre-Order Now
  </a>

  <a
    href="https://www.youtube.com/watch?v=VQRLujxTm3c"
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-full bg-pink-500 px-8 py-3 font-bold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(236,72,153,0.7)]"
  >
    ▶ Watch Trailer
  </a>
  

</div>

<button
  onClick={() => setEntered(true)}
  className="mt-6 rounded-full border border-pink-500 px-8 py-3 text-white transition hover:bg-pink-500 hover:text-black"
>
  Explore Leonida
</button>


          <div className="mt-16 flex flex-col items-center">
  <div className="h-10 w-[1px] bg-white/40" />

  <p className="mt-3 text-xs uppercase tracking-[0.4em] text-zinc-400">
    Scroll To Explore
  </p>
</div>


        </div>
        </section>
        <motion.section
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
  className="relative h-screen bg-fixed bg-cover bg-center flex items-center justify-center"
  style={{
    backgroundImage:
      "url('/gta6/hero/Official_Cover_Art_landscape.jpg')",
  }}
>
  <div className="absolute inset-0 bg-black/60" />

  <motion.div
    initial={{ opacity: 0, y: 80 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
    className="relative z-10 text-center px-6"
  >
    <p className="uppercase tracking-[0.4em] text-pink-400 font-bold">
      TRAILER 2
    </p>

    <h2 className="mt-4 text-6xl md:text-7xl font-black text-white">
      Watch The Official Trailer
    </h2>

    <p className="mt-6 max-w-2xl text-xl text-zinc-300 mx-auto">
      Experience the next chapter of Leonida through the latest
      official GTA VI trailer.
    </p>

    <a
      href="https://www.youtube.com/watch?v=VQRLujxTm3c"
      target="_blank"
      rel="noopener noreferrer"
      className="mt-8 inline-block rounded-full bg-red-600 px-10 py-4 text-xl font-bold text-white transition-all duration-300 hover:scale-105"
    >
      ▶ Watch On YouTube
    </a>
  </motion.div>
</motion.section>

      <motion.section
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
  className="relative h-screen bg-fixed bg-cover bg-center flex items-center"
  style={{
    backgroundImage:
      "url('/gta6/hero/Jason_and_Lucia_01_With_Logos_landscape.jpg')",
  }}
>
  <div className="absolute inset-0 bg-black/60" />

  <motion.div
  initial={{ opacity: 0, y: 100 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
  className="relative z-10 max-w-4xl px-12"
  >
    <p className="uppercase tracking-[0.3em] text-pink-400 font-bold">
      WELCOME TO LEONIDA
    </p>

    <h2 className="mt-4 text-7xl font-black bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(236,72,153,0.4)]">
  The Sun And Fun Capital
</h2>

    <p className="mt-6 text-xl text-zinc-300 max-w-4xl leading-relaxed">
  From the neon-lit beaches of Vice City to the untamed
  wetlands of Grassrivers and the rugged wilderness of
  Mount Kalaga, Leonida is a state where opportunity and
  danger exist side by side. Explore luxury lifestyles,
  criminal empires, hidden secrets and unforgettable
  adventures across Rockstar's most ambitious open world.
</p>
  </motion.div>
</motion.section>

    <div className="h-16 bg-black" />

    <motion.section
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
  className="relative h-screen bg-cover bg-center flex items-center"
  style={{
    backgroundImage:
      "url('/gta6/hero/Real_Dimez_landscape.jpg')",
  }}
>
  <div className="absolute inset-0 bg-black/60" />

  <div className="relative z-10 max-w-4xl px-12">
    <p className="uppercase tracking-[0.3em] text-pink-400 font-bold">
      STORIES AWAIT
    </p>

    <h2 className="mt-4 text-7xl font-black text-white">
      Every Face Has A Story
    </h2>

    <p className="mt-6 text-xl text-zinc-300 max-w-2xl">
      From hustlers and dreamers to criminals and legends,
      Leonida is packed with stories waiting to be discovered.
    </p>
  </div>
</motion.section>

<footer className="border-t border-zinc-800 bg-black py-16 text-center">
  <h2 className="text-4xl font-black text-pink-400">
    GTA VI Beyond
  </h2>

  <p className="mt-4 text-zinc-500">
    Explore Leonida. Discover the characters. Go beyond the trailer.
  </p>

  <div className="mt-8 flex justify-center gap-6">
    <a
      href="https://www.youtube.com/watch?v=VQRLujxTm3c"
      target="_blank"
      className="text-zinc-400 hover:text-pink-400"
    >
      Trailer
    </a>

    <a
      href="https://store.playstation.com"
      target="_blank"
      className="text-zinc-400 hover:text-pink-400"
    >
      Pre-Order
    </a>
  </div>

  <p className="mt-10 text-sm text-zinc-600">
    © 2026 GTA VI Beyond • Fan Made Project
  </p>
</footer>

      
      </main>
    );
  }

  return (
  <main className="relative min-h-screen bg-black text-white overflow-hidden">
    <div className="pointer-events-none fixed inset-0 -z-0">
  <div className="absolute top-0 left-0 h-[800px] w-full bg-gradient-to-b from-pink-950/30 to-transparent" />

  <div className="absolute top-[30%] left-[-200px] h-[500px] w-[500px] rounded-full bg-pink-600/10 blur-[150px]" />

  <div className="absolute top-[60%] right-[-200px] h-[500px] w-[500px] rounded-full bg-purple-700/10 blur-[150px]" />

  <div className="absolute bottom-0 left-0 h-[800px] w-full bg-gradient-to-t from-purple-950/20 to-transparent" />
</div>
<div className="relative z-10"></div>
      <div className="fixed right-6 top-1/2 z-50 -translate-y-1/2 hidden lg:flex flex-col gap-4">
  <a href="#hero" className="text-sm text-zinc-400 hover:text-pink-400">
    Hero
  </a>

  <a href="#leonida" className="text-sm text-zinc-400 hover:text-pink-400">
    Leonida
  </a>

  <a href="#characters" className="text-sm text-zinc-400 hover:text-pink-400">
    Characters
  </a>

  <a href="#media" className="text-sm text-zinc-400 hover:text-pink-400">
    Media
  </a>

  <a href="#countdown" className="text-sm text-zinc-400 hover:text-pink-400">
    Countdown
  </a>

  <a href="#editions" className="text-sm text-zinc-400 hover:text-pink-400">
    Editions
  </a>
</div>


<section
  className="relative h-screen bg-fixed bg-cover bg-center flex items-center"
  style={{
    backgroundImage:
      "url('/gta6/hero/Jason_and_Lucia_01_With_Logos_landscape.jpg')",
  }}
>
  <div className="absolute inset-0 bg-black/50" />

  <motion.div
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
  className="relative z-10 max-w-4xl px-12">
    <p className="uppercase tracking-[0.3em] text-pink-400">
      GTA VI BEYOND
    </p>

    <h2 className="mt-4 text-7xl font-black">
      Welcome To Leonida
    </h2>

    <p className="mt-6 text-xl text-zinc-300">
      The sun and fun capital of America.
      Home to Vice City and beyond.
    </p>
  </motion.div>
</section>

<section
  className="relative h-screen bg-fixed bg-cover bg-center flex items-center justify-end"
  style={{
    backgroundImage:
      "url('/gta6/hero/Official_Cover_Art_landscape.jpg')",
  }}
>
  <div className="absolute inset-0 bg-black/60" />

  <div className="relative z-10 max-w-3xl px-12 text-right">
    <p className="uppercase tracking-[0.3em] text-pink-400">
      VICE CITY
    </p>

    <h2 className="mt-4 text-7xl font-black">
      Crime.
      Power.
      Opportunity.
    </h2>

    <p className="mt-6 text-xl text-zinc-300">
      Every street tells a story.
      Every corner hides an opportunity.
    </p>
  </div>
</section>

      {/* Navbar */}
      <section
  className="h-0"
></section>
      <motion.div
  initial={{ y: -100 }}
  animate={{ y: 0 }}
  transition={{ duration: 0.8 }}
  className="sticky top-0 z-50 border-b border-zinc-800 bg-black/80 backdrop-blur-md"
>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <h1 className="text-2xl font-bold text-pink-400">
            GTA VI Beyond
          </h1>

          <div className="flex gap-6 text-zinc-400">
  <a href="#news" className="transition hover:text-pink-400">
    News
  </a>

  <a href="#characters" className="transition hover:text-pink-400">
    Characters
  </a>

  <a href="#media" className="transition hover:text-pink-400">
    Media
  </a>

  <a href="#archive" className="transition hover:text-pink-400">
    Archive
  </a>
</div>
        </div>
      </motion.div>

      {/* Hero */}
      <section
  id="hero"
  className="relative overflow-hidden"
>
  {/* Background Glow */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute left-1/4 top-10 h-72 w-72 rounded-full bg-pink-500/20 blur-3xl" />
    <div className="absolute right-1/4 top-20 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />
  </div>

  <div className="mx-auto max-w-7xl px-6 py-24 text-center">
    <p className="mb-4 text-sm uppercase tracking-[0.4em] text-pink-400">
      NOVEMBER 19 • 2026
    </p>

    <h1 className="text-5xl font-black text-white md:text-6xl">
      GTA VI
    </h1>

    <h2 className="mt-3 text-4xl font-bold text-pink-400 md:text-6xl">
      Beyond
    </h2>

    <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
      Beyond the Trailer. Explore updates, media,
      characters, pre-orders, and everything known
      about GTA VI.
    </p>

    <div className="mt-10 flex flex-wrap justify-center gap-4">
      <a
        href="https://www.youtube.com/watch?v=VQRLujxTm3c"
        target="_blank"
        className="rounded-full bg-pink-500 px-6 py-3 font-semibold text-white transition hover:scale-105"
      >
        ▶ Watch Trailer
      </a>

      <a
  href="#leonida"
  className="rounded-full border border-pink-400 bg-pink-500/10 px-8 py-3 text-white font-semibold backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-pink-500/20"
>
  Explore Leonida
</a>
    </div>
  </div>
</section>

      {/* Dashboard Cards */}
      <section className="relative min-h-screen overflow-hidden">
  <div
    className="absolute inset-0"
    style={{
      backgroundImage:
        "url('/gta6/hero/Official_Cover_Art_landscape.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  />

  <div className="absolute inset-0 bg-black/60" />

  <div className="relative z-10 flex min-h-screen items-center">
    <div className="max-w-3xl px-10">
      <p className="mb-4 text-pink-400 uppercase tracking-[0.3em]">
        State of Leonida
      </p>

      <h2 className="text-6xl font-black">
        Welcome To Leonida
      </h2>

      <p className="mt-6 text-xl text-zinc-300 leading-relaxed">
        Home to Vice City and beyond. From neon-soaked beaches
        to forgotten backroads, Leonida is packed with
        criminals, dreamers, hustlers, and opportunities.
      </p>

      <button className="mt-8 rounded-full bg-pink-500 px-8 py-4 font-semibold">
        Explore The State
      </button>
    </div>
  </div>
</section>
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-6"></div>
        <div
  className="relative rounded-[32px] overflow-hidden min-h-[500px] p-12"
  style={{
    backgroundImage: "url('/gta6/hero/Real_Dimez_landscape.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
          <div className="absolute inset-0 bg-black/70" />

<div className="relative z-10">
  <Countdown />
  <section className="mx-auto max-w-7xl px-6 py-24">
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.2 }}
    viewport={{ once: true }}
  >
    <h2 className="text-6xl font-black">
      Welcome to Leonida
    </h2>

    <p className="mt-6 max-w-3xl text-xl text-zinc-400">
      The sun and fun capital of America.
      Home to Vice City and beyond.
    </p>
  </motion.div>
</section>
</div>
        </div>

        

        <div
  className="relative overflow-hidden rounded-[32px] min-h-[350px] p-8"
  style={{
    backgroundImage: "url('/gta6/hero/vintage-cover.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent " />
        <div className="relative z-10">
          <h3 className="text-4xl font-black bg-gradient-to-r from-cyan-300 via-white to-pink-400 bg-clip-text text-transparent">
  ROCKSTAR NEWSWIRE
</h3>
          <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-pink-500/30 bg-pink-500/10 px-4 py-2">
  <div className="h-2 w-2 rounded-full bg-pink-400 animate-pulse" />
  <span className="text-sm uppercase tracking-[0.2em] text-pink-300">
    Live Updates
  </span>
</div>
          <p className="mt-4 max-w-xl text-zinc-300 leading-relaxed">
  Stay updated with the latest GTA VI announcements,
  screenshots, trailers and official Rockstar Newswire releases.
</p>

      <button className="mt-6 rounded-full border border-pink-500/30 bg-pink-500/10 px-6 py-3 font-bold text-pink-300 hover:bg-pink-500/20 transition-all">
  View All News →
</button>
        </div>
        </div>
      </section>
      <section
  className="relative h-screen bg-fixed bg-fixed bg-cover bg-center flex items-center"
  style={{
    backgroundImage:
      "url('/gta6/hero/Jason_and_Lucia_01_With_Logos_landscape.jpg')",
  }}
>
  <div className="absolute inset-0 bg-black/50" />

  <div className="relative z-10 max-w-4xl px-12">
    <p className="uppercase tracking-[0.3em] text-pink-400">
      WELCOME TO LEONIDA
    </p>

    <h2 className="mt-4 text-7xl font-black bg-gradient-to-r from-pink-400 via-orange-300 to-cyan-300 bg-clip-text text-transparent">
  The Sun And Fun Capital
</h2>

    <p className="mt-6 text-xl text-zinc-300 max-w-4xl leading-relaxed">
  From the neon-lit beaches of Vice City to the untamed
  wetlands of Grassrivers and the rugged wilderness of
  Mount Kalaga, Leonida is a state where opportunity and
  danger exist side by side. Explore luxury lifestyles,
  criminal empires, hidden secrets and unforgettable
  adventures across Rockstar's most ambitious open world.
</p>
  </div>
</section>

      
      
      <ViceCitySection />
      <CustomCursor />
      <OnlyInLeonida />
      <ViceCityShowcase />
      <LeonidaStory />
      <section
  className="relative h-screen bg-fixed bg-cover bg-center flex items-center"
  style={{
    backgroundImage:
      "url('/gta6/hero/Official_Cover_Art_landscape.jpg')",
  }}
>
  <div className="absolute inset-0 bg-black/60" />

  <div className="relative z-10 max-w-4xl px-12">
    <p className="uppercase tracking-[0.3em] text-pink-400 font-bold">
      ULTIMATE EDITION
    </p>

    <h2 className="mt-4 text-7xl font-black text-white">
      The Complete Experience
    </h2>

    <p className="mt-6 max-w-2xl text-xl text-zinc-300">
      Premium rewards, vehicles, weapons and exclusive content.
    </p>
  </div>
</section>


      <UltimateEditionStories />
      <section
  className="relative h-screen bg-fixed bg-cover bg-center flex items-center"
  style={{
    backgroundImage:
      "url('/gta6/hero/vintage-cover.jpg')",
  }}
>
  <div className="absolute inset-0 bg-black/60" />

  <div className="relative z-10 max-w-4xl px-12">
    <p className="uppercase tracking-[0.3em] text-pink-400 font-bold">
      VINTAGE COLLECTION
    </p>

    <h2 className="mt-4 text-7xl font-black text-white">
      Vice City Classics
    </h2>

    <p className="mt-6 max-w-2xl text-xl text-zinc-300">
      Relive iconic collectibles, artwork and memories.
    </p>
  </div>
</section>
      <VintageEdition />
      <section
  className="relative h-screen bg-fixed bg-fixed bg-cover bg-center flex items-center"
  style={{
    backgroundImage:
      "url('/gta6/hero/Boobie_Ike_landscape.jpg')",
  }}
>
  <div className="absolute inset-0 bg-black/60" />

  <div className="relative z-10 max-w-4xl px-12">
    <p className="uppercase tracking-[0.3em] text-pink-400 font-bold">
      THE PEOPLE OF LEONIDA
    </p>

    <h2 className="mt-4 text-7xl font-black text-white">
      Meet The Characters
    </h2>

    <p className="mt-6 max-w-2xl text-xl text-zinc-300">
      From ambitious criminals to music moguls,
      Leonida is packed with unforgettable personalities.
    </p>
  </div>
</section>
      <CharactersSection />
      <section
  className="relative h-screen bg-fixed bg-cover bg-center flex items-center"
  style={{
    backgroundImage:
      "url('/gta6/Vehicles/ULTIMATE_EDITION_GROTTI_CHEETAH_03.jpg')",
  }}
>
  <div className="absolute inset-0 bg-black/60" />

  <motion.div
    initial={{ opacity: 0, y: 80 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
    className="relative z-10 max-w-4xl px-12"
  >
    <p className="uppercase tracking-[0.3em] text-pink-400 font-bold">
      VEHICLES OF LEONIDA
    </p>

    <h2 className="mt-4 text-7xl font-black text-white">
      Speed. Style. Freedom.
    </h2>

    <p className="mt-6 max-w-2xl text-xl text-zinc-300">
      From luxury sports cars to off-road beasts,
      every corner of Leonida offers a new ride and a new adventure.
    </p>
  </motion.div>
</section>
      <VehiclesSection />
      <section
  className="relative h-screen bg-fixed bg-cover bg-center flex items-center"
  style={{
    backgroundImage:
      "url('/gta6/Weapons/ULTIMATE_EDITION_WEAPON_VARIANTS_01.jpg')",
  }}
>
  <div className="absolute inset-0 bg-black/60" />

  <motion.div
    initial={{ opacity: 0, y: 80 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
    className="relative z-10 max-w-4xl px-12"
  >
    <p className="uppercase tracking-[0.3em] text-pink-400 font-bold">
      TOOLS OF SURVIVAL
    </p>

    <h2 className="mt-4 text-7xl font-black text-white">
      Weapons Of Leonida
    </h2>

    <p className="mt-6 max-w-2xl text-xl text-zinc-300">
      In Leonida, power comes in many forms. From compact sidearms
      to devastating heavy armaments, every fight demands the right tool.
    </p>
  </motion.div>
</section>
      <WeaponsSection />
      <section
  className="relative h-screen bg-fixed bg-cover bg-center flex items-center"
  style={{
    backgroundImage:
      "url('/gta6/media/Jason_and_Lucia_Motel_landscape.jpg')",
  }}
>
  <div className="absolute inset-0 bg-black/60" />

  <motion.div
    initial={{ opacity: 0, y: 80 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
    className="relative z-10 max-w-4xl px-12"
  >
    <p className="uppercase tracking-[0.3em] text-pink-400 font-bold">
      OFFICIAL MEDIA
    </p>

    <h2 className="mt-4 text-7xl font-black text-white">
      Screenshots & Artwork
    </h2>

    <p className="mt-6 max-w-2xl text-xl text-zinc-300">
      Explore breathtaking landscapes, iconic characters,
      and moments captured from across Leonida.
    </p>
  </motion.div>
</section>
      <MediaGallery />
      <PreOrderSection />
      
      <section className="mx-auto max-w-7xl px-6 py-20">
  <h2 className="mb-8 text-5xl font-black text-white">
    Explore Leonida
    
  </h2>

  <div className="grid md:grid-cols-3 gap-6">
    <div
  className="rounded-[32px] min-h-[350px]"
  style={{
    backgroundImage:
      "url('/gta6/hero/Real_Dimez_landscape.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
></div>

<div
  className="rounded-[32px] min-h-[350px]"
  style={{
    backgroundImage:
      "url('/gta6/hero/Jason_and_Lucia_02_landscape.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
></div>

<div
  className="relative rounded-[32px] min-h-[350px] overflow-hidden"
  style={{
    backgroundImage:
      "url('/gta6/hero/Boobie_Ike_landscape.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
></div>
  
  </div>
  <Footer />
</section>

    </main>
  );
}