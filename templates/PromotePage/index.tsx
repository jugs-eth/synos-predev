"use client";

import Layout from "@/components/Layout";
import ProductView from "@/components/ProductView";
import Insights from "./Insights";
import List from "./List";
import Engagement from "./Engagement";
import Interactions from "./Interactions";

const PromotePage = () => {
    return (
        <Layout title="Promote">
            <Insights />
            <div className="flex max-lg:block">
                <div className="col-left">
                    <List />
                </div>
                <div className="col-right">
                    <Engagement />
                    <Interactions />
                    <ProductView />
                </div>
            </div>
        </Layout>
    );
};

export default PromotePage;
