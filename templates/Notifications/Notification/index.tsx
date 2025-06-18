import Link from "next/link";
import Icon from "@/components/Icon";
import Image from "@/components/Image";

type NotificationProps = {
    value: {
        id: number;
        type: string;
        login: string;
        action: string;
        product: string;
        content: string;
        avatar: string;
        time: string;
        new: boolean;
    };
};

const Notification = ({ value }: NotificationProps) => (
    <div className="relative group flex items-start p-6 max-md:p-3 max-md:border-t max-md:border-s-subtle max-md:first:border-t-0">
        <div className="box-hover max-md:hidden"></div>
        <div className="relative z-3 flex justify-center items-center shrink-0 mr-5 mt-3 max-md:absolute max-md:top-10 max-md:left-10 max-md:size-6 max-md:bg-b-surface2 max-md:rounded-full max-md:m-0">
            <Icon
                className={`max-md:!size-4  ${
                    value.new && value.type === "like"
                        ? "!fill-primary-03"
                        : value.new && value.type === "purchase"
                        ? "!fill-primary-02"
                        : value.new && value.type === "reply"
                        ? "!fill-t-secondary"
                        : "fill-t-secondary/50"
                }`}
                name={
                    value.type === "like"
                        ? "heart-fill"
                        : value.type === "reply"
                        ? "reply"
                        : "cart"
                }
            />
        </div>
        <Link
            className="relative z-2 shrink-0 w-12 h-12 mr-5 rounded-full overflow-hidden max-md:mr-4"
            href="/shop"
        >
            <Image
                className="size-12 opacity-100"
                src={value.avatar}
                width={48}
                height={48}
                alt=""
            />
        </Link>
        <div className="relative z-2 grow">
            <div className="text-body-2 text-t-secondary [&_span]:text-button [&_span]:text-t-primary max-md:pr-4">
                <Link href="/shop">
                    <span>@{value.login}</span>
                </Link>
                &nbsp;{value.action}&nbsp;
                <span className="max-md:block max-md:mt-1.5">
                    <Link href="/shop/details">{value.product}</Link>
                    <span className="hidden ml-1 !text-caption !text-t-tertiary font-normal max-md:inline">
                        {value.time}
                    </span>
                </span>
            </div>
            <div className="mt-1 text-body-2 text-t-primary/80 max-md:mt-1.5 max-md:line-clamp-2">
                {value.content}
            </div>
        </div>
        <div className="relative z-2 flex items-center shrink-0 ml-8 max-md:absolute max-md:top-3 max-md:right-3 max-md:ml-0">
            <div className="text-caption text-t-tertiary max-md:hidden">
                {value.time}
            </div>
            <div
                className={`w-3 h-3 ml-3 rounded-full ${
                    value.new ? "bg-primary-02" : "bg-t-secondary/50"
                }`}
            ></div>
        </div>
    </div>
);

export default Notification;
