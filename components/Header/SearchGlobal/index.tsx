import { useState, useRef } from "react";
import { useClickAway } from "react-use";
import Search from "@/components/Search";
import Product from "@/components/Product";
import Icon from "@/components/Icon";
import Image from "@/components/Image";

import { bestMatch } from "@/mocks/products";

export const suggestions = [
    {
        id: 1,
        username: "Elbert",
        position: "UI/UX Designer",
        avatar: "/images/avatars/2.png",
    },
    {
        id: 2,
        username: "Joyce",
        position: "UI/UX Designer",
        avatar: "/images/avatars/1.png",
    },
];

type SearchGlobalProps = {
    className?: string;
    onClose?: () => void;
    visible?: boolean;
};

const SearchGlobal = ({ className, onClose, visible }: SearchGlobalProps) => {
    const [search, setSearch] = useState("");
    const visibleResult = search !== "";

    const ref = useRef(null);
    useClickAway(ref, () => {
        setSearch("");
        onClose?.();
    });

    return (
        <>
            <div
                className={`relative max-lg:fixed max-lg:inset-5 max-lg:bottom-auto max-lg:z-100 max-md:inset-3 max-md:bottom-auto ${
                    visible
                        ? "max-lg:visible max-lg:opacity-100"
                        : "max-lg:transition-all max-lg:invisible max-lg:opacity-0"
                } ${className || ""}`}
                ref={ref}
            >
                <Search
                    className={`relative z-10 w-79 rounded-3xl overflow-hidden transition-shadow max-[1179px]:w-72 max-lg:w-full ${
                        visibleResult ? "z-100 shadow-depth" : ""
                    }`}
                    classInput="max-lg:pr-12"
                    classButton={`${
                        visible ? "max-lg:visible max-lg:opacity-100" : ""
                    }`}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search anything..."
                    onClear={onClose}
                />
                <div
                    className={`absolute top-[calc(100%+0.625rem)] left-0 z-100 w-106.5 p-3 rounded-4xl bg-b-surface2 border-1 border-s-subtle shadow-dropdown transition-all max-[1179px]:w-99.5 max-lg:right-0 max-lg:w-auto ${
                        visibleResult
                            ? "visible opacity-100"
                            : "invisible opacity-0"
                    }`}
                >
                    <div className="mb-3">
                        <div className="p-3 text-body-2 text-t-secondary">
                            Best match
                        </div>
                        <div className="">
                            {bestMatch.map((product) => (
                                <Product value={product} key={product.id} />
                            ))}
                        </div>
                    </div>
                    <div className="">
                        <div className="p-3 text-body-2 text-t-secondary">
                            Suggestions
                        </div>
                        <div className="">
                            {suggestions.map((suggestion) => (
                                <div
                                    className="group relative flex items-center p-3 cursor-pointer"
                                    key={suggestion.id}
                                >
                                    <div className="box-hover"></div>
                                    <div className="relative z-2 shrink-0">
                                        <Image
                                            className="size-16 rounded-full opacity-100"
                                            src={suggestion.avatar}
                                            width={64}
                                            height={64}
                                            alt=""
                                        />
                                    </div>
                                    <div className="relative z-2 grow px-5 max-md:pl-3">
                                        <div className="text-sub-title-1">
                                            {suggestion.username}
                                        </div>
                                        <div className="mt-1 text-caption text-t-secondary">
                                            {suggestion.position}
                                        </div>
                                    </div>
                                    <div className="relative z-2 shrink-0 flex items-center justify-center w-12 h-12 rounded-full border border-s-stroke2 transition-colors group-hover:border-s-highlight">
                                        <Icon
                                            className="fill-t-secondary transition-colors group-hover:fill-t-primary"
                                            name="arrow"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div
                className={`fixed inset-0 z-50 bg-b-surface1/70 transition-all max-lg:hidden ${
                    visibleResult
                        ? "visible opacity-100"
                        : "invisible opacity-0"
                } ${
                    visible
                        ? " max-lg:!block max-lg:visible max-lg:opacity-100"
                        : " max-lg:!block max-lg:invisible max-lg:opacity-0"
                }`}
                onClick={onClose}
            ></div>
        </>
    );
};

export default SearchGlobal;
