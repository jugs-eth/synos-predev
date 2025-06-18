import { useState } from "react";
import Tooltip from "@/components/Tooltip";
import Icon from "@/components/Icon";

const items = [
    {
        id: 1,
        icon: "twitter",
    },
    {
        id: 2,
        icon: "threads",
    },
    {
        id: 3,
        icon: "facebook",
    },
    {
        id: 4,
        icon: "instagram",
    },
    {
        id: 5,
        icon: "mailchimp",
    },
    {
        id: 6,
        icon: "mastodon",
    },
];

const PostTo = ({}) => {
    const [activeIds, setActiveIds] = useState<number[]>([]);

    const handleClick = (id: number) => {
        setActiveIds((prev) =>
            prev.includes(id)
                ? prev.filter((item) => item !== id)
                : [...prev, id]
        );
    };

    return (
        <div className="mt-8 max-md:mt-6">
            <div className="flex items-center mb-4">
                <div className="text-button">Post to</div>
                <Tooltip
                    className="ml-1.5"
                    content="Maximum 100 characters. No HTML or emoji allowed"
                />
            </div>
            <div className="flex flex-wrap -mt-3 -mx-1.5">
                {items.map((item) => (
                    <div
                        className={`flex justify-center items-center w-[calc(33.333%-0.75rem)] h-12 mt-3 mx-1.5 gap-2 border rounded-full px-2.5 transition-all cursor-pointer hover:border-s-highlight ${
                            activeIds.includes(item.id)
                                ? "!border-s-focus"
                                : "border-s-stroke2"
                        }`}
                        onClick={() => handleClick(item.id)}
                        key={item.id}
                    >
                        <Icon className="fill-t-primary" name={item.icon} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PostTo;
