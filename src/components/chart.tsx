import {type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent} from "@/components/ui/chart"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

const chartConfig = {
    y: {
        label: "y",
        color: "#2563eb",
    },
} satisfies ChartConfig

const chartData = [
    { x: -4, y: 0.0001 },
    { x: -3.5, y: 0.0009 },
    { x: -3, y: 0.0044 },
    { x: -2.5, y: 0.0175 },
    { x: -2, y: 0.0540 },
    { x: -1.5, y: 0.1295 },
    { x: -1, y: 0.2420 },
    { x: -0.5, y: 0.3521 },
    { x: 0, y: 0.3989 },
    { x: 0.5, y: 0.3521 },
    { x: 1, y: 0.2420 },
    { x: 1.5, y: 0.1295 },
    { x: 2, y: 0.0540 },
    { x: 2.5, y: 0.0175 },
    { x: 3, y: 0.0044 },
    { x: 3.5, y: 0.0009 },
    { x: 4, y: 0.0001 },
]

function MyChart() {
    return (
        <div className="flex flex-col gap-2">
            <h1>Gaussian curve</h1>
            <ChartContainer config={chartConfig} className="min-h-30">
                <AreaChart
                    accessibilityLayer
                    data={chartData}
                    margin={{
                        left: 12,
                        right: 12,
                    }}
                >
                    <CartesianGrid vertical={false} />
                    <XAxis
                        dataKey="x"
                        tickLine={false}
                        axisLine={false}
                        tickMargin={8}
                    />
                    <ChartTooltip
                        cursor={false}
                        content={<ChartTooltipContent indicator="line" />}
                    />
                    <Area
                        dataKey="y"
                        type="natural"
                        fill="var(--color-desktop)"
                        fillOpacity={0.4}
                        stroke="var(--color-desktop)"
                    />
                </AreaChart>
            </ChartContainer>
        </div>
    )
}

export default MyChart;