import Icon from "@/components/Icon";

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

const Contacts = ({}) => (
    <div>
        <div className="flex flex-wrap justify-between gap-4 max-md:gap-3">
            <div className="flex items-center gap-3 text-body-2">
                <Icon className="fill-t-secondary" name="envelope-think" />
                email@email.com
            </div>
            <div className="flex items-center gap-3 text-body-2 max-lg:order-3">
                <Icon className="fill-t-secondary" name="earth" />
                olivia@website.com
            </div>
            <div className="flex gap-2">
                {socials.map((social, index) => (
                    <a
                        className="group flex items-center justify-center w-9 h-9"
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Icon
                            className="fill-t-secondary transition-colors group-hover:fill-t-primary"
                            name={social.icon}
                        />
                    </a>
                ))}
            </div>
        </div>
    </div>
);

export default Contacts;
