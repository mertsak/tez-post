import { PlusOutlined } from "@ant-design/icons";
import React, { useState, useEffect } from "react";
import { Modal, Button, Form, Input, message } from "antd";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { getCategoriesItems } from "../redux/services/service.js";

const Categories = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const { categoriesItems } = useSelector((state) => state.post);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = (values) => {
    try {
      axios
        .post(
          `${process.env.REACT_APP_BASE_URL}/categories/createCategory`,
          values
        )
        .then((res) => {
          res.status === 201 && message.success("Category added successfully");
          res.status === 400 && message.error("Category already exists");
          setIsModalOpen(false);
        })
        .then(() => {
          dispatch(getCategoriesItems());
        });
      form.resetFields();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dispatch(getCategoriesItems());
  }, [dispatch]);

  return (
    <>
      <ul className="flex flex-row md:flex-col mb-1 gap-4 md:justify-center items-center text-lg">
        {categoriesItems &&
          categoriesItems?.map((item) => {
            return (
              <li className="categories-item" key={item._id}>
                <span>{item.title}</span>
              </li>
            );
          })}

        <li
          type="primary"
          onClick={showModal}
          className="categories-item bg-indigo-700 hover:bg-indigo-500"
        >
          <PlusOutlined className="md:text-2xl" />
        </li>
      </ul>

      <Modal
        title="Add New Category"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
      >
        <Form layout="vertical" onFinish={onFinish} form={form}>
          <Form.Item
            name="title"
            label="Add Category"
            rules={[
              {
                required: true,
                message: "Please input the title of category!",
              },
            ]}
          >
            <Input placeholder="please write the category name" />
          </Form.Item>

          <div className="flex justify-end items-center">
            <Button htmlType="submit" type="primary" icon={<PlusOutlined />}>
              Add Category
            </Button>
          </div>
        </Form>
      </Modal>
    </>
  );
};

export default Categories;
