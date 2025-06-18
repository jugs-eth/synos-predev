import AnimateHeight from "react-animate-height";

type ItemProps = {
    value: {
        id: number;
        title: string;
        content: string;
    };
    isActive: boolean;
    onClick: () => void;
};

const Item = ({ value, isActive, onClick }: ItemProps) => {
    return (
        <div className="py-3 border-b border-s-subtle">
            <div
                className="flex items-center gap-6 py-5 text-h6 cursor-pointer"
                onClick={onClick}
            >
                {value.title}
                <div className="relative shrink-0 w-6 h-6 ml-auto">
                    <div className="absolute top-1/2 left-1/2 -translate-1/2 w-3 h-0.5 rounded-full bg-t-secondary"></div>
                    <div
                        className={`absolute top-1/2 left-1/2 -translate-1/2 w-0.5 h-3 rounded-full bg-t-secondary transition-transform ${
                            isActive ? "rotate-90" : ""
                        }`}
                    ></div>
                </div>
            </div>
            <AnimateHeight duration={500} height={isActive ? "auto" : 0}>
                <div className="pb-5">{value.content}</div>
            </AnimateHeight>
        </div>
    );
};

export default Item;
