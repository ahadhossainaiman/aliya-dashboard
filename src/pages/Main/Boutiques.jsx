import React, { useState } from "react";
import { Button, ConfigProvider, DatePicker, Form, Input, Modal, Space, Switch, Table, Upload , message } from "antd";
import { UploadOutlined } from '@ant-design/icons';
import { BsInfoCircle } from "react-icons/bs";
import { IoMdAdd } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
const { TextArea } = Input;


const dataSource = [
  {
    key: "1",
    name: "New Boutique",
    age: 32,
    img: "https://i.ibb.co/CvNF1q9/image.png",

    rate: "140",
    email: "newboutique@gmail.com",
    address: "Florida, United States",
    orderDate: "Mar 23, 2022, 04:00 PM",
  },
  {
    key: "1",
    name: "New Boutique",
    age: 32,
    img: "https://i.ibb.co/CvNF1q9/image.png",

    rate: "140",
    email: "newboutique@gmail.com",
    address: "Florida, United States",
    orderDate: "Mar 23, 2022, 04:00 PM",
  },
  {
    key: "1",
    name: "New Boutique",
    age: 32,
    img: "https://i.ibb.co/CvNF1q9/image.png",

    rate: "140",
    email: "newboutique@gmail.com",
    address: "Florida, United States",
    orderDate: "Mar 23, 2022, 04:00 PM",
  },
  {
    key: "1",
    name: "New Boutique",
    age: 32,
    img: "https://i.ibb.co/CvNF1q9/image.png",

    rate: "140",
    email: "newboutique@gmail.com",
    address: "Florida, United States",
    orderDate: "Mar 23, 2022, 04:00 PM",
  },
  {
    key: "1",
    name: "New Boutique",
    age: 32,
    img: "https://i.ibb.co/CvNF1q9/image.png",

    rate: "140",
    email: "newboutique@gmail.com",
    address: "Florida, United States",
    orderDate: "Mar 23, 2022, 04:00 PM",
  },
  {
    key: "1",
    name: "New Boutique",
    age: 32,
    img: "https://i.ibb.co/CvNF1q9/image.png",

    rate: "140",
    email: "newboutique@gmail.com",
    address: "Florida, United States",
    orderDate: "Mar 23, 2022, 04:00 PM",
  },
  {
    key: "1",
    name: "New Boutique",
    age: 32,
    img: "https://i.ibb.co/CvNF1q9/image.png",

    rate: "140",
    email: "newboutique@gmail.com",
    address: "Florida, United States",
    orderDate: "Mar 23, 2022, 04:00 PM",
  },
];





const Boutiques = () => {
  const [startDate, setStartDate] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [client, setClient] = useState();
  const navigate = useNavigate();
  const [image,setImage] = useState();





  const props = {
    name: 'file',
    action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
        setImage(info.fileList[0].originFileObj)
        
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
        setImage(info.fileList[0].originFileObj)
        
      } 
    },
  };



  const onChanges = (checked) => {
    console.log(`switch to ${checked}`);
  };
  const handleView = (value) => {
    // setClient(value);
    console.log(value)
    setIsModalOpen(true);
  };

  // const handleFeedBack = (id) => {
  //   console.log(id);
  // }
  const columns = [
    {
      title: "NAME",
      dataIndex: "name",
      key: "name",
      render: (_, record) => (
        <div onClick={() => navigate("/boutique-details/1")} className="flex gap-2 items-center cursor-pointer">
          <img
            className="w-[34px] h-[34px] rounded-full"
            src={record?.img}
            alt=""
          />
          <div>
            <p className="font-medium">{record?.name}</p>
            <p className="font-medium text-[#111111] opacity-35">
              {record?.email}
            </p>
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
      title: "RATE",
      dataIndex: "orderQuantity",
      key: "nidNumber",
      render: (_, record) => (
        <p>$ {record?.rate}</p>
      ),
    },
    {
      title: "ADDRESS",
      dataIndex: "email",
      key: "email",
      render: (_, record) => (
        <p>{record?.email}</p>
      ),
    },{
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
         
            <CiEdit   onClick={() => navigate(`/edit-boutiques/1`)}  size={18} className="text-[#bebebe] cursor-pointer" />
          
          <a><MdDeleteForever onClick={() => console.log(record)} size={18} className='text-[red]'/></a>
        </Space>
      ),
    },
    {
      title: "FEEDBACK",
      dataIndex: "feedback",
      key: "feedback",
      render: (_, record) => (
        <p onClick={() => handleView(record)} className="text-[#1E66CA] cursor-pointer">Send Feedback</p>
      ),
    }
  ];

  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  const handleChangePage = (page) => {
    setCurrentPage(page);
    console.log(page);
  };

console.log(image);
const handleSubmit = (values) => {
  console.log({...values,img:image});
}

  return (
    <div className=" ml-[24px]">
      <div className=" flex justify-between items-center">
        <h1 className="text-[30px] text-[#1E66CA] font-bold">Boutiques</h1>
        <div className="flex flex-col items-center gap-2">
          <p onClick={() => navigate("/add-boutiques")} className="text-[#1E66CA] font-medium flex cursor-pointer items-center gap-2 border-2 px-5 py-2 rounded-lg border-[#1E66CA]">
            <IoMdAdd size={20} />
            Add New Boutiques
          </p>
        </div>
      </div>
      <div className=" rounded-t-lg mt-[24px] shadow-2xl">
        <div className="flex py-[22px] mx-[20px] justify-between items-center">
          <p className=" text-[24px] font-medium">Shoppers List</p>
          <DatePicker
            className="custom-date-picker"
            onChange={onChange}
            picker="month"
            suffixIcon
          />
        </div>
        <ConfigProvider
          theme={{
            components: {
              Table: {
                headerBg: "#1E66CA",
                headerColor: "white",
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

      <Modal
        open={isModalOpen}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
        footer={[]}
        closeIcon
      >
      <div>
        <p className="text-xl font-bold my-5">Send Feedback</p>
        <div>
        <Form
    name="wrap"
    style={{
      maxWidth: 600,
    }}
    onFinish={handleSubmit}
  >
    <Form.Item
      // label="Normal label"
      
      name="title"
      rules={[
        {
          required: true,
        },
      ]}
    >
      <Input placeholder="Enter Title" />
    </Form.Item>

    <Form.Item
      // label="A super long label text"
      
      name="description"
      rules={[
        {
          required: true,
        },
      ]}
    >
       <TextArea placeholder="Explain here.." rows={4} />
    </Form.Item>
    <Form.Item
      // label="A super long label text"
      placeholder="Explain here.."
      name="img"
      rules={[
        {
          required: true,
        },
      ]}
    >
       <Upload {...props}>
    <Button icon={<UploadOutlined />}>Click to Upload</Button>
  </Upload>
    </Form.Item>

    <Form.Item className="flex justify-center">
      <Button className="bg-[#1E66CA] text-white px-24 h-12" htmlType="submit">
        Send
      </Button>
    </Form.Item>
  </Form>
        </div>
      </div>
      </Modal>


    </div>
  );
};

export default Boutiques;
