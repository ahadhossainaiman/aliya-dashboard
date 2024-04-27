import React from 'react';

const DriversStatus = ({text,price,icon}) => {
    return (
        <div className='flex items-center rounded-md justify-between w-[390px] px-[20px] py-[20px] bg-[#1E66CA] text-white'>
            <div className=''>
               <p className='text-xl font-medium'>{text}</p>
               <p className='font-medium'>{price}</p>
            </div>
            {icon}
        </div>
    );
}

export default DriversStatus;
