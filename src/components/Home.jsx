import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

const Home = () => {
    return (
        <div className='flex text-white'>
            <div className='left w-1/5 h-screen flex flex-col justify-start items-center pt-16'>
                <div className="flex flex-col gap-y-4 items-start mb-10 w-full pl-20">
                    <div className="getstarted flex flex-col gap-y-3 items-start">
                        <h1 className='font-["Aeonik"] text-xl font-semibold'>Getting Started</h1>
                        <a href="#" className='text-gray-400 font-["Aeonik"]'>Introduction</a>
                        <a href="#" className='text-gray-400 font-["Aeonik"]'>Learn More</a>
                    </div>

                    <div className="animation flex flex-col gap-y-3 items-start mt-10">
                        <h1 className='font-["Aeonik"] text-xl font-semibold'>Animation</h1>
                        <a href="#" className='text-gray-400 font-["Aeonik"]'>ScrollTrigger</a>
                        <a href="#" className='text-gray-400 font-["Aeonik"]'>Text</a>
                        <a href="#" className='text-gray-400 font-["Aeonik"]'>SVG</a>
                        <a href="#" className='text-gray-400 font-["Aeonik"]'>Cursor</a>
                        <a href="#" className='text-gray-400 font-["Aeonik"]'>Timeline Animation</a>
                    </div>
                </div>
            </div>

            <div className='right flex-1 h-screen p-10'>
                <div className='heading text-[5.3rem] text-white font-["Aeonik"] font-bold pl-36 mb-4'>Animation <span className='bg-gradient-to-t from-[#ff00cc] to-[#333399] text-transparent bg-clip-text'>Flow.</span></div>

                <div className="details mb-10">
                    <h2 className='w-[80%] text-[1.7rem] font-["Aeonik"] font-medium pl-36'>Animation Flow: Discover animations with code examples and descriptions to enhance your development skills.</h2>
                </div>

                <div className="button pl-36">
                    <button className='text-[1.5rem] font-["Aeonik"] font-medium flex items-center bg-gradient-to-t from-[#ff00cc] to-[#333399] text-transparent bg-clip-text border-2 border-[#ff00cc] rounded-lg p-3 ease-in-out'>
                        Get started <FaArrowRight className='ml-2 size-5 pt-1 text-white'/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home