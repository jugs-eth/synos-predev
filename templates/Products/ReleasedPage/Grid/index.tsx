import GridProduct from "@/components/GridProduct";
import Icon from "@/components/Icon";
import DeleteItems from "@/components/DeleteItems";
import UnpublishItems from "@/components/UnpublishItems";
import { ProductReleased } from "@/types/product";

type GridProps = {
    items: ProductReleased[];
    selectedRows: number[];
    onRowSelect: (id: number) => void;
};

const Grid = ({ selectedRows, onRowSelect, items }: GridProps) => {
    return (
        <div className="flex flex-wrap max-md:-mt-3">
            {items.map((item) => (
                <GridProduct
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    selectedRows={selectedRows.includes(item.id)}
                    onRowSelect={() => onRowSelect(item.id)}
                    key={item.id}
                    actions={
                        <>
                            <button className="action">
                                <Icon name="edit" />
                                Edit
                            </button>
                            <DeleteItems onDelete={() => {}} />
                            <UnpublishItems
                                onClick={() => {}}
                                image={item.image}
                            />
                        </>
                    }
                >
                    <div className="flex items-center">
                        <Icon
                            className="mr-2 !size-5 fill-t-secondary transition-colors group-hover:fill-chart-yellow"
                            name="star-fill"
                        />
                        <div className="mr-1 text-button">
                            {item.rating.value}
                        </div>
                        <div className="text-body-2 text-t-secondary">
                            ({item.rating.counter})
                        </div>
                    </div>
                </GridProduct>
            ))}
        </div>
    );
};

export default Grid;
