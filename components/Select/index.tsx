import {
    Listbox,
    ListboxButton,
    ListboxOption,
    ListboxOptions,
    Label,
} from "@headlessui/react";
import Icon from "@/components/Icon";
import Tooltip from "@/components/Tooltip";
import { SelectOption } from "@/types/select";

type SelectProps = {
    className?: string;
    classButton?: string;
    label?: string;
    tooltip?: string;
    value: SelectOption | null;
    onChange: (value: SelectOption) => void;
    options: SelectOption[];
    isBlack?: boolean;
    placeholder?: string;
};

const Select = ({
    className,
    classButton,
    label,
    tooltip,
    value = null,
    onChange,
    options,
    isBlack,
    placeholder,
}: SelectProps) => {
    return (
        <Listbox
            className={`${className || ""}`}
            value={value}
            onChange={onChange}
            as="div"
        >
            {label && (
                <Label className="flex items-center mb-4">
                    <div className="text-button">{label}</div>
                    {tooltip && (
                        <Tooltip className="ml-1.5" content={tooltip} />
                    )}
                </Label>
            )}
            <ListboxButton
                className={`group flex justify-between items-center w-full h-12 pl-4.5 pr-3 border border-s-stroke2 rounded-3xl text-body-2 text-t-primary fill-t-secondary transition-all data-[hover]:border-s-highlight data-[hover]:text-t-primary data-[open]:text-t-primary data-[open]:rounded-b-none data-[open]:border-s-subtle data-[open]:border-b-transparent ${
                    isBlack
                        ? "bg-linear-to-b border-transparent from-[#2C2C2C] to-[#282828] !text-t-light !fill-t-light dark:from-shade-10 dark:to-[#DEDEDE]"
                        : ""
                } ${classButton || ""}`}
            >
                {value?.name ? (
                    <div className="truncate">{value.name}</div>
                ) : (
                    <div className="truncate text-t-secondary/50">
                        {placeholder}
                    </div>
                )}
                <Icon
                    className="shrink-0 ml-2 fill-inherit transition-transform group-[[data-open]]:rotate-180"
                    name="chevron"
                />
            </ListboxButton>
            <ListboxOptions
                className={`z-100 [--anchor-gap:-2px] w-[var(--button-width)] px-2.25 pb-2.25 bg-b-surface2 border border-t-0 border-s-subtle shadow-depth rounded-b-[1.25rem] origin-top transition duration-200 ease-out outline-none data-[closed]:scale-95 data-[closed]:opacity-0 dark:shadow-[0px_2.15px_0.5px_-2px_rgba(0,0,0,0.25),0px_5px_1.5px_-4px_rgba(8,8,8,0.2),0px_6px_4px_-4px_rgba(8,8,8,0.16),0px_6px_13px_0px_rgba(8,8,8,0.12),0px_24px_24px_-16px_rgba(8,8,8,0.08)] ${
                    isBlack ? "!border-[#2C2C2C] pt-2" : ""
                }`}
                anchor="bottom"
                transition
            >
                {options.map((option) => (
                    <ListboxOption
                        className="relative pl-2.25 py-2 pr-5.5 rounded-lg text-body-2 text-t-secondary cursor-pointer transition-colors after:absolute after:top-1/2 after:right-2.5 after:size-2 after:-translate-y-1/2 after:rounded-full after:bg-t-blue after:opacity-0 after:transition-opacity data-[focus]:text-t-primary data-[selected]:bg-shade-08/50 data-[selected]:text-t-primary data-[selected]:after:opacity-100 dark:data-[selected]:bg-shade-06/10"
                        key={option.id}
                        value={option}
                    >
                        {option.name}
                    </ListboxOption>
                ))}
            </ListboxOptions>
        </Listbox>
    );
};

export default Select;
