import { Menu, MenuButton, MenuItems } from "@headlessui/react";
import { useTheme } from "next-themes";
import EmojiPicker, {
    EmojiClickData,
    Theme,
    Categories,
} from "emoji-picker-react";
import Icon from "@/components/Icon";

type EmojiType = {
    classButton?: string;
    classMenuItems?: string;
    onEmojiClick: (emoji: EmojiClickData) => void;
};

const Emoji = ({ classButton, classMenuItems, onEmojiClick }: EmojiType) => {
    const { theme } = useTheme();

    return (
        <Menu className="group shrink-0" as="div">
            <MenuButton className={`text-0 ${classButton || ""}`}>
                <Icon className="fill-inherit" name="emoji" />
            </MenuButton>
            <MenuItems
                className={`z-5 origin-top transition rounded-2xl shadow-dropdown duration-200 ease-out data-[closed]:scale-95 data-[closed]:opacity-0 ${
                    classMenuItems || ""
                }`}
                anchor="bottom start"
                transition
                modal={false}
            >
                <EmojiPicker
                    className="!w-full !h-full !rounded-2xl"
                    onEmojiClick={onEmojiClick}
                    autoFocusSearch={false}
                    searchDisabled={true}
                    skinTonesDisabled={true}
                    previewConfig={{ showPreview: false }}
                    theme={theme === "dark" ? Theme.DARK : Theme.LIGHT}
                    lazyLoadEmojis={true}
                    categories={[
                        {
                            category: Categories.SMILEYS_PEOPLE,
                            name: "People",
                        },
                    ]}
                />
            </MenuItems>
        </Menu>
    );
};

export default Emoji;
