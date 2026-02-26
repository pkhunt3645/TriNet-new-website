import React from 'react'

const ImageSkeleton: React.FC = () => {
    return (
        <div className='relative w-full h-full flex items-center'>
            <div className='absolute inset-0 bg-linear-to-br from-primary/20 via-secondary/10 to-primary/20 animate-pulse'>
                <div className='absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent animate-shimmer'></div>
            </div>
            <div className='tn-container relative z-10 py-12 md:py-16 lg:py-20'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 px-8 md:px-10 lg:px-12'>
                    <div className='flex flex-col justify-center gap-6'>
                        <div className='flex flex-col gap-3'>
                            <div className='h-7 w-48 bg-white/20 rounded animate-pulse'></div>
                            <div className='h-16 w-full max-w-xl bg-white/20 rounded animate-pulse'></div>
                            <div className='h-6 w-full max-w-lg bg-white/20 rounded animate-pulse'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageSkeleton;
