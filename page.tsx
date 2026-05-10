export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 text-center">
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,120,120,0.12),transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-4xl">
        
        <p className="uppercase tracking-[0.4em] text-zinc-500 text-sm mb-4">
          Signal Detected
        </p>

        <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-6">
          $VOID
        </h1>

        <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          The memecoin from the end of the internet.
          Born from abandoned servers, corrupted AI models,
          and the final pulse of the old web.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          
          <button className="px-8 py-4 rounded-xl bg-white text-black font-semibold hover:opacity-90 transition">
            Enter VOID
          </button>

          <button className="px-8 py-4 rounded-xl border border-zinc-700 hover:border-zinc-400 transition">
            View Contract
          </button>

        </div>

        <div className="mt-24 border-t border-zinc-800 pt-10">
          
          <p className="text-zinc-600 uppercase tracking-[0.3em] text-xs mb-6">
            Future Expansions
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            
            <div className="border border-zinc-800 rounded-2xl p-6 bg-zinc-950/40">
              <h3 className="font-semibold mb-2">Sprint 3</h3>
              <p className="text-zinc-500 text-sm">
                Tokenomics, roadmap, contract intelligence.
              </p>
            </div>

            <div className="border border-zinc-800 rounded-2xl p-6 bg-zinc-950/40">
              <h3 className="font-semibold mb-2">Sprint 4</h3>
              <p className="text-zinc-500 text-sm">
                Cinematic animations and scroll interactions.
              </p>
            </div>

            <div className="border border-zinc-800 rounded-2xl p-6 bg-zinc-950/40">
              <h3 className="font-semibold mb-2">Sprint 5</h3>
              <p className="text-zinc-500 text-sm">
                Wallet systems, Supabase backend, analytics.
              </p>
            </div>

          </div>

        </div>

      </div>

    </main>
  )
}