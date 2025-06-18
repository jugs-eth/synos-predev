import Icon from "@/components/Icon";
import { TabsOption } from "@/types/tabs";

type TabsProps = {
    className?: string;
    classButton?: string;
    items: TabsOption[];
    value: TabsOption;
    setValue: (value: TabsOption) => void;
    isOnlyIcon?: boolean;
};

const Tabs = ({
    className,
    classButton,
    items,
    value,
    setValue,
    isOnlyIcon,
}: TabsProps) => {
    return (
        <div
            className={`flex ${isOnlyIcon ? "gap-2" : "gap-1"} ${
                className || ""
            }`}
        >
            {items.map((item) => (
                <button
                    className={`flex justify-center items-center h-12 rounded-full border text-button transition-colors hover:text-t-primary hover:fill-t-primary ${
                        isOnlyIcon ? "w-12" : "px-5.5"
                    } ${
                        item.id === value.id
                            ? "border-s-stroke2 text-t-primary fill-t-primary"
                            : "border-transparent text-t-secondary fill-t-secondary"
                    } ${classButton || ""}`}
                    key={item.id}
                    onClick={() => setValue(item)}
                >
                    {isOnlyIcon ? (
                        <Icon className="fill-inherit" name={item.name} />
                    ) : (
                        item.name
                    )}
                </button>
            ))}
        </div>
    );
};

export default Tabs;
