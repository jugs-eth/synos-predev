"use client";

import { useState } from "react";
import Layout from "@/components/Layout";
import Search from "@/components/Search";
import Tabs from "@/components/Tabs";
import Button from "@/components/Button";
import DeleteItems from "@/components/DeleteItems";
import NoFound from "@/components/NoFound";
import UnpublishItems from "@/components/UnpublishItems";
import List from "./List";
import Grid from "./Grid";
import { ProductReleased } from "@/types/product";
import { useSelection } from "@/hooks/useSelection";

import { releasedProducts } from "@/mocks/products";

const views = [
    { id: 1, name: "grid" },
    { id: 2, name: "list" },
];

const ReleasedPage = () => {
    const [search, setSearch] = useState("");
    const [view, setView] = useState(views[1]);
    const {
        selectedRows,
        selectAll,
        handleRowSelect,
        handleSelectAll,
        handleDeselect,
    } = useSelection<ProductReleased>(releasedProducts);

    return (
        <Layout title="Released">
            <div className="card">
                {selectedRows.length === 0 ? (
                    <div className="flex items-center">
                        <div className="pl-5 text-h6 max-lg:pl-3 max-md:mr-auto">
                            Products
                        </div>
                        <Search
                            className="w-70 ml-6 mr-auto max-md:hidden"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search products"
                            isGray
                        />
                        {search === "" && (
                            <Tabs
                                items={views}
                                value={view}
                                setValue={setView}
                                isOnlyIcon
                            />
                        )}
                    </div>
                ) : (
                    <div className="flex items-center">
                        <div className="mr-6 pl-5 text-h6">
                            {selectedRows.length} product
                            {selectedRows.length !== 1 ? "s" : ""} selected
                        </div>
                        <Button
                            className="mr-auto"
                            isStroke
                            onClick={handleDeselect}
                        >
                            Deselect
                        </Button>
                        <DeleteItems
                            counter={selectedRows.length}
                            onDelete={() => {}}
                            isLargeButton
                        />
                        <UnpublishItems
                            items={selectedRows}
                            onClick={() => {}}
                            isLargeButton
                        />
                    </div>
                )}
                {search !== "" ? (
                    <NoFound title="No products found" />
                ) : (
                    <div className="p-1 pt-3 max-lg:px-0">
                        {view.id === 1 ? (
                            <Grid
                                selectedRows={selectedRows}
                                onRowSelect={handleRowSelect}
                                items={releasedProducts}
                            />
                        ) : (
                            <List
                                selectedRows={selectedRows}
                                onRowSelect={handleRowSelect}
                                items={releasedProducts}
                                selectAll={selectAll}
                                onSelectAll={handleSelectAll}
                            />
                        )}
                    </div>
                )}
            </div>
        </Layout>
    );
};

export default ReleasedPage;
