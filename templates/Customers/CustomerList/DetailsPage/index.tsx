"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useMedia } from "react-use";
import Layout from "@/components/Layout";
import Search from "@/components/Search";
import Button from "@/components/Button";
import Customer from "./Customer";
import Details from "./Details";

import { customers } from "@/mocks/customers";

const CustomerDetailsPage = () => {
    const [search, setSearch] = useState("");
    const [mounted, setMounted] = useState(false);
    const isMobile = useMedia("(max-width: 767px)");
    const router = useRouter();

    useEffect(() => {
        setMounted(true);
    }, []);

    const [activeCustomer, setActiveCustomer] = useState<number | null>(
        isMobile ? null : 2
    );

    if (!mounted) return null;

    return (
        <Layout title="Customer list">
            <div className="card p-0 overflow-hidden">
                <div className="flex max-md:block max-md:p-3">
                    <div
                        className={`shrink-0 w-126 max-4xl:w-106 max-3xl:w-96 p-3 pb-0 max-2xl:w-76 max-md:w-full max-md:p-0 ${
                            activeCustomer === null
                                ? "max-md:block"
                                : "max-md:hidden"
                        }`}
                    >
                        <div className="mb-3 max-md:flex max-md:gap-3">
                            <Button
                                className="!hidden rotate-180 max-md:!flex"
                                icon="arrow"
                                isStroke
                                isCircle
                                onClick={() => router.back()}
                            />
                            <Search
                                className="max-md:grow"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="Search by name of email"
                                isGray
                            />
                        </div>
                        {search === "" ? (
                            <div className="flex flex-col gap-1 h-[calc(100svh-11.25rem)] pb-3 overflow-y-auto scrollbar-none max-md:h-auto">
                                {customers.map((customer) => (
                                    <Customer
                                        key={customer.id}
                                        value={customer}
                                        isActive={
                                            activeCustomer === customer.id
                                        }
                                        onClick={() =>
                                            setActiveCustomer(customer.id)
                                        }
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className="pt-16 text-center text-h5 max-md:pb-22">
                                No results found
                            </div>
                        )}
                    </div>
                    <div
                        className={`w-[calc(100%-31.5rem)] p-3 pl-6 max-4xl:w-[calc(100%-26.5rem)] max-3xl:w-[calc(100%-24rem)] h-[calc(100svh-6.75rem)] py-3 overflow-y-auto scrollbar-none max-2xl:w-[calc(100%-19rem)] max-lg:pl-3 max-md:w-full max-md:h-auto max-md:p-0 ${
                            activeCustomer !== null
                                ? "max-md:block"
                                : "max-md:hidden"
                        }`}
                    >
                        <Details onBack={() => setActiveCustomer(null)} />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default CustomerDetailsPage;
