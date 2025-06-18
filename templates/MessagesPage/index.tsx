"use client";

import { useState, useEffect } from "react";
import { useMedia } from "react-use";
import Layout from "@/components/Layout";
import Search from "@/components/Search";
import Button from "@/components/Button";
import Message from "./Message";
import Details from "./Details";

import { messages } from "@/mocks/messages";

const MessagesPage = () => {
    const [search, setSearch] = useState("");
    const [mounted, setMounted] = useState(false);
    const isMobile = useMedia("(max-width: 767px)");

    useEffect(() => {
        setMounted(true);
    }, []);

    const [activeMessage, setActiveMessage] = useState<number | null>(
        isMobile ? null : 1
    );

    if (!mounted) return null;

    return (
        <Layout title="Messages">
            <div className="card p-0 overflow-hidden">
                <div className="flex max-md:block max-md:p-3">
                    <div
                        className={`shrink-0 w-126 max-4xl:w-106 max-3xl:w-96 p-3 pb-0 max-2xl:w-76 max-md:w-full max-md:p-0 ${
                            activeMessage === null
                                ? "max-md:block"
                                : "max-md:hidden"
                        }`}
                    >
                        <Search
                            className="mb-3"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search message"
                            isGray
                        />
                        {search === "" ? (
                            <div className="flex flex-col gap-1 h-[calc(100svh-11.25rem)] pb-3 overflow-y-auto scrollbar-none max-md:h-auto max-lg:gap-0">
                                {messages.map((message) => (
                                    <Message
                                        key={message.id}
                                        value={message}
                                        isActive={activeMessage === message.id}
                                        onClick={() =>
                                            setActiveMessage(message.id)
                                        }
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className="pt-16 text-center max-md:pb-24">
                                <div className="mb-6 text-h5">
                                    No results found
                                </div>
                                <Button
                                    isStroke
                                    as="link"
                                    href="/explore-creators"
                                >
                                    Explore creators
                                </Button>
                            </div>
                        )}
                    </div>
                    <div
                        className={`flex flex-col w-[calc(100%-31.5rem)] p-3 pl-6 max-4xl:w-[calc(100%-26.5rem)] max-3xl:w-[calc(100%-24rem)] h-[calc(100svh-6.75rem)] py-3 overflow-y-auto scrollbar-none max-2xl:w-[calc(100%-19rem)] max-lg:pl-3 max-md:block max-md:w-full max-md:h-auto max-md:p-0 ${
                            activeMessage !== null
                                ? "max-md:block"
                                : "max-md:hidden"
                        }`}
                    >
                        <Details />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default MessagesPage;
