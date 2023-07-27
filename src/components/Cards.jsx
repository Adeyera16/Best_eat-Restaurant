import React from 'react';
import fries from '../assets/fries.jpg';
import salad from '../assets/salad.jpg';
import dessert from '../assets/dessert.jpg';

const Cards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        {/* card */}
        <div className='rounded-xl relative '>
            {/* overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white '>
                <p className='font-bold text-2xl px-2 pt-4'>Sun's Out, BOGO'S Out</p>
                <p className='px-2 '>Through 8/26</p>
                <button className='border-white bg-white text-black absolute bottom-4 mx-2'>Order now</button>
            </div>
            <img 
            className='max-h-[168px] md:max-h-[200px] w-full object-cover rounded-xl'
            src={fries} alt="fries" />
        </div>
        <div className='rounded-xl relative '>
            {/* overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white '>
                <p className='font-bold text-2xl px-2 pt-4'>New Restaurants </p>
                <p className='px-2 '>Added Daily</p>
                <button className='border-white bg-white text-black absolute bottom-4 mx-2'>Order now</button>
            </div>
            <img 
            className='max-h-[168px] md:max-h-[200px] w-full object-cover rounded-xl'
            src={salad} alt="salad" />
        </div>
        <div className='rounded-xl relative '>
            {/* overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white '>
                <p className='font-bold text-2xl px-2 pt-4'>We deliver desserts too</p>
                <p className='px-2 '>Tasty Treats</p>
                <button className='border-white bg-white text-black absolute bottom-4 mx-2'>Order now</button>
            </div>
            <img 
            className='max-h-[168px] md:max-h-[200px] w-full object-cover rounded-xl'
            src={dessert} alt="dessert" />
        </div>
    </div>
  )
}

export default Cards