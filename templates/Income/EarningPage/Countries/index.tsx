import { useState } from "react";
import Card from "@/components/Card";
import CountryItem from "@/components/CountryItem";

import { countriesEarnings } from "@/mocks/countries";

const durations = [
    { id: 1, name: "Last 7 days" },
    { id: 2, name: "Last month" },
    { id: 3, name: "Last 6 month" },
];

const Countries = ({}) => {
    const [duration, setDuration] = useState(durations[2]);

    return (
        <Card
            classHead="!pl-3"
            title="Countries"
            selectValue={duration}
            selectOnChange={setDuration}
            selectOptions={durations}
        >
            <div className="flex flex-col gap-5 p-3 pb-5">
                {countriesEarnings.map((country) => (
                    <CountryItem key={country.id} value={country} />
                ))}
            </div>
        </Card>
    );
};

export default Countries;
