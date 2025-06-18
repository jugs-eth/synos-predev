import { useState } from "react";
import Card from "@/components/Card";
import Item from "./Item";

import { balanceEarnings } from "@/mocks/income";

const durations = [
    { id: 1, name: "This month" },
    { id: 2, name: "This year" },
    { id: 3, name: "All time" },
];

const Balance = ({}) => {
    const [duration, setDuration] = useState(durations[1]);

    return (
        <Card
            className="max-md:overflow-hidden"
            title="Balance"
            selectValue={duration}
            selectOnChange={setDuration}
            selectOptions={durations}
        >
            <div className="relative p-5 pt-4 before:hidden after:hidden before:absolute before:-left-3 before:top-0 before:bottom-0 before:z-3 before:w-8 before:bg-linear-to-r before:from-b-surface2 before:to-transparent before:pointer-events-none after:absolute after:-right-3 after:top-0 after:bottom-0 after:z-3 after:w-8 after:bg-linear-to-l after:from-b-surface2 after:to-transparent after:pointer-events-none max-lg:p-3 max-md:before:block max-md:after:block">
                <div className="flex gap-8 max-md:-mx-6 max-md:px-6 max-md:gap-6 max-md:overflow-auto max-md:scrollbar-none">
                    {balanceEarnings.map((item) => (
                        <Item value={item} key={item.id} />
                    ))}
                </div>
            </div>
        </Card>
    );
};

export default Balance;
