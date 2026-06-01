function Header() {
  return (
    <div className="flex justify-between items-center mb-6">
      {/* Left side - title and date */}

      <div>
        <h1 className="text-white text-xl font-bold tracking-wide">
          Dev Expense Tracker
        </h1>
        <p className="text-purple-300 text-sm mt-1">June 2026</p>
      </div>

      {/* Theme and expense Button */}

      <div className="flex gap-3">
        <button className="text-purple-500 border border-purple-500 text-sm font-medium rounded-lg px-4 py-2">
          Theme
        </button>

        <button
          className="text-sm font-medium rounded-lg px-4 py-2 text-white"
          style={{ background: "linear-gradient(135deg, #7c3aed, #1d9e75)" }}
        >
          + Add Expense
        </button>
      </div>
    </div>
  );
}

export default Header;
