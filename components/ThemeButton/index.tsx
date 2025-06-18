import { useTheme } from "next-themes";
import Icon from "@/components/Icon";

type ThemeButtonProps = {
    className?: string;
};

const ThemeButton = ({ className }: ThemeButtonProps) => {
    const { setTheme, theme } = useTheme();

    return (
        <div
            className={`group flex flex-col gap-1 w-12 p-1.5 bg-b-surface2 rounded-full cursor-pointer transition-all hover:shadow-depth dark:bg-linear-to-b dark:from-[#2A2A2A] dark:to-[#202020] ${
                className || ""
            }`}
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
            {["dark", "light"].map((theme) => (
                <button
                    className="w-9 h-9 rounded-full text-0 fill-t-secondary transition-colors last:bg-b-surface1 last:fill-t-primary dark:first:bg-[#363636] dark:first:fill-t-primary dark:last:bg-transparent dark:last:fill-t-secondary group-hover:!fill-t-primary"
                    key={theme}
                >
                    <Icon
                        className="!size-4 fill-inherit"
                        name={theme === "dark" ? "moon" : "sun"}
                    />
                </button>
            ))}
        </div>
    );
};

export default ThemeButton;
