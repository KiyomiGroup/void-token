export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
      
      {/* ambient glow layer */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.08),_transparent_60%)]" />

      <div className="relative text-center space-y-6 px-6">

        {/* VOID TITLE */}
        <h1 className="text-6xl md:text-8xl font-bold tracking-[0.3em]">
          $VOID
        </h1>

        {/* tagline */}
        <p className="text-zinc-400 text-lg md:text-xl max-w-md mx-auto">
          The memecoin from the end of the internet.
        </p>

        {/* glitch hint line */}
        <p className="text-zinc-600 text-sm tracking-widest">
          abandoned servers • corrupted AI • digital afterlife
        </p>

        {/* CTA placeholder */}
        <div className="pt-8 flex gap-4 justify-center">
          <button className="px-6 py-2 border border-white/20 rounded-full hover:bg-white hover:text-black transition">
            Enter VOID
          </button>
          <button className="px-6 py-2 border border-white/10 rounded-full text-zinc-400 hover:text-white">
            Token Info
          </button>
        </div>

      </div>
    </main>
  );
}