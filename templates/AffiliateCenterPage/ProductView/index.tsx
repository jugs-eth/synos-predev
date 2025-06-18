import { useState } from "react";
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";
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
                <div className="chart-tooltip">
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

    return (
        <Card
            title="Product view"
            selectValue={duration}
            selectOnChange={setDuration}
            selectOptions={durations}
        >
            <div className="pt-6 px-5 pb-5">
                <div className="flex items-end">
                    <div className="shrink-0 w-52 mr-18">
                        <div className="flex mb-4">
                            <div className="text-h3 text-t-tertiary">$</div>
                            <div className="text-h2">10.2m</div>
                        </div>
                        <div className="flex items-center gap-2">
                            <Percentage value={36.8} large />
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
                                barCategoryGap={8}
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
                                    fill="var(--shade-07)"
                                    fillOpacity={0.4}
                                    activeBar={{
                                        fill: "var(--chart-green)",
                                        fillOpacity: 1,
                                    }}
                                    radius={8}
                                />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default ProductView;
