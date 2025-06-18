import { useState } from "react";
import {
    ComposedChart,
    Bar,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
} from "recharts";
import { NumericFormat } from "react-number-format";
import Card from "@/components/Card";
import Button from "@/components/Button";
import Percentage from "@/components/Percentage";

import { recentEarningsChartData } from "@/mocks/charts";

const durations = [
    { id: 1, name: "Last 7 days" },
    { id: 2, name: "Last month" },
    { id: 3, name: "Last year" },
];

const RecentEarnings = ({}) => {
    const [duration, setDuration] = useState(durations[0]);

    const CustomTooltip = ({
        payload,
        label,
    }: {
        payload: { value: number }[];
        label: string;
    }) => {
        if (payload && payload.length) {
            return (
                <div className="chart-tooltip text-caption">
                    <div className="mb-0.5 opacity-80">{label}</div>
                    <NumericFormat
                        className="text-caption"
                        value={payload[0].value}
                        thousandSeparator=","
                        decimalScale={0}
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
            title="Recent earnings"
            selectValue={duration}
            selectOnChange={setDuration}
            selectOptions={durations}
            headContent={
                <Button
                    className="mr-3 max-md:hidden"
                    icon="calendar-1"
                    isCircle
                    isStroke
                />
            }
        >
            <div className="pt-6 px-5 pb-5 max-lg:p-3">
                <div className="h-88">
                    <ResponsiveContainer width="100%" height="100%">
                        <ComposedChart
                            width={500}
                            height={280}
                            data={recentEarningsChartData}
                            // barCategoryGap={16}
                            barSize={28}
                            margin={{
                                top: 0,
                                right: 0,
                                left: 0,
                                bottom: 0,
                            }}
                        >
                            <defs>
                                <pattern
                                    id="pattern-diagonal"
                                    patternUnits="userSpaceOnUse"
                                    width="4"
                                    height="4"
                                    patternTransform="rotate(-45)"
                                >
                                    <path
                                        d="M 0 2 H 4"
                                        stroke="var(--shade-07)"
                                        strokeWidth="2"
                                        fill="none"
                                    />
                                </pattern>
                                <pattern
                                    id="pattern-diagonal-hover"
                                    patternUnits="userSpaceOnUse"
                                    width="4"
                                    height="4"
                                    patternTransform="rotate(-45)"
                                >
                                    <path
                                        d="M 0 2 H 4"
                                        stroke="var(--chart-green)"
                                        strokeWidth="2"
                                        fill="none"
                                    />
                                </pattern>
                            </defs>
                            <CartesianGrid
                                strokeDasharray="5 7"
                                vertical={false}
                                stroke="var(--stroke-stroke2)"
                            />
                            <XAxis
                                dataKey="name"
                                axisLine={false}
                                tickLine={false}
                                tick={{
                                    fontSize: "12px",
                                    fill: "var(--text-tertiary)",
                                }}
                                height={38}
                                dy={16}
                            />
                            <YAxis
                                type="number"
                                width={44}
                                axisLine={false}
                                tickLine={false}
                                tick={{
                                    fontSize: "12px",
                                    fill: "var(--text-tertiary)",
                                    fillOpacity: 0.8,
                                }}
                            />
                            <Tooltip
                                content={
                                    <CustomTooltip payload={[]} label="" />
                                }
                                cursor={false}
                            />
                            <Bar
                                dataKey="amt"
                                fill="var(--shade-07)"
                                fillOpacity={0.4}
                                activeBar={{
                                    fill: "var(--chart-green)",
                                    fillOpacity: 1,
                                }}
                                radius={1}
                            />
                            <Bar
                                dataKey="amt2"
                                fill="url(#pattern-diagonal)"
                                fillOpacity={0.3}
                                activeBar={{
                                    fill: "url(#pattern-diagonal-hover)",
                                    fillOpacity: 0.4,
                                }}
                                radius={1}
                            />
                            <Line
                                type="linear"
                                dataKey="uv"
                                stroke="var(--color-shade-07)"
                                strokeOpacity={0.2}
                                strokeWidth={2}
                                dot={{
                                    r: 4,
                                    strokeWidth: 3,
                                    strokeOpacity: 0.6,
                                    fill: "var(--backgrounds-surface2)",
                                }}
                                activeDot={{
                                    r: 4,
                                    fill: "var(--color-chart-green)",
                                    stroke: "var(--backgrounds-surface2)",
                                    strokeWidth: 3,
                                }}
                            />
                        </ComposedChart>
                    </ResponsiveContainer>
                </div>
                <div className="flex items-center mt-3">
                    <div className="flex gap-1 text-h4 max-md:text-h5">
                        <div className="text-t-tertiary">$</div>
                        <NumericFormat
                            value={320}
                            thousandSeparator=","
                            decimalScale={2}
                            fixedDecimalScale
                            displayType="text"
                        />
                    </div>
                    <Percentage className="ml-3" value={36.8} />
                    <div className="ml-2 text-body-2 text-t-tertiary">
                        vs last month
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default RecentEarnings;
