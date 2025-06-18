import Link from "next/link";
import { NumericFormat } from "react-number-format";
import Image from "@/components/Image";

type ProductProps = {
    value: {
        id: number;
        title: string;
        image: string;
        price: number;
        active: boolean;
    };
};

const Product = ({ value }: ProductProps) => (
    <Link
        className="group relative flex items-center p-3 cursor-pointer"
        href="/shop/details"
    >
        <div className="box-hover"></div>
        <div className="relative z-2 shrink-0">
            <Image
                className="size-16 rounded-xl opacity-100"
                src={value.image}
                width={64}
                height={64}
                alt=""
            />
        </div>
        <div className="relative z-2 grow max-w-56.5 px-5 line-clamp-2 text-sub-title-1 max-2xl:px-3 max-lg:pl-5">
            {value.title}
        </div>
        <div className="relative z-2 flex flex-col items-end shrink-0 ml-auto text-right">
            <NumericFormat
                className="mb-1 text-sub-title-1"
                value={value.price}
                thousandSeparator=","
                decimalScale={2}
                fixedDecimalScale
                displayType="text"
                prefix="$"
            />
            <div
                className={`inline-flex items-center h-6 px-1.5 rounded-lg border text-caption leading-none capitalize ${
                    value.active ? "label-green" : "label-red"
                }`}
            >
                {value.active ? "Active" : "Offline"}
            </div>
        </div>
    </Link>
);

export default Product;
