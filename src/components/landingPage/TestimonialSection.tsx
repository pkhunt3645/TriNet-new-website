"use client";
import React from 'react';
import "swiper/css";
import "swiper/css/navigation";
import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { testimonialsData } from "@/data/landingPageData";
import { Star, ArrowLeft, ArrowRight } from "lucide-react";
import { useRef } from "react";
import { SectionHeading } from '@/components/common';

const TestimonialSection: React.FC = () => {
    const swiperRef = useRef<SwiperType | null>(null);

    return (
        <section className="tn-section">
            <div className="tn-container space-y-6 md:space-y-8">
                <SectionHeading
                    heading={'Testimonials'}
                    title={'What our <span>clients say?</span>'}
                />

                <div
                    className="relative px-4 lg:px-0"
                    onMouseEnter={() => swiperRef.current?.autoplay.stop()}
                    onMouseLeave={() => swiperRef.current?.autoplay.start()}
                >
                    <Swiper
                        loop
                        modules={[Autoplay, Navigation]}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        speed={600}
                        slidesPerView={1}
                        spaceBetween={40}
                        breakpoints={{
                            1024: {
                                slidesPerView: 2,
                            },
                        }}
                        navigation={{
                            prevEl: ".testimonial-prev",
                            nextEl: ".testimonial-next",
                        }}
                    >
                        {testimonialsData.map((item) => (
                            <SwiperSlide key={item.id}>
                                <blockquote className="max-w-xl mx-auto flex flex-col gap-3 md:gap-4">
                                    <div className="flex gap-1">
                                        {Array.from({ length: 5 }).map((_, i) => (
                                            <Star key={i} className={`w-5 h-5 text-primary ${i < item.rating ? "fill-current" : ""}`} />
                                        ))}
                                    </div>
                                    <p className="text-secondary text-base lg:text-lg leading-relaxed grow">{item.content}</p>
                                    <div className="pt-2">
                                        <p className="font-semibold text-primary">{item.author}</p>
                                        <span className="text-sm text-secondary">{item.company}</span>
                                    </div>
                                </blockquote>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <span className="hidden lg:block absolute inset-y-0 left-1/2 w-0.5 rounded-full bg-linear-to-t from-light-cyan via-secondary to-lightfrom-light-cyan animate-fadeInUp" />

                    <div className='flex items-center justify-center gap-4 pt-4 lg:hidden animate-fadeInUp'>
                        <button className='testimonial-prev p-2 rounded-full border-2 border-primary hover:bg-primary cursor-pointer flex items-center justify-center transition duration-500 group'>
                            <ArrowLeft className='w-5 h-5 text-primary group-hover:text-white group-hover:scale-110 transition duration-500' />
                        </button>
                        <button className='testimonial-next p-2 rounded-full border-2 border-primary hover:bg-primary cursor-pointer flex items-center justify-center transition duration-500 group'>
                            <ArrowRight className='w-5 h-5 text-primary group-hover:text-white group-hover:scale-110 transition duration-500' />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TestimonialSection;