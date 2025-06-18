import { useState } from "react";
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
import Card from "@/components/Card";

import { performanceChartData } from "@/mocks/charts";

const durations = [
    { id: 1, name: "Last 7 days" },
    { id: 2, name: "Last 14 days" },
    { id: 3, name: "Last 28 days" },
];

const Performance = ({}) => {
    const [duration, setDuration] = useState(durations[0]);

    const formatterYAxis = (value: number) => {
        if (value === 0) {
            return "0";
        }
        return `${millify(value, {
            lowercase: true,
        })}`;
    };

    const CustomTooltip = ({ payload }: { payload: { value: number }[] }) => {
        if (payload && payload.length) {
            return (
                <div className="chart-tooltip">
                    <div className="text-caption opacity-80">Earning</div>
                    <NumericFormat
                        className="text-caption"
                        value={payload[0].value}
                        thousandSeparator=","
                        decimalScale={2}
                        fixedDecimalScale
                        displayType="text"
                        prefix="$"
                    />
                </div>
            );
        }
        return null;
    };

    return (
        <Card
            title="Performance"
            selectValue={duration}
            selectOnChange={setDuration}
            selectOptions={durations}
        >
            <div className="p-5 pb-2 max-lg:p-3 max-md:px-2">
                <div className="h-84 max-md:h-76">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                            width={300}
                            height={100}
                            data={performanceChartData}
                            margin={{
                                top: 7,
                                right: 7,
                                left: 0,
                                bottom: 0,
                            }}
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
                                content={<CustomTooltip payload={[]} />}
                                cursor={{ stroke: "var(--stroke-stroke2)" }}
                            />
                            <Line
                                type="monotone"
                                dataKey="amt"
                                stroke="var(--chart-green)"
                                strokeWidth={3}
                                dot={{
                                    r: 5,
                                    fill: "var(--chart-green)",
                                    stroke: "var(--backgrounds-surface2)",
                                    strokeWidth: 2,
                                }}
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
        </Card>
    );
};

export default Performance;
