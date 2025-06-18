import { useState } from "react";
import Image from "@/components/Image";
import Button from "@/components/Button";

type CreatorProps = {
    value: {
        id: number;
        login: string;
        details: string;
        avatar: string;
        isOnline: boolean;
        label: string;
        tags: string[];
        time: string;
        shop: {
            id: number;
            image: string;
        }[];
        socials: {
            icon: string;
            href: string;
        }[];
    };
};

const Creator = ({ value }: CreatorProps) => {
    const [visible, setVisible] = useState(false);
    const [activeId, setActiveId] = useState<number | null>(null);
    console.log(activeId);

    return (
        <div
            className="group p-8 bg-b-surface2 rounded-4xl transition-shadow hover:shadow-depth max-md:px-4 max-md:py-6"
            onClick={() => setVisible(true)}
        >
            <div className="flex items-center relative">
                <div className="relative z-2 shrink-0">
                    <Image
                        className="size-16 opacity-100 rounded-full overflow-hidden"
                        src={value.avatar}
                        width={64}
                        height={64}
                        alt="Avatar"
                        quality={100}
                    />
                    {value.isOnline && (
                        <div className="absolute right-0 bottom-0 w-4.5 h-4.5 bg-primary-02 border-3 border-b-surface2 rounded-full"></div>
                    )}
                </div>
                <div className="grow pl-4 pr-82 max-lg:pr-34 max-md:pr-0">
                    <div className="max-md:flex max-md:flex-wrap max-md:items-center max-md:gap-3 max-md:mb-2">
                        <div className="text-h6 max-md:text-sub-title-1">
                            @{value.login}
                        </div>
                        <div className="label label-green absolute top-0 right-0 transition-all group-hover:invisible group-hover:opacity-0 max-md:static">
                            Top #1 creator
                        </div>
                    </div>
                    <div className="text-t-secondary max-lg:text-body-2 max-md:text-caption">
                        {value.details}
                    </div>
                </div>
                <div
                    className={`absolute top-0 right-0 flex gap-3 invisible opacity-0 transition-all group-hover:visible group-hover:opacity-100 max-md:hidden ${
                        visible ? "max-lg:visible max-lg:opacity-100" : ""
                    }`}
                >
                    <div className="flex gap-3 max-lg:hidden">
                        {value.socials.map((social, index) => (
                            <Button
                                icon={social.icon}
                                key={index}
                                isStroke
                                isCircle
                                as="a"
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                            />
                        ))}
                    </div>
                    <Button as="link" href="/shop" isBlack>
                        View shop
                    </Button>
                </div>
            </div>
            <div className="flex gap-4 mt-8 max-md:gap-3 max-md:mt-5 max-md:-mx-4 max-md:overflow-x-auto max-md:scrollbar-none max-md:before:shrink-0 max-md:before:w-1 max-md:after:shrink-0 max-md:after:w-1">
                {value.shop.map((item) => (
                    <div
                        className="group/image relative flex-1 max-md:flex-auto max-md:shrink-0 max-md:w-45"
                        key={item.id}
                        onClick={() => setActiveId(item.id)}
                    >
                        <Image
                            className="w-full h-auto rounded-2xl"
                            src={item.image}
                            width={342}
                            height={242}
                            alt=""
                        />
                        <Button
                            className={`absolute top-1/2 left-1/2 -translate-1/2 invisible opacity-0 -rotate-45 !transition-all group-hover/image:visible group-hover/image:opacity-100 ${
                                activeId === item.id
                                    ? "max-lg:visible max-lg:opacity-100"
                                    : ""
                            }`}
                            as="link"
                            href="/shop/details"
                            icon="arrow"
                            isWhite
                            isCircle
                        />
                    </div>
                ))}
            </div>
            <div className="mt-8 max-md:hidden">
                <div className="flex items-center">
                    <div className="flex flex-wrap gap-2 mr-auto">
                        {value.tags.map((tag) => (
                            <div
                                className="flex items-center h-6 px-3 bg-b-surface1 rounded-[6px] text-caption text-t-secondary dark:bg-b-highlight"
                                key={tag}
                            >
                                {tag}
                            </div>
                        ))}
                    </div>
                    <div className="text-caption text-t-secondary">
                        Average response time in {value.time}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Creator;
