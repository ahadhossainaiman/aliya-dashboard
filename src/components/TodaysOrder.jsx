
import { BiUpArrowAlt } from "react-icons/bi";
import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

const TodaysOrder = () => {
  return (
    <div className="mt-5 rounded-xl shadow-2xl flex gap-5 items-center justify-evenly px-10 py-5">
        
      <div className="flex-1" >
        <h1 className="text-black font-bold">Todays Orders</h1>
        <small className="text-[#111111] opacity-65">46</small>
        <h1 className="text-6xl font-medium mt-8">46</h1>
        <div className="flex items-center gap-1">
        <small className="text-[#1EB564] flex items-center gap-1"><BiUpArrowAlt /> 6% </small><small className="text-[#111111] opacity-65"> Vs Yesterday</small>
        </div>
        
      </div>
      <div>
      <LineChart width={300} height={100} data={data}>
          <Line type="monotone" dataKey="pv" stroke="#1EB564" strokeWidth={2} />
        </LineChart>
      </div>
    </div>
  );
};

export default TodaysOrder;
