import React from 'react'


const SocialMedia = () => {

    const data = [
        {
            id: 1,
            image: "./images/social1.svg",

        },
        {
            id: 2,
            image: "./images/social2.svg",

        },
        {
            id: 3,
            image: "./images/social3.svg",

        },
        {
            id: 4,
            image: "./images/social4.svg",

        },
        {
            id: 5,
            image: "./images/tweetor.svg",

        },
        {
            id: 6,
            image: "./images/social6.svg",

        },
        {
            id: 7,
            image: "./images/social7.svg",

        },
        {
            id: 8,
            image: "./images/social8.svg",

        },
        {
            id: 9,
            image: "./images/tweetor.svg",

        },
        {
            id: 10,
            image: "./images/social10.svg",

        },
        {
            id: 11,
            image: "./images/social11.svg",

        },
        {
            id: 12,
            image: "./images/social12.svg",

        },

    ]

    return (
        <>
            <div className='PaentDiv  relative'>
                {/**Left */}
                <div className=' flex justify-start items-center'>
                    <img className='absolute top-0 pt-[20px] pl-[317px] pr-9' src='./images/Socialleft.svg' alt='' />
                </div>

                {/**LeftEnd */}
                <div className=' flex justify-start items-center'>
                    <img className='absolute top-[461px]  pl-[317px] pr-9' src='./images/socialEndleft.svg' alt='' />
                </div>


                {/**right */}
                <div className=' flex justify-end items-start'>
                    <img className='absolute top-0 pr-[22rem]' src='./images/socialright.svg' alt='' />
                </div>

                {/**End right */}
                <div className=' flex justify-end items-end'>
                    <img className='absolute top-[500px] pr-[23rem]' src='./images/socialEndRight.svg' alt='' />
                </div>

                <div className='mx-auto container w-full flex flex-col justify-center items-center pt-16'>
                    <div>
                        <h1 className='text-[#111827] text-center text-4xl leading-10 font-extrabold not-italic inter-bold max-w-[688px] pb-9'>We’re available on more than 20+ Social Media Companies World Wide!</h1>
                    </div>
                    <div>
                        <p className='max-w-[624px] text-[#374151] text-center  text-lg  leading-[18px] font-normal not-italic inter-medium'>We’ve all the required Catagories that you can Explore from</p>
                    </div>
                </div>

                <div className='mx-auto container  flex justify-center items-center flex-wrap w-1/2 lg:w-[49.333333%] xl:w-[48.333333%]  pt-20 space-x-[29.5px] pb-40'>

                    {data?.map((single) => (
                        <div className="">
                            <div className="bg-[#FFFFFF] shadow-Cardshadow flex flex-col items-center justify-center xl:w-[91.41px] xl:h-[91.41px] lg:w-[91.41px] lg:h-[91.41px] md:w-[91.91px] md:h-[91.91px] w-[44.28px] h-[44.28px] rounded-full mb-7">
                                <img src={single.image} alt="" className="xl:w-[29.98px] xl:h-[29.79px] lg:w-[29.98px] lg:h-[29.79px] md:w-[38.3px] md:h-[38.3px] w-[18.45px] h-[18.45px]" />
                            </div>
                        </div>
                    ))}

                </div>

            </div>

        </>
    )
}

export default SocialMedia