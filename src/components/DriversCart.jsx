import React, { useState } from 'react';
import { FaAngleDown } from "react-icons/fa";
import { IoIosCheckmarkCircle } from "react-icons/io";

const DriversCart = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="bg-white  rounded-lg my-5">
                <div className="flex border-b-2 px-5 py-3 justify-between ">
                <div className="flex items-center gap-3">
                    <div className="w-[60px] h-[60px] rounded-full relative">
                        <img className="rounded-full" src="https://i.ibb.co/VBcnsLy/download.jpg" alt="" />

                        <img className="absolute bottom-[10px] right-[-5px]  w-[20px] rounded-full" src="https://i.ibb.co/CvNF1q9/image.png" alt="" />
                    </div>
                    <div>
                        <h1 className="font-medium ">Hees Munal</h1>
                        <p className="text-sm text-[#111111] opacity-[40%]">heestmunal123@gmail.com</p>
                    </div>
                </div>
                <div onClick={() => setOpen(!open)} className="flex items-center gap-3 cursor-pointer">
                    <p className="text-[#1E66CA] font-bold">See More Details</p><FaAngleDown className="text-[#1E66CA]" />
                </div>



                </div>
              
                        <div className={`transition-all ease-in-out duration-500 ${open ? 'block' : 'hidden'}`}>
                <div className="grid grid-cols-8 mx-5 my-5">
                    <div className="border-l-2 border-[#1E66CA] px-5 py-3 border-r-2">
                        <p className="font-bold">MAKE</p>
                        <p className="text-[#8DB501]">Honda Car</p>
                    </div>
                    <div className=" border-[#1E66CA] px-5 py-3 border-r-2">
                        <p className="font-bold">MODEL</p>
                        <p className="text-[#8DB501]">FX1211</p>
                    </div>
                    <div className=" border-[#1E66CA] px-5 py-3 border-r-2">
                        <p className="font-bold">YEAR</p>
                        <p className="text-[#8DB501]">TXS 1234h</p>
                    </div>
                    <div className="border-[#1E66CA] px-5 py-3 ">
                        <p className="font-bold">REG.NO</p>
                        <p className="text-[#8DB501]">TXS 1234</p>
                    </div>
                    <div>
                        <p className="font-bold">Driver License</p>
                        <img className="w-[130px] rounded-lg h-[80px]" src="https://i.ibb.co/ckZnP3H/nid.png" alt="" />
                    </div>
                    <div>
                        <p  className="font-bold">Register</p>
                        <img className="w-[130px] rounded-lg h-[80px]" src="https://i.ibb.co/ckZnP3H/nid.png" alt="" />
                    </div>
                    <div>
                        <p className="font-bold">Police Check</p>
                        <img className="w-[130px] rounded-lg h-[80px]" src="https://i.ibb.co/ckZnP3H/nid.png" alt="" />
                    </div>
                    
                </div>
                <div className="flex items-center gap-2 py-4 mx-5">
                <p className="text-[#111111] opacity-[40%] font-bold">Documentation Accepted</p>
                <IoIosCheckmarkCircle className="text-[#8DB501]" size={20} />
                </div>
                </div>
                   

                
                
              
                </div>
    );
}

export default DriversCart;
