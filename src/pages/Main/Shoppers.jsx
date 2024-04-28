import React, { useState } from 'react';
import { ConfigProvider, DatePicker, Modal, Space, Switch, Table } from 'antd';
import { BsInfoCircle } from 'react-icons/bs';


const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      img: "https://i.ibb.co/ZMPsRHY/team-8.jpg",
        
      quantity:"06",
      email:"admin@gmail.com",
      address: '10 Downing Street',
      orderDate:"Mar 23, 2022, 04:00 PM",
      boutiques:{
        name:"Boutique Name",
        email:"admin@gmail.com",
        img:"https://i.ibb.co/kgZQ2vn/team-7-1.jpg",
      }
    },
    {
        key: '1',
        name: 'Mike',
        age: 32,
        img: "https://i.ibb.co/kgZQ2vn/team-7-1.jpg",
          
        quantity:"06",
        email:"admin@gmail.com",
        address: '10 Downing Street',
        orderDate:"Mar 23, 2022, 04:00 PM",
        boutiques:{
          name:"Boutique Name",
          email:"admin@gmail.com",
          img:"https://i.ibb.co/kgZQ2vn/team-7-1.jpg",
        }
      },
      {
        key: '1',
        name: 'Mike',
        age: 32,
        img: "https://i.ibb.co/kgZQ2vn/team-7-1.jpg",
          
        quantity:"06",
        email:"admin@gmail.com",
        address: '10 Downing Street',
        orderDate:"Mar 23, 2022, 04:00 PM",
        boutiques:{
          name:"Boutique Name",
          email:"admin@gmail.com",
          img:"https://i.ibb.co/kgZQ2vn/team-7-1.jpg",
        }
      },
      {
        key: '1',
        name: 'Mike',
        age: 32,
        img: "https://i.ibb.co/kgZQ2vn/team-7-1.jpg",
          
        quantity:"06",
        email:"admin@gmail.com",
        address: '10 Downing Street',
        orderDate:"Mar 23, 2022, 04:00 PM",
        boutiques:{
          name:"Boutique Name",
          email:"admin@gmail.com",
          img:"https://i.ibb.co/kgZQ2vn/team-7-1.jpg",
        }
      },
      {
        key: '1',
        name: 'Mike',
        age: 32,
        img: "https://i.ibb.co/kgZQ2vn/team-7-1.jpg",
          
        quantity:"06",
        email:"admin@gmail.com",
        address: '10 Downing Street',
        orderDate:"Mar 23, 2022, 04:00 PM",
        boutiques:{
          name:"Boutique Name",
          email:"admin@gmail.com",
          img:"https://i.ibb.co/kgZQ2vn/team-7-1.jpg",
        }
      },
      {
        key: '1',
        name: 'Mike',
        age: 32,
        img: "https://i.ibb.co/kgZQ2vn/team-7-1.jpg",
          
        quantity:"06",
        email:"admin@gmail.com",
        address: '10 Downing Street',
        orderDate:"Mar 23, 2022, 04:00 PM",
        boutiques:{
          name:"Boutique Name",
          email:"admin@gmail.com",
          img:"https://i.ibb.co/kgZQ2vn/team-7-1.jpg",
        }
      },
      {
        key: '1',
        name: 'Mike',
        age: 32,
        img: "https://i.ibb.co/kgZQ2vn/team-7-1.jpg",
          
        quantity:"06",
        email:"admin@gmail.com",
        address: '10 Downing Street',
        orderDate:"Mar 23, 2022, 04:00 PM",
        boutiques:{
          name:"Boutique Name",
          email:"admin@gmail.com",
          img:"https://i.ibb.co/kgZQ2vn/team-7-1.jpg",
        }
      },
  ];
  

const Shoppers = () => {
    const [startDate,setStartDate] =  useState('')
    const [currentPage, setCurrentPage] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [client, setClient] = useState();
    
      const onChanges = (checked) => {
        console.log(`switch to ${checked}`);
      };
    const columns = [
       
        {
          title: "SHOPPERS NAME",
          dataIndex: "name",
          key: "name",
          render: (_, record) => (
            <div className=''>
            <div className="flex gap-2 items-center">
                
              <img
                className="w-[34px] h-[34px] rounded-full"
                src={record?.img}	
                alt=""
              />
              <div>
              <p className="font-medium">{record.name}</p>
              <p className="font-medium text-[#111111] opacity-35">{record.email}</p>
              
              </div>
              
            </div>
            <div className='flex  gap-2 mt-2 items-center'>
                <p className="font-medium text-[#111111]">BLOCK</p>
                <Switch className='w-[14px]' defaultChecked onChange={onChanges} />
              </div>
            </div>
          ),
        },
        // {
        //   title: 'Phone',
        //   dataIndex: 'phone',
        //   key: 'phone',
        // },
        {
          title: "ORDER QUANTITY",
          dataIndex: "orderQuantity",
          key: "nidNumber",
          render: (_, record) => (
            <p>{record?.quantity ? record?.quantity : "N/A"}</p>
          )
        },
        {
          title: "Boutique Details",
          dataIndex: "email",
          key: "email",
          render: (_, record) => (
            <div className="flex gap-2 items-center">
            <img
              className="w-[34px] h-[34px] rounded-full"
              src={record?.boutiques?.img}	
              alt=""
            />
            <div>
            <p className="font-medium">{record.boutiques?.name}</p>
            <p className="font-medium text-[#111111] opacity-35">{record.boutiques?.email}</p>
            </div>
           
          </div>
          )
        },
        {
            title: "Placed Date",
            key: "address",
            dataIndex: "address",
            render: (_, record) => (
              <p>{record?.orderDate ? record?.orderDate : "N/A"}</p>
            )
          },
        
      
      ];


    const onChange = (date, dateString) => {
        console.log(date, dateString);
      };
      const handleChangePage = (page) => {
        setCurrentPage(page);
        console.log(page);
      };

    return (
        <div className=" ml-[24px]">
        <div className=" flex justify-between items-center">
        <h1 className="text-[30px] text-[#1E66CA] font-bold">Shoppers</h1>
          <DatePicker
            className="custom-date-picker"
            onChange={onChange}
            picker="month"
            suffixIcon
          />
        </div>
        <div className=" rounded-t-lg mt-[24px] shadow-2xl">
          <div className="flex py-[22px] mx-[20px] justify-between items-center">
            <p className=" text-[24px] font-medium">Shoppers List</p>
          </div>
          <ConfigProvider
    theme={{
      components: {
        Table: {
          headerBg: "#1E66CA",
          headerColor:"white",
          headerBorderRadius: 2,
        },
      },
    }}
  >
  <Table
            pagination={{
              position: ["bottomCenter"],
              current: currentPage,
              //   pageSize:data?.data?.attributes?.limit,
              //   total:data?.data?.attributes?.totalResults,
              //   showSizeChanger: false,
                onChange: handleChangePage,
            }}
            columns={columns}
            dataSource={dataSource}
          />
          </ConfigProvider>
        </div>
      
          </div>
    );
}

export default Shoppers;
