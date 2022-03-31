import React from 'react'

const SearchBar = () => {
    return (
        <>
            <div className='mx-auto container absolute lg:left-8 2xl:left-[225px] lg:top-[700px] 2xl:top-[800px] hidden lg:block'>
                <div className='flex justify-between items-center  lg:w-[83%] 2xl:w-[81%]  bg-[#FFFFFF] rounded-lg shadow-iconShadow'>
                    <div className='flex items-center space-x-8'>
                        <div className=' lg:pl-7 2xl:pl-9'>
                            <img className='w-[29.33px] h-[33.89px]' src='./images/searchIcon.svg' alt='' />
                        </div>
                        <div>
                            <p className='text-[#374151] text-lg leading-7 font-normal inter-medium '>Location</p>
                        </div>
                        <div className='border-l-2 border-[#34D399] pl-2' >
                            <input className='text-[#6B7280] max-w-[170px] text-sm leading-5 font-normal inter-medium ' type='text' placeholder='Enter Your Location Here!' />
                        </div>
                        <div className=' lg:pl-[30px] 2xl:pl-[60px]'>
                            <div className='border-l-2 pt-11 pb-10 border-[#D1D5DB] '>
                                <select className='text-[#374151] font-normal text-lg inter-medium leading-7 pl-9' id='Catagory'>
                                    <option className='text-[#374151] font-normal text-lg inter-medium leading-7'>Catagory</option>
                                    <option className='text-[#374151] font-normal text-lg inter-medium leading-7'>Catagory2</option>
                                    <option className='text-[#374151] font-normal text-lg inter-medium leading-7'>Catagory3</option>
                                </select>
                            </div>
                        </div>

                        <div className='lg:pl-[30px] 2xl:pl-[80px]'>
                            <div className='border-l-2 pt-11 pb-10 border-[#D1D5DB] pl-4'>
                                <select className='text-[#374151] font-normal text-lg inter-medium leading-7 pl-9' id='Skills'>
                                    <option className='text-[#374151] font-normal text-lg inter-medium leading-7'>Skills</option>
                                    <option className='text-[#374151] font-normal text-lg inter-medium leading-7'>Skills2</option>
                                    <option className='text-[#374151] font-normal text-lg inter-medium leading-7'>Skills3</option>
                                </select>
                            </div>
                        </div>
                        <div className='border-l-2 pt-16 pb-11 border-[#D1D5DB] pl-4'>

                        </div>
                        <div className='lg:pl-[30px] 2xl:pl-[50.38px] '>
                            <div>
                                <button className='bg-[#10B981] rounded-lg text-[#FFFFFF] md:text-lg font-medium not-italic md:leading-7 inter-medium py-[14px] px-[49.54px]'>Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SearchBar
