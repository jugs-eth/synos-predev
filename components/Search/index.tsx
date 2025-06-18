import Icon from "@/components/Icon";

type SearchProps = {
    className?: string;
    classInput?: string;
    classButton?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    isGray?: boolean;
    onClear?: () => void;
};

const Search = ({
    className,
    classInput,
    classButton,
    value,
    onChange,
    placeholder,
    isGray,
    onClear,
}: SearchProps) => {
    const handleClear = () => {
        const event = {
            target: {
                value: "",
                name: "search",
            } as HTMLInputElement,
        } as React.ChangeEvent<HTMLInputElement>;

        onChange(event);
        onClear?.();
    };

    return (
        <div className={`relative ${className || ""}`}>
            <button className="group absolute top-3 left-3 text-0">
                <Icon
                    className="fill-t-secondary transition-colors group-hover:fill-t-primary"
                    name="search"
                />
            </button>
            <input
                className={`w-full h-12 pl-10.5 border rounded-3xl text-body-2 text-t-primary placeholder:text-t-secondary outline-none ${
                    value !== "" ? "pr-10.5" : "pr-2.5"
                } ${
                    isGray
                        ? "bg-b-surface1 border-transparent transition-all focus:bg-transparent focus:shadow-input-typing focus:border-s-stroke2 dark:border-s-subtle"
                        : "bg-b-surface2 border-transparent"
                } ${classInput || ""}`}
                type="text"
                name="search"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                autoComplete="off"
                required
            />
            <button
                className={`group absolute top-3 right-3 text-0 transition-all ${
                    value !== "" ? "visible opacity-100" : "invisible opacity-0"
                } ${classButton || ""}`}
                onClick={handleClear}
            >
                <Icon
                    className="fill-t-secondary transition-colors group-hover:fill-t-primary"
                    name="close"
                />
            </button>
        </div>
    );
};

export default Search;
