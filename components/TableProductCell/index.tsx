import { useState } from "react";
import Image from "@/components/Image";

type TableProductCellProps = {
    title: string;
    details: string;
    image: string;
    children: React.ReactNode;
    mobileContent?: React.ReactNode;
};

const TableProductCell = ({
    title,
    details,
    image,
    children,
    mobileContent,
}: TableProductCellProps) => {
    const [visible, setVisible] = useState(false);

    return (
        <td>
            <div
                className="inline-flex items-center"
                onClick={() => setVisible(!visible)}
            >
                <div className="relative z-2 shrink-0">
                    <Image
                        className="size-16 rounded-xl opacity-100 object-cover max-md:w-18 max-md:h-18"
                        src={image}
                        width={64}
                        height={64}
                        alt=""
                    />
                </div>
                <div className="max-w-69 pl-5 max-md:max-w-fit max-md:w-[calc(100%-4rem)] max-md:pl-4">
                    <div className="pt-0.5 text-sub-title-1 max-md:pt-0 max-md:line-clamp-1">
                        {title}
                    </div>
                    <div className="relative">
                        <div
                            className={`absolute top-0 left-0 truncate text-caption text-t-secondary/80 transition-all group-hover:invisible group-hover:opacity-0 max-md:right-0 ${
                                mobileContent ? "max-md:hidden" : ""
                            } ${
                                visible
                                    ? "max-lg:invisible max-lg:opacity-0"
                                    : ""
                            }`}
                        >
                            {details}
                        </div>
                        <div
                            className={`hidden absolute top-0 left-0 items-center transition-all max-md:flex ${
                                visible
                                    ? "max-lg:invisible max-lg:opacity-0"
                                    : "max-lg:visible max-lg:opacity-100"
                            }`}
                        >
                            {mobileContent}
                        </div>
                        <div
                            className={`flex flex-wrap gap-2 mt-0.5 -ml-1 invisible opacity-0 transition-all group-hover:visible group-hover:opacity-100 max-md:mt-2 max-md:-mr-4 max-md:gap-0 ${
                                visible
                                    ? "max-lg:visible max-lg:opacity-100"
                                    : ""
                            }`}
                        >
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </td>
    );
};

export default TableProductCell;
