import { useState } from "react";
import { BarChart, Bar, ResponsiveContainer } from "recharts";
import Card from "@/components/Card";
import Icon from "@/components/Icon";
import Tooltip from "@/components/Tooltip";
import Percentage from "@/components/Percentage";

import { insights } from "@/mocks/affiliate-center";

const durations = [
    { id: 1, name: "Last 7 days" },
    { id: 2, name: "Last 14 days" },
    { id: 3, name: "Last 28 days" },
];

const Insights = ({}) => {
    const [duration, setDuration] = useState(durations[0]);

    return (
        <Card
            className="overflow-hidden"
            title="Insights"
            selectValue={duration}
            selectOnChange={setDuration}
            selectOptions={durations}
        >
            <div className="relative before:hidden after:hidden before:absolute before:-left-3 before:top-0 before:bottom-0 before:z-3 before:w-8 before:bg-linear-to-r before:from-b-surface2 before:to-transparent before:pointer-events-none after:absolute after:-right-3 after:top-0 after:bottom-0 after:z-3 after:w-8 after:bg-linear-to-l after:from-b-surface2 after:to-transparent after:pointer-events-none max-2xl:before:block max-2xl:after:block">
                <div className="flex gap-12 p-5 pt-4 max-4xl:gap-8 max-3xl:gap-6 max-2xl:gap-8 max-2xl:-mx-3 max-2xl:px-8 max-2xl:overflow-auto max-2xl:scrollbar-none max-lg:px-6 max-lg:py-3 max-md:gap-5">
                    {insights.map((item) => (
                        <div
                            className="flex gap-5 flex-1 max-2xl:shrink-0 max-2xl:flex-auto max-2xl:w-86 max-md:w-54"
                            key={item.id}
                        >
                            <div className="flex flex-col items-center justify-between shrink-0 p-3 rounded-full bg-b-surface1 max-md:hidden dark:bg-b-highlight">
                                <Icon
                                    className="fill-t-primary"
                                    name={item.icon}
                                />
                                <Tooltip content={item.tooltip} large />
                            </div>
                            <div className="flex items-end grow">
                                <div className="shrink-0 mr-4">
                                    <div className="text-sub-title-1">
                                        {item.title}
                                    </div>
                                    <div className="mb-3 text-h2">
                                        {item.value}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Percentage value={item.percentage} />
                                        <div className="text-body-2 text-t-tertiary">
                                            vs last year
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full max-w-46 h-24 ml-auto max-3xl:h-18 max-md:hidden">
                                    <ResponsiveContainer
                                        width="100%"
                                        height="100%"
                                    >
                                        <BarChart
                                            width={150}
                                            height={40}
                                            data={item.dataChart}
                                            barCategoryGap={2}
                                            margin={{
                                                top: 0,
                                                right: 0,
                                                left: 0,
                                                bottom: 0,
                                            }}
                                        >
                                            <Bar
                                                dataKey="amt"
                                                fill="var(--shade-07)"
                                                fillOpacity={0.4}
                                                radius={2}
                                            />
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Card>
    );
};

export default Insights;
