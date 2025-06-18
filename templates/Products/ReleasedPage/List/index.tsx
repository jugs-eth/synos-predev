import { NumericFormat } from "react-number-format";
import millify from "millify";
import Table from "@/components/Table";
import TableRow from "@/components/TableRow";
import TableProductCell from "@/components/TableProductCell";
import Icon from "@/components/Icon";
import DeleteItems from "@/components/DeleteItems";
import UnpublishItems from "@/components/UnpublishItems";
import Percentage from "@/components/Percentage";
import { ProductReleased } from "@/types/product";

const tableHead = ["Product", "Status", "Price", "Sales", "Rating", "Views"];

type ListProps = {
    items: ProductReleased[];
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
                <th
                    className="max-lg:nth-5:hidden max-lg:last:hidden"
                    key={head}
                >
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
                    >
                        <button className="action">
                            <Icon name="edit" />
                            Edit
                        </button>
                        <DeleteItems onDelete={() => {}} />
                        <UnpublishItems onClick={() => {}} image={item.image} />
                    </TableProductCell>
                    <td className="max-md:hidden">
                        <div
                            className={`label capitalize ${
                                item.active ? "label-green" : "label-red"
                            }`}
                        >
                            {item.active ? "Active" : "Offline"}
                        </div>
                    </td>
                    <td className="max-md:hidden">
                        <NumericFormat
                            value={item.price}
                            thousandSeparator=","
                            decimalScale={0}
                            fixedDecimalScale
                            displayType="text"
                            prefix="$"
                        />
                    </td>
                    <td className="max-md:hidden">
                        <div className="inline-flex items-center gap-2">
                            <div className="min-w-13">
                                <NumericFormat
                                    value={item.sales.value}
                                    thousandSeparator=","
                                    fixedDecimalScale
                                    displayType="text"
                                    prefix="$"
                                />
                            </div>
                            <Percentage value={item.sales.percentage} />
                        </div>
                    </td>
                    <td className="max-lg:hidden">
                        <div className="inline-flex items-center">
                            <Icon
                                className="mr-2 !size-5 fill-t-secondary transition-colors group-hover:fill-chart-yellow"
                                name="star-fill"
                            />
                            <div className="mr-1">{item.rating.value}</div>
                            <div className="text-t-secondary">
                                ({item.rating.counter})
                            </div>
                        </div>
                    </td>
                    <td className="max-lg:hidden">
                        <div className="inline-flex items-center gap-2">
                            <div className="min-w-8">
                                {millify(item.views.value, {
                                    lowercase: true,
                                })}
                            </div>
                            <div className="relative w-8 h-1.5 rounded-[2px] bg-shade-07/40">
                                <div
                                    className="absolute top-0 left-0 bottom-0 rounded-[2px] bg-chart-green"
                                    style={{
                                        width: `${item.views.percentage}%`,
                                    }}
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
