import React from 'react'

const SearchBar = () => {
    return (
        <>
            <div className='mx-auto container absolute left-[225px] top-[761px] '>
                <div className='flex justify-between items-center w-[75%] h-[112px] bg-[#FFFFFF] rounded-lg shadow-iconShadow '>
                    <div className='flex items-center space-x-8'>
                        <div className='pl-9'>
                            <img className='w-[29.33px] h-[33.89px]' src='./images/searchIcon.svg' alt='' />
                        </div>
                        <div>
                            <p className='text-[#374151] text-lg leading-7 font-normal inter-medium '>Location</p>
                        </div>
                        <div className='border-l-2 border-[#34D399] pl-2' >
                            <input className='text-[#6B7280] max-w-[170px] text-sm leading-5 font-normal inter-medium ' type='text' placeholder='Enter Your Location Here!' />
                        </div>
                        <div className='pl-[80px]'>
                            <div className='border-l-2 border-[#D1D5DB] '>
                                <select className='text-[#374151] font-normal text-lg inter-medium leading-7 ' id='Catagory'>
                                    <option className='text-[#374151] font-normal text-lg inter-medium leading-7'>Catagory</option>
                                    <option className='text-[#374151] font-normal text-lg inter-medium leading-7'>Catagory2</option>
                                    <option className='text-[#374151] font-normal text-lg inter-medium leading-7'>Catagory3</option>
                                </select>
                            </div>
                        </div>

                        <div className='pl-[40px]'>
                            <div className='border-l-2 border-[#D1D5DB] pl-4'>
                                <select className='text-[#374151] font-normal text-lg inter-medium leading-7' id='Skills'>
                                    <option className='text-[#374151] font-normal text-lg inter-medium leading-7'>Skills</option>
                                    <option className='text-[#374151] font-normal text-lg inter-medium leading-7'>Skills2</option>
                                    <option className='text-[#374151] font-normal text-lg inter-medium leading-7'>Skills3</option>
                                </select>
                            </div>
                        </div>
                        <div className='pl-[40px]'>
                            <div>
                                <button className='bg-[#10B981] rounded-lg text-[#FFFFFF] md:text-lg font-medium not-italic md:leading-7 inter-medium py-[10px] px-7'>Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchBar
