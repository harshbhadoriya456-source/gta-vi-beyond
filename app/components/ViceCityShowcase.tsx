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

      <div className="mt-12">
        <div
          className="h-[600px] rounded-[32px] overflow-hidden"
          style={{
            backgroundImage:
              "url('/gta6/showcase/featured-car.avif')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>
    </section>
  );
}