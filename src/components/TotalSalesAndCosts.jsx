import { BiUpArrowAlt } from "react-icons/bi";
import React, { PureComponent, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { DatePicker } from "antd";
const data = [
    {
      name: "Jan",
      uv: 4000,
      pv: 400,
      amt: 2400,
    },
    {
      name: "Feb",
      uv: 3000,
      pv: 1398,
      amt: 210,
    },
    {
      name: "Mar",
      uv: 3490,
      pv: 300,
      amt: 2100,
    },
    {
      name: "Apr",
      uv: 3490,
      pv: 4300,
      amt: 200,
    },
    {
      name: "May",
      uv: 3490,
      pv: 300,
      amt: 2100,
    },
    {
      name: "Jun",
      uv: 3490,
      pv: 400,
      amt: 2100,
    },
    {
      name: "Jul",
      uv: 390,
      pv: 430,
      amt: 2100,
    },
    {
      name: "Aug",
      uv: 349,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Sep",
      uv: 3490,
      pv: 400,
      amt: 2100,
    },
    {
      name: "Oct",
      uv: 340,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Nov",
      uv: 3490,
      pv: 400,
      amt: 2100,
    },
    {
      name: "Dec",
      uv: 340,
      pv: 4300,
      amt: 2100,
    },
  ];

const TotalSalesAndCosts = () => {
    const [year,setYear ] = useState('2024');
//   const {data:chart,isError,isLoading,isSuccess} = useGetChatQuery(year);
  const onChange = (date, dateString) => {
    console.log(dateString);
    setYear(dateString)
  };
    return (
        <div className="mt-5 rounded-xl shadow-2xl flex gap-5 items-center justify-evenly px-10 py-1">
        
      <div className="flex-1" >
        <h1 className="text-black font-bold">Total Sales & Costs</h1>
        <div className="my-1">
          <DatePicker
            className="custom-date-picker"
            onChange={onChange}
            picker="year"
            suffixIcon
          />
        </div>
        <h1 className="text-6xl font-medium mt-8">$ 46</h1>
        <div className="flex items-center gap-1">
        <small className="text-[#1EB564] flex items-center gap-1"><BiUpArrowAlt /> 6% </small><small className="text-[#111111] opacity-65"> Vs last 7 days</small>
        </div>
        
      </div>
      <div>
      <LineChart width={700} height={195} data={data}>
      <XAxis dataKey="name" />
          <YAxis />
          <Line type="monotone" dataKey="pv" stroke="#0F60FF" strokeWidth={2} />
          <Line type="monotone" dataKey="uv" stroke="#0FB7FF" strokeWidth={2} />
        </LineChart>
      </div>
    </div>
    );
}

export default TotalSalesAndCosts;
