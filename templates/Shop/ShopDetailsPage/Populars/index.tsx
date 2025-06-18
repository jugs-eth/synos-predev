import Button from "@/components/Button";
import ShopItem from "@/components/ShopItem";

import { shopItems } from "@/mocks/shopItems";

const Populars = ({}) => (
    <div className="">
        <div className="flex justify-between items-center">
            <div className="text-h4 max-md:text-h5">You may also like</div>
            <Button isStroke as="link" href="/shop">
                View all
            </Button>
        </div>
        <div className="flex flex-wrap mt-2 -mx-3 max-md:flex-nowrap max-md:mt-4 max-md:-mx-4 max-md:overflow-auto max-md:before:shrink-0 max-md:before:w-4 max-md:after:shrink-0 max-md:after:w-4">
            {shopItems.slice(0, 3).map((item) => (
                <ShopItem
                    className="w-[calc(33.333%-1.5rem)] mt-6 mx-3 max-lg:w-[calc(50%-1.5rem)] max-lg:nth-3:hidden max-md:shrink-0 max-md:w-79 max-md:m-0 max-md:mr-3 max-md:nth-3:flex max-md:last:mr-0"
                    value={item}
                    key={item.id}
                />
            ))}
        </div>
    </div>
);

export default Populars;
