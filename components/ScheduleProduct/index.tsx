import { useState } from "react";
import { NumericFormat } from "react-number-format";
import Icon from "@/components/Icon";
import Modal from "@/components/Modal";
import Image from "@/components/Image";
import DateAndTime from "@/components/DateAndTime";
import Button from "@/components/Button";

type ShareProductProps = {
    title: string;
    details: string;
    image: string;
    price: number;
    reSchedule?: boolean;
};

const ShareProduct = ({
    title,
    details,
    image,
    price,
    reSchedule,
}: ShareProductProps) => {
    const [open, setOpen] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const [startTime, setStartTime] = useState(new Date());

    return (
        <>
            <button className="action" onClick={() => setOpen(true)}>
                <Icon name="calendar" />
                {reSchedule ? "Reschedule" : "Schedule"}
            </button>
            <Modal
                classWrapper="relative !max-w-120 !p-3"
                open={open}
                onClose={() => setOpen(false)}
            >
                <div className="flex items-center mb-3 p-4 bg-b-surface2 rounded-[1.25rem] max-md:p-3">
                    <div className="relative shrink-0 w-16 h-16">
                        <Image
                            className="rounded-xl opacity-100"
                            src={image}
                            alt=""
                            fill
                            sizes="64px"
                        />
                    </div>
                    <div className="flex items-start grow pl-5 max-md:block max-md:w-[calc(100%-4rem)] max-md:pl-4">
                        <div className="grow">
                            <div className="text-[1.125rem] font-medium max-md:truncate">
                                {title}
                            </div>
                            <div className="text-body-2 text-t-secondary/80">
                                {details}
                            </div>
                        </div>
                        <NumericFormat
                            className={`shrink-0 ml-3 label  max-md:hidden ${
                                price === 0 ? "label-gray" : "label-green"
                            }`}
                            value={price}
                            thousandSeparator=","
                            decimalScale={2}
                            fixedDecimalScale
                            displayType="text"
                            prefix="$"
                        />
                    </div>
                </div>
                <div className="p-5 max-md:p-3">
                    <div className="mb-2 text-h4 max-md:text-h5">
                        {reSchedule ? "Reschedule" : "Schedule"} product
                    </div>
                    <div className="mb-8 text-t-tertiary max-md:mb-4">
                        Choose a day and time in the future you want your
                        product to be published.
                    </div>
                    <DateAndTime
                        startDate={startDate}
                        setStartDate={setStartDate}
                        startTime={startTime}
                        setStartTime={setStartTime}
                    />
                    <div className="flex justify-end gap-3 mt-8 max-md:mt-4">
                        <Button
                            className="max-md:flex-1"
                            isStroke
                            onClick={() => setOpen(false)}
                        >
                            Cancel
                        </Button>
                        <Button className="max-md:flex-1" isBlack>
                            {reSchedule ? "Reschedule" : "Schedule"}
                        </Button>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default ShareProduct;
