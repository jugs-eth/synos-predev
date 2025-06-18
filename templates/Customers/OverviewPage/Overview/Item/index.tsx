import { Line, LineChart, ResponsiveContainer } from "recharts";
import Icon from "@/components/Icon";
import Percentage from "@/components/Percentage";
import Tooltip from "@/components/Tooltip";

type ItemProps = {
    value: {
        id: number;
        title: string;
        icon: string;
        tooltip: string;
        counter: string;
        percentage: number;
        dataChart: {
            name: string;
            amt: number;
        }[];
    };
};

const Item = ({ value }: ItemProps) => (
    <div className="flex-1 pr-6 border-r border-shade-07/10 last:border-r-0 max-4xl:nth-3:hidden max-4xl:nth-2:border-r-0 max-md:flex-auto max-md:shrink-0 max-md:w-68 max-md:nth-3:block max-md:nth-2:border-r">
        <div className="flex items-center justify-center w-16 h-16 mb-10 rounded-full bg-b-surface1">
            <Icon
                className={`fill-t-primary ${
                    value.title === "Payout" ? "-rotate-45" : ""
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
                    {(value.title === "Earning" ||
                        value.title === "Payout") && (
                        <div className="mt-2 mr-2.5 text-h4 text-t-secondary">
                            $
                        </div>
                    )}
                    <div className="text-h2">{value.counter}</div>
                </div>
                <div className="flex items-center gap-2">
                    <Percentage value={value.percentage} />
                    <div className="text-body-2 text-t-tertiary">
                        vs last year
                    </div>
                </div>
            </div>
            <div className="absolute top-0 right-0 w-30 h-32 max-2xl:top-2 max-2xl:w-26 max-2xl:h-28 max-xl:top-4 max-xl:-right-1 max-xl:w-24 max-xl:h-24 max-md:top-5">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart width={300} height={100} data={value.dataChart}>
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

export default Item;
