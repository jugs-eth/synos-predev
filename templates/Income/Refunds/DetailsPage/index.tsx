"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/Button";
import Layout from "@/components/Layout";
import Icon from "@/components/Icon";
import Image from "@/components/Image";
import Editor from "@/components/Editor";
import Statistics from "./Statistics";

const DetailsPage = () => {
    const router = useRouter();
    const [content, setContent] = useState("");

    return (
        <Layout title="Refunds">
            <div className="card p-0">
                <div className="flex p-3">
                    <Button
                        className="mr-auto max-md:w-12 max-md:px-0 max-md:text-0"
                        isStroke
                        onClick={() => router.back()}
                    >
                        Back
                        <Icon
                            className="!hidden rotate-180 max-md:!block"
                            name="arrow"
                        />
                    </Button>
                    <Button className="mr-3" isStroke>
                        Decline
                    </Button>
                    <Button className="max-md:capitalize" isBlack>
                        <span className="max-md:hidden">Give </span>refund
                        <span className="ml-2">$98</span>
                    </Button>
                </div>
                <div className="flex items-start gap-18 px-16 py-12 max-4xl:p-12 max-4xl:gap-12 max-2xl:gap-10 max-2xl:p-8 max-lg:flex-col max-md:p-3">
                    <Statistics />
                    <div className="grow">
                        <div className="text-h5 max-md:text-h6">
                            Suggestions
                        </div>
                        <ul className="mt-3">
                            {[
                                "Talk to customer to see if you can help.",
                                "If not, approve or decline the request.",
                            ].map((item) => (
                                <li
                                    className="flex items-center gap-3 py-5 border-b border-s-stroke2 text-sub-title-1"
                                    key={item}
                                >
                                    <Icon
                                        className="fill-t-primary"
                                        name="check-circle-fill"
                                    />
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <div className="mt-12 max-md:mt-8">
                            <div className="text-h5 max-md:text-h6">
                                Reason: “Download link is broken!!!”
                            </div>
                            <div className="mt-3 text-[1.125rem] leading-[1.75rem] font-medium text-t-secondary">
                                “ I can’t download your item at all. Even tried
                                to change the DNS or VNP, it still doesn’t work.
                                😢”
                            </div>
                            <div className="flex items-center mt-3 p-3">
                                <div className="shrink-0">
                                    <Image
                                        className="size-12 rounded-full object-cover"
                                        src="/images/avatars/4.png"
                                        width={48}
                                        height={48}
                                        alt=""
                                    />
                                </div>
                                <div className="grow pl-5">
                                    <div className="text-sub-title-1">
                                        Mason Clark
                                    </div>
                                    <div className="text-body-2 text-t-secondary/80">
                                        @twilightbreeze
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-12 max-md:mt-8">
                            <div className="mb-5 text-h5 max-md:text-h6">
                                Message
                            </div>
                            <Editor content={content} onChange={setContent} />
                            <div className="flex items-center gap-5 mt-5 max-md:flex-col max-md:items-stretch max-md:gap-2">
                                <Button className="shrink-0" isStroke>
                                    Send
                                </Button>
                                <div className="text-body-2 text-t-secondary max-md:text-center">
                                    We&apos;ll also send the customer an email
                                    to announce your message.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default DetailsPage;
