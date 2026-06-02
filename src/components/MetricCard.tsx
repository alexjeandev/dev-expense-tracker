type MetricCardProps = {
    label: string
    value: string
    color?: 'green'| 'red'| 'default'
}


function MetricCard({label, value, color}: MetricCardProps) {

    const colorMap = {
        green: 'text-green-400',
        red: 'text-red-400',
        default: 'text-white'
    }
    return (
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
            <p className="text-white/40 text-xs uppercase tracking-widest mb-1">{label}</p>
            <p className={`${colorMap[color || 'default']} font-bold text-xl`}>{value}</p>
        </div>
    )
}

export default MetricCard