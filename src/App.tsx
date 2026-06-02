import Header from "./components/Header.tsx";
import MetricCard from "./components/MetricCard.tsx";
import MostExpensive from "./components/MostExpensive.tsx";
import DueDates from "./components/DueDates.tsx";

function App() {
  return (
    <div className="min-h-screen w-full p-6">
      <Header />

      {/* Metrics bar */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <MetricCard label="This month" value="$111.00" />
        <MetricCard label="Budget left" value="$39.00" color="green" />
        <MetricCard label="vs last month" value="+18%" color="red" />
        <MetricCard label="Top category" value="AI / LLM" />
      </div>

      {/* Middle row */}

      <div className="grid grid-cols-3 gap-4 mb-6">
        <MostExpensive />
        <DueDates />
      </div>
    </div>
  );
}

export default App;
