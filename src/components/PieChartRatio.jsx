import React, { useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { Cell, Pie, PieChart } from 'recharts';
import 'react-circular-progressbar/dist/styles.css';
import { DatePicker } from 'antd';

const PieChartRatio = () => {
    const [year,setYear ] = useState('2024');
    //   const {data:chart,isError,isLoading,isSuccess} = useGetChatQuery(year);
      const onChange = (date, dateString) => {
        console.log(dateString);
        setYear(dateString)
      };
      

      
     let percentage = 75
    return (

        
    <div className="mt-[24px] flex-1 shadow-xl bottom-1  rounded-2xl">
    <div className="flex justify-between p-[16px] border-b-2">
      <div>
        <h1 className="text-[20px] text-black font-medium">Shoppers</h1>
        <p className='text-sm text-[#111111] font-medium opacity-30'>Shoppers feedback ratio</p>
      </div>
      <div className="">
        <DatePicker
          className="custom-date-picker"
          onChange={onChange}
          picker="year"
          suffixIcon
        />
      </div>
    </div>

    <div className="flex justify-center items-center py-10 px-5">
    
<div className='w-[250px] h-[230px]'>
<CircularProgressbar value={percentage} text={`${percentage}%`}  styles={buildStyles({
    // Rotation of path and trail, in number of turns (0-1)
    rotation: 0.25,

    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
    strokeLinecap: 'butt',

    // Text size
    textSize: '16px',
    

    // How long animation takes to go from one percentage to another, in seconds
    pathTransitionDuration: 0.5,

    // Can specify path transition in more detail, or remove it entirely
    // pathTransition: 'none',

    // Colors
    pathColor: `rgba(30, 102, 202, ${percentage / 100})`,
    textColor: '#000',
    fontWeight: '800',
    trailColor: '#EEEEEE',
    backgroundColor: '#3e98c7',
  })}/>
</div>



    </div>
  </div>
    );
}

export default PieChartRatio;
