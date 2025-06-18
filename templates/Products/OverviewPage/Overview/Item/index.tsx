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
    <div className="flex-1 pr-6 border-r border-shade-07/10 last:border-r-0 max-4xl:nth-3:hidden max-2xl:last:pr-0 max-lg:flex-auto max-lg:shrink-0 max-lg:w-66">
        <div className="flex items-center justify-center size-16 mb-10 rounded-full bg-b-surface1">
            <Icon
                className={`fill-t-primary ${
                    value.title === "Payout" ? "-rotate-45" : ""
                }`}
                name={value.icon}
            />
        </div>
        <div className="flex max-2xl:relative">
            <div className="grow">
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
                    <div className="text-body-2 text-t-tertiary text-nowrap">
                        vs last year
                    </div>
                </div>
            </div>
            <div className="w-full max-w-34 h-32 ml-4 max-2xl:absolute max-2xl:right-0 max-2xl:bottom-9 max-2xl:max-w-full max-2xl:w-20 max-2xl:h-18 max-lg:w-16">
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
