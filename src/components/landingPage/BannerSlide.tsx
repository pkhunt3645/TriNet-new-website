import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Play } from 'lucide-react';

interface BannerSlideProps {
    slide: {
        id: string | number
        image: string
        subtitle: string
        title: string
        description: string
    }
    isPriority: boolean
}

const BannerSlide: React.FC<BannerSlideProps> = ({ slide, isPriority }) => {
    return (
        <>
            <Image
                fill
                src={slide.image}
                alt={slide.title}
                sizes="100vw"
                className="object-cover"
                priority={slide.id === 1}
            />

            <div className='absolute inset-0 bg-black/40 z-1'></div>

            <div className='tn-container relative z-20 py-12 md:py-16 lg:py-20 h-full'>
                <div className='grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-2 gap-8 lg:gap-12 px-8 md:px-10 lg:px-12 h-full'>
                    <div className='lg:col-span-2 xl:col-span-1 flex flex-col justify-center gap-6 animate-fadeInUp'>
                        <div className='flex flex-col gap-3'>
                            <span className='text-white text-xl lg:text-2xl 3xl:text-3xl font-semibold font-caveat'>{slide.subtitle}</span>
                            <h1 className='text-4xl md:text-5xl lg:text-6xl 3xl:text-7xl font-bold text-white leading-tight'>
                                {slide.title}
                            </h1>
                            <p className='text-lg 3xl:text-xl text-white/90 leading-relaxed max-w-xl'>
                                {slide.description}
                            </p>
                        </div>
                        <div className='flex flex-col items-center sm:items-stretch sm:flex-row gap-4 pt-4'>
                            <Link
                                href="#"
                                className='inline-flex whitespace-nowrap items-center justify-center gap-2 bg-linear-to-br from-primary to-secondary text-white 3xl:text-lg font-semibold py-3 px-8 rounded-full hover:from-secondary hover:to-primary transition duration-500 group'
                            >
                                Learn about us
                                <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition duration-500' />
                            </Link>
                            <Link
                                href="#"
                                className='inline-flex whitespace-nowrap items-center justify-center gap-2 bg-white/20 backdrop-blur-sm text-white 3xl:text-lg font-semibold py-3 px-8 rounded-full hover:bg-white/30 border border-white/30 transition duration-500'
                            >
                                Schedule a Demo
                            </Link>
                        </div>
                        <div className='hidden lg:flex items-center gap-4 pt-4'>
                            <div className='flex -space-x-2'>
                                <div className='w-8 h-8 3xl:h-10 3xl:w-10 rounded-full bg-primary border-2 border-white flex items-center justify-center text-white text-xs 3xl:text-base font-bold'>J</div>
                                <div className='w-8 h-8 3xl:h-10 3xl:w-10 rounded-full bg-secondary border-2 border-white flex items-center justify-center text-white text-xs 3xl:text-base font-bold'>M</div>
                                <div className='w-8 h-8 3xl:h-10 3xl:w-10 rounded-full bg-primary border-2 border-white flex items-center justify-center text-white text-xs 3xl:text-base font-bold'>S</div>
                            </div>
                            <p className='text-white text-sm 3xl:text-base'>
                                <span className='font-semibold'>Trusted by 5000+</span> healthcare providers
                            </p>
                        </div>
                    </div>

                    <div className='flex items-center lg:items-end justify-center lg:justify-end lg:mr-8 lg:mb-8'>
                        <button
                            type='button'
                            aria-label='Play video'
                            className='h-32 w-32 3xl:h-40 3xl:w-40 flex items-center justify-center bg-[url("/images/video-btn-border.png")] bg-contain cursor-pointer bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition duration-500 group hover:scale-90 hover:shadow-lg hover:shadow-white/30 animate-fadeInUp'
                        >
                            <span className='p-4 bg-white rounded-full'>
                                <Play className='w-6 h-6 3xl:w-9 3xl:h-9 text-secondary group-hover:scale-110 transition duration-500' aria-hidden />
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BannerSlide;