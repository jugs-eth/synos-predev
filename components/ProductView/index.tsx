import { useMemo } from "react";
import {
    BarChart,
    Bar,
    XAxis,
    Tooltip,
    ResponsiveContainer,
    Cell,
} from "recharts";
import { NumericFormat } from "react-number-format";
import Card from "@/components/Card";

import { productsProductViewChartData } from "@/mocks/charts";

type ProductViewProps = {
    className?: string;
};

const ProductView = ({ className }: ProductViewProps) => {
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
                    <div className="mb-0.5 text-caption text-t-light/80">
                        {label}
                    </div>
                    <div className="text-caption font-bold">
                        <NumericFormat
                            value={payload[0].value}
                            thousandSeparator=","
                            decimalScale={0}
                            fixedDecimalScale
                            displayType="text"
                        />
                    </div>
                </div>
            );
        }
        return null;
    };

    const getMinValues = useMemo(() => {
        const sortedData = [...productsProductViewChartData].sort(
            (a, b) => a.amt - b.amt
        );
        return [sortedData[0].amt, sortedData[1].amt];
    }, []);

    return (
        <Card
            className={`${className || ""}`}
            classHead="!pl-3"
            title="Product views"
        >
            <div className="px-2 pb-3">
                <div className="h-52">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            width={150}
                            height={40}
                            data={productsProductViewChartData}
                            barCategoryGap={4}
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
                                tickFormatter={(value) => value.slice(0, 2)}
                            />
                            <Tooltip
                                content={
                                    <CustomTooltip payload={[]} label="" />
                                }
                                cursor={false}
                            />
                            <Bar
                                dataKey="amt"
                                activeBar={{
                                    fill: "var(--chart-green)",
                                    fillOpacity: 1,
                                }}
                                radius={8}
                            >
                                {productsProductViewChartData.map(
                                    (entry, index) => (
                                        <Cell
                                            key={`cell-${index}`}
                                            fill={
                                                getMinValues.includes(entry.amt)
                                                    ? "var(--chart-min)"
                                                    : "var(--shade-07)"
                                            }
                                            fillOpacity={
                                                getMinValues.includes(entry.amt)
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
        </Card>
    );
};

export default ProductView;
