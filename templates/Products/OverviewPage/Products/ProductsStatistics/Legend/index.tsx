type LegendProps = {
    className?: string;
    data: {
        title: string;
        value: number;
    }[];
};

const Legend = ({ className, data }: LegendProps) => {
    return (
        <div className={`flex gap-6 ml-auto ${className || ""}`}>
            {data.map((item, index) => (
                <div
                    className="flex items-center gap-1.5 text-caption text-t-primary/80"
                    key={index}
                >
                    <div
                        className={`w-3.5 h-3.5 rounded ${
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
                        key={item.title}
                    ></div>
                    <div className="">{item.title}</div>
                </div>
            ))}
        </div>
    );
};

export default Legend;
