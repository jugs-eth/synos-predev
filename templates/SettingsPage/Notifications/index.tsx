import { useState } from "react";
import Card from "@/components/Card";
import Switch from "@/components/Switch";
import Tooltip from "@/components/Tooltip";

const Notifications = ({}) => {
    const [productUpdates, setProductUpdates] = useState(true);
    const [marketNewsletter, setMarketNewsletter] = useState(false);
    const [comments, setComments] = useState(true);
    const [likes, setLikes] = useState(true);
    const [newPurchases, setNewPurchases] = useState(true);

    const notifications = [
        {
            id: 1,
            title: "Product updates and community announcements",
            tooltip: "Maximum 100 characters. No HTML or emoji allowed",
            checked: productUpdates,
            onChange: setProductUpdates,
        },
        {
            id: 2,
            title: "Market newsletter",
            tooltip: "Maximum 100 characters. No HTML or emoji allowed",
            checked: marketNewsletter,
            onChange: setMarketNewsletter,
        },
        {
            id: 3,
            title: "Comments",
            tooltip: "Maximum 100 characters. No HTML or emoji allowed",
            checked: comments,
            onChange: setComments,
        },
        {
            id: 4,
            title: "Likes",
            tooltip: "Maximum 100 characters. No HTML or emoji allowed",
            checked: likes,
            onChange: setLikes,
        },
        {
            id: 5,
            title: "New purchases",
            tooltip: "Maximum 100 characters. No HTML or emoji allowed",
            checked: newPurchases,
            onChange: setNewPurchases,
        },
    ];

    return (
        <Card title="Notifications">
            <div className="px-5 max-lg:px-3">
                {notifications.map((notification) => (
                    <div
                        className="flex justify-between items-center gap-6 py-6 border-b border-s-subtle last:border-b-0"
                        key={notification.id}
                    >
                        <div className="flex items-center">
                            <div className="text-button">
                                {notification.title}
                            </div>
                            <Tooltip
                                className="ml-1.5"
                                content="Maximum 100 characters. No HTML or emoji allowed"
                            />
                        </div>
                        <Switch
                            className="shrink-0"
                            checked={notification.checked}
                            onChange={() =>
                                notification.onChange(!notification.checked)
                            }
                        />
                    </div>
                ))}
            </div>
        </Card>
    );
};

export default Notifications;
