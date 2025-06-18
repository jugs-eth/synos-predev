"use client";

import { useState } from "react";
import Layout from "@/components/Layout";
import Search from "@/components/Search";
import Tabs from "@/components/Tabs";
import Button from "@/components/Button";
import DeleteItems from "@/components/DeleteItems";
import NoFound from "@/components/NoFound";
import Dropdown from "@/components/Dropdown";
import { Refund } from "@/types/refund";
import { useSelection } from "@/hooks/useSelection";
import List from "./List";

import { refunds } from "@/mocks/refunds";

const views = [
    { id: 1, name: "Open requests" },
    { id: 2, name: "Closed request" },
];

const RefundsPage = () => {
    const [search, setSearch] = useState("");
    const [view, setView] = useState(views[0]);
    const {
        selectedRows,
        selectAll,
        handleRowSelect,
        handleSelectAll,
        handleDeselect,
    } = useSelection<Refund>(refunds);

    return (
        <Layout title="Refunds">
            <div className="card">
                {selectedRows.length === 0 ? (
                    <div className="flex items-center max-md:h-12">
                        <div className="pl-5 text-h6 max-lg:mr-auto max-lg:pl-3">
                            {refunds.length} open request
                            {refunds.length !== 1 ? "s" : ""}
                        </div>
                        <Search
                            className="w-70 ml-6 mr-auto max-lg:hidden"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search requests"
                            isGray
                        />
                        {search === "" && (
                            <>
                                <Tabs
                                    className="max-md:hidden"
                                    items={views}
                                    value={view}
                                    setValue={setView}
                                />
                                <Dropdown
                                    className="hidden max-md:block"
                                    items={views}
                                    value={view}
                                    setValue={setView}
                                />
                            </>
                        )}
                    </div>
                ) : (
                    <div className="flex items-center">
                        <div className="mr-6 pl-5 text-h6">
                            {selectedRows.length} refund
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
                            content={`This will definitely delete ${
                                selectedRows.length > 1
                                    ? `${selectedRows.length} refunds`
                                    : "this refund"
                            }, and all data will be removed. This action cannot be undone.`}
                            onDelete={() => {}}
                            isLargeButton
                        />
                    </div>
                )}
                {search !== "" ? (
                    <NoFound title="No requests found" />
                ) : (
                    <div className="p-1 pt-3 max-lg:px-0">
                        <List
                            selectedRows={selectedRows}
                            onRowSelect={handleRowSelect}
                            items={refunds}
                            selectAll={selectAll}
                            onSelectAll={handleSelectAll}
                        />
                    </div>
                )}
            </div>
        </Layout>
    );
};

export default RefundsPage;
