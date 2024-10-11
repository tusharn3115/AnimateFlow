import React from 'react'

const Home = () => {
    return (
        <div className='flex text-white'>
            <div className='left w-1/5 h-screen flex flex-col justify-start items-center pt-16'>
                <div className="flex flex-col gap-y-4 items-start mb-10 w-full pl-20">
                    <div className="getstarted flex flex-col gap-y-3 items-start">
                        <h1 className='font-["Aeonik"] text-lg font-semibold'>Getting Started</h1>
                        <a href="#" className='text-gray-300 font-["Aeonik"]'>Introduction</a>
                        <a href="#" className='text-gray-300 font-["Aeonik"]'>Learn More</a>
                    </div>

                    <div className="animation flex flex-col gap-y-3 items-start mt-10">
                        <h1 className='font-["Aeonik"] text-lg font-semibold'>Animation</h1>
                        <a href="#" className='text-gray-300 font-["Aeonik"]'>Scroll</a>
                        <a href="#" className='text-gray-300 font-["Aeonik"]'>Text</a>
                        <a href="#" className='text-gray-300 font-["Aeonik"]'>SVG</a>
                    </div>
                </div>
            </div>

            <div className='right flex-1 h-screen p-16'>
                <div className='text-7xl text-white font-["Aeonik"] font-bold pl-36 pt-10'>Animation <span className='bg-gradient-to-t from-[#00f260] to-[#0575e6] text-transparent bg-clip-text'>Flow.</span></div>
            </div>
        </div>
    )
}

export default Home