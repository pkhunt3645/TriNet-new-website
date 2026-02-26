'use client'

import React from 'react'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { bannerData as bannerSlides } from '@/data/landingPageData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import BannerSlide from './BannerSlide';

const BannerSection: React.FC = () => {
    return (
        <section className='relative w-full'>
            <Swiper
                modules={[Navigation, Autoplay]}
                navigation={{
                    prevEl: '.swiper-button-prev-custom',
                    nextEl: '.swiper-button-next-custom',
                }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                loop={true}
                className='relative md:h-196 lg:h-screen md:max-h-225 w-full'
            >
                {bannerSlides.map((slide, index) => (
                    <SwiperSlide key={slide.id} className='relative w-full h-full pt-10'>
                        <BannerSlide slide={slide} isPriority={index === 0} />
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom Navigation Buttons */}
            <button className='swiper-button-prev-custom absolute left-2 md:left-6 top-1/2 transform -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 flex items-center justify-center cursor-pointer transition duration-500 group'>
                <ChevronLeft className='w-6 h-6 text-white group-hover:scale-110 transition duration-500' />
            </button>
            <button className='swiper-button-next-custom absolute right-2 md:right-6 top-1/2 transform -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 flex items-center justify-center cursor-pointer transition duration-500 group'>
                <ChevronRight className='w-6 h-6 text-white group-hover:scale-110 transition duration-500' />
            </button>
        </section>
    )
}

export default BannerSection;
