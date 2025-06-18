"use client";

import Layout from "@/components/Layout";
import ProductView from "@/components/ProductView";
import Overview from "./Overview";
import ProductActivity from "./ProductActivity";
import Products from "./Products";

const OverviewPage = () => {
    return (
        <Layout title="Product overview">
            <Overview />
            <div className="flex mb-3 max-lg:flex-col">
                <ProductActivity />
                <ProductView className="col-right" />
            </div>
            <Products />
        </Layout>
    );
};

export default OverviewPage;
