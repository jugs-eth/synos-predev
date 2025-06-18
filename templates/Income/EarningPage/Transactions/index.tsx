import { useState } from "react";
import Card from "@/components/Card";
import Search from "@/components/Search";
import Table from "@/components/Table";
import TableRow from "@/components/TableRow";
import NoFound from "@/components/NoFound";
import { transactions } from "@/mocks/transactions";
import { NumericFormat } from "react-number-format";

const tableHead = ["Date", "Status", "Earnings", "Fee", "Net"];

const Transactions = ({}) => {
    const [search, setSearch] = useState("");

    return (
        <Card
            title="Transactions"
            headContent={
                <Search
                    className="w-70 max-md:hidden"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search..."
                    isGray
                />
            }
        >
            {search !== "" ? (
                <NoFound title="No transactions found" />
            ) : (
                <div className="pt-3 px-1 max-lg:px-0 max-md:pt-0">
                    <Table
                        cellsThead={tableHead.map((head) => (
                            <th
                                className="!h-12.5 last:text-right max-md:nth-3:hidden max-md:nth-4:hidden"
                                key={head}
                            >
                                {head}
                            </th>
                        ))}
                        isMobileVisibleTHead
                    >
                        {transactions.map((transaction) => (
                            <TableRow key={transaction.id}>
                                <td>
                                    {transaction.date}&nbsp;
                                    <span className="text-t-secondary max-md:hidden">
                                        {transaction.time}
                                    </span>
                                </td>
                                <td>
                                    <div
                                        className={`label capitalize ${
                                            transaction.status === "pending"
                                                ? "label-yellow"
                                                : "label-green"
                                        }`}
                                    >
                                        {transaction.status}
                                    </div>
                                </td>
                                <td className="max-md:hidden">
                                    <NumericFormat
                                        value={transaction.earnings}
                                        thousandSeparator=","
                                        decimalScale={2}
                                        fixedDecimalScale
                                        displayType="text"
                                        prefix="$"
                                    />
                                </td>
                                <td className="max-md:hidden">
                                    <NumericFormat
                                        className="text-t-secondary"
                                        value={transaction.fee}
                                        thousandSeparator=","
                                        decimalScale={2}
                                        fixedDecimalScale
                                        displayType="text"
                                        prefix="$"
                                    />
                                </td>
                                <td className="text-right">
                                    <NumericFormat
                                        value={transaction.net}
                                        thousandSeparator=","
                                        decimalScale={2}
                                        fixedDecimalScale
                                        displayType="text"
                                        prefix="$"
                                    />
                                </td>
                            </TableRow>
                        ))}
                    </Table>
                </div>
            )}
        </Card>
    );
};
export default Transactions;
