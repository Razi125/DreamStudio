import React from 'react'
import Image from 'next/image';

const Footer = () => {

    const data = [
        {
            id: 1,
            image: "./images/social3.svg",

        },
        {
            id: 2,
            image: "./images/social4.svg",

        },
        {
            id: 3,
            image: "./images/social7.svg",

        },
        {
            id: 4,
            image: "./images/tweetor.svg",

        },


    ]

    return (
        <>
            <div className='bg-[#1F2937] relative'>

                <div className=' flex justify-end items-start'>
                    <Image className='absolute pt-[45px] pr-9' src='./images/footerdesIcon.svg' alt='' />
                </div>

                <div className='mx-auto container w-full flex flex-col justify-center items-center'>
                    <div>
                        <h1 className='text-[#FFFFFF] text-center text-4xl leading-10 font-extrabold not-italic inter-bold max-w-[688px] pt-32 pb-14'>Contact Us</h1>
                    </div>
                    <div>
                        <p className='max-w-[1024px] text-[#FFFFFF] text-center  text-lg  leading-7 font-normal not-italic inter-medium pb-14'>Finding a job that matches your skills & interest is a lot easier now, You can browse the jobs & apply whenever & wherever you want. Finding a Job that matches your skills & interest is a lot easier now, You can browse the jobs & apply whenever & wherever you want.</p>
                    </div>
                </div>

                <div className='mx-auto container  flex justify-center items-center flex-wrap w-1/2 lg:w-[76%] space-x-[15.54px] '>

                    {data?.map((item , index) => (
                        <div key={index} className="">
                            <div className="bg-[#374151] shadow-footerIcon flex flex-col items-center justify-center xl:w-[49.46px] xl:h-[49.46px] lg:w-[49.46px] lg:h-[49.46px] md:w-[91.91px] md:h-[91.91px] w-[44.28px] h-[44.28px] rounded-full mb-5">
                                <Image src={item.image} alt="" className="xl:w-[19.97px] xl:h-[14.99px] lg:w-[19.97px] lg:h-[14.99px] md:w-[38.3px] md:h-[38.3px] w-[18.45px] h-[18.45px]" />
                            </div>
                        </div>
                    ))}

                </div>

                <div className='mx-auto container w-full flex justify-center items-center '>
                    <div className='flex flex-col md:flex-row justify-between items-center space-x-[158.67px] mt-14 mb-20'>
                        <div className='flex justify-center items-center'>
                            <div>
                                <Image className='' src='./images/mobile.svg' alt='' />
                            </div>
                            <div>
                                <p className='max-w-[213px] text-[#FFFFFF] text-center  text-base  leading-6 font-normal not-italic inter-medium  pl-[20.33px]'>+92-340-7909920</p>
                            </div>
                        </div>

                        <div className='flex justify-center items-center'>
                            <div>
                                <Image className='' src='./images/location.svg' alt='' />
                            </div>
                            <div>
                                <p className='max-w-[354px] text-[#FFFFFF] text-center  text-base  leading-6 font-normal not-italic inter-medium  pl-[20.33px]'>Somewhere in Islamabad, Pakistan</p>
                            </div>
                        </div>

                        <div className='flex justify-center items-center'>
                            <div>
                                <Image className='' src='./images/message.svg' alt='' />
                            </div>
                            <div>
                                <p className='max-w-[213px] text-[#FFFFFF] text-center  text-base  leading-6 font-normal not-italic inter-medium  pl-[20.33px]'>Someone@here.com</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}



export default Footer
