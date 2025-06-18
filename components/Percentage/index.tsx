import Icon from "@/components/Icon";

type PercentageProps = {
    className?: string;
    value: number;
    large?: boolean;
};

const Percentage = ({ className, value, large }: PercentageProps) => (
    <div
        className={`inline-flex items-center gap-1 px-1.5 rounded-lg ${
            value > 0 ? "label-green" : "label-red"
        } ${
            large
                ? "h-9 text-body-1 max-md:h-7 max-md:text-button"
                : "h-7 text-button"
        } ${className || ""}`}
    >
        <Icon
            className={`!size-4 ${
                value > 0 ? "fill-primary-02 rotate-180" : "fill-[#FF6A55]"
            }`}
            name="arrow-percent"
        />
        {value > 0 ? `${value}` : `${Math.abs(value)}`}%
    </div>
);

export default Percentage;
