import Table from "@/components/Table";
import TableRow from "@/components/TableRow";
import TableProductCell from "@/components/TableProductCell";
import Icon from "@/components/Icon";
import DeleteItems from "@/components/DeleteItems";
import ScheduleProduct from "@/components/ScheduleProduct";
import { ProductDraft } from "@/types/product";

const tableHead = ["Product", "Category", "Price", "Last edited"];

type ListProps = {
    items: ProductDraft[];
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
                    selectedRows={selectedRows.includes(item.id)}
                    onRowSelect={() => onRowSelect(item.id)}
                    key={item.id}
                >
                    <TableProductCell
                        title={item.title}
                        details={item.details}
                        image={item.image}
                        mobileContent={
                            <div className="flex items-center gap-2 text-t-secondary/80">
                                <Icon
                                    className="!size-4 fill-t-secondary"
                                    name="clock-1"
                                />
                                {item.date}
                            </div>
                        }
                    >
                        <button className="action">
                            <Icon name="edit" />
                            Edit
                        </button>
                        <DeleteItems onDelete={() => {}} />
                        <ScheduleProduct
                            title={item.title}
                            details={item.category}
                            image={item.image}
                            price={item.price}
                        />
                    </TableProductCell>
                    <td className="max-md:hidden">
                        <div className="inline-flex items-center gap-2">
                            <Icon
                                className="fill-t-secondary"
                                name={
                                    item.category === "Fonts"
                                        ? "font"
                                        : item.category === "Coded templates"
                                        ? "laptop-think"
                                        : item.category === "Illustrations"
                                        ? "magic-pencil"
                                        : item.category === "3D Assets"
                                        ? "cube"
                                        : "layers"
                                }
                            />
                            {item.category}
                        </div>
                    </td>
                    <td className="max-md:hidden">
                        <div
                            className={`label ${
                                item.price === 0
                                    ? "label-gray text-t-primary"
                                    : "label-green"
                            }`}
                        >
                            ${item.price}
                        </div>
                    </td>
                    <td className="text-t-secondary max-lg:hidden">
                        {item.date}
                    </td>
                </TableRow>
            ))}
        </Table>
    );
};

export default List;
