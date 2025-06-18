import Card from "@/components/Card";
import Button from "@/components/Button";
import Image from "@/components/Image";

import { productsShare } from "@/mocks/products";

const socials = [
    {
        icon: "twitter",
        href: "https://x.com/ui8",
    },
    {
        icon: "facebook",
        href: "https://www.facebook.com/ui8.net/",
    },
    {
        icon: "instagram",
        href: "https://www.instagram.com/ui8net/",
    },
    {
        icon: "threads",
        href: "https://www.threads.net/@ui8net",
    },
];

const ShareProducts = ({}) => {
    return (
        <Card title="Share products">
            <div className="relative -mx-3 mb-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:z-3 before:w-6 before:bg-linear-to-r before:from-b-surface2 before:to-transparent before:pointer-events-none after:absolute after:right-0 after:top-0 after:bottom-0 after:z-3 after:w-6 after:bg-linear-to-l after:from-b-surface2 after:to-transparent after:pointer-events-none">
                <div className="flex before:shrink-0 before:w-5 after:shrink-0 after:w-5 overflow-x-auto scroll-smooth scrollbar-none">
                    {productsShare.map((product) => (
                        <div
                            className="group relative flex items-center shrink-0 w-77.5 mr-3 p-3 cursor-pointer last:mr-0 max-lg:mr-6 max-lg:px-0 max-md:w-74"
                            key={product.id}
                        >
                            <div className="box-hover max-lg:hidden"></div>
                            <div className="relative z-2 shrink-0">
                                <Image
                                    className="size-16 rounded-xl opacity-100 object-cover"
                                    src={product.image}
                                    width={64}
                                    height={64}
                                    alt={product.title}
                                />
                            </div>
                            <div className="relative z-2 w-[calc(100%-4rem)] pl-3">
                                <div className="flex items-center mb-1">
                                    <div className="grow truncate text-sub-title-1 font-medium">
                                        {product.title}
                                    </div>
                                    <div className="shrink-0 ml-2 label label-green">
                                        ${product.price}
                                    </div>
                                </div>
                                <div className="text-body-2 text-t-secondary/80">
                                    {product.category}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mb-6 px-5 text-body-2 text-t-secondary max-lg:px-3 max-md:text-caption">
                Fifty percent of new customers explore products because the
                author shares their work on social media. <br></br>Start earning
                now! 🔥
            </div>
            <div className="flex gap-3">
                {socials.map((social, index) => (
                    <Button
                        className="flex-1 !px-0"
                        icon={social.icon}
                        key={index}
                        isStroke
                        as="a"
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                    />
                ))}
            </div>
        </Card>
    );
};

export default ShareProducts;
