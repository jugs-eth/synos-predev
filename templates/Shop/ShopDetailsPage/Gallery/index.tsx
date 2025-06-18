import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";
import Image from "@/components/Image";
import Modal from "@/components/Modal";
import Button from "@/components/Button";

import "swiper/css";
import "swiper/css/navigation";

const images = [
    "/images/gallery-pic-1.png",
    "/images/gallery-pic-2.png",
    "/images/gallery-pic-3.png",
];

const Gallery = ({}) => {
    const [open, setOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(images[0]);
    const swiperRef = useRef<SwiperType | null>(null);

    const handlePrev = () => {
        if (swiperRef.current) {
            swiperRef.current.slidePrev();
        }
    };

    const handleNext = () => {
        if (swiperRef.current) {
            swiperRef.current.slideNext();
        }
    };

    return (
        <>
            <div className="relative mt-12 pr-94 max-lg:mt-8 max-md:pr-0">
                {images.map((image, index) => (
                    <div
                        className={`group overflow-hidden cursor-pointer rounded-4xl max-md:hidden ${
                            index === 0
                                ? "relative h-150 max-lg:h-120 max-md:!block max-md:h-64"
                                : "absolute right-0 w-91 h-[calc(50%-0.375rem)]"
                        } ${index === 1 ? "top-0" : ""} ${
                            index === 2 ? "bottom-0" : ""
                        }`}
                        key={index}
                        onClick={() => {
                            setOpen(true);
                            setCurrentImage(image);
                        }}
                    >
                        <Image
                            className=" object-cover transition-transform duration-1000 group-hover:scale-105"
                            fill
                            src={image}
                            alt=""
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            priority
                        />
                    </div>
                ))}
            </div>
            <Modal
                className="!p-0"
                classWrapper="max-w-full h-svh px-36 py-5 rounded-none max-lg:flex max-lg:px-5  max-md:px-3"
                open={open}
                onClose={() => setOpen(false)}
            >
                <div className="max-w-288 mx-auto max-lg:max-w-auto max-lg:w-full max-lg:m-auto">
                    <Swiper
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        className="mySwiper"
                        slidesPerView={"auto"}
                        spaceBetween={16}
                        modules={[Navigation]}
                        navigation={false}
                        speed={800}
                        loop={true}
                        initialSlide={images.indexOf(currentImage)}
                    >
                        {images.map((image, index) => (
                            <SwiperSlide
                                className="!flex !items-center !justify-center !h-[calc(100svh-2.5rem)] max-lg:!h-auto"
                                key={index}
                            >
                                <div className="relative w-full !max-h-[calc(100svh-2.5rem)] aspect-[1.5] max-[1519px]:h-[calc(100svh-2.5rem)] max-[1519px]:aspect-auto max-lg:!max-h-full max-lg:!h-auto max-lg:aspect-square">
                                    <Image
                                        className="object-cover rounded-4xl"
                                        src={image}
                                        fill
                                        alt=""
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="max-lg:flex max-lg:justify-center max-lg:mt-6 max-lg:gap-6">
                        <Button
                            className="absolute top-1/2 left-5 -translate-y-1/2 fill-t-secondary disabled:border-transparent disabled:fill-t-secondary rotate-180 max-lg:static max-lg:translate-y-0 cursor-pointer"
                            icon="arrow"
                            isCircle
                            isStroke
                            onClick={handlePrev}
                        />
                        <Button
                            className="absolute top-1/2 right-5 -translate-y-1/2 fill-t-secondary disabled:border-transparent disabled:fill-t-secondary max-lg:static max-lg:translate-y-0 cursor-pointer"
                            icon="arrow"
                            isStroke
                            isCircle
                            onClick={handleNext}
                        />
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default Gallery;
