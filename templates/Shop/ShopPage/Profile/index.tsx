import Image from "@/components/Image";
import Button from "@/components/Button";

const socials = [
    {
        icon: "twitter",
        href: "https://x.com/ui8",
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

const Profile = ({}) => (
    <div className="flex items-end max-md:block max-md:px-3">
        <div className="size-40 shrink-0 overflow-hidden rounded-full border-3 border-b-surface2 max-lg:size-33 max-md:size-24 max-md:mb-2">
            <Image
                className="w-full h-full object-cover opacity-100"
                src="/images/avatar.png"
                width={160}
                height={160}
                alt="shop-banner"
            />
        </div>
        <div className="flex grow pl-6 py-2 max-md:p-0">
            <div className="mr-auto">
                <div className="text-h4">Chelsie Haley</div>
                <div className="mt-1 text-sub-title-1 text-t-secondary">
                    Dream Big. Think Different. Do Great!
                </div>
            </div>
            <div className="flex gap-3 mr-3 max-lg:hidden">
                {socials.map((social, index) => (
                    <Button
                        icon={social.icon}
                        key={index}
                        as="a"
                        href={social.href}
                        target="_blank"
                        isStroke
                        isCircle
                    />
                ))}
            </div>
            <Button
                className="max-md:hidden"
                isBlack
                as="link"
                href="/settings"
            >
                Edit profile
            </Button>
        </div>
    </div>
);

export default Profile;
