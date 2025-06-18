"use client";

import { useState } from "react";
import Layout from "@/components/Layout";
import Image from "@/components/Image";
import Tabs from "@/components/Tabs";
import Select from "@/components/Select";
import Filters from "@/components/Filters";
import ShopItem from "@/components/ShopItem";
import Follower from "@/components/Follower";
import Spinner from "@/components/Spinner";
import Profile from "./Profile";

import { shopItems } from "@/mocks/shopItems";
import { followers } from "@/mocks/followers";
import { followings } from "@/mocks/followings";

const types = [
    { id: 1, name: "Products" },
    { id: 2, name: "Followers" },
    { id: 3, name: "Followings" },
];

const sortOptions = [
    { id: 1, name: "Most recent" },
    { id: 2, name: "Oldest" },
    { id: 3, name: "Most popular" },
];

const ShopPage = () => {
    const [type, setType] = useState(types[0]);
    const [sort, setSort] = useState(sortOptions[0]);

    return (
        <Layout hideSidebar>
            <div className="">
                <Image
                    className="w-full object-cover rounded-4xl max-md:min-h-35 max-md:rounded-2xl"
                    src="/images/shop-banner.png"
                    width={1880}
                    height={510}
                    alt="shop-banner"
                    priority={true}
                />
            </div>
            <div className="relative z-2 max-w-340 -mt-10 mx-auto max-[1519px]:max-w-290 max-md:px-1">
                <Profile />
                <div className="flex mt-17 max-md:block max-lg:mt-11 max-md:mt-5">
                    <Tabs
                        className="mr-auto max-md:w-full"
                        classButton="px-7.5 max-md:grow max-md:px-3"
                        items={types}
                        value={type}
                        setValue={setType}
                    />
                    <Select
                        className="min-w-45 max-md:hidden"
                        classButton="border-transparent bg-b-surface2"
                        value={sort}
                        onChange={setSort}
                        options={sortOptions}
                    />
                    <Filters />
                </div>
                {type.id === 1 && (
                    <>
                        <div className="flex flex-wrap mt-4 -mx-3 max-md:flex-col max-md:gap-3 max-md:m-0 max-md:mt-5">
                            {shopItems.map((item) => (
                                <ShopItem
                                    className="w-[calc(33.333%-1.5rem)] mt-6 mx-3 max-lg:w-[calc(50%-1.5rem)] max-md:w-full max-md:m-0"
                                    value={item}
                                    key={item.id}
                                />
                            ))}
                        </div>
                        <Spinner className="mt-10 mb-12 max-lg:my-7 max-md:mt-5 max-md:mb-0" />
                    </>
                )}
                {type.id === 2 && (
                    <>
                        <div className="flex flex-wrap mt-4 -mx-3 max-md:m-0 max-md:mt-5 max-md:gap-3">
                            {followers.map((follower) => (
                                <Follower
                                    className="w-[calc(25%-1.5rem)] mt-6 mx-3 max-lg:w-[calc(33.333%-1.5rem)] max-md:w-full max-md:m-0"
                                    value={follower}
                                    key={follower.id}
                                />
                            ))}
                        </div>
                        <Spinner className="mt-10 mb-12 max-lg:my-7 max-md:mt-5 max-md:mb-0" />
                    </>
                )}
                {type.id === 3 && (
                    <>
                        <div className="flex flex-wrap mt-4 -mx-3 max-md:m-0 max-md:mt-5 max-md:gap-3">
                            {followings.map((following) => (
                                <Follower
                                    className="w-[calc(25%-1.5rem)] mt-6 mx-3 max-lg:w-[calc(33.333%-1.5rem)] max-md:w-full max-md:m-0"
                                    value={following}
                                    key={following.id}
                                />
                            ))}
                        </div>
                        <Spinner className="mt-10 mb-12 max-lg:my-7 max-md:mt-5 max-md:mb-0" />
                    </>
                )}
            </div>
        </Layout>
    );
};

export default ShopPage;
