import MetricCard from './components/MetricCard'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Dev Expense Tracker
      </h1>

      <div className="grid grid-cols-4 gap-4 mb-6">
        <MetricCard label="This month" value="$111.00" />
        <MetricCard label="Budget left" value="$39 left" color="green" />
        <MetricCard label="vs last month" value="+18%" color="red" />
        <MetricCard label="Top category" value="AI / LLM" />
      </div>

    </div>
  )
}

export default App