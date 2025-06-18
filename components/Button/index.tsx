import Link from "next/link";
import Icon from "@/components/Icon";

type Props = {
    className?: string;
    icon?: string;
    children?: React.ReactNode;
    isWhite?: boolean;
    isBlack?: boolean;
    isGray?: boolean;
    isCircle?: boolean;
    isStroke?: boolean;
};

type ButtonProps = Props &
    (
        | (React.ButtonHTMLAttributes<HTMLButtonElement> & { as?: "button" })
        | (React.AnchorHTMLAttributes<HTMLAnchorElement> & { as: "a" })
        | ({ as: "link"; href: string } & Omit<
              React.AnchorHTMLAttributes<HTMLAnchorElement>,
              "href"
          >)
    );

const Button: React.FC<ButtonProps> = ({
    className,
    icon,
    children,
    isWhite,
    isBlack,
    isGray,
    isCircle,
    isStroke,
    as = "button",
    ...props
}) => {
    const classes = `inline-flex items-center justify-center h-12 border rounded-3xl text-button transition-all cursor-pointer disabled:pointer-events-none ${
        isWhite
            ? "bg-b-surface2 px-7 border-0 text-t-secondary fill-t-secondary hover:text-t-primary hover:fill-t-primary dark:bg-linear-to-b dark:from-[#2A2A2A] dark:to-[#202020]"
            : ""
    } ${
        isBlack
            ? "relative px-7 bg-linear-to-b from-[#2C2C2C] to-[#282828] shadow-[inset_2px_0px_8px_2px_rgba(248,248,248,0.20)] border-0 text-t-light fill-t-light !transition-all after:absolute after:inset-0 after:border-[1.5px] after:border-white/20 after:rounded-3xl after:[mask-image:linear-gradient(to_top,transparent_0,black_100%)] hover:shadow-none dark:from-shade-10 dark:to-[#DEDEDE] dark:after:border-white/50 dark:after:shadow-[inset_2px_0px_8px_2px_rgba(24,24,24,0.25)] dark:after:transition-all dark:hover:text-shade-03 dark:hover:fill-shade-01 dark:hover:after:opacity-0"
            : ""
    } ${
        isGray
            ? "relative bg-b-surface1 border-transparent text-t-secondary fill-t-secondary hover:text-t-primary hover:fill-t-primary hover:shadow-depth dark:bg-shade-04"
            : ""
    } ${
        isCircle
            ? "w-12 !px-0 rounded-full after:rounded-full hover:shadow-depth"
            : "px-6.5"
    } ${
        isStroke
            ? "border-s-stroke2 fill-t-secondary text-t-secondary hover:border-s-highlight hover:text-t-primary hover:fill-t-primary disabled:border-transparent"
            : ""
    } ${className || ""}`;

    if (as === "a") {
        return (
            <a
                className={classes}
                {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
            >
                {icon && <Icon className="fill-inherit" name={icon} />}
                {children}
            </a>
        );
    }

    if (as === "link") {
        return (
            <Link href={(props as { href: string }).href} className={classes}>
                {icon && <Icon className="fill-inherit" name={icon} />}
                {children}
            </Link>
        );
    }

    return (
        <button
            className={classes}
            {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
        >
            {icon && <Icon className="fill-inherit" name={icon} />}
            {children}
        </button>
    );
};

export default Button;
