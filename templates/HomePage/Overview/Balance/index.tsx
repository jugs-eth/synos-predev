import {
    ResponsiveContainer,
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from "recharts";
import millify from "millify";
import { NumericFormat } from "react-number-format";

import { homeBalanceChartData } from "@/mocks/charts";

const Balance = ({}) => {
    const formatterYAxis = (value: number) => {
        if (value === 0) {
            return "$0";
        }
        return `${millify(value, {
            lowercase: true,
        })}`;
    };

    const CustomTooltip = ({ payload }: { payload: { value: number }[] }) => {
        if (payload && payload.length) {
            return (
                <div className="chart-tooltip">
                    <div className="mb-0.5 text-[0.6875rem] leading-[1rem] opacity-80">
                        Earning
                    </div>
                    <div className="text-caption">
                        <NumericFormat
                            value={payload[0].value}
                            thousandSeparator=","
                            decimalScale={2}
                            fixedDecimalScale
                            displayType="text"
                            prefix="$"
                        />
                    </div>
                </div>
            );
        }
        return null;
    };

    return (
        <div className="pt-3 px-3 pb-1">
            <div className="h-79 max-xl:h-63.5">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                        width={730}
                        height={250}
                        data={homeBalanceChartData}
                        margin={{ top: 8, right: 7, left: 0, bottom: 0 }}
                    >
                        <defs>
                            <linearGradient
                                id="colorGreen"
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="1"
                            >
                                <stop
                                    offset="5%"
                                    stopColor="#00A656"
                                    stopOpacity={0.15}
                                />
                                <stop
                                    offset="95%"
                                    stopColor="#00A656"
                                    stopOpacity={0}
                                />
                            </linearGradient>
                        </defs>
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
                        <Area
                            type="monotone"
                            dataKey="amt"
                            stroke="var(--primary-02)"
                            strokeWidth={3}
                            fillOpacity={1}
                            fill="url(#colorGreen)"
                            activeDot={{
                                r: 5,
                                fill: "var(--backgrounds-surface2)",
                                stroke: "var(--primary-02)",
                                strokeWidth: 3,
                            }}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Balance;
