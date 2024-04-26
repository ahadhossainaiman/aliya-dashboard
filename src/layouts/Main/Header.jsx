import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Badge, Dropdown, Button, Menu } from "antd";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaRegUser } from "react-icons/fa6";
import { MdMenu } from "react-icons/md";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
// import { io } from "socket.io-client";
// import { useGetNotificationQuery } from "../../redux/features/getNotificationApi";

const Header = () => {
  const navigate = useNavigate();
  //   const [socketNotification,setSocketNotification] = useState([]);
  //   const {data:notification,isError,isLoading,isSuccess} = useGetNotificationQuery(1);

  useEffect(() => {
    // const socketNotification = io("ws://103.145.138.54:8282");
    // socketNotification.on("connect", () => {
    //   socketNotification.on("admin-notification", (data) => {
    //     console.log(data);
    //     setSocketNotification(data);
    //   })
    // })
    // socketNotification.off("admin-notification",notification)
  }, []);

  const handleClick = () => {
    //   try {
    //     const response = baseURL.post("notification/admin", {
    //     }, {
    //       headers: {
    //         "Content-Type": "application/json",
    //         authorization: `Bearer ${localStorage.getItem("token")}`,
    //       }
    //     })
    //     navigate("profile-information")
    //     console.log(response);
    //   } catch (error) {
    //     console.log(error);
    //   }
  };
  return (
    <div className="flex bg-white justify-between items-center rounded-md mb-[24px] p-[16px] border-2 border-[#1E66CA]">
      <div className="flex items-center gap-5">
        {/* <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{
          marginBottom: 16,
        }}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
        <MdMenu className="h-[42px] w-[42px] text-[white]" /> */}

        {location.pathname == "/dashboard/users" ||
        location.pathname == "/dashboard/appointments" ||
        location.pathname == "/dashboard/earnings" ? (
          <div className="">{/* <SearchBox /> */}</div>
        ) : (
          <></>
        )}
      </div>

      <div className="flex gap-5">
        {/* <Dropdown overlay={menu} placement="bottomRight" arrow> */}
        <div
          onClick={(e) => navigate("notification")}
          className="relative flex items-center "
        >
          <Badge
            style={{ backgroundColor: "#318130" }}
            // count={notification?.data?.attributes?.unReadCount}
          >
            <IoIosNotificationsOutline
              style={{ cursor: "pointer" }}
              className={` bg-primary w-[52px] h-[52px] text-[#1E66CA] border-2 border-[#1E66CA] rounded-full p-2 `}
            />
          </Badge>
        </div>
        {/* </Dropdown> */}
        <div
          onClick={() => handleClick()}
          className="flex items-center cursor-pointer mr-[30px] bg-primary text-[#1E66CA] rounded-full p-1"
        >
          <FaRegUser className="text-[#1E66CA] border-2 border-[#1E66CA] rounded-full p-2 w-[52px] h-[52px]" />
        </div>
      </div>
    </div>
  );
};

export default Header;
