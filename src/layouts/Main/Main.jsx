import React, { useState } from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const Main = () => {
    const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
    return (
      <div className="flex bg-[#ECF4FF] p-[32px] min-h-screen">
        <div className="fixed top-0 left-0 h-full">
        <Sidebar collapsed={collapsed}/>
        </div>
       
        <div className="flex flex-col flex-1 overflow-hidden">
          <div className="mx-[280px] fixed top-1 w-[calc(98%-300px)] z-10">
            <Header toggleCollapsed={toggleCollapsed} collapsed={collapsed}/>
          </div>
          <div className=" h-full flex-1 pt-[80px] pl-[280px]">
            <Outlet />
          </div>
        </div>
      </div>
    );
  };

export default Main;
