export default function Footer() {
  return (
    <footer id="archive" className="w-full px-6 py-12">

      <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-black via-zinc-900 to-pink-950 px-16 py-14 shadow-[0_0_80px_rgba(236,72,153,0.15)]">

        {/* Glow Effect */}
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-pink-500/20 blur-[120px]" />

        <div className="relative z-10 grid md:grid-cols-[1.4fr_0.8fr] gap-16 items-center">

          {/* Left Side */}
          <div className="max-w-[600px]">

            <span className="text-pink-400 uppercase tracking-[0.3em] text-sm font-bold">
              GTA VI Beyond
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl font-black text-white">
  Welcome to Leonida
</h2>

            <p className="mt-5 text-zinc-300 text-lg leading-relaxed">
              Explore characters, vehicles, weapons, media,
              exclusive stories and everything known about GTA VI.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <button className="whitespace-nowrap rounded-full bg-pink-500 px-8 py-4 font-bold text-black">
                Explore Leonida
              </button>

              <button className="whitespace-nowrap rounded-full border border-zinc-700 px-8 py-4 text-white">
                View Media
              </button>

            </div>
          </div>
         

          {/* Right Side */}
          <div className="flex justify-center md:justify-end">

            <div className="flex flex-wrap gap-10 justify-center">

              <div>
                <h3 className="text-4xl font-black text-pink-400">
                  6
                </h3>
                <p className="text-zinc-400 mt-2">
                  Characters
                </p>
              </div>

              <div>
                <h3 className="text-5xl font-black text-pink-400">
                  100+
                </h3>
                <p className="text-zinc-400 mt-2">
                  Screenshots
                </p>
              </div>

              <div>
                <h3 className="text-5xl font-black text-pink-400">
                  2026
                </h3>
                <p className="text-zinc-400 mt-2">
                  Release
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* Bottom Footer */}
        <div className="relative z-10 mt-14 border-t border-zinc-800 pt-8">

          <div className="flex flex-col md:flex-row justify-between gap-8">

            <div>
              <h3 className="text-2xl font-black text-white">
                GTA VI Beyond
              </h3>

              <p className="text-zinc-400 mt-2">
                Your Gateway to GTA VI
              </p>
            </div>

            <div className="flex flex-wrap gap-6 text-zinc-400 text-sm uppercase tracking-wider">

              <a
  href="#"
  className="transition duration-300 hover:text-pink-400"
>
  Newswire
</a>
              <a
  href="#"
  className="transition duration-300 hover:text-pink-400"
>
  Media
</a>
              <a
  href="#"
  className="transition duration-300 hover:text-pink-400"
>
  Characters
</a>
              <a
  href="#"
  className="transition duration-300 hover:text-pink-400"
>
  Vehicles
</a>
              <a
  href="#"
  className="transition duration-300 hover:text-pink-400"
>
  Pre-Order
</a>
              <a
  href="#"
  className="transition duration-300 hover:text-pink-400"
>
  Discord
</a>
              
  
  <a
  href="https://www.linkedin.com/in/harsh-bhadoriya-🌟-a44305356/"
  target="_blank"
  rel="noopener noreferrer"
  className="transition duration-300 hover:text-pink-400"
>
  LinkedIn
</a>



            </div>

          </div>

          <div className="mt-8 border-t border-zinc-800 pt-6">
  <p className="text-zinc-400 text-sm">
    GTA VI Beyond is a fan-made project created by Harsh Bhadoriya.
  </p>

  <p className="mt-2 text-xs text-zinc-500">
    Grand Theft Auto, GTA VI, Rockstar Games and all related assets,
    trademarks and copyrights belong to Rockstar Games and
    Take-Two Interactive.
  </p>

  <p className="mt-3 text-xs text-zinc-600">
    © 2026 Harsh Bhadoriya. All rights reserved.
  </p>
</div>

        </div>

      </div>

    </footer>
  );
}