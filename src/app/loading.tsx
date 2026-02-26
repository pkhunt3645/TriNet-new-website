import React from 'react'

const Loading: React.FC = () => {
    return (
        <div className='min-h-screen flex justify-center items-center bg-linear-to-br from-light-cyan to-white'>
            <div className="flex flex-col items-center gap-4">
                {/* Spinner */}
                <div className="relative w-16 h-16">
                    <div className="absolute inset-0 border-4 border-primary/20 rounded-full"></div>
                    <div className="absolute inset-0 border-4 border-transparent border-t-primary rounded-full animate-spin"></div>
                </div>
                {/* Loading Text */}
                <p className="text-secondary font-medium text-lg animate-pulse">Loading...</p>
            </div>
        </div>
    )
}

export default Loading;
