import Image from "@/components/Image";

import { chat } from "@/mocks/messages";

const Chat = ({}) => (
    <div className="flex flex-col gap-6 grow py-6 overflow-auto max-md:gap-0 max-md:h-[calc(100svh-15.5rem)] max-md:py-0">
        {chat.map((item) => (
            <div className="flex p-4" key={item.id}>
                <div className="shrink-0">
                    <Image
                        className="size-12 rounded-full opacity-100 object-cover"
                        src={item.avatar}
                        width={48}
                        height={48}
                        alt=""
                    />
                </div>
                <div className="grow pl-5">
                    <div className="flex items-center flex-wrap">
                        <div className="text-sub-title-1">{item.name}</div>
                        <div className="ml-3 text-t-secondary/80 max-md:hidden">
                            @{item.login}
                        </div>
                        <div className="shrink-0 size-0.5 rounded-full bg-t-tertiary/50 mx-3"></div>
                        <div className="text-t-secondary/80">{item.time}</div>
                    </div>
                    <div className="mt-2 [&_p]:mb-6 [&_p]:last:mb-0 [&_a]:underline [&_a]:hover:no-underline">
                        {item.content}
                    </div>
                </div>
            </div>
        ))}
    </div>
);

export default Chat;
