import Table from "@/components/Table";
import TableRow from "@/components/TableRow";
import Image from "@/components/Image";
import Icon from "@/components/Icon";
import Percentage from "@/components/Percentage";
import { PublishedItem } from "@/types/promote";

const tableHead = ["Campaign", "Likes", "Views", "Conversation rate"];

type PublishedType = {
    items: PublishedItem[];
};

type IndicatorProps = {
    value: number;
    percentage: number;
};

const Indicator = ({ value, percentage }: IndicatorProps) => {
    return (
        <div className="inline-flex items-center gap-2 max-md:h-7">
            <div className="min-w-8">{value}</div>
            <div className="relative w-8 h-1.5 rounded-[2px] bg-shade-07/40">
                <div
                    className="absolute top-0 left-0 bottom-0 rounded-[2px] bg-chart-green"
                    style={{
                        width: `${percentage}%`,
                    }}
                />
            </div>
        </div>
    );
};

const Published = ({ items }: PublishedType) => {
    return (
        <Table
            cellsThead={tableHead.map((head) => (
                <th className="whitespace-nowrap last:text-right" key={head}>
                    {head}
                </th>
            ))}
        >
            {items.map((item) => (
                <TableRow
                    className="max-md:flex max-md:flex-wrap max-md:items-center"
                    key={item.id}
                >
                    <td className="max-md:!pb-0">
                        <div className="inline-flex items-center">
                            <div className="shrink-0">
                                <Image
                                    className="size-16 rounded-xl opacity-100 object-cover"
                                    src={item.image}
                                    width={64}
                                    height={64}
                                    alt=""
                                />
                            </div>
                            <div className="pl-5 max-md:pl-4">
                                <div className="max-w-100 line-clamp-1 text-sub-title-1 max-3xl:max-w-66">
                                    {item.title}
                                </div>
                                <div className="flex items-center gap-4 mt-2">
                                    {item.socials.map((social) => (
                                        <a
                                            className="group/social"
                                            href={social.href}
                                            key={social.icon}
                                        >
                                            <Icon
                                                className="!size-5 fill-t-secondary transition-colors group-hover/social:fill-t-primary"
                                                name={social.icon}
                                            />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </td>
                    <td className="max-md:!border-0">
                        <div className="hidden mb-1 text-caption text-t-tertiary/80 max-md:block">
                            Likes
                        </div>
                        <Indicator
                            value={item.likes.counter}
                            percentage={item.likes.percentage}
                        />
                    </td>
                    <td className="max-md:!border-0">
                        <div className="hidden mb-1 text-caption text-t-tertiary/80 max-md:block">
                            Views
                        </div>
                        <Indicator
                            value={item.views.counter}
                            percentage={item.views.percentage}
                        />
                    </td>
                    <td className="text-right max-md:!border-0 max-md:text-left">
                        <div className="hidden mb-1 text-caption text-t-tertiary/80 max-md:block">
                            Conversation rate
                        </div>
                        <Percentage value={item.conversationRate} />
                    </td>
                </TableRow>
            ))}
        </Table>
    );
};

export default Published;
