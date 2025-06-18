import { useState } from "react";
import Button from "@/components/Button";
import Modal from "@/components/Modal";
import Icon from "@/components/Icon";
import Image from "@/components/Image";
import DateAndTime from "@/components/DateAndTime";
import PostTo from "./PostTo";

type SchedulePostProps = {
    className?: string;
    title?: string;
    isSmallButton?: boolean;
};

const SchedulePost = ({
    className,
    title,
    isSmallButton,
}: SchedulePostProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const [startTime, setStartTime] = useState(new Date());

    return (
        <>
            {isSmallButton ? (
                <button
                    className={`action ${className || ""}`}
                    onClick={() => setIsOpen(true)}
                >
                    <Icon name="calendar" />
                    Publish
                </button>
            ) : (
                <Button
                    className={`max-md:flex-1 ${className || ""}`}
                    isStroke
                    onClick={() => setIsOpen(true)}
                >
                    {title}
                </Button>
            )}
            <Modal
                classWrapper="relative flex flex-col min-h-100 !p-8 max-md:!p-6"
                open={isOpen}
                onClose={() => setIsOpen(false)}
            >
                <div className="flex items-center max-md:block">
                    <div className="text-h5 max-md:mb-2">
                        Schedule this post to
                    </div>
                    <div className="flex gap-4 ml-4 max-md:ml-0">
                        {["twitter", "threads", "mastodon"].map((item) => (
                            <div className="flex items-center gap-4" key={item}>
                                <Icon
                                    className="gap-5 fill-t-primary"
                                    name={item}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex items-start mt-6 max-md:mt-3">
                    <div className="shrink-0">
                        <Image
                            className="size-20 rounded-xl opacity-100"
                            src="/images/products/2.png"
                            width={80}
                            height={80}
                            alt="Post"
                        />
                    </div>
                    <div className="flex grow pl-6 max-md:block max-md:pl-4">
                        <div className="text-body-2 line-clamp-3 max-md:line-clamp-2">
                            Excited to announce the launch of Core Dashboard 2.0
                            on the UI8 marketplace! This UI Design Kit is packed
                            with sleek components and modern layouts to elevate
                            your projects.
                        </div>
                        <button className="action ml-6 shrink-0 max-md:mt-3 max-md:ml-0">
                            <Icon name="edit" />
                            Edit
                        </button>
                    </div>
                </div>
                <PostTo />
                <DateAndTime
                    className="mt-8 max-md:mt-6"
                    label="Select date and time"
                    tooltip="Maximum 100 characters. No HTML or emoji allowed"
                    startDate={startDate}
                    setStartDate={setStartDate}
                    startTime={startTime}
                    setStartTime={setStartTime}
                />
                <div className="flex justify-end gap-3 mt-12 max-md:mt-6">
                    <Button
                        className="max-md:flex-1"
                        isStroke
                        onClick={() => setIsOpen(false)}
                    >
                        Cancel
                    </Button>
                    <Button className="max-md:flex-1" isBlack>
                        Schedule
                    </Button>
                </div>
            </Modal>
        </>
    );
};

export default SchedulePost;
