import { Checkbox as CheckboxHeadless } from "@headlessui/react";

type CheckboxProps = {
    className?: string;
    classTick?: string;
    label?: string;
    checked: boolean;
    onChange: (value: boolean) => void;
};

const Checkbox = ({
    className,
    classTick,
    label,
    checked,
    onChange,
}: CheckboxProps) => (
    <CheckboxHeadless
        className={`group flex items-center gap-3 cursor-pointer ${
            className || ""
        }`}
        checked={checked}
        onChange={onChange}
    >
        <span
            className={`relative shrink-0 size-6 rounded-[6px] border-2 border-s-stroke2 transition-colors before:absolute before:top-0.5 before:left-0.5 before:w-4 before:h-4 before:rounded-[2px] before:bg-primary-01 before:opacity-0 before:transition-opacity group-data-[hover]:border-primary-01/30 group-data-[checked]:border-primary-01/30 group-data-[checked]:before:opacity-100 ${
                classTick || ""
            }`}
        ></span>
        {label && <span className="text-button">{label}</span>}
    </CheckboxHeadless>
);

export default Checkbox;
