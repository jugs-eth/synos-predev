import Icon from "@/components/Icon";
import Image from "@/components/Image";

const highlights = [
    "36 Compositions",
    "Lightning-fast creation",
    "Beautiful light and dark mode",
    "Fully customizable",
    "Minimal & thoughtful designs",
];

const Description = ({}) => (
    <div className="flex text-[1.125rem] font-medium leading-[1.75rem] max-lg:block">
        <div className="grow pr-16 max-xl:pr-10 max-lg:pr-0">
            <div className="mb-8 text-h4 max-md:mb-6 max-md:text-h5">
                Overview
            </div>
            <div className="[&_p,&_ul]:mb-7 [&_ul]:list-disc [&_ul]:pl-5 [&_a]:underline [&_a]:hover:no-underline [&_p:last-child,&_ul:last-child]:mb-0">
                <p>
                    Introducing the next evolution of our premium{" "}
                    <a href="#">
                        <strong>UI system</strong>
                    </a>
                    . Bento Pro Vol.2 builds upon our foundation of minimal
                    design principles while{" "}
                    <strong>introducing advanced compositions</strong> for
                    modern digital experiences. This expanded collection
                    maintains our signature clean aesthetic with seamless light
                    and dark mode support, elevated by new, thoughtfully crafted
                    components.
                </p>
                <p>
                    We&apos;ve refined every detail to perfection, from enhanced
                    gradient treatments to more sophisticated interactions. New
                    dashboard layouts, expanded messaging interfaces, and
                    innovative data visualizations provide even more tools for
                    creating exceptional user experiences 🚀
                </p>
                <p className="!mb-0">
                    <strong>🚀 Perfect for:</strong>
                </p>
                <ul>
                    <li>Analytics Platforms</li>
                    <li>Crypto Dashboards</li>
                    <li>Team Collaboration Tools</li>
                    <li>Client Portals</li>
                    <li>Marketing Websites</li>
                    <li>Product Management Systems</li>
                </ul>
                <p>
                    Transform your design workflow with our most comprehensive
                    release yet. Whether you&apos;re crafting fintech solutions,
                    social platforms, or enterprise applications, Bento Pro
                    Vol.2 delivers unmatched versatility with professional
                    polish. 😎
                </p>
            </div>
        </div>
        <div className="shrink-0 w-91 max-lg:flex max-lg:gap-15 max-lg:w-full max-lg:mt-16 max-md:flex-col max-md:gap-8 max-md:mt-8">
            <div className="max-lg:flex-1">
                <div className="mb-8 text-h4 max-lg:mb-3 max-lg:text-h5">
                    Highlights
                </div>
                <ul>
                    {highlights.map((highlight) => (
                        <li
                            className="flex items-center py-5 border-t border-s-stroke2 first:border-t-0"
                            key={highlight}
                        >
                            <Icon
                                className="mr-3 fill-t-primary"
                                name="check-circle-fill"
                            />{" "}
                            {highlight}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="mt-15 max-lg:flex-1 max-lg:mt-0">
                <div className="flex items-center">
                    <div className="shrink-0">
                        <Image
                            className="size-17 object-cover opacity-100 rounded-full"
                            src="/images/avatar.png"
                            width={68}
                            height={68}
                            alt="shop-banner"
                        />
                    </div>
                    <div className="grow pl-6">
                        <div className="text-h4 max-lg:text-h5">@chelsie</div>
                        <div className="text-t-secondary">Chelsie Haylie</div>
                    </div>
                </div>
                <div className="flex mt-8 border-t border-s-stroke2">
                    <div className="flex-1 pt-8 pr-8 border-r border-s-stroke2 max-md:pt-6">
                        <div className="flex items-center gap-2">
                            <div className="text-h4">4.96</div>
                            <Icon
                                className="!size-4 fill-t-primary"
                                name="star-fill"
                            />
                        </div>
                        <div>Ratings</div>
                    </div>
                    <div className="flex-1 pt-8 pl-8 max-md:pt-6">
                        <div className="text-h4">8+</div>
                        <div>Years selling</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Description;
