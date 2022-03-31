import React from 'react'

const Cardopportunities = () => {

    const data = [
        {
            id: 1,
            image: "./images/oppIcon.svg",
            title: "5000+",
            dis: "Total Jobs"
        },
        {
            id: 2,
            image: "./images/oppIcon2.svg",
            title: "80+",
            dis: "Total Employees"
        },
        {
            id: 3,
            image: "./images/oppIcon3.svg",
            title: "2000+",
            dis: "Total Seekers"
        },
        {
            id: 4,
            image: "./images/oppIcon4.svg",
            title: "5 years",
            dis: "Total Experience"
        },
    ]

    return (
        <div className='relative w-full'>

            {/** right */}
            <div className=' flex justify-end items-start'>
                <img className='absolute pr-[519px] top-16' src='./images/oppleft.svg' alt='' />
            </div>
            {/** right 2*/}
            <div className=' flex justify-end items-start'>
                <img className='absolute pr-[983px] top-[19rem]' src='./images/oppleft2.svg' alt='' />
            </div>

            <div className=' flex justify-between w-full  items-center flex-col lg:flex-row pt-[160px]'>

                <div className='left relative  flex  justify-center lg:justify-start items-center '>
                    <img className='max-w-[352px] md:max-w-[656px] md:h-[810px] 2xl:w-[704px] 2xl:h-[910px]' src='./images/cardoppimage.svg' alt=''/>

                    <img className='absolute hidden lg:block left-[60px] top-[156px]' src='./images/Group 100.svg' alt='' />
                </div>

                <div className='right mx-auto px-4 container  flex flex-col justify-center items-start mt-8 lg:mt-0'>
                    <div>
                        <h1 className='max-w-[568px]  lg:max-w-[568px] text-[#111827] text-center lg:text-left  text-base lg:text-4xl leading-10 font-extrabold not-italic inter-bold pb-10 md:pl-[141px]'>How to Explore the Best Opportunites for Yourself?</h1>
                    </div>
                    <div>
                        <p className='max-w-[517px] text-[#374151] text-center lg:text-left  text-base xl:text-lg leading-7 font-normal not-italic inter-medium pb-10 md:pl-[141px]'>Finding a Job that matches your skills & interest is a lot easier now, You can browse the Jobs & apply whenever & wherever you want.</p>
                    </div>

                    <div className='flex justify-center items-start flex-wrap '>
                        {
                            data.map((item, index) => (
                                <div key={index} className='flex flex-col justify-center items-start w-full md:w-[34.333333%] '>
                                    <div className='flex justify-center items-center pt-4 '>
                                        <div className='pl-5'>
                                            <img className='w-[44px] h-[44px] ' src={item.image} alt='' />
                                        </div>
                                        <div>
                                            <h1 className=' lg:max-w-[147px] text-[#374151] text-[1.4rem] lg:text-4xl leading-10 font-extrabold not-italic inter-bold '>{item.title}</h1>
                                        </div>

                                    </div>

                                    <div>
                                        <p className='max-w-[200px] lg:max-w-[200px]  text-[#374151] text-lg leading-7 font-normal not-italic inter-medium  pl-16 '>{item.dis}</p>
                                    </div>
                                </div>
                            ))
                        }

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Cardopportunities