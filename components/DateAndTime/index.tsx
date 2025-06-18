import { useState } from "react";
import DatePicker from "react-datepicker";
import { format, getYear, getMonth } from "date-fns";
import { motion } from "framer-motion";
import Icon from "@/components/Icon";
import Tooltip from "@/components/Tooltip";

const DateAndTime = ({
    className,
    label,
    tooltip,
    startDate,
    setStartDate,
    startTime,
    setStartTime,
}: {
    className?: string;
    label?: string;
    tooltip?: string;
    startDate: Date;
    setStartDate: (date: Date) => void;
    startTime: Date;
    setStartTime: (date: Date) => void;
}) => {
    const [isOpenDate, setIsOpenDate] = useState(false);
    const [isOpenTime, setIsOpenTime] = useState(false);

    const handleChangeDate = (e: Date | null) => {
        setIsOpenDate(!isOpenDate);
        if (e) setStartDate(e);
    };

    const handleChangeTime = (e: Date | null) => {
        setIsOpenTime(!isOpenTime);
        if (e) setStartTime(e);
    };

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    return (
        <div className={className || ""}>
            {label && (
                <div className="flex items-center mb-4">
                    <div className="text-button">{label}</div>
                    {tooltip && (
                        <Tooltip className="ml-1.5" content={tooltip} />
                    )}
                </div>
            )}
            <div className="flex gap-3 pt-2.5 max-md:flex-col max-md:gap-5.5">
                <div className="flex-1">
                    <button
                        className="relative flex items-center w-full h-12 px-4.5 rounded-full border border-s-stroke2 transition-colors hover:border-s-highlight"
                        onClick={() => setIsOpenDate(!isOpenDate)}
                    >
                        <div className="absolute -top-2.75 left-4 px-1 bg-b-surface1 text-caption text-t-secondary/80">
                            Date
                        </div>
                        <div className="text-body-2">
                            {format(startDate, "MMMM dd, yyyy")}
                        </div>
                    </button>
                    {isOpenDate && (
                        <motion.div
                            className="custom-datepicker absolute inset-0 z-10 flex items-center justify-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{
                                delay: 0.2,
                            }}
                        >
                            <div
                                className="absolute inset-0 z-3 bg-shade-07/70 rounded-3xl dark:bg-shade-03/90"
                                onClick={() => setIsOpenDate(false)}
                            ></div>
                            <div className="relative z-5">
                                <DatePicker
                                    minDate={new Date()}
                                    selected={startDate}
                                    onChange={handleChangeDate}
                                    inline
                                    renderCustomHeader={({
                                        date,
                                        decreaseMonth,
                                        increaseMonth,
                                        prevMonthButtonDisabled,
                                        nextMonthButtonDisabled,
                                    }) => (
                                        <div className="flex h-12 items-center justify-between mb-2">
                                            <button
                                                className="flex items-center justify-center w-12 h-12 border border-transparent rounded-full fill-t-secondary transition-colors hover:border-s-stroke2 hover:fill-t-primary disabled:pointer-events-none disabled:border-transparent disabled:opacity-50"
                                                onClick={decreaseMonth}
                                                disabled={
                                                    prevMonthButtonDisabled
                                                }
                                            >
                                                <Icon
                                                    className="rotate-180 fill-inherit"
                                                    name="arrow"
                                                />
                                            </button>
                                            <div className="text-sub-title-1">
                                                {months[getMonth(date)]}&nbsp;
                                                {getYear(date)}
                                            </div>
                                            <button
                                                className="flex items-center justify-center w-12 h-12 border border-transparent rounded-full fill-t-secondary transition-colors hover:border-s-stroke2 hover:fill-t-primary disabled:pointer-events-none disabled:border-transparent disabled:opacity-50"
                                                onClick={increaseMonth}
                                                disabled={
                                                    nextMonthButtonDisabled
                                                }
                                            >
                                                <Icon
                                                    className="fill-inherit"
                                                    name="arrow"
                                                />
                                            </button>
                                        </div>
                                    )}
                                />
                            </div>
                        </motion.div>
                    )}
                </div>
                <div className="flex-1">
                    <button
                        className="relative flex items-center w-full h-12 px-4.5 rounded-full border border-s-stroke2 transition-colors hover:border-s-highlight"
                        onClick={() => setIsOpenTime(!isOpenTime)}
                    >
                        <div className="absolute -top-2.75 left-4 px-1 bg-b-surface1 text-caption text-t-secondary/80">
                            Time
                        </div>
                        <div className="text-body-2">
                            {format(startTime, "hh:mm aa")}
                        </div>
                    </button>
                    {isOpenTime && (
                        <motion.div
                            className="custom-datepicker absolute inset-0 z-10"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{
                                delay: 0.2,
                            }}
                        >
                            <div
                                className="absolute inset-0 z-3 bg-shade-07/70 rounded-3xl dark:bg-shade-03/90"
                                onClick={() => setIsOpenTime(false)}
                            ></div>
                            <div className="absolute top-2 left-1/2 bottom-2 z-5 w-70 -translate-x-1/2">
                                <div className="absolute top-4 left-4 right-4 flex items-center z-10 h-12 px-3 text-sub-title-1">
                                    <Icon
                                        className="mr-3 fill-t-primary"
                                        name="hourglass"
                                    />
                                    {format(startTime, "hh:mm a")}
                                </div>
                                <DatePicker
                                    selected={startTime}
                                    onChange={handleChangeTime}
                                    inline
                                    showTimeSelect
                                    showTimeSelectOnly
                                    timeIntervals={30}
                                    timeFormat="hh:mm aa"
                                />
                            </div>
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DateAndTime;
