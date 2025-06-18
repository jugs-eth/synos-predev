import { NumericFormat } from "react-number-format";
import Image from "@/components/Image";

type CountryItemProps = {
    value: {
        id: number;
        name: string;
        flag: string;
        price?: number;
        percentage: number;
    };
};

const CountryItem = ({ value }: CountryItemProps) => (
    <div className="flex items-center">
        <div className="shrink-0">
            <Image
                className="size-10 opacity-100"
                src={value.flag}
                width={40}
                height={40}
                alt={value.name}
            />
        </div>
        <div className="grow pl-4">
            <div className="flex justify-between mb-2 text-sub-title-1">
                <div>{value.name}</div>
                {value.price ? (
                    <NumericFormat
                        value={value.price}
                        thousandSeparator=","
                        decimalScale={2}
                        fixedDecimalScale
                        displayType="text"
                        prefix="$"
                    />
                ) : (
                    <div>{value.percentage}%</div>
                )}
            </div>
            <div className="relative h-3 rounded-[2px] bg-shade-09 dark:bg-shade-04">
                <div
                    className="absolute top-0 left-0 bottom-0 rounded-[2px] bg-linear-to-r from-[#E1E1E1] to-shade-07 opacity-30"
                    style={{ width: `${value.percentage}%` }}
                ></div>
            </div>
        </div>
    </div>
);

export default CountryItem;
