import { DatePicker } from "antd";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useState } from "react";

const data = [
    {
      name: "Jan",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Feb",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Mar",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Apr",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "May",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Jun",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Jul",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Aug",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Sep",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Oct",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Nov",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Dec",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

const BarChartIncomeRatio = () => {
    const [year,setYear ] = useState('2024');
//   const {data:chart,isError,isLoading,isSuccess} = useGetChatQuery(year);
  const onChange = (date, dateString) => {
    console.log(dateString);
    setYear(dateString)
  };
    return (
        <div className=" w-[66%] text-white  h-[400px] mt-5 rounded-xl shadow-2xl ">
      <div className="flex justify-between p-[16px] border-b-2">
        <div>
          <h1 className="text-[20px] text-black font-medium">Income Revenue</h1>
            <p className="text-[35px] text-[#1E66CA] font-bold">$ 50.23K</p>
          {/* <div className="flex gap-5 mt-[20px]">
              <div className="flex gap-2 items-center">
                <span className="bg-[#54A630] w-4 h-4 rounded-full"></span>
                <span>This month</span>
              </div>
              <div className="flex gap-2 items-center">
                <span className="bg-[#B0D6A0] w-4 h-4 rounded-full"></span>
                <span>Last month</span>
              </div>
            </div> */}
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
      <div className="mt-2">
        <BarChart
          width={1000}
          height={250}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" tick={{ stroke: "black", strokeWidth: 0.5 }} />
          <YAxis  tick={{ stroke: "black", strokeWidth: 0.5 }} />
          <Tooltip />
          {/* <Legend /> */}
          <Bar dataKey="pv" fill="#EEEEEE" activeBar={<Rectangle fill="#EEEEEE" stroke="#1E66CA" />} />
          <Bar dataKey="uv" fill="#1E66CA" activeBar={<Rectangle fill="#1E66CA" stroke="purple" />} />
        </BarChart>
      </div>
    </div>
    );
}

export default BarChartIncomeRatio;
