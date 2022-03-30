import React from 'react'
import Image from 'next/image';
const ImageContainer = () => {
  return (
    <div className='flex justify-between items-center pt-[15.5rem]'>
        <div>
         <Image className='pl-[155px]' src='./images/bgimage2.svg' alt=''/>
        </div>
        <div>
        <Image className='pr-[80.71px]' src='./images/bgimage1.svg' alt=''/>
        </div>
      
    </div>
  )
}

export default ImageContainer
