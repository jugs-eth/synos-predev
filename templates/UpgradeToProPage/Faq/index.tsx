import { useState } from "react";
import Tabs from "@/components/Tabs";
import Item from "./Item";
import { TabsOption } from "@/types/tabs";

import { faqs } from "@/mocks/faqs";

const Faq = () => {
    const [activeTab, setActiveTab] = useState(faqs[0]);
    const [activeItemId, setActiveItemId] = useState<number | null>(null);
    const handleTabChange = (tab: TabsOption) => {
        setActiveTab(faqs[tab.id - 1]);
        setActiveItemId(null);
    };

    const handleItemClick = (itemId: number) => {
        setActiveItemId(activeItemId === itemId ? null : itemId);
    };

    const currentItems = faqs[activeTab.id - 1]?.items || [];

    return (
        <div className="">
            <h2 className="mb-10 text-center text-h3 max-lg:mb-6 max-lg:text-h4 max-md:text-left">
                Frequently asked questions
            </h2>
            <Tabs
                className="justify-center mb-4 max-md:justify-stretch max-md:-mx-6 max-md:overflow-x-auto max-md:scrollbar-none max-md:before:shrink-0 max-md:before:w-5 max-md:after:shrink-0 max-md:after:w-5"
                classButton="max-md:shrink-0"
                items={faqs}
                value={activeTab}
                setValue={handleTabChange}
            />
            <div className="">
                {currentItems.map((item) => (
                    <Item
                        value={item}
                        isActive={activeItemId === item.id}
                        onClick={() => handleItemClick(item.id)}
                        key={`${activeTab.id}-${item.id}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Faq;
