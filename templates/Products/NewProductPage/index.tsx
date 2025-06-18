"use client";

import Layout from "@/components/Layout";
import ProductDetails from "./ProductDetails";
import Images from "./Images";
import CategoryAndAttributes from "./CategoryAndAttributes";
import Discussion from "./Discussion";
import CoverImage from "./CoverImage";
import UploadProductFiles from "./UploadProductFiles";
import Price from "./Price";
import Highlights from "./Highlights";
import CTA from "./CTA";
import Demos from "./Demos";

const NewProductPage = () => {
    return (
        <Layout title="New product" newProduct>
            <div className="flex max-lg:block">
                <div className="w-[calc(100%-33.75rem)] pr-3 max-4xl:w-[calc(100%-27.5rem)] max-2xl:w-[calc(100%-23rem)] max-lg:w-full max-lg:pr-0">
                    <ProductDetails />
                    <Images />
                    <CategoryAndAttributes />
                    <Discussion />
                </div>
                <div className="w-[33.75rem] max-4xl:w-[27.5rem] max-2xl:w-[23rem] max-lg:w-full max-lg:mt-3">
                    <CoverImage />
                    <UploadProductFiles />
                    <Price />
                    <Highlights />
                    <CTA />
                    <Demos />
                </div>
            </div>
        </Layout>
    );
};

export default NewProductPage;
