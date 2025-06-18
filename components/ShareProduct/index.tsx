import { useState } from "react";
import Icon from "@/components/Icon";
import Modal from "@/components/Modal";
import Image from "@/components/Image";
import Button from "@/components/Button";

const socials = [
    {
        icon: "instagram",
        href: "https://www.instagram.com/ui8net/",
    },
    {
        icon: "twitter",
        href: "https://x.com/ui8",
    },
    {
        icon: "facebook",
        href: "https://www.facebook.com/ui8.net/",
    },
    {
        icon: "threads",
        href: "https://www.threads.net/@ui8net",
    },
];

type ShareProductProps = {
    title: string;
    details: string;
    image: string;
};

const ShareProduct = ({ title, details, image }: ShareProductProps) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button className="action" onClick={() => setOpen(true)}>
                <Icon name="link" />
                Share
            </button>
            <Modal open={open} onClose={() => setOpen(false)}>
                <div className="mb-8 text-h4 max-md:text-h5">
                    Share this product
                </div>
                <div className="flex items-center mb-8">
                    <div className="shrink-0">
                        <Image
                            className="size-20 rounded-2xl opacity-100"
                            src={image}
                            width={80}
                            height={80}
                            alt=""
                        />
                    </div>
                    <div className="w-[calc(100%-5rem)] pl-6">
                        <div className="truncate text-h6">{title}</div>
                        <div className="mt-1 truncate text-body-1 text-t-secondary/80">
                            {details}
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap -mt-3 -mx-1.5">
                    {socials.map((social, index) => (
                        <Button
                            className="w-[calc(50%-0.75rem)] mt-3 mx-1.5 max-md:w-[calc(100%-0.75rem)]"
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
                <Button className="w-full mt-3" isBlack>
                    Copy link
                </Button>
            </Modal>
        </>
    );
};

export default ShareProduct;
