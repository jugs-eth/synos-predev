import React from "react";
import Card from "@/components/Card";

import { timeSlots } from "@/mocks/activeTimes";

const days = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

const ActiveTimes = () => {
    const getEngagementClass = (level: number) => {
        switch (level) {
            case 0:
                return "opacity-5 dark:opacity-20"; // least active
            case 1:
                return "opacity-10 dark:opacity-35"; // medium active
            case 2:
                return "opacity-15 dark:opacity-50"; // most active
            default:
                return "opacity-5 dark:opacity-20";
        }
    };

    return (
        <Card title="Active times">
            <div className="p-5 max-lg:p-3">
                <div className="flex">
                    <div className="flex flex-col shrink-0 w-20 gap-0.5 max-md:w-16">
                        {timeSlots.map((slot) => (
                            <div
                                className="flex items-center h-5 text-caption text-t-tertiary/80"
                                key={slot.id}
                            >
                                {slot.time}
                            </div>
                        ))}
                    </div>
                    <div className="grid grid-cols-7 gap-0.5 grow">
                        {timeSlots.map((slot) => (
                            <React.Fragment key={slot.id}>
                                {days.map((day) => (
                                    <div
                                        key={`${slot.id}-${day}`}
                                        className={`h-5 bg-shade-04 rounded dark:bg-shade-05 ${getEngagementClass(
                                            slot.days[
                                                day as keyof typeof slot.days
                                            ]
                                        )}`}
                                    />
                                ))}
                            </React.Fragment>
                        ))}
                        {days.map((day) => (
                            <div
                                key={day}
                                className="mt-2.5 text-caption text-t-tertiary/80 text-center"
                            >
                                {day}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex items-center justify-center gap-4 mt-5">
                    <div className="text-caption text-t-primary/80">
                        Least engaged
                    </div>
                    <div className="flex gap-0.5">
                        <div className="w-12 h-2 rounded-[2px] bg-shade-04 opacity-5 max-md:w-6 dark:bg-shade-05 dark:opacity-20"></div>
                        <div className="w-12 h-2 rounded-[2px] bg-shade-04 opacity-10 max-md:w-6 dark:bg-shade-05 dark:opacity-35"></div>
                        <div className="w-12 h-2 rounded-[2px] bg-shade-04 opacity-15 max-md:w-6 dark:bg-shade-05 dark:opacity-50"></div>
                    </div>
                    <div className="text-caption text-t-primary/80">
                        Most engaged
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default ActiveTimes;
