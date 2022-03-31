
import React from 'react'

const MainBG = () => {

    return (
        <div className='relative bg-[#1F2937] w-full h-[500px] md:h-[700px] lg:h-[650px] 2xl:h-[750px]'>
            <div>
                <img className='hidden lg:block absolute lg:left-[24px] lg:top-[424px] 2xl:left-[147px] 2xl:top-[570px]' src='./images/Group 100.svg' alt='' />
            </div>

            <div className='flex w-full flex-col lg:flex-row'>

                <div className='left mx-auto px-4 container flex flex-col lg:flex-row justify-center items-center lg:justify-start lg:items-start py-7 lg:py-0 lg:w-5/12  lg:top-36'>

                    <div className='left flex flex-col  justify-center items-center lg:items-start lg:pt-[9rem]  lg:pl-5 2xl:pl-[160px] '>
                        <div>
                            <div>
                                <h1 className='text-[#FFFFFF] text-base text-center lg:text-left lg:text-3xl 2xl:text-6xl leading-[60px]  font-black not-italic  max-w-[458px] inter-bold lg:pb-8'>Your Dream Job is waiting for you!</h1>
                            </div>
                            <div>
                                <img className='hidden lg:block absolute  lg:pl-0 2xl:left-36 lg:top-20 2xl:top-24' src='./images/Group 119.svg' alt='' />
                            </div>

                            <div>
                                <img className='hidden lg:block absolute lg:left-[10.6rem] lg:top-[13rem] 2xl:left-[26.6rem] 2xl:top-[19rem]' src='./images/circle.svg' alt='' />
                            </div>
                        </div>


                        <div>
                            <p className='text-[#FFFFFF] text-center lg:text-left text-sm md:text-lg leading-7 font-normal not-italic max-w-[459px] inter-medium md:pb-8'>Finding a Job that matches your skills & interest is a lot easier now, You can browse the Jobs & apply whenever & wherever you want.</p>
                        </div>


                        <div className='flex justify-between items-center pt-4 lg:pt-0'>
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

                <div className=' lg:w-3/5'>
                    <div className='right  relative left flex justify-center items-center lg:justify-end lg:items-end px-4 lg:px-0'>
                        <img className='relative  h-[550px] md:h-[650px]  lg:h-[734px]  2xl:h-[900px] lg:mt-0' src='./images/HeaderbgImag.svg' alt='' />

                        <img className='hidden lg:block absolute lg:top-[4rem] 2xl:top-[5rem] lg:left-[51px]  2xl:left-[17rem] top-[7rem]' src='./images/Group 100.svg' alt='' />

                    </div>
                </div>

            </div>


        </div>
    )
}

export default MainBG









