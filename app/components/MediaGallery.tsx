const media = [
  "/gta6/media/Ambrosia_Postcard_landscape.jpg",
  "/gta6/media/Mount_Kalaga_National_Park_Postcard_landscape.jpg",
  "/gta6/media/Brian_Heder_landscape.jpg",
  "/gta6/media/Raul_Bautista_landscape.jpg",
  "/gta6/media/Jason_and_Lucia_Motel_landscape.jpg",
  "/gta6/media/Jason_and_Lucia_01_landscape.jpg",
];
export default function MediaGallery() {
  return (
    <section id="media" className="px-8 py-32">
      <div className="max-w-7xl mx-auto">

        <p className="text-pink-400 uppercase tracking-[0.3em] font-bold">
          MEDIA
        </p>

        <h2 className="mt-4 text-7xl font-black text-white">
          Screenshots & Artwork
        </h2>

        <p className="mt-6 text-xl text-zinc-400 max-w-3xl">
          Explore official artwork, screenshots and moments
          from across Leonida.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-20">
  {media.map((image, index) => (
    <div
      key={index}
      className="overflow-hidden rounded-[28px] border border-zinc-800 bg-zinc-900"
    >
      <img
        src={image}
        alt={`Media ${index + 1}`}
        className="h-[300px] w-full object-cover transition duration-500 hover:scale-105"
      />
    </div>
  ))}
</div>

      </div>
    </section>
  );
}