function DueDates() {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-4">
      <p className="text-white/40 text-xs uppercase tracking-widest mb-4">
        Upcoming Due Dates
      </p>

      {/* First row */}
      <div className="flex justify-between items-center">
        <div>
          <p className="text-white text-sm font-medium">ChatGPT Plus</p>
          <span className="text-xs mt-1 inline-block text-white/40">
            Renews June 12
          </span>
        </div>
        <span className="text-red-400 text-sm px-2 py-0.5 rounded-full font-medium bg-red-500/20">
          3 days
        </span>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10 my-3"></div>

      {/* Second row */}
      <div className="flex justify-between items-center">
        <div>
          <p className="text-white text-sm font-medium">Vercel Pro</p>
          <span className="text-xs mt-1 inline-block text-white/40">
            Renews June 18
          </span>
        </div>
        <span className="text-yellow-400 text-sm px-2 py-0.5 rounded-full font-medium bg-yellow-500/20">
          9 days
        </span>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10 my-3"></div>

      {/* Third row */}
      <div className="flex justify-between items-center">
        <div>
          <p className="text-white text-sm font-medium">GitHub Copilot</p>
          <span className="text-xs mt-1 inline-block text-white/40">
            Renews June 28
          </span>
        </div>
        <span className="text-green-400 text-sm px-2 py-0.5 rounded-full font-medium bg-green-500/20">
          19 days
        </span>
      </div>
    </div>
  );
}

export default DueDates;
