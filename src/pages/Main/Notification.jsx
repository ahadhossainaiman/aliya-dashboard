import React from 'react';
import { IoNotifications } from "react-icons/io5";

const Notification = () => {
    return (
        <div>
            <div>
            <h1 className='text-[30px] font-bold'>Today</h1>
            <div className='flex justify-between items-center my-4 bg-[#E7F0FD] rounded-md border-2 px-2'>
            <div className='flex items-center gap-5'>
                <img src="https://i.ibb.co/L5knBr2/Auto-Layout-Horizontal.png" alt="" />
                <p>‘A1 boutique’ has added a product , would you like to approve? </p>
                <p className='border-2 border-[#1E66CA] px-5 py-3 rounded-md'>Deny</p>
                <p className='text-[white] bg-[#1E66CA] px-5 py-3 rounded-md'>Approve</p>
            </div>
                <p className='text-[#111111] opacity-[40%]'>2h ago</p>
            </div>

            <div className='flex justify-between items-center bg-[#E7F0FD] rounded-md border-2 px-2'>
            <div className='flex items-center gap-5'>
                <img className='' src="https://i.ibb.co/qMVk1YH/Auto-Layout-Horizontal.png" alt="" />
                <p>‘A1 boutique’ has added a product , would you like to approve? </p>
                <p className='border-2 border-[#1E66CA] px-5 py-3 rounded-md'>Deny</p>
                <p className='text-[white] bg-[#1E66CA] px-5 py-3 rounded-md'>Approve</p>
            </div>
                <p className='text-[#111111] opacity-[40%]'>2h ago</p>
            </div>
            
            </div>
           <div>
           <h1 className='text-[30px] font-bold'>Yesterday</h1>
           <div className='flex justify-between items-center my-4  bg-white rounded-md border-2 px-7 py-5'>
           <div className='flex items-center gap-5'>
           <IoNotifications className='text-[#1E66CA]' size={40}/>
                <p className='font-medium'>‘A1 Wales’ has added a product , would you like to approve? </p>
               
            </div>
                <p className='text-[#111111] opacity-[40%]'>1 Day ago</p>
            </div>

            <div className='flex justify-between items-center my-4  bg-white rounded-md border-2 px-7 py-5'>
           <div className='flex items-center gap-5'>
           <IoNotifications className='text-[#1E66CA]' size={40}/>
                <p className='font-medium'>‘A1 Wales’ has added a product , would you like to approve? </p>
               
            </div>
                <p className='text-[#111111] opacity-[40%]'>1 Day ago</p>
            </div>

            <div className='flex justify-between items-center my-4  bg-white rounded-md border-2 px-7 py-5'>
           <div className='flex items-center gap-5'>
           <IoNotifications className='text-[#1E66CA]' size={40}/>
                <p className='font-medium'>‘A1 Wales’ has added a product , would you like to approve? </p>
               
            </div>
                <p className='text-[#111111] opacity-[40%]'>1 Day ago</p>
            </div>

            <div className='flex justify-between items-center my-4  bg-white rounded-md border-2 px-7 py-5'>
           <div className='flex items-center gap-5'>
           <IoNotifications className='text-[#1E66CA]' size={40}/>
                <p className='font-medium'>‘A1 Wales’ has added a product , would you like to approve? </p>
               
            </div>
                <p className='text-[#111111] opacity-[40%]'>1 Day ago</p>
            </div>



           </div>

        </div>
    );
}

export default Notification;
