import { useState } from "react";
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import Modal from "@/components/Modal";
import Image from "@/components/Image";

import { messages } from "@/mocks/messages";

const Messages = ({}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Button isWhite isCircle onClick={() => setIsOpen(true)}>
                <Icon name="chat-think" />
            </Button>
            <Modal open={isOpen} onClose={() => setIsOpen(false)} isSlidePanel>
                <div className="flex items-center h-20 pl-10 pr-20 pt-5 pb-3 text-h5 max-md:h-18 max-md:pt-3 max-md:pl-9">
                    Messages
                </div>
                <div className="flex flex-col gap-1 h-[calc(100svh-5rem)] px-5 pb-5 overflow-y-auto max-md:h-[calc(100svh-4.5rem)] max-md:px-6">
                    {messages.map((message) => (
                        <div
                            className="group relative flex items-center px-5 py-3 max-md:px-3"
                            key={message.id}
                        >
                            <div className="absolute inset-0 gradient-card rounded-[16px] invisible opacity-0 transition-all group-hover:visible group-hover:opacity-100">
                                <div className="absolute inset-[1.5px] bg-b-highlight rounded-[14.5px]"></div>
                            </div>
                            <div className="relative z-2 shrink-0 w-12 h-12 rounded-full overflow-hidden">
                                <Image
                                    className="size-12 opacity-100"
                                    src={message.avatar}
                                    width={48}
                                    height={48}
                                    alt=""
                                />
                            </div>
                            <div className="relative z-2 w-[calc(100%-3rem)] pl-5 max-md:pl-4">
                                <div className="flex items-center">
                                    <div className="text-sub-title-1">
                                        @{message.login}
                                    </div>
                                    <div className="ml-auto text-caption text-t-tertiary">
                                        {message.time}
                                    </div>
                                    <div
                                        className={`w-3 h-3 ml-3 rounded-full ${
                                            message.new
                                                ? "bg-primary-02"
                                                : "bg-t-tertiary/50"
                                        }`}
                                    ></div>
                                </div>
                                <div className="mt-1 truncate text-body-2 text-t-secondary">
                                    {message.content}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <Button
                    className="!absolute left-1/2 bottom-5 z-3 -translate-x-1/2"
                    isBlack
                    as="link"
                    href="/messages"
                >
                    View all messages
                </Button>
            </Modal>
        </>
    );
};

export default Messages;
