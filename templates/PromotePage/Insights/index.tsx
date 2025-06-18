import { useState } from "react";
import { NumericFormat } from "react-number-format";
import Card from "@/components/Card";
import Icon from "@/components/Icon";
import Tooltip from "@/components/Tooltip";
import Percentage from "@/components/Percentage";

import { insights } from "@/mocks/promote";

const durations = [
    { id: 1, name: "Last 7 days" },
    { id: 2, name: "Last 14 days" },
    { id: 3, name: "Last 28 days" },
];

const Insights = ({}) => {
    const [duration, setDuration] = useState(durations[0]);

    return (
        <Card
            className="max-2xl:overflow-hidden"
            title="Insights"
            selectValue={duration}
            selectOnChange={setDuration}
            selectOptions={durations}
        >
            <div className="relative before:hidden after:hidden before:absolute before:-left-3 before:top-0 before:bottom-0 before:z-3 before:w-8 before:bg-linear-to-r before:from-b-surface2 before:to-transparent before:pointer-events-none after:absolute after:-right-3 after:top-0 after:bottom-0 after:z-3 after:w-8 after:bg-linear-to-l after:from-b-surface2 after:to-transparent after:pointer-events-none max-2xl:before:block max-2xl:after:block">
                <div className="flex gap-16 p-5 pt-4 max-4xl:gap-13 max-3xl:gap-11 max-2xl:overflow-auto max-2xl:scrollbar-none max-2xl:-mx-3 max-2xl:px-8 max-lg:px-6 max-lg:py-3 max-md:gap-8 max-md:pt-0">
                    {insights.map((item) => (
                        <div
                            className="flex gap-5 flex-1 max-2xl:w-88 max-2xl:shrink-0 max-2xl:flex-auto max-md:gap-0 max-md:w-68"
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
                                <div className="grow">
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
                                <div className="flex flex-col gap-2">
                                    <div className="text-right">
                                        <div className="text-caption text-t-tertiary">
                                            New customers
                                        </div>
                                        <div className="inline-flex items-center gap-1">
                                            <Icon
                                                className={`${
                                                    item.newCustomers > 0
                                                        ? "-rotate-90 fill-primary-02"
                                                        : "rotate-90 fill-primary-03"
                                                }`}
                                                name="arrow"
                                            />
                                            <div className="text-h6">
                                                {Math.abs(item.newCustomers)}%
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-caption text-t-tertiary">
                                            Product reached
                                        </div>
                                        <NumericFormat
                                            className="text-h6"
                                            value={item.productReached}
                                            thousandSeparator=","
                                            decimalScale={0}
                                            fixedDecimalScale
                                            displayType="text"
                                        />
                                    </div>
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
