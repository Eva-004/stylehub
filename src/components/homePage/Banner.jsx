'use client';

import Image from "next/image";
import { Button } from "@heroui/react";
import { motion } from "framer-motion";
import { FaBalanceScale, FaGavel, FaUserTie } from "react-icons/fa";
import { HiOutlineArrowRight } from "react-icons/hi";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

const Banner = () => {
    const slides = [
        {
            title: "Discover Your Signature Style",
            image: "/images/banner1.jpeg",
            description:
                "Explore the latest fashion collections with premium quality clothing for every season and occasion.",
        },
        {
            title: "New Arrivals, Fresh Looks",
            image: "/images/banner2.avif",
            description:
                "Shop trending outfits, timeless essentials, and exclusive styles designed to elevate your wardrobe.",
        },
        {
            title: "Fashion That Fits Your Lifestyle",
            image: "/images/banner3.avif",
            description:
                "Find stylish apparel, comfortable everyday wear, and must-have accessories—all in one place.",
        },
    ];

    return (
        <section className="relative h-[85vh] overflow-hidden">
            <Swiper
                navigation
                pagination={{ clickable: true }}
                modules={[Navigation, Pagination, Autoplay]}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                centeredSlides
                className="h-full"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative h-[85vh] w-full">
                            <div className="absolute inset-0">
                                <Image
                                    src={slide.image}
                                    alt={slide.title}
                                    fill
                                    priority={index === 0}
                                    className="object-cover"
                                />
                            </div>

                            <div className="absolute inset-0 bg-slate-900/35" />

                            <motion.div
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="absolute top-24 left-16 hidden lg:block z-10"
                            >
                                
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 20, 0] }}
                                transition={{ duration: 5, repeat: Infinity }}
                                className="absolute right-20 top-32 hidden lg:block z-10"
                            >
                                
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 6, repeat: Infinity }}
                                className="absolute bottom-24 right-32 hidden lg:block z-10"
                            >
                                
                            </motion.div>

                            <div className="absolute inset-0 z-20 flex items-center justify-center">
                                <div className="max-w-4xl text-center px-6">
                                    <motion.h1
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.8 }}
                                        className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6"
                                    >
                                        {slide.title}
                                    </motion.h1>

                                    <motion.p
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 1, delay: 0.2 }}
                                        className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
                                    >
                                        {slide.description}
                                    </motion.p>

                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.8, delay: 0.4 }}
                                    >
                                        <Link href={'/products'}>
                                            <Button

                                                size="lg"
                                                className="font-semibold bg-[#244D3F] text-white hover:scale-105  transition-all duration-300 shadow-lg"
                                            >
                                                <span className="flex  items-center gap-2">
                                                    Explore Collection
                                                    <HiOutlineArrowRight className="text-xl" />
                                                </span>
                                            </Button>
                                        </Link>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Banner;