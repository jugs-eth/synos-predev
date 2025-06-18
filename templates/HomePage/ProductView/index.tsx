import { useState, useMemo } from "react";
import {
    BarChart,
    Bar,
    XAxis,
    Tooltip,
    ResponsiveContainer,
    Cell,
} from "recharts";
import millify from "millify";
import Card from "@/components/Card";
import Percentage from "@/components/Percentage";

import { homeProductViewChartData } from "@/mocks/charts";

const durations = [
    { id: 1, name: "Last 7 days" },
    { id: 2, name: "Last month" },
    { id: 3, name: "Last year" },
];

const ProductView = ({}) => {
    const [duration, setDuration] = useState(durations[0]);

    const CustomTooltip = ({ payload }: { payload: { value: number }[] }) => {
        if (payload && payload.length) {
            return (
                <div className="chart-tooltip !py-0.75">
                    <div className="text-caption">
                        {millify(payload[0].value, {
                            lowercase: true,
                        })}
                    </div>
                </div>
            );
        }
        return null;
    };

    const getMinValues = useMemo(() => {
        const sortedData = [...homeProductViewChartData].sort(
            (a, b) => a.amt - b.amt
        );
        return [sortedData[0].amt, sortedData[1].amt];
    }, []);

    return (
        <Card
            title="Product view"
            selectValue={duration}
            selectOnChange={setDuration}
            selectOptions={durations}
        >
            <div className="pt-6 px-5 pb-5 max-md:pt-5 max-lg:px-3 max-lg:pb-4">
                <div className="flex items-end max-md:block">
                    <div className="shrink-0 w-52 mr-18 max-2xl:mr-8 max-md:flex max-md:items-center max-md:gap-4">
                        <div className="flex mb-4 max-md:mb-0">
                            <div className="text-h3 text-t-tertiary">$</div>
                            <div className="text-h2">10.2m</div>
                        </div>
                        <div className="flex items-center gap-2 max-md:flex-col max-md:items-stretch max-md:gap-1">
                            <Percentage value={36.8} />
                            <div className="text-caption text-t-tertiary">
                                vs last month
                            </div>
                        </div>
                    </div>
                    <div className="grow h-74">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                                width={150}
                                height={40}
                                data={homeProductViewChartData}
                                margin={{
                                    top: 0,
                                    right: 0,
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
                                    }}
                                    height={32}
                                    dy={10}
                                />
                                <Tooltip
                                    content={<CustomTooltip payload={[]} />}
                                    cursor={false}
                                />
                                <Bar
                                    dataKey="amt"
                                    activeBar={{
                                        fill: "var(--chart-green)",
                                        fillOpacity: 1,
                                    }}
                                    radius={6}
                                >
                                    {homeProductViewChartData.map(
                                        (entry, index) => (
                                            <Cell
                                                key={`cell-${index}`}
                                                fill={
                                                    getMinValues.includes(
                                                        entry.amt
                                                    )
                                                        ? "var(--chart-min)"
                                                        : "var(--shade-07)"
                                                }
                                                fillOpacity={
                                                    getMinValues.includes(
                                                        entry.amt
                                                    )
                                                        ? 1
                                                        : 0.4
                                                }
                                            />
                                        )
                                    )}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default ProductView;
