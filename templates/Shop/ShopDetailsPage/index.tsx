"use client";

import Layout from "@/components/Layout";
import Image from "@/components/Image";
import Button from "@/components/Button";
import Gallery from "./Gallery";
import Description from "./Description";
import Comments from "./Comments";
import Populars from "./Populars";

const ShopPage = () => {
    return (
        <Layout hideSidebar>
            <div className="flex flex-col gap-22 max-w-310 mx-auto py-10 max-[1519px]:max-w-290 max-xl:gap-16 max-lg:py-6 max-md:py-3 max-md:gap-8 max-md:px-1">
                <div>
                    <div className="flex max-md:block">
                        <div className="grow">
                            <div className="-mt-1.5 text-h3 max-lg:mt-0 max-lg:text-h4 max-md:text-h5">
                                Bento Pro: Multipurpose 2.0
                            </div>
                            <div className="flex items-center gap-3 mt-2.5">
                                <div className="flex justify-center items-center shrink-0 w-8 h-8 bg-b-dark1 rounded-full">
                                    <Image
                                        className="size-4 opacity-100"
                                        src="/images/figma.svg"
                                        width={16}
                                        height={16}
                                        alt="Figma"
                                    />
                                </div>
                                <div className="truncate text-h6 text-t-secondary max-lg:text-sub-title-1">
                                    36 fully editable UI Bento Cards for Figma
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-3 shrink-0 ml-6 max-md:mt-5 max-md:ml-0">
                            <Button
                                className="max-lg:hidden max-md:flex max-md:flex-1"
                                isStroke
                            >
                                Preview
                            </Button>
                            <Button className="max-md:flex-1" isBlack>
                                Purchase<span className="ml-2">$98</span>
                            </Button>
                        </div>
                    </div>
                    <Gallery />
                </div>
                <Description />
                <Comments />
                <Populars />
            </div>
        </Layout>
    );
};

export default ShopPage;
