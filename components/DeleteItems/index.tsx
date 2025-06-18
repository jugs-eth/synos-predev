import { useState } from "react";
import Icon from "@/components/Icon";
import Modal from "@/components/Modal";
import Image from "@/components/Image";
import Button from "@/components/Button";

type DeleteItemsProps = {
    counter?: number;
    onDelete: () => void;
    isLargeButton?: boolean;
    content?: string;
};

const DeleteItems = ({
    counter = 1,
    onDelete,
    isLargeButton,
    content,
}: DeleteItemsProps) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            {isLargeButton ? (
                <Button isStroke onClick={() => setOpen(true)}>
                    Delete
                </Button>
            ) : (
                <button className="action" onClick={() => setOpen(true)}>
                    <Icon name="trash" />
                    Delete
                </button>
            )}
            <Modal open={open} onClose={() => setOpen(false)}>
                <div className="flex justify-center items-center size-16 mb-8 bg-primary-03/15 rounded-full">
                    <Image
                        className="size-6 opacity-100"
                        src="/images/icons/warning.svg"
                        width={24}
                        height={24}
                        alt=""
                    />
                </div>
                <div className="mb-4 text-h4 max-md:text-h5">Are you sure?</div>
                <div className="mb-8 text-body-2 font-medium text-t-tertiary">
                    {content ||
                        `This will definitely delete ${
                            counter > 1 ? `${counter} products` : "this product"
                        }, and all data will be removed. This action cannot be undone.`}
                </div>
                <div className="flex justify-end gap-3 mt-8">
                    <Button
                        className="flex-1"
                        isStroke
                        onClick={() => setOpen(false)}
                    >
                        Cancel
                    </Button>
                    <Button className="flex-1" isBlack onClick={onDelete}>
                        Delete
                    </Button>
                </div>
            </Modal>
        </>
    );
};

export default DeleteItems;
