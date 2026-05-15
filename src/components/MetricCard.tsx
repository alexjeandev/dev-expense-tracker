type MetricCardProps = {
  label: string
  value: string
  color?: 'green' | 'red' | 'default'
}

function MetricCard({ label, value, color = 'default' }: MetricCardProps) {
  const valueColor = {
    green: 'text-green-600',
    red: 'text-red-500',
    default: 'text-gray-800',
  }

  return (
    <div className="bg-white rounded-xl p-4 border border-gray-200">
      <p className="text-xs text-gray-500 mb-1">{label}</p>
      <p className={`text-xl font-bold ${valueColor[color]}`}>{value}</p>
    </div>
  )
}

export default MetricCard