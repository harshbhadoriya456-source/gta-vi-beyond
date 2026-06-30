export default function UltimateEditionStories() {
  return (
    <section className="px-8 py-32">
      <p className="text-pink-400 uppercase tracking-[0.3em] font-bold">
        Ultimate Edition
      </p>

      <h2 className="mt-4 text-6xl md:text-7xl font-black text-white">
        Exclusive Stories
      </h2>

      <p className="mt-8 max-w-3xl text-xl text-zinc-400 leading-relaxed">
        Every corner of Leonida hides a new opportunity.
        From luxury lifestyles to dangerous criminal ventures,
        Ultimate Edition players gain access to unique experiences.
      </p>
      <div
  className="mt-20 h-[650px] rounded-[32px] overflow-hidden"
  style={{
    backgroundImage:
      "url('/gta6/showcase/ultimate-hero.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
/>
<div className="mt-12 max-w-4xl">
  <p className="text-pink-400 uppercase tracking-[0.3em] font-bold">
    Vehicle
  </p>

  <h3 className="mt-3 text-5xl font-black text-white">
    The Fast Life
  </h3>

  <p className="mt-6 text-xl text-zinc-400 leading-relaxed">
    Drive the rarest vehicles, own exclusive properties
    and experience a side of Vice City reserved for the elite.
  </p>
</div>
    </section>
  );
}