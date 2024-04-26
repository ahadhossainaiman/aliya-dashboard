import { LuBadgeDollarSign } from "react-icons/lu";

const Status = () => {
    return (
        <div className="grid grid-cols-3 gap-[24px] mt-[24px]">
        <div className="bg-[#1E66CA] text-white shadow-xl px-[20px] py-[32px] flex justify-between items-center rounded-lg">
          
          <div className="">
            <p className="">Total Boutiques</p>
            <h1 className=" text-[44px]">0.00</h1>
          </div>
        </div>
        <div className="bg-[#1E66CA] text-white px-[20px] py-[32px] flex justify-between items-center rounded-lg shadow-xl">
          <div className="">
            <p className="">Total Drivers</p>
            <h1 className=" text-[44px]">0.00</h1>
          </div>
        </div>
        <div className="bg-[#1E66CA] text-white px-[20px] py-[32px] flex justify-between items-center rounded-lg shadow-xl">
          <div className="">
            <p className="">Completed Orders</p>
            <h1 className=" text-[44px]">0.00</h1>
          </div>
        </div>
       
      </div>
    );
}

export default Status;
