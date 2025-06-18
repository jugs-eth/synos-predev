import Checkbox from "@/components/Checkbox";

type TableProps = {
    selectAll?: boolean;
    onSelectAll?: (enabled: boolean) => void;
    cellsThead: React.ReactNode;
    children: React.ReactNode;
    isMobileVisibleTHead?: boolean;
};

const Table = ({
    selectAll,
    onSelectAll,
    cellsThead,
    children,
    isMobileVisibleTHead,
}: TableProps) => {
    return (
        <table className="w-full text-body-2 [&_th]:h-17 [&_th,&_td]:pl-5 [&_th,&_td]:py-4 [&_th,&_td]:first:pl-4 [&_th,&_td]:last:pr-4 [&_th]:align-middle [&_th]:text-left [&_th]:text-caption [&_th]:text-t-tertiary/80 [&_th]:font-normal max-lg:[&_th,&_td]:first:pl-3 max-md:[&_th,&_td]:p-3 max-md:[&_th]:h-13 max-md:[&_th]:border-b max-md:[&_th]:border-s-subtle">
            <thead className={`${isMobileVisibleTHead ? "" : "max-md:hidden"}`}>
                <tr>
                    {onSelectAll && (
                        <th className="max-md:hidden">
                            <Checkbox
                                checked={selectAll || false}
                                onChange={(value) => onSelectAll(value)}
                            />
                        </th>
                    )}
                    {cellsThead}
                </tr>
            </thead>
            <tbody>{children}</tbody>
        </table>
    );
};

export default Table;
