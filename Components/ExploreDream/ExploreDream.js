import React from 'react'
import Image from 'next/image';
const data = [
    {
        id: 1,
        image: "./images/Computer.svg",
        title: "Software",
        bt: "View More"
    },
    {
        id: 2,
        image: "./images/design.svg",
        title: "Design",
        bt: "View More"
    },
    {
        id: 3,
        image: "./images/Fainance.svg",
        title: "Finiance",
        bt: "View More"
    },    
    
    {
        id: 4,
        image: "./images/Photo.svg",
        title: "Photography",
        bt: "View More"
    }, 

    {
        id: 5,
        image: "./images/Computer.svg",
        title: "Management",
        bt: "View More"
    }, 

    
]



const ExploreDream = () => {
    return (
        <>
            <div className='mx-auto container w-full flex justify-center items-center pb-6 lg:pb-0 '>
                <h1 className='text-[#10B981] text-4xl leading-9 font-extrabold not-italic inter-bold mx-w-[384px] '>Explore Dream Studio</h1>
            </div>

            <div className='mx-auto container  flex justify-center items-center flex-wrap w-full pt-20'>

                {data?.map((single , index) => (
                    <div key={index} className=" flex flex-col justify-center items-center p-6 rounded-xl shadow-none hover:shadow-lg bg-white max-w-[214px] w-full md:w-1/2 lg:w-2/6 ">
                        <h5 className="max-w-[107px] text-[#111827] text-2xl leading-6 font-bold  not-italic inter-bold pt-[31px] pb-[34px]">{single.title}</h5>

                        <div className="bg-[#FFFFFF] shadow-Cardshadow flex flex-col items-center justify-center xl:w-[107.55px] xl:h-[107.55px] lg:w-[98.41px] lg:h-[98.41px] md:w-[91.91px] md:h-[91.91px] w-[44.28px] h-[44.28px] rounded-full ">
                            <Image src={single.image} alt="" className="xl:w-[44.81px] xl:h-[44.81px] lg:w-[41.01px] lg:h-[41.01px] md:w-[38.3px] md:h-[38.3px] w-[18.45px] h-[18.45px]" />
                        </div>

                        <a href='' className='text-[#111827] text-lg leading-4 font-normal not-italic inter-medium mx-w-[81px] pb-[31px] pt-[34px]'>{single.bt}</a>
                    </div>
                ))}

            </div>

        </>
    )
}

export default ExploreDream
