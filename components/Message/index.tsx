import TextareaAutosize from "react-textarea-autosize";
import Emoji from "@/components/Emoji";
import Button from "@/components/Button";
import Icon from "@/components/Icon";

type MessageProps = {
    className?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    placeholder?: string;
    autoFocus?: boolean;
};

const Message = ({
    className,
    value,
    onChange,
    placeholder,
    autoFocus,
}: MessageProps) => {
    return (
        <div
            className={`relative flex items-end min-h-13 p-0.75 border-1 border-s-stroke2 bg-b-surface2 rounded-[26px] ${
                className || ""
            }`}
        >
            <Emoji
                classButton="w-11 h-11 fill-t-secondary transition-colors data-[hover]:fill-t-primary data-[active]:fill-t-primary"
                classMenuItems="[--anchor-gap:0.5rem] [--anchor-offset:-0.5rem] w-80 h-44.5"
                onEmojiClick={() => {}}
            />
            <TextareaAutosize
                className="self-center w-full bg-b-surface2 h-[37px] py-2 text-body-2 text-t-primary outline-none resize-none placeholder:text-t-secondary"
                maxRows={5}
                value={value}
                onChange={onChange}
                placeholder={placeholder || "Write a message"}
                autoFocus={autoFocus}
            />
            <Button
                className="shrink-0 !h-11 ml-3 max-md:w-11 max-md:ml-2 max-md:px-0 max-md:text-0"
                isBlack
            >
                Send
                <Icon className="!hidden max-md:!inline-block" name="send" />
            </Button>
        </div>
    );
};

export default Message;
