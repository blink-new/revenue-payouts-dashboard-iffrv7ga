
import { useEffect, useState } from "react"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from "recharts"
import { Card } from "./ui/card"

// Sample data - in a real app, this would come from an API
const revenueData = [
  { name: "Jan", revenue: 4000, payouts: 2400 },
  { name: "Feb", revenue: 3000, payouts: 1398 },
  { name: "Mar", revenue: 2000, payouts: 9800 },
  { name: "Apr", revenue: 2780, payouts: 3908 },
  { name: "May", revenue: 1890, payouts: 4800 },
  { name: "Jun", revenue: 2390, payouts: 3800 },
  { name: "Jul", revenue: 3490, payouts: 4300 },
  { name: "Aug", revenue: 4000, payouts: 2400 },
  { name: "Sep", revenue: 5000, payouts: 4300 },
  { name: "Oct", revenue: 6000, payouts: 5400 },
  { name: "Nov", revenue: 7000, payouts: 6400 },
  { name: "Dec", revenue: 9000, payouts: 7400 },
]

export function RevenueChart() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <div className="h-[400px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={revenueData}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
          <XAxis dataKey="name" className="text-sm text-muted-foreground" />
          <YAxis 
            className="text-sm text-muted-foreground"
            tickFormatter={(value) => `$${value.toLocaleString()}`}
          />
          <Tooltip 
            content={({ active, payload, label }) => {
              if (active && payload && payload.length) {
                return (
                  <Card className="p-3 border shadow-sm bg-background">
                    <p className="font-medium">{label}</p>
                    <p className="text-primary">
                      Revenue: ${payload[0].value.toLocaleString()}
                    </p>
                    <p className="text-chart-2">
                      Payouts: ${payload[1].value.toLocaleString()}
                    </p>
                  </Card>
                )
              }
              return null
            }}
          />
          <Area
            type="monotone"
            dataKey="revenue"
            stroke="hsl(var(--primary))"
            fill="hsl(var(--primary))"
            fillOpacity={0.2}
            activeDot={{ r: 8 }}
          />
          <Area
            type="monotone"
            dataKey="payouts"
            stroke="hsl(var(--chart-2))"
            fill="hsl(var(--chart-2))"
            fillOpacity={0.2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}