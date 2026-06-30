const weapons = [
  {
    name: "Weapon Variants",
    image: "/gta6/Weapons/ULTIMATE_EDITION_WEAPON_VARIANTS_01.jpg",
  },
  {
    name: "Hawk & Little Rifle",
    image: "/gta6/Weapons/ULTIMATE_EDITION_HAWK_AND_LITTLE_MORGAN_REVOLVERS_02.jpg",
  },
  {
    name: "Hawk & Little Sidearm",
    image: "/gta6/Weapons/ULTIMATE_EDITION_HAWK_AND_LITTLE_MORGAN_REVOLVERS_01.jpg",
  },
];
export default function WeaponsSection() {
  return (
    <section className="px-8 py-32">
      <div className="max-w-7xl mx-auto">

        <p className="text-pink-400 uppercase tracking-[0.3em] font-bold">
          COMBAT
        </p>

        <h2 className="mt-4 text-7xl font-black text-white">
          Weapons Arsenal
        </h2>

        <p className="mt-6 text-xl text-zinc-400 max-w-3xl">
          From classic revolvers to modern firepower, every tool
          has a story in Leonida.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-20">
  {weapons.map((weapon) => (
    <div
      key={weapon.name}
      className="group rounded-[28px] overflow-hidden bg-zinc-900 border border-zinc-800"
    >
      <img
        src={weapon.image}
        alt={weapon.name}
        className="h-[350px] w-full object-cover transition duration-700 group-hover:scale-110"
      />

      <div className="p-6">
        <h3 className="text-3xl font-bold text-white">
          {weapon.name}
        </h3>
      </div>
    </div>
  ))}
</div>

      </div>
    </section>
  );
}