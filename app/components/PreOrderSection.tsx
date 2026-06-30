export default function PreOrderSection() {
  return (
    <section id="news" className="px-8 py-32">
      <div className="max-w-7xl mx-auto text-center">

        <p className="text-pink-400 uppercase tracking-[0.3em] font-bold">
          PRE-ORDER
        </p>

        <h2 className="mt-4 text-6xl md:text-7xl font-black text-white">
          Choose Your Edition
        </h2>

        <p className="mt-6 max-w-3xl mx-auto text-xl text-zinc-400">
          Get ready to explore Leonida. Select the edition
          that best fits your journey.
        </p>

        <div className="rounded-[32px] bg-zinc-900/80 border border-white/10 p-10">

          <h3 className="text-3xl font-bold text-white">
  Standard Edition
</h3>

<p className="mt-4 text-5xl font-black text-white">
  ₹5,999
</p>

<ul className="mt-6 space-y-2 text-zinc-400">
  <li>• Full GTA VI Experience</li>
  <li>• Explore Leonida</li>
  <li>• Story Mode Access</li>
  <li>• Future Online Access</li>
</ul>

        

          <div className="mt-16 rounded-[28px] bg-zinc-950 p-10 border-2 border-pink-500 shadow-[0_0_40px_rgba(255,91,167,0.25)]">

  <h3 className="text-3xl font-bold text-white">
    Ultimate Edition
  </h3>

  <p className="mt-4 text-5xl font-black text-pink-400">
    ₹7,499
  </p>

  <ul className="mt-6 mb-16 space-y-2 text-zinc-400">
    <li>• Everything in Standard Edition</li>
    <li>• Exclusive Vehicles</li>
    <li>• Bonus Weapons</li>
    <li>• Character Cosmetics</li>
    <li>• Ultimate Rewards</li>
  </ul>

</div>

          
           

        </div>

        <button className="mt-16 rounded-full bg-pink-500 px-10 py-4 text-lg font-bold text-white hover:scale-105 transition-all">
          PRE-ORDER NOW
        </button>

        <p className="mt-6 text-zinc-500">
          Available November 19, 2026
        </p>

      </div>
    </section>
  );
}