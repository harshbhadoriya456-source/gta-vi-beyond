"use client";

export default function OnlyInLeonida() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <p className="text-pink-400 uppercase tracking-[0.3em]">
        People & Places
      </p>
      

      <h2 className="mt-4 text-5xl font-black">
  Only In Leonida
</h2>

<p className="mt-4 max-w-2xl text-zinc-400">
  Explore the most unique locations across Leonida.
</p>

<div className="mt-12 grid md:grid-cols-3 gap-6">

  <div
    className="relative h-[350px] overflow-hidden rounded-[32px]"
    style={{
      backgroundImage:
        "url('/gta6/hero/Jason_and_Lucia_02_landscape.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="absolute inset-0 bg-black/50" />

    <div className="relative z-10 p-8">
      <h3 className="text-3xl font-bold">
        Vice City
      </h3>

      <p className="mt-3 text-zinc-300">
        Explore the most iconic locations across Leonida.
      </p>
    </div>
  </div>

  <div
    className="relative h-[350px] overflow-hidden rounded-[32px]"
    style={{
      backgroundImage:
        "url('/gta6/hero/Grassrivers_04.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="absolute inset-0 bg-black/50" />

    <div className="relative z-10 p-8">
      <h3 className="text-3xl font-bold">
        Grassrivers
      </h3>

      <p className="mt-3 text-zinc-300">
        Swamps, wildlife and hidden secrets.
      </p>
    </div>
  </div>

  <div
    className="relative h-[350px] overflow-hidden rounded-[32px]"
    style={{
      backgroundImage:
        "url('/gta6/hero/Mount-park.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="absolute inset-0 bg-black/50" />

    <div className="relative z-10 p-8">
      <h3 className="text-3xl font-bold">
        Mount Kalaga
      </h3>

      <p className="mt-3 text-zinc-300">
        Mount Kalaga is Leonida's rugged wilderness, filled with forests, rivers, and breathtaking mountain views.
      </p>
    </div>
  </div>

</div>

</section>
);
}

