import { Switch as HeadlessSwitch } from "@headlessui/react";

type SwitchProps = {
    className?: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
};

const Switch = ({ className, checked, onChange }: SwitchProps) => (
    <HeadlessSwitch
        className={`group inline-flex w-11 h-6 items-center rounded-full bg-b-surface1 shadow-[0_0_0_1.5px_inset] shadow-s-stroke2 transition-colors data-[checked]:bg-[#282828] data-[checked]:shadow-[0_1.5px_0_inset] data-[checked]:shadow-white/20 dark:shadow-[inset_0_0_0_1.5px_rgba(248,248,248,0.20),inset_2px_0_8px_2px_rgba(248,248,248,0.20)] dark:data-[checked]:shadow-[inset_2px_0_8px_2px_rgba(248,248,248,0.20)] ${
            className || ""
        }`}
        checked={checked}
        onChange={onChange}
    >
        <span className="size-5 translate-x-0.5 rounded-full bg-[#FCFCFC] shadow-[inset_0px_2px_2px_0px_#FFF,inset_0px_-1px_1px_0px_rgba(0,0,0,0.10),0px_2px_4px_0px_rgba(0,0,0,0.20)] transition group-data-[checked]:translate-x-5.5" />
    </HeadlessSwitch>
);

export default Switch;
