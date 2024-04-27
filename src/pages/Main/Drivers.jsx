import DriversStatus from "../../components/DriversStatus";
import { CgNotes } from "react-icons/cg";
import { FaClock } from "react-icons/fa6";
import { TbDeviceIpadCancel } from "react-icons/tb";
import { AiOutlineStock } from "react-icons/ai";
import { BsFileEarmarkCheckFill } from "react-icons/bs";
import { FaAngleDown } from "react-icons/fa";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { useState } from "react";
import DriversCart from "../../components/DriversCart";


const Drivers = () => {
   
    return (
        <div>
            <div className="grid grid-cols-4 gap-5">
                <DriversStatus text="Total Orders" price="120.00" icon={<CgNotes size={40}/>}/>
                <DriversStatus text="Total Earned" price="120.00" icon={<AiOutlineStock size={40}/>}/>
                <DriversStatus text="Total Hours" price="120.00" icon={<FaClock size={40}/>}/>
                <DriversStatus text="Delivered Orders" price="120.00" icon={<BsFileEarmarkCheckFill size={40}/>}/>
                <DriversStatus text="Canceled Orders" price="120.00" icon={<TbDeviceIpadCancel size={40}/>}/>
            </div>
            <div>
                <h1 className="text-2xl font-medium my-5">All Drivers</h1>


                <DriversCart />
                <DriversCart />
                <DriversCart />
                <DriversCart />
                <DriversCart />
               

            </div>
        </div>
    );
}

export default Drivers;
