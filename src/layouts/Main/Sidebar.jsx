import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { BiSolidDashboard } from "react-icons/bi";
import { HiOutlineUsers } from "react-icons/hi";
import { BsCalendar2 } from "react-icons/bs";
import { BiDollarCircle } from "react-icons/bi";
import { CiSettings } from "react-icons/ci";
import { HiLogout } from "react-icons/hi";
import { TbTargetArrow } from "react-icons/tb";
import { FaCalendarDays } from "react-icons/fa6";
import logo2 from "../../assets/logo2.png";
import { IoBagSharp } from "react-icons/io5";
const Sidebar = () => {
  const navigate = useNavigate();
  const handleLogOut = () => {
    // localStorage.removeItem('token')
    // localStorage.removeItem('login-user')
    // localStorage.removeItem('user-update');
    console.log("aiman");
    navigate("/auth");
  };
  return (
    <div className="w-[300px] flex flex-col justify-between bg-[#1E66CA] min-h-screen rounded-lg border-2">
      <div>
        <div className="p-[32px]">
          <img src={logo2} alt="" />
        </div>

        

          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending
                ? "flex text-[#3BA6F6]  gap-2 cursor-pointer items-center text-[18px] font-medium p-[20px] bg-[white] m-[16px] rounded-lg "
                : isActive
                ? "flex text-white gap-2 cursor-pointer items-center text-[18px] font-medium p-[20px] bg-[#1E66CA]  m-[16px] rounded-lg border-l-8 border-l-white"
                : "flex text-[white] gap-2 cursor-pointer items-center text-[18px] font-medium p-[20px] bg-[#1E66CA]  m-[16px] rounded-lg"
            }
          >
            
            <div className="flex justify-start items-center gap-2">
              <BiSolidDashboard
                className="text-[40px]"
                width={25}
                height={35}
              />{" "}
              Dashboard
            </div>
          </NavLink>

          <NavLink
            to="/boutiques"
            className={({ isActive, isPending }) =>
              isActive
                ? "flex text-white gap-2 cursor-pointer items-center text-[18px] font-medium p-[20px] bg-[#1E66CA]  m-[16px] rounded-lg border-l-8 border-l-white border-gray-600"
                : "flex text-[white] gap-2 cursor-pointer items-center text-[18px] font-medium p-[20px]  m-[16px] rounded-lg"
            }
          >
            <div className="flex justify-start items-center gap-2">
              <IoBagSharp className="text-[40px]" width={35} height={35} />
              Boutiques
            </div>
          </NavLink>

          <NavLink
            to="/shoppers"
            className={({ isActive, isPending }) =>
              isPending
                ? "flex text-[white] gap-2 cursor-pointer items-center text-[18px] font-medium p-[20px] bg-[#281F1F] m-[16px] rounded-lg"
                : isActive
                ? "flex text-white gap-2 cursor-pointer items-center text-[18px] font-medium p-[20px] bg-[#1E66CA]  m-[16px] rounded-lg border-l-8 border-l-white border-gray-600"
                : "flex text-[white] gap-2 cursor-pointer items-center text-[18px] font-medium p-[20px]  m-[16px] rounded-lg"
            }
          >
            <div className="flex justify-start items-center gap-2">
              <BsCalendar2 className="text-[40px]" width={25} height={25} />
              Shoppers
            </div>
          </NavLink>

          <NavLink
            to="/drivers"
            className={({ isActive, isPending }) =>
              isPending
                ? "flex text-[white] gap-2 cursor-pointer items-center text-[18px] font-medium p-[20px] bg-[#281F1F] m-[16px] rounded-lg"
                : isActive
                ? "flex text-white gap-2 cursor-pointer items-center text-[18px] font-medium p-[20px] bg-[#1E66CA]  m-[16px] rounded-lg border-l-8 border-l-white border-gray-600"
                : "flex text-[white] gap-2 cursor-pointer items-center text-[18px] font-medium p-[20px]  m-[16px] rounded-lg"
            }
          >
            <div className="flex justify-start items-center gap-2">
              <FaCalendarDays className="text-[40px]" width={25} height={25} />
              Drivers
            </div>
          </NavLink>
        
      </div>

      <div className="mb-[32px]" onClick={handleLogOut}>
        <div
          
          className="flex items-center w-[80%] rounded-lg mx-auto py-4 ml-[18px] justify-center bg-white bg-opacity-5  cursor-pointer gap-2 text-[white] font-medium"
        >
          <HiLogout width={25} height={25} />
          <span className="text-[20px] ">Log Out</span>
        </div>
        {/* <Link to="/" className="flex items-center ml-[18px] cursor-pointer gap-2 text-[#3BA6F6] font-medium">
            
          </Link> */}
      </div>
    </div>
  );
};

export default Sidebar;
