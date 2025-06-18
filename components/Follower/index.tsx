import { useState } from "react";
import Image from "@/components/Image";
import Icon from "@/components/Icon";

type FollowerProps = {
    className?: string;
    value: {
        id: number;
        name: string;
        position: string;
        avatar: string;
        items: number;
        rating: number;
        isFollowed: boolean;
    };
};

const Follower = ({ className, value }: FollowerProps) => {
    const [isFollowed, setIsFollowed] = useState(value.isFollowed);

    return (
        <div
            className={`group flex flex-col bg-b-surface2 rounded-4xl transition-shadow hover:shadow-depth ${
                className || ""
            }`}
        >
            <div className="grow px-4 py-10 text-center max-md:flex max-md:items-center max-md:p-5 max-md:text-left">
                <div className="relative size-22 mx-auto mb-6 max-md:m-0 max-md:size-16">
                    <Image
                        className="size-22 rounded-full opacity-100 max-md:size-16"
                        src={value.avatar}
                        width={88}
                        height={88}
                        alt={value.name}
                    />
                    <button
                        className="absolute right-4.5 -bottom-1.5 size-9.5 rounded-full border-3 border-b-surface2 bg-linear-to-b from-[#2C2C2C] to-[#282828] text-0 opacity-0 invisible transition-all group-hover:opacity-100 group-hover:visible max-md:-right-1 max-md:-bottom-1 max-md:size-7 max-md:border-2 max-lg:opacity-100 max-lg:visible dark:from-[#EAEAEA] dark:to-[#B4B4B4]"
                        onClick={() => setIsFollowed(!isFollowed)}
                    >
                        <Icon
                            className={` fill-t-light transition-opacity max-md:size-4 ${
                                isFollowed ? "opacity-0" : "opacity-100"
                            }`}
                            name="plus"
                        />
                        <Icon
                            className={`absolute left-1/2 top-1/2 -translate-1/2 fill-t-light transition-opacity max-md:!size-4 ${
                                isFollowed ? "opacity-100" : "opacity-0"
                            }`}
                            name="check"
                        />
                    </button>
                </div>
                <div className="max-md:pl-4">
                    <div className="mb-1 text-[1.125rem] font-medium tracking-[-0.01em]">
                        {value.name}
                    </div>
                    <div className="text-caption text-t-secondary">
                        {value.position}
                    </div>
                </div>
            </div>
            <div className="flex border-t border-s-subtle">
                <div className="flex-1 px-8 py-4 border-r border-s-subtle max-lg:px-6 max-md:px-5">
                    <div className="flex items-center gap-2 text-sub-title-1">
                        {value.items}
                        <Icon
                            className="!size-4 fill-t-primary"
                            name="product"
                        />
                    </div>
                    <div className="text-caption text-t-secondary">Items</div>
                </div>
                <div className="flex-1 px-8 py-4 max-lg:px-6 max-md:px-5">
                    <div className="flex items-center gap-2 text-sub-title-1">
                        {value.rating}
                        <Icon
                            className="!size-4 fill-t-primary"
                            name="star-stroke"
                        />
                    </div>
                    <div className="text-caption text-t-secondary">Ratings</div>
                </div>
            </div>
        </div>
    );
};

export default Follower;
