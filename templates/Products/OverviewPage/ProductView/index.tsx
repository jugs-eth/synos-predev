import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import { NumericFormat } from "react-number-format";
import Card from "@/components/Card";

import { productsProductViewChartData } from "@/mocks/charts";

const ProductView = ({}) => {
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

    return (
        <Card className="col-right" classHead="!pl-3" title="Product view">
            <div className="pb-3">
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
        </Card>
    );
};

export default ProductView;
