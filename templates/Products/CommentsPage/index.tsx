"use client";

import { useState } from "react";
import Layout from "@/components/Layout";
import Search from "@/components/Search";
import Select from "@/components/Select";
import Button from "@/components/Button";
import DeleteItems from "@/components/DeleteItems";
import NoFound from "@/components/NoFound";
import Dropdown from "@/components/Dropdown";
import List from "./List";
import { Comment } from "@/types/comment";
import { useSelection } from "@/hooks/useSelection";

import { comments } from "@/mocks/comments";

const timeCreateOptions = [
    { id: 1, name: "Newest first" },
    { id: 2, name: "Oldest first" },
    { id: 3, name: "A-Z" },
    { id: 4, name: "Z-A" },
];

const CommentsPage = () => {
    const [search, setSearch] = useState("");
    const [timeCreate, setTimeCreate] = useState(timeCreateOptions[0]);
    const {
        selectedRows,
        selectAll,
        handleRowSelect,
        handleSelectAll,
        handleDeselect,
    } = useSelection<Comment>(comments);

    return (
        <Layout title="Comments">
            <div className="card">
                {selectedRows.length === 0 ? (
                    <div className="flex items-center min-h-12">
                        <div className="pl-5 text-h6 max-lg:pl-3 max-md:mr-auto">
                            {comments.length} new comment
                            {comments.length !== 1 ? "s" : ""}
                        </div>
                        <Search
                            className="w-70 ml-6 mr-auto max-lg:w-60 max-md:hidden"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search comments"
                            isGray
                        />
                        {search === "" && (
                            <>
                                <Select
                                    className="min-w-45 max-md:hidden"
                                    value={timeCreate}
                                    onChange={setTimeCreate}
                                    options={timeCreateOptions}
                                />
                                <Dropdown
                                    className="hidden max-md:block"
                                    items={timeCreateOptions}
                                    value={timeCreate}
                                    setValue={setTimeCreate}
                                />
                            </>
                        )}
                    </div>
                ) : (
                    <div className="flex items-center">
                        <div className="mr-6 pl-5 text-h6">
                            {selectedRows.length} comment
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
                                    ? `${selectedRows.length} comments`
                                    : "this comment"
                            }, and all data will be removed. This action cannot be undone.`}
                            onDelete={() => {}}
                            isLargeButton
                        />
                        <Button className="ml-2" isBlack>
                            Mark as read
                        </Button>
                    </div>
                )}
                {search !== "" ? (
                    <NoFound title="No comments found" />
                ) : (
                    <div className="p-1 pt-3 max-lg:px-0">
                        <List
                            selectedRows={selectedRows}
                            onRowSelect={handleRowSelect}
                            items={comments}
                            selectAll={selectAll}
                            onSelectAll={handleSelectAll}
                        />
                    </div>
                )}
            </div>
        </Layout>
    );
};

export default CommentsPage;
