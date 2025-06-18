import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import Icon from "@/components/Icon";

type DropdownProps = {
    className?: string;
    items: {
        id: number;
        name: string;
    }[];
    value: {
        id: number;
        name: string;
    };
    setValue: (value: { id: number; name: string }) => void;
};

const Dropdown = ({ className, items, value, setValue }: DropdownProps) => {
    return (
        <Menu className={`group ${className || ""}`} as="div">
            <MenuButton className="fill-t-secondary transition-colors data-[active]:fill-t-primary">
                <Icon className="fill-t-inherit" name="dots" />
            </MenuButton>
            <MenuItems
                className="z-20 min-w-45 p-2.5 rounded-[1.25rem] bg-b-surface2 border border-s-subtle outline-none shadow-dropdown [--anchor-gap:0.625rem] [--anchor-offset:0.25rem] origin-top transition duration-300 ease-out data-[closed]:scale-95 data-[closed]:opacity-0"
                anchor="bottom end"
                transition
            >
                {items.map((item, index) => (
                    <MenuItem
                        className={`flex items-center min-h-9 px-2.5 rounded-lg nowrap text-body-2 transition-colors ${
                            value.id === item.id
                                ? "bg-b-highlight text-t-primary"
                                : "text-t-secondary"
                        }`}
                        key={index}
                        onClick={() => setValue(item)}
                        as="div"
                    >
                        {item.name}
                    </MenuItem>
                ))}
            </MenuItems>
        </Menu>
    );
};

export default Dropdown;
