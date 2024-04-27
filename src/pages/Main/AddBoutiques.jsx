import { Button, Form, Input, Select, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { Flex, message } from "antd";
const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};
const beforeUpload = (file) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
};

const AddBoutiques = () => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const handleAddMatch = (values) => {
    console.log(values);
  };

  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };
  const uploadButton = (
    <button
      style={{
        border: 0,
        background: "none",
      }}
      type="button"
    >
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </button>
  );
  return (
    <div>
      <p className="text-[24px] font-medium my-5">Add Boutiques</p>
      <div className="ml-[24px] overflow-auto">
        <div>
          <Form
            name="basic"
            labelCol={{ span: 22 }}
            wrapperCol={{ span: 40 }}
            layout="vertical"
            initialValues={{
              remember: true,
            }}
            onFinish={handleAddMatch}
            //   onFinishFailed={handleCompanyInformationFailed}
            autoComplete="off"
          >
            <div>
              <Form.Item
                name="img"
                label={
                  <span className="text-black text-[18px] ">
                    Add Boutique’s Profile Picture
                  </span>
                }
                className="flex-1"
                rules={[
                  {
                    required: true,
                    message: "Please input Boutique’s Name!",
                  },
                ]}
              >
                <Upload
                  name="avatar"
                  listType="picture-circle"
                  className="avatar-uploader"
                  showUploadList={false}
                  action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                  beforeUpload={beforeUpload}
                  onChange={handleChange}
                >
                  {imageUrl ? (
                    <img
                      src={imageUrl}
                      alt="avatar"
                      style={{
                        width: "100%",
                      }}
                    />
                  ) : (
                    uploadButton
                  )}
                </Upload>
              </Form.Item>
            </div>

            <div className="flex gap-5">
              <Form.Item
                name="name"
                label={
                  <span className="text-black text-[18px] ">
                    Boutique’s Name
                  </span>
                }
                className="flex-1"
                rules={[
                  {
                    required: true,
                    message: "Please input Boutique’s Name!",
                  },
                ]}
              >
                <Input
                  name="publisherName"
                  // onChange={(e) => setPublisherName(e.target.value)}
                  placeholder="Boutique’s Name"
                  className="p-4
              rounded w-full 
              justify-start 
              border-none
              mt-[12px]
              text-white
              items-center 
              gap-4 inline-flex outline-none focus:border-none"
                />
              </Form.Item>

              <Form.Item
                name="email"
                label={<span className=" text-[18px] ">Email Address</span>}
                className="flex-1"
                rules={[
                  {
                    required: true,
                    message: "Please input Email!",
                  },
                ]}
              >
                <Input
                  // name="publisherName"
                  // onChange={(e) => setPublisherName(e.target.value)}
                  placeholder="Email Address"
                  className="p-4
              rounded w-full 
              justify-start 
              border-none
              mt-[12px]
              text-white
              items-center 
              gap-4 inline-flex outline-none focus:border-none"
                />

                {/* <Select className=" 
            rounded
            mt-[12px]
            text-white
            ">
              {
                data?.map(item=>(
                  <>
                   <Select.Option 
                  value={item?.name}>{item?.name}</Select.Option>
                  </>
                 
                ))
              }
               
              </Select> */}
              </Form.Item>
            </div>

            <div className="flex gap-5">
              <Form.Item
                name="rate"
                label={
                  <span className="text-black text-[18px] ">
                    Boutique’s Rate
                  </span>
                }
                className="flex-1"
                rules={[
                  {
                    required: true,
                    message: "Please input Boutique’s Rate!",
                  },
                ]}
              >
                <Input
                  // name="publisherName"
                  // onChange={(e) => setPublisherName(e.target.value)}
                  placeholder="Boutique’s Rate"
                  className="p-4
              rounded w-full 
              justify-start 
              border-none
              mt-[12px]
              text-white
              items-center 
              gap-4 inline-flex outline-none focus:border-none"
                />
              </Form.Item>

              <Form.Item
                name="number"
                label={<span className=" text-[18px] ">Phone Number</span>}
                className="flex-1"
                rules={[
                  {
                    required: true,
                    message: "Please input Phone Number!",
                  },
                ]}
              >
                <Input
                  // name="publisherName"
                  // onChange={(e) => setPublisherName(e.target.value)}
                  placeholder="Phone Number"
                  className="p-4
              rounded w-full 
              justify-start 
              border-none
              mt-[12px]
              text-white
              items-center 
              gap-4 inline-flex outline-none focus:border-none"
                />

                {/* <Select className=" 
            rounded
            mt-[12px]
            text-white
            ">
              {
                data?.map(item=>(
                  <>
                   <Select.Option 
                  value={item?.name}>{item?.name}</Select.Option>
                  </>
                 
                ))
              }
               
              </Select> */}
              </Form.Item>
            </div>

            <div className="flex gap-5">
              <Form.Item
                name="address"
                label={<span className="text-black text-[18px] ">Address</span>}
                className="flex-1"
                rules={[
                  {
                    required: true,
                    message: "Please input Address!",
                  },
                ]}
              >
                <Input
                  // name="publisherName"
                  // onChange={(e) => setPublisherName(e.target.value)}
                  placeholder="Address"
                  className="p-4
              rounded w-full 
              justify-start 
              border-none
              mt-[12px]
              text-white
              items-center 
              gap-4 inline-flex outline-none focus:border-none"
                />
              </Form.Item>

              <Form.Item
                name="event"
                label={<span className=" text-[18px] ">City</span>}
                className="flex-1"
                rules={[
                  {
                    required: true,
                    message: "Please input Email!",
                  },
                ]}
              >
                <Select className="h-[56px] rounded mt-[12px] text-white">
                  <Select.Option value={"city"}>City</Select.Option>
                </Select>
              </Form.Item>
            </div>

            <div className="flex gap-5">
              <Form.Item
                name="state"
                label={<span className="text-black text-[18px] ">State</span>}
                className="flex-1"
                rules={[
                  {
                    required: true,
                    message: "Please input State!",
                  },
                ]}
              >
                <Select className="h-[56px] rounded mt-[12px] text-white">
                  <Select.Option value={"city"}>State</Select.Option>
                </Select>
              </Form.Item>

              <Form.Item
                name="description"
                label={<span className=" text-[18px] ">Description</span>}
                className="flex-1"
                rules={[
                  {
                    required: true,
                    message: "Please input Description!",
                  },
                ]}
              >
                <Input
                  // name="publisherName"
                  // onChange={(e) => setPublisherName(e.target.value)}
                  placeholder="Description"
                  className="p-4
              rounded w-full 
              justify-start 
              border-none
              mt-[12px]
              text-white
              items-center 
              gap-4 inline-flex outline-none focus:border-none"
                />
              </Form.Item>
            </div>

            <Button
              htmlType="submit"
              // onClick={handleAddToBlog}
              block
              style={{
                marginTop: "30px",
                backgroundColor: "#1E66CA",
                color: "#fff",
                size: "18px",
                height: "56px",
              }}
            >
              Add
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AddBoutiques;
