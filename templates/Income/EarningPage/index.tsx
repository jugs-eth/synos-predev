"use client";

import Layout from "@/components/Layout";
import RefundRequests from "@/components/RefundRequests";
import PopularProducts from "@/components/PopularProducts";
import Balance from "./Balance";
import RecentEarnings from "./RecentEarnings";
import Transactions from "./Transactions";
import Countries from "./Countries";

import { popularProducts } from "@/mocks/products";

const EarningPage = () => {
    return (
        <Layout title="Earning">
            <div className="flex max-lg:block">
                <div className="col-left">
                    <Balance />
                    <RecentEarnings />
                    <Transactions />
                </div>
                <div className="col-right">
                    <Countries />
                    <RefundRequests />
                    <PopularProducts
                        title="Top-earning products"
                        items={popularProducts}
                    />
                </div>
            </div>
        </Layout>
    );
};

export default EarningPage;
