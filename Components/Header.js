import React from 'react'
import Link from 'next/link'

const Header = () => {
    return (
        <>
            <div className='bg-[#1F2937]  top-0 bg-fixed lg:block hidden '>
                <div className=' mx-auto container flex justify-between items-center pt-[22.89px] pb-6'>
                    <div>
                        <img src='./images/dreamlogo.svg' alt='Dream Logo' />
                    </div>

                    <div className='flex justify-between space-x-[40px] items-center'>
                        <div className='text-[#FFFFFF] text-lg font-semibold not-italic md:leading-7 inter-medium'>
                            <Link  href="/">Product</Link>

                        </div>
                        <div>
                            <img src='./images/Vector.svg' alt='Vector' />
                        </div>

                        <div className='text-[#FFFFFF] text-lg font-semibold not-italic md:leading-7 inter-medium'>
                            <Link href="/">Performance</Link>
                        </div>
                        <div>
                            <img src='./images/Vector.svg' alt='Vector' />
                        </div>
                        <div className='text-[#FFFFFF] text-lg font-semibold not-italic md:leading-7 inter-medium'>
                            <Link href="/">Dashboard</Link>
                        </div>
                    </div>
                    <div className='flex justify-between items-center space-x-[36px]'>
                        <div className='text-[#34D399] text-lg font-semibold not-italic md:leading-7 inter-medium'>
                            <Link href="/">Login</Link>
                        </div>
                        <div>
                            <button className='bg-[#10B981] rounded-lg text-[#FFFFFF] md:text-lg font-medium not-italic md:leading-7 inter-medium py-[10px] px-7'>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>


            {/** Mobile and Tablets  */}
            <div className=' w-full inline-block lg:hidden bg-[#1F2937] '>
                <div className='mx-auto container flex justify-between items-center  pt-[22.89px] pb-6'>
                    <div>
                        <div className='flex justify-center items-center'>
                            <div className='hamburgar inline-block p-4 cursor-pointer lg:hidden'>
                                <div className='line h-0.5 w-6 my-1 bg-white'></div>
                                <div className='line h-0.5 w-6 my-1 bg-white'></div>
                                <div className='line h-0.5 w-6 my-1 bg-white'></div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <img src='./images/dreamlogo.svg' alt='Dream Logo' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
