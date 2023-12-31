import React from 'react';
import burger from '../assets/burger.jpg';

const Hero = () => {
  return (
    <div className='max-w-[1640px] p-4 '>
        <div className='max-h-[500px] relative '>
            {/* overlay */}
            <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>The <span className='text-orange-500'>Best</span></h1>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-orange-500'>Foods <span className='text-white'>Delivered</span></h1>
            </div>
            <img src={burger} alt="burger" className='w-full max-h-[500px] object-cover' />
        </div>
    </div>
  )
}

export default Hero