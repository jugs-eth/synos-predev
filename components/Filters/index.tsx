import { useState } from "react";
import Button from "@/components/Button";
import Modal from "@/components/Modal";
import Select from "@/components/Select";
import Range from "@/components/Range";
import Compatibility from "@/components/Compatibility";
import Tooltip from "@/components/Tooltip";
import Switch from "@/components/Switch";

const categories = [
    { id: 1, name: "All categories" },
    { id: 2, name: "Illustrations" },
    { id: 3, name: "Icons" },
];

const ratings = [
    { id: 1, name: "4.0 and up" },
    { id: 2, name: "3.0 to 4.0" },
    { id: 3, name: "2.0 to 3.0" },
    { id: 4, name: "1.0 to 2.0" },
    { id: 5, name: "1.0 and down" },
];

const Filters = ({}) => {
    const [open, setOpen] = useState(false);
    const [category, setCategory] = useState(categories[0]);
    const [rating, setRating] = useState(ratings[0]);
    const [featuredProducts, setFeaturedProducts] = useState(true);
    const [priceRange, setPriceRange] = useState([32, 88]);

    return (
        <>
            <Button
                className="ml-3 max-md:hidden"
                icon="filters"
                isWhite
                isCircle
                onClick={() => setOpen(true)}
            />
            <Modal
                classWrapper="max-w-150 !p-8 max-md:!px-4 max-md:py-6"
                open={open}
                onClose={() => setOpen(false)}
            >
                <div className="flex flex-col gap-8">
                    <div className="flex gap-6 max-md:gap-3">
                        <div className="flex-1">
                            <Select
                                classButton="bg-b-surface2"
                                label="Category"
                                tooltip="Maximum 100 characters. No HTML or emoji allowed"
                                value={category}
                                onChange={setCategory}
                                options={categories}
                            />
                        </div>
                        <div className="flex-1">
                            <Select
                                classButton="bg-b-surface2"
                                label="Rating"
                                tooltip="Maximum 100 characters. No HTML or emoji allowed"
                                value={rating}
                                onChange={setRating}
                                options={ratings}
                            />
                        </div>
                    </div>
                    <Range
                        label="Price range"
                        tooltip="Maximum 100 characters. No HTML or emoji allowed"
                        prefix="$"
                        values={priceRange}
                        setValues={setPriceRange}
                        min={12}
                        max={118}
                        step={1}
                    />
                    <Compatibility classItemName="w-[calc(33.333%-0.75rem)] max-md:w-[calc(50%-0.75rem)]" />
                </div>
                <div className="flex items-center justify-between mt-13 max-md:block max-md:mt-6">
                    <div className="flex items-center gap-4 max-md:w-full max-md:h-12 max-md:mb-3">
                        <div className="flex items-center max-md:mr-auto">
                            <div className="text-button">Featured products</div>
                            <Tooltip
                                className="ml-1.5"
                                content="Maximum 100 characters. No HTML or emoji allowed"
                            />
                        </div>
                        <Switch
                            checked={featuredProducts}
                            onChange={() =>
                                setFeaturedProducts(!featuredProducts)
                            }
                        />
                    </div>
                    <div className="flex gap-3">
                        <Button className="max-md:flex-1 max-md:px-2" isStroke>
                            Reset
                        </Button>
                        <Button className="max-md:flex-1 max-md:px-2" isBlack>
                            Show 80 results
                        </Button>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default Filters;
