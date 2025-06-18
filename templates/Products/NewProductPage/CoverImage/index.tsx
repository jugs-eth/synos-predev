import { useState } from "react";
import Card from "@/components/Card";
import FieldImage from "@/components/FieldImage";
import Image from "@/components/Image";
import Icon from "@/components/Icon";

const CoverImage = () => {
    const [images, setImages] = useState<File[]>([]);

    const handleChange = (file: File) => {
        setImages([...images, file]);
    };

    return (
        <Card
            classHead="!px-3"
            title="Cover image"
            headContent={
                <button className="group text-0">
                    <Icon
                        className="-rotate-45 fill-t-secondary transition-colors group-hover:fill-t-primary"
                        name="arrow"
                    />
                </button>
            }
        >
            <div className="p-3">
                <FieldImage onChange={handleChange} />
                <div className="flex items-start mt-5">
                    <div className="grow">
                        <div className="mb-2 text-sub-title-1">
                            Bento Pro v 2.0 – Illustration Kit
                        </div>
                        <div className="flex items-center">
                            <div className="mr-2">
                                <Image
                                    className="size-8 rounded-full opacity-100"
                                    src="/images/avatars/2.png"
                                    width={32}
                                    height={32}
                                    alt="Cover image"
                                />
                            </div>
                            <div className="text-body-2 text-t-secondary">
                                by&nbsp;
                                <span className="text-button text-t-primary">
                                    Hortense
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="shrink-0 ml-4 px-3 py-2.5 bg-secondary-04 rounded-xl text-button dark:text-shade-01">
                        $0.00
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default CoverImage;
