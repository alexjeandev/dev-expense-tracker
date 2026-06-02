function MostExpensive() {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-4">
      <p className="text-white/40 text-xs uppercase tracking-widest mb-4">
        Most Expensive
      </p>

      {/* First row */}
      <div className="flex justify-between items-center">
        <div>
          <p className="text-white text-sm font-medium">Claude Pro</p>
          <span className="text-xs px-2 py-0.5 bg-purple-500/20 rounded-full mt-1 inline-block text-purple-300">
            AI / LLM
          </span>
        </div>
        <p className="text-red-400 font-bold text-sm">$20</p>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10 my-3"></div>

      {/* Second row */}
      <div className="flex justify-between items-center">
        <div>
          <p className="text-white text-sm font-medium">Vercel Pro</p>
          <span className="text-xs px-2 py-0.5 bg-green-500/20 rounded-full mt-1 inline-block text-green-300">
            Hosting
          </span>
        </div>
        <p className="text-red-400 font-bold text-sm">$20</p>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10 my-3"></div>

      {/* Third row */}
      <div className="flex justify-between items-center">
        <div>
          <p className="text-white text-sm font-medium">GitHub Copilot</p>
          <span className="text-xs px-2 py-0.5 bg-amber-500/20 rounded-full mt-1 inline-block text-amber-300">
            Tools
          </span>
        </div>
        <p className="text-red-400 font-bold text-sm">$10</p>
      </div>
    </div>
  );
}

export default MostExpensive;
