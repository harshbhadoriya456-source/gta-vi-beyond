const vehicles = [
  {
    name: "Vapid Buggy",
    image: "/gta6/Vehicles/ULTIMATE_EDITION_VAPID_BUGGY_04.jpg",
  },
  {
    name: "Squalo",
    image: "/gta6/Vehicles/ULTIMATE_EDITION_SQUALO_03.jpg",
  },
  {
    name: "Grotti Cheetah",
    image: "/gta6/Vehicles/ULTIMATE_EDITION_GROTTI_CHEETAH_01.jpg",
  },
];
export default function VehiclesSection() {
  return (
    <section className="px-8 py-32">
      <div className="max-w-7xl mx-auto">

        <p className="text-pink-400 uppercase tracking-[0.3em] font-bold">
          TRANSPORTATION
        </p>

        <h2 className="mt-4 text-7xl font-black text-white">
          Vehicles Of Leonida
        </h2>

        <p className="mt-6 text-xl text-zinc-400 max-w-3xl">
          Cruise through Vice City streets, race across highways and
          explore the untamed backroads of Leonida.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-20">

  <div className="group rounded-[28px] overflow-hidden bg-zinc-900 border border-zinc-800">
    <img
      src="/gta6/Vehicles/ULTIMATE_EDITION_GROTTI_CHEETAH_03.jpg"
      alt="Grotti Cheetah"
      className="h-[350px] w-full object-cover transition duration-700 group-hover:scale-110"
    />

    <div className="p-6">
      <p className="text-pink-400 uppercase tracking-[0.25em] font-bold">
        Sports Car
      </p>

      <h3 className="mt-3 text-3xl font-bold text-white">
        Grotti Cheetah
      </h3>

      <p className="mt-3 text-zinc-400">
        A legendary Vice City icon built for speed and prestige.
      </p>
    </div>
  </div>

  <div className="group rounded-[28px] overflow-hidden bg-zinc-900 border border-zinc-800">
    <img
      src="/gta6/Vehicles/ULTIMATE_EDITION_SQUALO_03.jpg"
      alt="Squalo"
      className="h-[350px] w-full object-cover transition duration-700 group-hover:scale-110"
    />

    <div className="p-6">
      <p className="text-pink-400 uppercase tracking-[0.25em] font-bold">
        Watercraft
      </p>

      <h3 className="mt-3 text-3xl font-bold text-white">
        Squalo Speedboat
      </h3>

      <p className="mt-3 text-zinc-400">
        Explore Leonida's coastline and hidden waterways.
      </p>
    </div>
  </div>

  <div className="group rounded-[28px] overflow-hidden bg-zinc-900 border border-zinc-800">
    <img
      src="/gta6/Vehicles/ULTIMATE_EDITION_VAPID_BUGGY_04.jpg"
      alt="Vapid Buggy"
      className="h-[350px] w-full object-cover transition duration-700 group-hover:scale-110"
    />

    <div className="p-6">
      <p className="text-pink-400 uppercase tracking-[0.25em] font-bold">
        Off-Road
      </p>

      <h3 className="mt-3 text-3xl font-bold text-white">
        Vapid Buggy
      </h3>

      <p className="mt-3 text-zinc-400">
        Built to conquer the rough terrain beyond the city lights.
      </p>
    </div>
  </div>

</div>

      </div>
    </section>
  );
}