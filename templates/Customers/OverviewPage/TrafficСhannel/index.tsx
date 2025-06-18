import { useState } from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
} from "recharts";
import millify from "millify";
import { NumericFormat } from "react-number-format";
import Card from "@/components/Card";

import { trafficСhannelChartData } from "@/mocks/charts";

const durations = [
    { id: 1, name: "Last 7 days" },
    { id: 2, name: "Last month" },
    { id: 3, name: "Last year" },
];

const TrafficСhannel = ({}) => {
    const [duration, setDuration] = useState(durations[0]);

    const formatterYAxis = (value: number) => {
        if (value === 0) {
            return "0";
        }
        return `${millify(value, {
            lowercase: true,
        })}`;
    };

    const LabelTooltip = ({
        label,
        value,
    }: {
        label: string;
        value: number;
    }) => {
        return (
            <div className="flex text-caption">
                <div className="mr-auto text-t-secondary">{label}</div>
                <div className="ml-1">
                    <NumericFormat
                        className="ml-4"
                        value={value}
                        thousandSeparator=","
                        decimalScale={0}
                        fixedDecimalScale
                        displayType="text"
                    />
                </div>
            </div>
        );
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
                    <div className="mb-1 text-caption opacity-80">{label}</div>
                    <div className="flex flex-col gap-0.5">
                        <LabelTooltip label="Direct" value={payload[0].value} />
                        <LabelTooltip label="Search" value={payload[1].value} />
                        <LabelTooltip label="Other" value={payload[2].value} />
                    </div>
                </div>
            );
        }
        return null;
    };

    return (
        <Card
            title="Traffic channel"
            selectValue={duration}
            selectOnChange={setDuration}
            selectOptions={durations}
        >
            <div className="pt-6 px-5 pb-5 max-lg:p-3">
                <div className="grow h-71">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            width={500}
                            height={280}
                            data={trafficСhannelChartData}
                            // barCategoryGap={16}
                            barSize={20}
                            margin={{
                                top: 0,
                                right: 0,
                                left: 0,
                                bottom: 0,
                            }}
                        >
                            <defs>
                                <pattern
                                    id="pattern-lines"
                                    patternUnits="userSpaceOnUse"
                                    width="5"
                                    height="5"
                                >
                                    <path
                                        d="M 0 2.5 H 5"
                                        stroke="var(--shade-07)"
                                        strokeWidth="4"
                                        fill="none"
                                    />
                                </pattern>
                                <pattern
                                    id="pattern-lines-hover"
                                    patternUnits="userSpaceOnUse"
                                    width="5"
                                    height="5"
                                >
                                    <path
                                        d="M 0 2.5 H 5"
                                        stroke="var(--chart-green)"
                                        strokeWidth="4"
                                        fill="none"
                                    />
                                </pattern>
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
                                tickFormatter={(value) => value.split(" ")[0]}
                                height={32}
                                dy={10}
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
                            <Tooltip
                                content={
                                    <CustomTooltip payload={[]} label="" />
                                }
                                cursor={false}
                            />
                            <Bar
                                dataKey="direct"
                                fill="var(--shade-07)"
                                fillOpacity={0.4}
                                activeBar={{
                                    fill: "var(--chart-green)",
                                    fillOpacity: 1,
                                }}
                                radius={1}
                            />
                            <Bar
                                dataKey="search"
                                fill="url(#pattern-diagonal)"
                                fillOpacity={0.3}
                                activeBar={{
                                    fill: "url(#pattern-diagonal-hover)",
                                    fillOpacity: 0.4,
                                }}
                                radius={1}
                            />
                            <Bar
                                dataKey="other"
                                fill="url(#pattern-lines)"
                                fillOpacity={0.2}
                                activeBar={{
                                    fill: "url(#pattern-lines-hover)",
                                    fillOpacity: 0.3,
                                }}
                                radius={1}
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                <div className="flex gap-10 mt-4 max-md:justify-center">
                    <div className="flex items-center gap-1.5">
                        <div className="shrink-0 w-3.5 h-3.5 rounded bg-shade-07/40"></div>
                        <div className="text-caption opacity-80">Direct</div>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <div className="shrink-0 w-3.5 h-3.5 rounded overflow-hidden">
                            <svg width="100%" height="100%" viewBox="0 0 14 14">
                                <defs>
                                    <pattern
                                        id="pattern-diagonal-legend"
                                        patternUnits="userSpaceOnUse"
                                        width="4"
                                        height="4"
                                        patternTransform="rotate(-45)"
                                    >
                                        <line
                                            x1="0"
                                            y1="2"
                                            x2="4"
                                            y2="2"
                                            stroke="var(--shade-07)"
                                            strokeWidth="2"
                                        />
                                    </pattern>
                                </defs>
                                <rect
                                    width="14"
                                    height="14"
                                    fill="url(#pattern-diagonal-legend)"
                                    fillOpacity="0.3"
                                />
                            </svg>
                        </div>
                        <div className="text-caption opacity-80">Search</div>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <div className="shrink-0 w-3.5 h-3.5 rounded overflow-hidden">
                            <svg width="100%" height="100%" viewBox="0 0 14 14">
                                <defs>
                                    <pattern
                                        id="pattern-lines-legend"
                                        patternUnits="userSpaceOnUse"
                                        width="4"
                                        height="4"
                                    >
                                        <line
                                            x1="0"
                                            y1="2"
                                            x2="4"
                                            y2="2"
                                            stroke="var(--shade-07)"
                                            strokeWidth="3"
                                        />
                                    </pattern>
                                </defs>
                                <rect
                                    width="14"
                                    height="14"
                                    fill="url(#pattern-lines-legend)"
                                    fillOpacity="0.2"
                                />
                            </svg>
                        </div>
                        <div className="text-caption opacity-80">Other</div>
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default TrafficСhannel;
