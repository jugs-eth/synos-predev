import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from "recharts";
import millify from "millify";
import { NumericFormat } from "react-number-format";

import { customersOverviewChartData } from "@/mocks/charts";

const Chart = ({}) => {
    const formatterYAxis = (value: number) => {
        if (value === 0) {
            return "0";
        }
        return `${millify(value, {
            lowercase: true,
        })}`;
    };

    const CustomTooltip = ({
        payload,
        label,
    }: {
        payload: { value: number }[];
        label: string;
    }) => {
        if (payload && payload.length) {
            return (
                <div className="chart-tooltip">
                    <div className="text-caption opacity-80">{label} 2025</div>
                    <NumericFormat
                        className="text-caption"
                        value={payload[1].value}
                        thousandSeparator=","
                        decimalScale={0}
                        fixedDecimalScale
                        displayType="text"
                    />
                </div>
            );
        }
        return null;
    };

    return (
        <div className="mt-8 -ml-1">
            <div className="h-77">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        width={300}
                        height={100}
                        data={customersOverviewChartData}
                        margin={{ top: 7, right: 7, left: 0, bottom: 0 }}
                    >
                        <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            tick={{
                                fontSize: "12px",
                                fill: "var(--text-tertiary)",
                                fillOpacity: 0.8,
                            }}
                            padding={{ left: 10 }}
                            height={40}
                            dy={20}
                            interval="equidistantPreserveStart"
                        />
                        <YAxis
                            tickFormatter={formatterYAxis}
                            type="number"
                            width={36}
                            axisLine={false}
                            tickLine={false}
                            tick={{
                                fontSize: "12px",
                                fill: "var(--text-tertiary)",
                                fillOpacity: 0.8,
                            }}
                        />
                        <CartesianGrid
                            strokeDasharray="5 7"
                            vertical={false}
                            stroke="var(--stroke-stroke2)"
                        />
                        <Tooltip
                            content={<CustomTooltip payload={[]} label="" />}
                            cursor={{ stroke: "var(--stroke-stroke2)" }}
                        />
                        <Line
                            type="monotone"
                            dataKey="amt2"
                            stroke="#D9D9D9"
                            strokeWidth={3}
                            dot={false}
                            activeDot={false}
                        />
                        <Line
                            type="monotone"
                            dataKey="amt"
                            stroke="var(--chart-green)"
                            strokeWidth={3}
                            dot={false}
                            activeDot={{
                                r: 5,
                                fill: "var(--backgrounds-surface2)",
                                stroke: "var(--chart-green)",
                                strokeWidth: 3,
                            }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Chart;
