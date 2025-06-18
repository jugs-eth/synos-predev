import { useState } from "react";
import Table from "@/components/Table";
import TableRow from "@/components/TableRow";
import Image from "@/components/Image";
import Icon from "@/components/Icon";
import DeleteItems from "@/components/DeleteItems";
import LikeButton from "@/components/LikeButton";
import Message from "@/components/Message";
import Answer from "./Answer";
import { Comment } from "@/types/comment";

const tableHead = ["Comment", "Product"];

type ListProps = {
    items: Comment[];
    selectedRows: number[];
    onRowSelect: (id: number) => void;
    selectAll: boolean;
    onSelectAll: () => void;
};

const List = ({
    selectedRows,
    onRowSelect,
    selectAll,
    onSelectAll,
    items,
}: ListProps) => {
    const [activeMessageId, setActiveMessageId] = useState<number | null>(null);
    const [message, setMessage] = useState("");
    const [activeId, setActiveId] = useState<number | null>(null);

    const handleReplyClick = (commentId: number) => {
        setActiveMessageId(activeMessageId === commentId ? null : commentId);
        setMessage("");
    };

    return (
        <Table
            selectAll={selectAll}
            onSelectAll={onSelectAll}
            cellsThead={tableHead.map((head) => (
                <th className="max-lg:last:hidden" key={head}>
                    {head}
                </th>
            ))}
        >
            {items.map((item) => (
                <TableRow
                    className="[&_td:first-child]:align-top [&_td:first-child]:pt-9 max-lg:[&_td:first-child]:pt-7"
                    selectedRows={selectedRows.includes(item.id)}
                    onRowSelect={() => onRowSelect(item.id)}
                    key={item.id}
                >
                    <td className="!static align-top !pt-6 max-lg:!pt-4 max-lg:!relative">
                        <div
                            className="relative z-2 flex items-start"
                            onClick={() => setActiveId(item.id)}
                        >
                            <div className="shrink-0">
                                <Image
                                    className="size-12 rounded-full object-cover opacity-100"
                                    src={item.avatar}
                                    width={48}
                                    height={48}
                                    alt={item.author}
                                />
                            </div>
                            <div className="w-[calc(100%-3rem)] pl-5">
                                <div className="flex items-center flex-wrap">
                                    <div className="text-sub-title-1">
                                        {item.author}
                                    </div>
                                    <div className="ml-3 text-body-2 text-t-secondary/80 max-lg:hidden">
                                        @{item.login}
                                    </div>
                                    <div className="flex justify-center items-center w-3 h-3 mx-2 max-lg:order-4 max-md:hidden">
                                        <div className="w-0.5 h-0.5 rounded-full bg-t-tertiary/50"></div>
                                    </div>
                                    <div className="text-body-2 text-t-secondary/80 max-lg:ml-3">
                                        {item.time}
                                    </div>
                                    <div className="order-5 hidden text-body-2 text-t-secondary/80 max-lg:block max-md:w-full">
                                        {item.title}
                                    </div>
                                </div>
                                <div
                                    className={`max-w-152 text-t-primary/80 line-clamp-1 ${
                                        item.id === 2 ? "line-clamp-none" : ""
                                    } ${activeId === item.id ? "pr-20" : ""}`}
                                >
                                    {item.content}
                                </div>
                                {item.id === 2 && <Answer />}
                                {activeMessageId === item.id && (
                                    <Message
                                        className="max-w-187 mt-4 max-md:max-w-[calc(100%+4.25rem)] max-md:-ml-17"
                                        value={message}
                                        onChange={(e) =>
                                            setMessage(e.target.value)
                                        }
                                        autoFocus={true}
                                    />
                                )}
                            </div>
                        </div>
                        <button
                            className={`action hidden absolute z-3 top-9.5 right-3 max-lg:inline-flex max-lg:border-s-stroke2 max-lg:text-t-primary max-lg:fill-t-primary max-md:top-15 ${
                                activeId === item.id ? "visible" : "invisible"
                            }`}
                            onClick={() => {
                                handleReplyClick(item.id);
                                setActiveId(null);
                            }}
                        >
                            <Icon name="edit" />
                            Reply
                        </button>
                        {item.mark && (
                            <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-primary-02 max-lg:top-3 max-lg:right-3"></div>
                        )}
                    </td>
                    <td className="w-124 max-[1529px]:w-93 max-lg:hidden">
                        <div className="relative">
                            <div className="inline-flex items-center transition-all group-hover:invisible group-hover:opacity-0">
                                <div className="relative z-2 shrink-0">
                                    <Image
                                        className="size-16 rounded-xl opacity-100 object-cover"
                                        src={item.image}
                                        width={64}
                                        height={64}
                                        alt=""
                                    />
                                </div>
                                <div className="pl-5">
                                    <div className="pr-6 text-sub-title-1">
                                        {item.title}
                                    </div>
                                    <div className="text-body-2 text-t-secondary/80">
                                        {item.details}
                                    </div>
                                </div>
                            </div>
                            <div className="absolute top-1/2 -left-1 -translate-y-1/2 flex flex-wrap gap-2 invisible opacity-0 transition-all group-hover:visible group-hover:opacity-100">
                                <button
                                    className="action"
                                    onClick={() => handleReplyClick(item.id)}
                                >
                                    <Icon name="edit" />
                                    Reply
                                </button>
                                <LikeButton />
                                <DeleteItems
                                    counter={1}
                                    onDelete={() => {}}
                                    content="This will definitely delete this comment, and all data will be removed. This action cannot be undone."
                                />
                            </div>
                        </div>
                    </td>
                </TableRow>
            ))}
        </Table>
    );
};

export default List;
