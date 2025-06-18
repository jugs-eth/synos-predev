import { useState, useEffect } from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { NumericFormat } from "react-number-format";
import Card from "@/components/Card";
import Icon from "@/components/Icon";

const COLORS = [
    "rgba(123, 123, 123, 0.3)",
    "rgba(123, 123, 123, 0.2)",
    "rgba(123, 123, 123, 0.1)",
];

type CardChartPieType = {
    title: string;
    data: { name: string; value: number; icon?: string }[];
};

const CardChartPie = ({ title, data }: CardChartPieType) => {
    const [isMounted, setIsMounted] = useState(false);
    const [activeData, setActiveData] = useState<{
        name: string;
        value: number;
    } | null>(null);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const total = data.reduce((sum, item) => sum + item.value, 0);

    const getPercentage = (value: number) => {
        return (value / total) * 100;
    };

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const CustomTooltip = ({
        payload,
    }: {
        payload: { value: number; name: string }[];
    }) => {
        if (payload && payload.length) {
            return (
                <div className="chart-tooltip">
                    <div className="text-caption opacity-80">
                        {payload[0].name}
                    </div>
                    <NumericFormat
                        className="text-caption"
                        value={payload[0].value}
                        thousandSeparator=","
                        decimalScale={0}
                        fixedDecimalScale
                        displayType="text"
                    />
                </div>
            );
        }
        return null;
    };

    return (
        <Card classHead="!pl-3" title={title}>
            <div className="px-3 py-4 max-md:pt-0 max-md:pb-2">
                <div className="relative flex justify-center items-center h-69 mx-auto max-2xl:-mx-2">
                    {isMounted && (
                        <>
                            <div className="absolute top-1/2 left-1/2 -translate-1/2 text-center">
                                <div className="text-h3">
                                    {activeData && (
                                        <NumericFormat
                                            value={getPercentage(
                                                activeData.value
                                            )}
                                            decimalScale={1}
                                            fixedDecimalScale
                                            displayType="text"
                                            suffix="%"
                                        />
                                    )}
                                </div>
                                <div className="mt-1 text-sub-title-1 text-t-secondary">
                                    {activeData?.name}
                                </div>
                            </div>
                            <PieChart
                                width={276}
                                height={276}
                                className="!size-69"
                            >
                                <Pie
                                    data={data}
                                    cx={133}
                                    cy={133}
                                    innerRadius={102}
                                    outerRadius={136}
                                    fill="#8884d8"
                                    dataKey="value"
                                    paddingAngle={1}
                                    onMouseEnter={(_, index) => {
                                        setActiveData(data[index]);
                                        setActiveIndex(index);
                                    }}
                                    onMouseLeave={() => {
                                        setActiveData(null);
                                        setActiveIndex(null);
                                    }}
                                >
                                    {data.map((entry, index) => (
                                        <Cell
                                            key={`cell-${index}`}
                                            fill={
                                                activeIndex === index
                                                    ? "var(--color-chart-green)"
                                                    : COLORS[
                                                          index % COLORS.length
                                                      ]
                                            }
                                        />
                                    ))}
                                </Pie>
                                <Tooltip
                                    content={<CustomTooltip payload={[]} />}
                                />
                            </PieChart>
                        </>
                    )}
                </div>
                <div className="flex gap-4 mt-8">
                    {data.map((item, index) => (
                        <div className="flex flex-1" key={index}>
                            {item.icon && (
                                <Icon
                                    className="shrink-0 mr-2 fill-t-secondary"
                                    name={item.icon}
                                />
                            )}
                            <div className="">
                                <div className="mb-1 text-caption text-t-tertiary">
                                    {item.name}
                                </div>
                                <div className="text-sub-title-1">
                                    <NumericFormat
                                        value={getPercentage(item.value)}
                                        decimalScale={1}
                                        fixedDecimalScale
                                        displayType="text"
                                        suffix="%"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Card>
    );
};

export default CardChartPie;
