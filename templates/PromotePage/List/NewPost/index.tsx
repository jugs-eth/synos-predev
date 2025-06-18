import { useRef, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import Button from "@/components/Button";
import Modal from "@/components/Modal";
import Image from "@/components/Image";
import Icon from "@/components/Icon";
import Emoji from "@/components/Emoji";
import SchedulePost from "../SchedulePost";

const NewPost = ({}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState("");

    const [preview, setPreview] = useState<string | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const objectUrl = URL.createObjectURL(file);
            setPreview(objectUrl);
        }
    };

    return (
        <>
            <Button
                className="max-md:w-12 max-md:px-0 max-md:text-0"
                isBlack
                onClick={() => setIsOpen(true)}
            >
                New post
                <Icon className="!hidden max-md:!block" name="plus" />
            </Button>
            <Modal
                classWrapper="flex flex-col min-h-100 !p-8 max-md:!p-6"
                open={isOpen}
                onClose={() => setIsOpen(false)}
            >
                <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                        <Image
                            className="size-12 opacity-100"
                            src="/images/avatar.png"
                            width={48}
                            height={48}
                            alt="Avatar"
                        />
                    </div>
                    <div className="grow pl-4">
                        <div className="text-sub-title-1">Chelsie Haley</div>
                        <div className="text-body-2 text-t-secondary">
                            @chelsiehale
                        </div>
                    </div>
                </div>
                <TextareaAutosize
                    className="w-full min-h-22 h-22 mt-6 text-[1.125rem] font-medium tracking-[-0.01em] text-t-primary/80 outline-none resize-none placeholder:text-t-secondary/80"
                    maxRows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="What you would like to share?"
                    autoFocus
                />
                {preview && (
                    <div className="mt-6">
                        <Image
                            className="w-full h-auto object-cover rounded-3xl"
                            src={preview}
                            width={522}
                            height={250}
                            alt="Preview"
                            unoptimized
                        />
                    </div>
                )}
                <div className="flex items-center mt-auto pt-8 max-md:flex-wrap max-md:gap-3">
                    <div className="flex items-center gap-4 mr-auto max-md:w-full">
                        <div className="relative flex justify-center items-center w-12 h-12 rounded-full overflow-hidden hover:bg-shade-07/10">
                            <input
                                ref={inputRef}
                                type="file"
                                className="absolute inset-0 opacity-0 cursor-pointer z-10"
                                onChange={handleChange}
                                accept="image/*"
                            />
                            <Icon
                                className="fill-t-secondary"
                                name="camera-stroke"
                            />
                        </div>
                        <button className="flex justify-center items-center w-12 h-12 rounded-full transition-colors hover:bg-shade-07/10">
                            <Icon
                                className="fill-t-secondary"
                                name="camera-video"
                            />
                        </button>
                        <Emoji
                            classButton="w-12 h-12 rounded-full fill-t-secondary transition-colors hover:bg-shade-07/10 data-[active]:bg-shade-07/10"
                            classMenuItems="[--anchor-gap:0.5rem] [--anchor-offset:-0.25rem] w-80 h-44.5"
                            onEmojiClick={() => {}}
                        />
                    </div>
                    <SchedulePost title="Schedule" />
                    <Button className="ml-2 max-md:flex-1 max-md:ml-0" isBlack>
                        Post
                    </Button>
                </div>
            </Modal>
        </>
    );
};

export default NewPost;
