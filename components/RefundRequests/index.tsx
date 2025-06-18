import Link from "next/link";
import Card from "@/components/Card";
import Image from "@/components/Image";
import Button from "@/components/Button";

const RefundRequests = ({}) => {
    return (
        <Card classHead="!pl-3" title="Refund requests">
            <div className="p-3 pt-0">
                <div className="flex items-center mb-8">
                    <div className="flex justify-center items-center shrink-0 w-16 h-16 rounded-full bg-linear-to-b from-[#FFD5BD] to-[#FFC1B1]">
                        <Image
                            className="size-6 rounded-full opacity-100"
                            src="/images/icons/bag.svg"
                            width={24}
                            height={24}
                            alt=""
                        />
                    </div>
                    <div className="grow pl-5 text-body-2 font-medium text-t-secondary [&_a]:text-[0.9375rem] [&_a]:leading-[1.5rem] [&_a]:font-semibold [&_a]:text-t-primary [&_a]:transition-colors [&_a]:hover:text-shade-05 max-2xl:pl-3 max-lg:pl-5 dark:[&_a]:hover:text-shade-08/90">
                        You have{" "}
                        <Link href="/income/refunds">
                            52 open refund requests
                        </Link>{" "}
                        to action. This includes{" "}
                        <Link href="/income/refunds">8 new requests.</Link> 👀
                    </div>
                </div>
                <Button
                    className="w-full"
                    href="/income/refunds"
                    as="link"
                    isStroke
                >
                    View all
                </Button>
            </div>
        </Card>
    );
};

export default RefundRequests;
