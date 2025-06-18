import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import AnimateHeight from "react-animate-height";
import Icon from "@/components/Icon";
import NavLink from "@/components/NavLink";

type DropdownProps = {
    value: {
        title: string;
        icon: string;
        href?: string;
        list?: {
            title: string;
            href: string;
            counter?: number;
        }[];
    };
};

const Dropdown = ({ value }: DropdownProps) => {
    const pathname = usePathname();
    const isActive = value.list?.some((item) => pathname.includes(item.href));
    const isActiveNewProduct =
        pathname === "/products/new" && value.title === "Products";
    const [height, setHeight] = useState<number | "auto">(
        isActive ? "auto" : 0
    );

    return (
        <div className="relative">
            {pathname !== "/products/new" && value.title === "Products" && (
                <Link
                    className="hidden absolute top-2.75 right-12 z-2 w-6 h-6 border border-t-secondary justify-center items-center rounded-full max-md:flex"
                    href="/products/new"
                >
                    <Icon className="fill-t-primary !size-4" name="plus" />
                </Link>
            )}
            <button
                className={`group relative flex items-center gap-3 w-full h-12 px-3 text-button transition-colors hover:text-t-primary ${
                    height === 0 ? "text-t-secondary" : "text-t-primary"
                } ${isActiveNewProduct ? "!text-t-primary" : ""}`}
                onClick={() => setHeight(height === 0 ? "auto" : 0)}
            >
                {isActiveNewProduct && (
                    <div className="absolute inset-0 gradient-menu rounded-xl shadow-depth-menu">
                        <div className="absolute inset-0.25 bg-b-pop rounded-[0.6875rem]"></div>
                    </div>
                )}
                <Icon
                    className={`relative z-2 transition-colors group-hover:fill-t-primary ${
                        height === 0 ? "fill-t-secondary" : "fill-t-primary"
                    } ${isActiveNewProduct ? "!fill-t-primary" : ""}`}
                    name={value.icon}
                />
                <div className="relative z-2">{value.title}</div>
                <Icon
                    className={`relative z-2 ml-auto transition-all group-hover:fill-t-primary ${
                        height === 0
                            ? "fill-t-secondary"
                            : "fill-t-primary rotate-180"
                    } ${isActiveNewProduct ? "!text-t-primary" : ""}`}
                    name="chevron"
                />
            </button>
            <AnimateHeight duration={500} height={height}>
                <div className="relative flex flex-col pl-9 before:absolute before:top-0 before:left-[1.4375rem] before:bottom-12 before:w-[1.5px] before:bg-s-stroke2">
                    {value.list?.map((item) => (
                        <div className="relative" key={item.title}>
                            <div className="absolute top-0 -left-[0.8125rem] bottom-[calc(50%-0.75px)] w-[0.8125rem] border-l border-b border-s-stroke2 rounded-bl-[10px]"></div>
                            <NavLink
                                value={item}
                                onClick={() => setHeight("auto")}
                            />
                        </div>
                    ))}
                </div>
            </AnimateHeight>
        </div>
    );
};

export default Dropdown;
