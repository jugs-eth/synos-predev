import Link from "next/link";
import Card from "@/components/Card";
import Image from "@/components/Image";
import Button from "@/components/Button";

import { commentsDashboard } from "@/mocks/comments";

const Comments = ({}) => {
    return (
        <Card classHead="!pl-3" title="Comments">
            <div className="flex flex-col gap-1">
                {commentsDashboard.map((comment) => (
                    <div
                        className="group relative flex items-start px-3 py-5 transition-all"
                        key={comment.id}
                    >
                        <div className="box-hover"></div>
                        <div className="relative z-2 shrink-0">
                            <Image
                                className="size-11 rounded-full opacity-100"
                                src={comment.avatar}
                                width={44}
                                height={44}
                                alt=""
                            />
                        </div>
                        <div className="relative z-2 grow pl-5">
                            <div className="mb-1 text-sub-title-1">
                                {comment.name}&nbsp;
                                <span className="text-t-secondary">on</span>
                                &nbsp;
                                <Link
                                    className="transition-colors hover:text-shade-05 dark:hover:text-shade-08/90"
                                    href="/shop/details"
                                >
                                    {comment.product}
                                </Link>
                            </div>
                            <div className="mb-3 text-caption text-t-tertiary">
                                {comment.time}
                            </div>
                            <div className="text-body-1">{comment.content}</div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="pt-6 px-3 pb-3">
                <Button
                    className="w-full"
                    href="/products/comments"
                    as="link"
                    isStroke
                >
                    All comments
                </Button>
            </div>
        </Card>
    );
};

export default Comments;
