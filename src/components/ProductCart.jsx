import React from 'react';
import { FaStar } from 'react-icons/fa6';
import { CiEdit } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';

const ProductCart = () => {
    const navigate = useNavigate();
    return (
        <div className='w-[216px] relative'>
            <img className='w-[216px]' src="https://i.ibb.co/fxQDQ99/product.png" alt="" />
            <div>
                <p className='text-[black] font-medium my-1'>Modern Nice Suit</p>
                <div className='flex items-center justify-between gap-2'>
                    <p className='text-[#1E66CA] font-medium text-[19px]'>$212.99</p>
                    <div className='flex items-center gap-1'>
                    <FaStar className="text-[gold]" /> <span>5.0</span>
                    </div>
                </div>
            </div>
            <CiEdit onClick={() => navigate("/edit-boutiques/1")} className='absolute cursor-pointer top-2 right-2 bg-[#735E4F] p-3 rounded-full text-white' size={50} />
        </div>
    );
}

export default ProductCart;
