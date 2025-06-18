import { useCallback } from "react";
import ReactSlider from "react-slider";
import { NumericFormat } from "react-number-format";
import Tooltip from "@/components/Tooltip";

type RangeProps = {
    label?: string;
    tooltip?: string;
    values: number[];
    setValues: (values: number[]) => void;
    min?: number;
    max?: number;
    step?: number;
    prefix?: string;
};

const Range = ({
    label,
    tooltip,
    values,
    setValues,
    min = 0,
    max = 100,
    step = 1,
    prefix,
}: RangeProps) => {
    const handleChange = useCallback(
        (values: number[]) => {
            setValues(values);
        },
        [setValues]
    );

    return (
        <div className="">
            {label && (
                <div className="flex items-center mb-4">
                    <div className="text-button">{label}</div>
                    {tooltip && (
                        <Tooltip className="ml-1.5" content={tooltip} />
                    )}
                </div>
            )}
            <div>
                <div className="flex justify-between mb-1 text-button">
                    <NumericFormat
                        value={values[0]}
                        thousandSeparator=","
                        decimalScale={2}
                        fixedDecimalScale
                        displayType="text"
                        prefix={prefix}
                    />
                    <NumericFormat
                        value={values[1]}
                        thousandSeparator=","
                        decimalScale={2}
                        fixedDecimalScale
                        displayType="text"
                        prefix={prefix}
                    />
                </div>
                <ReactSlider
                    value={values}
                    onChange={handleChange}
                    min={min}
                    max={max}
                    step={step}
                    className="flex items-center h-8"
                    trackClassName="h-2 rounded-full border border-s-stroke2"
                    thumbClassName="size-8 bg-b-surface2 border border-transparent rounded-full shadow-depth-toggle transition-colors cursor-pointer hover:border-s-highlight focus:border-s-highlight dark:bg-shade-04 dark:border-shade-02/50"
                    renderTrack={(props, state) => {
                        const { key, ...restProps } = props;
                        return (
                            <div
                                key={key}
                                {...restProps}
                                className={`${props.className} ${
                                    state.index === 1
                                        ? "bg-t-primary"
                                        : "bg-transparent"
                                }`}
                            />
                        );
                    }}
                />
            </div>
        </div>
    );
};

export default Range;
