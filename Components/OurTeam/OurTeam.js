import React from 'react'
import Image from 'next/image';
const data = [
    {
        id: 1,
        image: "./images/Avatar1.svg",
        name: "Muhammad Ali",
        dis: "Finding a Job that matches your skills & interest is a lot easier now, You can browse the Jobs & apply whenever & wherever you want. Let’s do it something earlier.",
        bt: "View More"
    },
    {
        id: 2,
        image: "./images/Avatar2.svg",
        name: "Muhammad Ali",
        dis: "Finding a Job that matches your skills & interest is a lot easier now, You can browse the Jobs & apply whenever & wherever you want. Let’s do it something earlier.",
        bt: "View More"
    },
    {
        id: 3,
        image: "./images/Avatar3.svg",
        name: "Muhammad Ali",
        dis: "Finding a Job that matches your skills & interest is a lot easier now, You can browse the Jobs & apply whenever & wherever you want. Let’s do it something earlier.",
        bt: "View More"
    },
    {
        id: 4,
        image: "./images/Avatar4.svg",
        name: "Muhammad Ali",
        dis: "Finding a Job that matches your skills & interest is a lot easier now, You can browse the Jobs & apply whenever & wherever you want. Let’s do it something earlier.",
        bt: "View More"
    },
    {
        id: 5,
        image: "./images/Avatar5.svg",
        name: "Muhammad Ali",
        dis: "Finding a Job that matches your skills & interest is a lot easier now, You can browse the Jobs & apply whenever & wherever you want. Let’s do it something earlier.",
        bt: "View More"
    },
    {
        id: 6,
        image: "./images/Avatar1.svg",
        name: "Muhammad Ali",
        dis: "Finding a Job that matches your skills & interest is a lot easier now, You can browse the Jobs & apply whenever & wherever you want. Let’s do it something earlier.",
        bt: "View More"
    },
]



const OurTeam = () => {
    return (
        <>
            <div className='relative'>

                {/** Left */}
                <div className=' flex justify-start items-start'>
                    <Image className='absolute pt-[33px] pl-[31px] ' src='./images/teamleft.svg' alt='' />
                </div>

                {/** right */}
                <div className=' flex justify-end items-start'>
                    <Image className='absolute pt-[33px] pr-[115px] ' src='./images/teamright.svg' alt='' />
                </div>

                <div className='mx-auto container w-full flex flex-col justify-center items-center pt-40'>
                    <div>
                        <h1 className='text-[#111827] text-center text-4xl leading-10 font-extrabold not-italic inter-bold max-w-[688px]'>Our Team</h1>
                    </div>
                    <div>
                        <p className='max-w-[624px] text-[#374151] text-center  text-base xl:text-lg leading-7 font-normal not-italic inter-medium'>It’s consists of the best memebers gathered & collected to make the perfect team that cna deliver the best results & in record time.</p>
                    </div>
                </div>

                <div className='mx-auto container  flex justify-center items-center flex-wrap w-[64%] pt-20 space-x-8 '>

                    {data.map((item , index) => (
                        <div key={index} className=" relative flex flex-col justify-center items-center p-6 rounded-xl shadow-lg bg-[#FFFFFF] max-w-[329px] h-[400px] w-full md:w-1/2 lg:w-1/2 2xl:w-1/2 mb-[88px]">
                            <Image className="inline-block h-[91px] w-[100px] rounded-full ring-2 ring-white absolute -top-[23px]" src={item.image} alt="" />
                            <h5 className="max-w-[190px] text-[#374151] text-2xl leading-8 font-bold  not-italic inter-bold pt-9 pb-6 ">{item.name}</h5>
                            <p className="max-w-[262px] text-[#374151] text-center text-base leading-7 font-normal  not-italic inter-medium pb-9 ">{item.dis}</p>

                            <button className='text-[#10B981] text-base leading-6 font-normal not-italic  mx-w-[139px] bg-[#F3F4F6] rounded-lg inter-medium py-3 px-6 mb-9'>{item.bt}</button>
                        </div>
                    ))}

                </div>
            </div>

        </>
    )
}

export default OurTeam