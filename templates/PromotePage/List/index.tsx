import { useState } from "react";
import Tabs from "@/components/Tabs";
import Button from "@/components/Button";
import DeleteItems from "@/components/DeleteItems";
import { useSelection } from "@/hooks/useSelection";
import { PublishedItem } from "@/types/promote";
import NewPost from "./NewPost";
import Published from "./Published";
import Scheduled from "./Scheduled";

import { publishedItems, scheduledItems } from "@/mocks/promote";

const sortOptions = [
    { id: 1, name: "Published" },
    { id: 2, name: "Scheduled" },
];

const List = ({}) => {
    const [sort, setSort] = useState(sortOptions[0]);
    const {
        selectedRows,
        selectAll,
        handleRowSelect,
        handleSelectAll,
        handleDeselect,
    } = useSelection<PublishedItem>(publishedItems);

    return (
        <div className="card">
            {selectedRows.length === 0 ? (
                <div className="flex items-center">
                    <Tabs
                        className="mr-auto"
                        items={sortOptions}
                        value={sort}
                        setValue={setSort}
                    />
                    <NewPost />
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
                </div>
            )}
            <div className="mt-3 px-1 max-lg:px-0">
                {sort.id === 1 && <Published items={publishedItems} />}
                {sort.id === 2 && (
                    <Scheduled
                        items={scheduledItems}
                        selectedRows={selectedRows}
                        onRowSelect={handleRowSelect}
                        selectAll={selectAll}
                        onSelectAll={handleSelectAll}
                    />
                )}
            </div>
        </div>
    );
};

export default List;
