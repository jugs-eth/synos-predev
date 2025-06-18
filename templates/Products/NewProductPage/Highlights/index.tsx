import { useState } from "react";
import Card from "@/components/Card";
import Item from "./Item";

const Highlights = () => {
    const [value1, setValue1] = useState("");
    const [value2, setValue2] = useState("");
    const [value3, setValue3] = useState("");
    const [value4, setValue4] = useState("");
    const [value5, setValue5] = useState("");

    return (
        <Card classHead="!pl-3" title="Highlights">
            <div className="flex flex-wrap gap-3 p-3">
                <Item
                    placeholder="ie. 400+ components"
                    value={value1}
                    onChange={(e) => setValue1(e.target.value)}
                />
                <Item
                    placeholder="ie. Free Google Fonts"
                    value={value2}
                    onChange={(e) => setValue2(e.target.value)}
                />
                <Item
                    placeholder="ie. 300+ custom icons"
                    value={value3}
                    onChange={(e) => setValue3(e.target.value)}
                />
                <Item
                    placeholder="ie. 800 premade templates"
                    value={value4}
                    onChange={(e) => setValue4(e.target.value)}
                />
                <Item
                    placeholder="ie. 256+ illustrations"
                    value={value5}
                    onChange={(e) => setValue5(e.target.value)}
                />
            </div>
        </Card>
    );
};

export default Highlights;
