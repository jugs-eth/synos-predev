import { useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";
import Card from "@/components/Card";
import Image from "@/components/Image";
import Button from "@/components/Button";

import { sliderData } from "@/mocks/dashboard";

import "swiper/css";
import "swiper/css/navigation";

const OverviewSlider = ({}) => {
    const [isFirstSlide, setIsFirstSlide] = useState(true);
    const [isLastSlide, setIsLastSlide] = useState(false);

    const handleSlideChange = (swiper: SwiperType) => {
        setIsFirstSlide(swiper.isBeginning);
        setIsLastSlide(swiper.progress >= 0.99);
    };

    return (
        <Card
            className="overflow-hidden"
            title="Overview"
            headContent={
                <div className="flex items-center gap-1">
                    <Button
                        className="arrow-prev fill-t-secondary disabled:border-transparent disabled:fill-t-secondary rotate-180"
                        icon="arrow"
                        isCircle
                        isStroke
                    />
                    <Button
                        className="arrow-next fill-t-secondary disabled:border-transparent disabled:fill-t-secondary"
                        icon="arrow"
                        isStroke
                        isCircle
                    />
                </div>
            }
        >
            <div
                className={`relative p-5 pt-6 before:absolute before:-left-3 before:top-0 before:bottom-0 before:z-3 before:w-40 before:bg-linear-to-r before:from-b-surface2 before:to-transparent before:pointer-events-none before:transition-opacity after:absolute after:-right-3 after:top-0 after:bottom-0 after:z-10 after:w-40 after:bg-linear-to-l after:from-b-surface2 after:to-transparent after:pointer-events-none after:transition-opacity hover:before:opacity-0 hover:after:opacity-0 max-3xl:before:w-29 max-3xl:after:w-29 max-lg:before:w-25 max-lg:after:w-25 max-md:before:w-20 max-md:after:w-20 max-md:px-3 max-md:py-4 ${
                    isFirstSlide ? "before:opacity-0" : ""
                } ${isLastSlide ? "after:opacity-0" : ""}`}
            >
                <Swiper
                    slidesPerView={"auto"}
                    spaceBetween={16}
                    modules={[Navigation]}
                    navigation={{
                        nextEl: ".arrow-next",
                        prevEl: ".arrow-prev",
                    }}
                    onSlideChange={handleSlideChange}
                    onInit={handleSlideChange}
                    onProgress={handleSlideChange}
                    className="mySwiper !overflow-visible"
                >
                    {sliderData.map((item) => (
                        <SwiperSlide className="!w-51.5" key={item.id}>
                            <Link
                                className="!flex flex-col !h-59 p-4.5 border border-s-stroke2 rounded-3xl bg-b-highlight transition-all hover:bg-b-surface2 hover:shadow-depth"
                                href="/shop/details"
                            >
                                <div
                                    className="flex justify-center items-center w-16 h-16 mb-auto rounded-full"
                                    style={{
                                        background: item.backgroundImage,
                                    }}
                                >
                                    <Image
                                        className="size-6 opacity-100"
                                        src={item.icon}
                                        width={24}
                                        height={24}
                                        alt=""
                                    />
                                </div>
                                <div className="mb-2 text-sub-title-1">
                                    {item.title}
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="">
                                        <Image
                                            className="size-5 opacity-100 rounded-full"
                                            src={item.avatar}
                                            width={20}
                                            height={20}
                                            alt=""
                                        />
                                    </div>
                                    <div className="mr-auto text-caption text-t-tertiary">
                                        {item.time}
                                    </div>
                                    <div
                                        className={`inline-flex items-center h-5 px-1.5 rounded border text-caption leading-none capitalize ${
                                            item.status === "new"
                                                ? "label-green"
                                                : "label-red"
                                        }`}
                                    >
                                        {item.status}
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </Card>
    );
};

export default OverviewSlider;
