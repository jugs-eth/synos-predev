import { useState } from "react";
import Checkbox from "@/components/Checkbox";
import Image from "@/components/Image";

type GridProductProps = {
    title: string;
    image: string;
    price: number;
    selectedRows?: boolean;
    onRowSelect: (enabled: boolean) => void;
    children: React.ReactNode;
    actions: React.ReactNode;
};

const GridProduct = ({
    title,
    image,
    price,
    selectedRows,
    onRowSelect,
    children,
    actions,
}: GridProductProps) => {
    const [visible, setVisible] = useState(false);

    return (
        <div
            className="group w-[calc(20%-1.5rem)] mt-6 mx-3 max-4xl:w-[calc(25%-1.5rem)] max-[1539px]:w-[calc(33.333%-1.5rem)] max-lg:w-[calc(50%-1.5rem)] max-md:w-[calc(100%-1.5rem)]"
            onClick={() => setVisible(!visible)}
        >
            <div className="relative h-57.5">
                {onRowSelect && (
                    <Checkbox
                        className={`absolute top-4 left-4 z-5 invisible opacity-0 transition-all group-hover:visible group-hover:opacity-100 max-md:hidden data-[checked]:!visible data-[checked]:!opacity-100 ${
                            visible ? "max-lg:visible max-lg:opacity-100" : ""
                        }`}
                        classTick="bg-b-surface2"
                        checked={selectedRows || false}
                        onChange={onRowSelect}
                    />
                )}
                <Image
                    className="object-cover opacity-100 rounded-3xl"
                    src={image}
                    alt=""
                    fill
                    sizes="(max-width: 767px) 100vw, 280px"
                />
            </div>
            <div className="flex items-start mt-3">
                <div className="grow pt-0.5 text-sub-title-1">{title}</div>
                <div
                    className={`shrink-0 ml-3 label ${
                        price === 0
                            ? "label-gray text-t-primary"
                            : "label-green"
                    }`}
                >
                    ${price}
                </div>
            </div>
            <div className="relative min-h-6 mt-1">
                <div
                    className={`absolute top-0 left-0 transition-all group-hover:invisible group-hover:opacity-0 ${
                        visible ? "max-lg:invisible max-lg:opacity-0" : ""
                    }`}
                >
                    {children}
                </div>
                <div
                    className={`flex flex-wrap gap-2 mt-0.5 -ml-1 invisible opacity-0 transition-all group-hover:visible group-hover:opacity-100 ${
                        visible ? "max-lg:visible max-lg:opacity-100" : ""
                    }`}
                >
                    {actions}
                </div>
            </div>
        </div>
    );
};

export default GridProduct;
