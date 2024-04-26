import React from 'react';
import Status from '../../components/Status';
import Charts from '../../components/Charts';
import TodaysOrder from '../../components/TodaysOrder';
import TotalSalesAndCosts from '../../components/TotalSalesAndCosts';

const DashboardHome = () => {
    return (
        <div className="ml-[24px]">
      <h1 className="text-[35px] ">Analytics</h1>
      <Status />
      <Charts />
      <div className=" gap-5 mt-[24px]">
        <h1 className='text-[20px] font-medium'>Order Details</h1>

        <div className='flex gap-5 items-center mb-10'>
            <TodaysOrder/>
            <div className='flex-1'>
            <TotalSalesAndCosts/>
            </div>
           
        </div>
        {/* <RecentSocialMedia/>
        <RecentVideo/>
        <RecentCorporate/> */}
      </div>
    </div>
    );
}

export default DashboardHome;
