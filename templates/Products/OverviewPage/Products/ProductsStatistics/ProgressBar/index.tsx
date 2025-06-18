import { NumericFormat } from "react-number-format";

type ProgressBarProps = {
    percentage: number;
    data: {
        title: string;
        value: number;
    }[];
};

const ProgressBar = ({ data, percentage }: ProgressBarProps) => {
    const totalData = data.reduce((sum, item) => sum + item.value, 0);

    const percentages = data.map((item) => ({
        ...item,
        percentage: (item.value / totalData) * 100,
    }));

    return (
        <div className="flex gap-0.5" style={{ width: `${percentage}%` }}>
            {percentages.map((item, index) => (
                <div
                    className={`group/tooltip relative h-3 cursor-pointer ${
                        data.length === 3
                            ? index === 0
                                ? "bg-shade-07/40"
                                : index === 1
                                ? "gradient-repeat-lines"
                                : "border-1 border-s-stroke2 bg-linear-to-r from-shade-08 to-shade-09 dark:from-shade-08/5 dark:to-shade-09/5"
                            : index === 0
                            ? "bg-shade-07/40"
                            : "bg-shade-08 dark:bg-shade-07/60"
                    }`}
                    style={{ width: `${item.percentage.toFixed(0)}%` }}
                    key={item.title}
                >
                    <div
                        className={`absolute inset-0 opacity-0 transition-opacity group-hover/tooltip:opacity-100 ${
                            data.length === 3
                                ? index === 0
                                    ? "bg-chart-green"
                                    : index === 1
                                    ? "gradient-repeat-lines-green"
                                    : "!-inset-0.25 bg-chart-green"
                                : index === 0
                                ? "bg-chart-green"
                                : "bg-chart-green"
                        }`}
                    ></div>
                    <div className="chart-tooltip-up absolute bottom-[calc(100%+0.5rem)] left-1/2 -translate-x-1/2 invisible opacity-0 text-caption transition-all group-hover/tooltip:visible group-hover/tooltip:opacity-100">
                        <div className="mb-0.5 whitespace-nowrap opacity-80">
                            {item.title}
                        </div>
                        <div className="">
                            <NumericFormat
                                value={item.value}
                                thousandSeparator=","
                                displayType="text"
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProgressBar;
