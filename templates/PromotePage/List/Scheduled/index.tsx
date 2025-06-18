import { useState } from "react";
import Table from "@/components/Table";
import TableRow from "@/components/TableRow";
import Image from "@/components/Image";
import Icon from "@/components/Icon";
import DeleteItems from "@/components/DeleteItems";
import { ScheduledItem } from "@/types/promote";
import SchedulePost from "../SchedulePost";

const tableHead = ["Product", "Schedule time"];

type ScheduledProps = {
    items: ScheduledItem[];
    selectedRows: number[];
    onRowSelect: (id: number) => void;
    selectAll: boolean;
    onSelectAll: () => void;
};

const Scheduled = ({
    selectedRows,
    onRowSelect,
    selectAll,
    onSelectAll,
    items,
}: ScheduledProps) => {
    const [activeId, setActiveId] = useState<number | null>(null);

    return (
        <Table
            selectAll={selectAll}
            onSelectAll={onSelectAll}
            cellsThead={tableHead.map((head) => (
                <th key={head}>{head}</th>
            ))}
        >
            {items.map((item) => (
                <TableRow
                    selectedRows={selectedRows.includes(item.id)}
                    onRowSelect={() => onRowSelect(item.id)}
                    key={item.id}
                >
                    <td>
                        <div
                            className="inline-flex items-center"
                            onClick={() => setActiveId(item.id)}
                        >
                            <div className="relative z-2 shrink-0">
                                <Image
                                    className="size-16 rounded-xl opacity-100 object-cover"
                                    src={item.image}
                                    width={64}
                                    height={64}
                                    alt=""
                                />
                            </div>
                            <div className="ml-5 max-md:ml-4">
                                <div className="line-clamp-1 text-sub-title-1 max-3xl:max-w-66">
                                    {item.title}
                                </div>
                                <div className="relative">
                                    <div
                                        className={`absolute -top-0.5 left-0 flex items-center gap-4 mt-1 transition-all group-hover:invisible group-hover:opacity-0 max-md:hidden ${
                                            activeId === item.id
                                                ? "max-lg:invisible max-lg:opacity-0"
                                                : ""
                                        }`}
                                    >
                                        {item.socials.map((social) => (
                                            <a
                                                className="group/social"
                                                href={social.href}
                                                key={social.icon}
                                            >
                                                <Icon
                                                    className="!size-5 fill-t-secondary transition-colors group-hover/social:fill-t-primary"
                                                    name={social.icon}
                                                />
                                            </a>
                                        ))}
                                    </div>
                                    <div
                                        className={`absolute -top-0.5 left-0 hidden mt-1 transition-all max-md:block ${
                                            activeId === item.id
                                                ? "invisible opacity-0"
                                                : ""
                                        }`}
                                    >
                                        {item.date}
                                    </div>
                                    <div
                                        className={`flex flex-wrap gap-2 mt-1 -ml-1 invisible opacity-0 transition-all group-hover:visible group-hover:opacity-100 ${
                                            activeId === item.id
                                                ? "max-lg:visible max-lg:opacity-100"
                                                : ""
                                        }`}
                                    >
                                        <button className="action">
                                            <Icon name="edit" />
                                            Edit
                                        </button>
                                        <DeleteItems onDelete={() => {}} />
                                        <SchedulePost
                                            className="!hidden max-2xl:!flex"
                                            isSmallButton
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </td>
                    <td className="w-90 max-4xl:w-80 max-2xl:w-auto max-md:hidden">
                        <div className="flex items-center gap-2 max-2xl:block">
                            {item.date}
                            <SchedulePost
                                className="ml-auto !h-10 !transition-all opacity-0 invisible group-hover:opacity-100 group-hover:visible max-2xl:hidden"
                                title="Publish now"
                            />
                        </div>
                    </td>
                </TableRow>
            ))}
        </Table>
    );
};

export default Scheduled;
