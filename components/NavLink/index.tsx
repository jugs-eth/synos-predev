import { useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "@/components/Icon";

type NavLinkProps = {
    value: {
        href: string;
        title: string;
        icon?: string;
        counter?: number;
    };
    onClick?: () => void;
};

const NavLink = ({ value, onClick }: NavLinkProps) => {
    const pathname = usePathname();

    const isActive = useMemo(() => {
        if (pathname === value.href) return true;

        switch (value.title) {
            case "Customer list":
                return pathname.includes("/customers/customer-list/");
            case "Shop":
                return pathname.includes("/shop/");
            case "Refunds":
                return pathname.includes("/income/refunds/");
            default:
                return false;
        }
    }, [pathname, value.href, value.title]);

    return (
        <Link
            className={`group relative flex items-center shrink-0 gap-3 h-12 px-3 text-button transition-colors hover:text-t-primary ${
                value.icon ? "h-12" : "h-11"
            } ${isActive ? "text-t-primary" : "text-t-secondary"}`}
            href={value.href}
            key={value.title}
            onClick={onClick}
        >
            {isActive && (
                <div className="absolute inset-0 gradient-menu rounded-xl shadow-depth-menu">
                    <div className="absolute inset-0.25 bg-b-pop rounded-[0.6875rem]"></div>
                </div>
            )}
            {value.icon && (
                <Icon
                    className={`relative z-2 transition-colors group-hover:fill-t-primary ${
                        isActive ? "fill-t-primary" : "fill-t-secondary"
                    }`}
                    name={value.icon}
                />
            )}
            <div className="relative z-2 mr-3">{value.title}</div>
            {value.counter && (
                <div
                    className={`relative z-2 flex justify-center items-center w-6 h-6 ml-auto rounded-lg bg-secondary-01 text-button text-shade-01 ${
                        value.title === "Scheduled" ? "bg-secondary-04" : ""
                    }`}
                >
                    {value.counter}
                </div>
            )}
        </Link>
    );
};

export default NavLink;
