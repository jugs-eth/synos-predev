import Image from "@/components/Image";

type CustomerType = {
    name: string;
    email: string;
    avatar: string;
};

type CustomerProps = {
    value: CustomerType;
    isActive: boolean;
    onClick: () => void;
};

const Customer = ({ value, isActive, onClick }: CustomerProps) => (
    <div
        className="group relative flex items-center p-3 cursor-pointer"
        onClick={onClick}
    >
        <div
            className={`box-hover ${isActive ? "visible opacity-100" : ""}`}
        ></div>
        <div className="relative z-2 shrink-0">
            <Image
                className="size-12 rounded-full opacity-100 object-cover"
                src={value.avatar}
                width={48}
                height={48}
                alt=""
            />
        </div>
        <div className="relative z-2 w-[calc(100%-3rem)] pl-5 max-lg:pl-4">
            <div className="truncate text-sub-title-1">{value.name}</div>
            <div className="truncate text-body-2 text-t-secondary/80">
                {value.email}
            </div>
        </div>
    </div>
);

export default Customer;
