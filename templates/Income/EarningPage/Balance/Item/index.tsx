import { useEffect, useState } from "react";
import { NumericFormat } from "react-number-format";
import { Line, LineChart, ResponsiveContainer } from "recharts";
import { useMedia } from "react-use";
import Icon from "@/components/Icon";
import Percentage from "@/components/Percentage";
import Tooltip from "@/components/Tooltip";

type ItemProps = {
    value: {
        id: number;
        title: string;
        icon: string;
        tooltip: string;
        counter: number;
        percentage: number;
        dataChart: {
            name: string;
            amt: number;
        }[];
    };
};

const Item = ({ value }: ItemProps) => {
    const [mounted, setMounted] = useState(false);
    const isWide = useMedia("(min-width: 1779px) or (max-width: 1419px)");

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="flex-1 pr-6 border-r border-shade-07/10 last:border-r-0 max-4xl:nth-3:hidden max-4xl:nth-2:border-r-0 max-md:flex-auto max-md:shrink-0 max-md:w-62">
            <div className="flex items-center justify-center w-16 h-16 mb-8 rounded-full bg-b-surface1">
                <Icon
                    className={`fill-t-primary ${
                        value.title === "Future payouts" ? "-rotate-45" : ""
                    }`}
                    name={value.icon}
                />
            </div>
            <div className="relative">
                <div className="relative z-2 grow">
                    <div className="flex items-center gap-2 mb-2">
                        <div className="text-sub-title-1">{value.title}</div>
                        <Tooltip content={value.tooltip} large />
                    </div>
                    <div className="flex mb-3">
                        <div className="mt-2 mr-2.5 text-h4 text-t-secondary max-xl:mt-1 max-lg:mt-2 max-md:mt-1 max-md:mr-1">
                            $
                        </div>
                        <NumericFormat
                            className="text-h2 max-xl:text-h3 max-lg:text-h2 or (max-width: 1419px) max-md:text-h3"
                            value={value.counter}
                            thousandSeparator=","
                            decimalScale={
                                mounted ? (isWide ? 2 : 0) : undefined
                            }
                            fixedDecimalScale
                            displayType="text"
                        />
                    </div>
                    <div className="flex items-center gap-2">
                        <Percentage value={value.percentage} />
                        <div className="text-body-2 text-t-tertiary">
                            vs last year
                        </div>
                    </div>
                </div>
                <div className="absolute top-0 right-0 w-full max-w-30 h-32 max-3xl:max-w-28 max-2xl:hidden">
                    <ResponsiveContainer width="100%" height={128}>
                        <LineChart
                            width={300}
                            height={100}
                            data={value.dataChart}
                        >
                            <Line
                                type="monotone"
                                dataKey="amt"
                                stroke={
                                    value.percentage > 0
                                        ? "var(--primary-02)"
                                        : "var(--primary-03)"
                                }
                                strokeWidth={3}
                                dot={false}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default Item;
