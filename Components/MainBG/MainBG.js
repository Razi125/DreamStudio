
import React from 'react'
import Image from 'next/image';
const MainBG = () => {

    return (
        <div className='relative bg-[#1F2937] h-[710px]'>
            <div>
                <Image className='absolute left-[147px] top-[520px]' src='./images/Group 100.svg' alt='' />
            </div>


            <div className=' flex justify-between w-full  items-center flex-col lg:flex-row '>

                <div className='left mx-0 container  flex flex-col justify-center items-start mt-8 lg:mt-0 pb-16 lg:pb-0'>

                    <div className='left w-full container flex flex-col justify-center items-start pl-[160px] mt-2 '>
                        <div>
                            <h1 className='text-[#FFFFFF] text-4xl lg:text-6xl leading-[60px]  font-black not-italic  w-[458px] inter-bold pb-8 '>Your Dream Job is waiting for you!</h1>

                            <div>
                                <Image className='absolute  left-32 top-16' src='./images/Group 119.svg' alt='' />
                            </div>

                            <div>
                                <Image className='absolute left-[25.5rem] top-[17rem]' src='./images/circle.svg' alt='' />
                            </div>
                        </div>


                        <div>
                            <p className='text-[#FFFFFF] text-lg leading-7 font-normal not-italic w-[459px] inter-medium pb-8'>Finding a Job that matches your skills & interest is a lot easier now, You can browse the Jobs & apply whenever & wherever you want.</p>
                        </div>


                        <div className='flex justify-between items-center'>
                            <div>
                                <div className='flex justify-between items-center space-x-4 '>
                                    <p className='text-[#FFFFFF] font-normal not-italic text-lg leading-7 w-[66px]'>Remote</p>
                                    <div className="relative">
                                        <input type="checkbox" id="toggleB" className="sr-only" />
                                        <div className="block bg-[#FFFFFF] w-14 h-8 rounded-full"></div>
                                        <div className="dot absolute left-1 top-1 bg-[#10B981] w-6 h-6 rounded-full transition">
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className='flex justify-between items-center space-x-4 pl-8'>
                                <p className='text-[#FFFFFF] font-normal not-italic text-lg leading-7 w-[66px] '>Onsite</p>
                                <div className="relative">
                                    <input type="checkbox" id="toggleB" className="sr-only" />
                                    <div className="block bg-[#FFFFFF] w-14 h-8 rounded-full"></div>
                                    <div className="dot absolute left-1 top-1 bg-[#6B7280] w-6 h-6 rounded-full transition"></div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

                <div className='right relative left flex justify-start items-center '>
                    <Image className='relative max-w-[704px] h-[810px] -mb-64' src='./images/MainImage.svg' alt='' />

                    <Image className='absolute -left-[56px] top-[71px]' src='./images/Group 100.svg' alt='' />
                </div>

            </div>

        </div>
    )
}

export default MainBG









