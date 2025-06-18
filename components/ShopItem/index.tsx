import { useState } from "react";
import { NumericFormat } from "react-number-format";
import Image from "@/components/Image";
import Icon from "@/components/Icon";
import Button from "@/components/Button";

type ShopItemProps = {
    className?: string;
    value: {
        id: number;
        name: string;
        price: number;
        image: string;
        rating: number;
        category: string;
    };
};

const ShopItem = ({ className, value }: ShopItemProps) => {
    const [visible, setVisible] = useState(false);

    return (
        <div
            className={`group flex flex-col gap-2 p-2 pb-6 bg-b-surface2 rounded-4xl max-3xl:pb-2 transition-shadow hover:shadow-depth ${
                className || ""
            }`}
            onClick={() => setVisible(!visible)}
        >
            <div className="relative aspect-[1.5]">
                <Image
                    className="w-full rounded-3xl object-cover"
                    src={value.image}
                    fill
                    alt=""
                    sizes="(max-width: 767px) 100vw, (max-width: 1200px) 50vw, 33.333vw"
                />
                <div
                    className={`absolute top-1/2 left-1/2 flex gap-4 -translate-1/2 invisible opacity-0 transition-all group-hover:visible group-hover:opacity-100 ${
                        visible ? "max-lg:visible max-lg:opacity-100" : ""
                    }`}
                >
                    <Button
                        className="-rotate-45"
                        as="link"
                        href="/shop/details"
                        icon="arrow"
                        isWhite
                        isCircle
                    />
                    <Button icon="bag" isWhite isCircle />
                </div>
            </div>
            <div className="p-4 max-xl:p-3">
                <div className="flex items-center mb-2 text-sub-title-1">
                    <div className="truncate mr-auto">{value.name}</div>
                    <div className="shrink-0 ml-3">${value.price}</div>
                </div>
                <div className="flex gap-4 text-caption text-t-tertiary/80">
                    <div className="flex items-center gap-2">
                        <Icon
                            className="!size-4 fill-t-secondary"
                            name="star-stroke"
                        />
                        <NumericFormat
                            value={value.rating}
                            decimalScale={1}
                            fixedDecimalScale
                            displayType="text"
                        />
                    </div>
                    <div className="flex items-center gap-2 h-6.5">
                        <Icon
                            className="!size-4 fill-t-secondary"
                            name="laptop"
                        />
                        <div className="">{value.category}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopItem;
