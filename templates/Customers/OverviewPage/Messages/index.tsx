import Card from "@/components/Card";
import Image from "@/components/Image";
import Button from "@/components/Button";

import { messagesCustomers } from "@/mocks/messages";

const Messages = ({}) => {
    return (
        <Card classHead="!pl-3" title="Messages">
            <div className="flex flex-col gap-1">
                {messagesCustomers.map((message) => (
                    <div
                        className="group relative flex items-start px-3 py-5 transition-all cursor-pointer"
                        key={message.id}
                    >
                        <div className="box-hover"></div>
                        <div className="relative z-2 shrink-0">
                            <Image
                                className="size-11 rounded-full opacity-100"
                                src={message.avatar}
                                width={44}
                                height={44}
                                alt=""
                            />
                        </div>
                        <div className="relative z-2 grow pl-5">
                            <div className="mb-1 text-sub-title-1">
                                {message.name}
                                &nbsp;
                                <span className="text-t-secondary">
                                    @{message.login}
                                </span>
                            </div>
                            <div className="mb-3 text-caption text-t-tertiary">
                                {message.date}
                            </div>
                            <div className="text-body-2">{message.content}</div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="pt-6 px-3 pb-3">
                <Button className="w-full" href="/messages" as="link" isStroke>
                    View all message
                </Button>
            </div>
        </Card>
    );
};

export default Messages;
