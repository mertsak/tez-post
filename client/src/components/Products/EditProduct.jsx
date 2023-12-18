import "antd-button-color/dist/css/style.css";
import { Form, Table, Input, Button, message, Modal, Select } from "antd";
import { useSelector } from "react-redux";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import {
  editProductItem,
  deleteProductItem,
} from "../../redux/services/productService";
import { getProductsItems } from "../../redux/services/productService";
import { getCategoriesItems } from "../../redux/services/categoryService";

const EditProduct = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const { productsItems, categoriesItems } = useSelector((state) => state.post);
  const [editingItem, setEditingItem] = useState({});

  useEffect(() => {
    dispatch(getProductsItems());
    dispatch(getCategoriesItems());
  }, [dispatch]);

  // Add Modal
  const showAddModal = () => {
    setIsAddModalOpen(true);
  };

  const handleAddOk = () => {
    setIsAddModalOpen(false);
  };

  const handleAddCancel = () => {
    setIsAddModalOpen(false);
  };

  const columns = [
    {
      title: "Product Title",
      dataIndex: "title",
      key: "title",
      render: (_, record) => {
        return <span>{record.title}</span>;
      },
    },
    {
      title: "Product Image",
      dataIndex: "img",
      key: "img",
      render: (_, record) => {
        return (
          <img
            alt={record.title}
            src={record.img}
            className="w-20 h-20 object-cover"
          />
        );
      },
    },
    {
      title: "Product Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Product Category",
      dataIndex: "category",
      key: "category",
      render: (_, record) => {
        return (
          <span>
            {categoriesItems?.find((item) => item.title === record.category)
              ?.title ?? "No Category"}
          </span>
        );
      },
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (text, record) => (
        <div className="flex justify-center items-center gap-4">
          <Button
            className="flex-center"
            type="warning"
            shape="circle"
            icon={<EditOutlined />}
            onClick={() => {
              setEditingItem(record);
              showAddModal();
            }}
          />

          <Button
            onClick={() => deleteProduct(record._id)}
            className="danger flex-center"
            shape="circle"
            icon={<DeleteOutlined />}
          />
        </div>
      ),
    },
  ];

  const deleteProduct = (id) => {
    try {
      if (window.confirm("Are you sure you want to delete this product?")) {
        dispatch(deleteProductItem(id));
        message.success("Product Deleted Successfully");
      }
    } catch (error) {
      message.error("Something went wrong");
      console.log(error);
    }
  };

  const onFinish = (values) => {
    try {
      dispatch(editProductItem({ ...values, _id: editingItem._id }));
      message.success("Category Edited Successfully");
    } catch (error) {
      message.error("Something went wrong");
      console.log(error);
    }
  };

  useEffect(() => {
    form.setFieldsValue(editingItem);
  }, [form, editingItem]);

  return (
    <>
      <Table
        size="small"
        bordered
        dataSource={productsItems}
        columns={columns}
        rowKey={"_id"}
        scroll={{ x: 1000 }}
        className="w-3/4 mx-auto"
      />

      <Modal
        title="Add New Product"
        open={isAddModalOpen}
        onOk={handleAddOk}
        onCancel={handleAddCancel}
        footer={false}
      >
        <Form layout="vertical" onFinish={onFinish} form={form}>
          <Form.Item
            name="title"
            label="Product Name"
            rules={[
              {
                required: true,
                message: "Please input the title of Product!",
              },
            ]}
          >
            <Input placeholder="Enter Product Name" />
          </Form.Item>

          <Form.Item
            name="img"
            label="Product Image"
            rules={[
              {
                required: true,
                message: "Please input the title of Image!",
              },
            ]}
          >
            <Input placeholder="Enter Product Image" />
          </Form.Item>

          <Form.Item
            name="price"
            label="Product Price"
            rules={[
              {
                required: true,
                message: "Please enter the Price of the Product!",
              },
            ]}
          >
            <Input placeholder="Enter Product Price" />
          </Form.Item>

          <Form.Item
            name="category"
            label="Product Category"
            rules={[
              {
                required: true,
                message: "Please select the category of the Product!",
              },
            ]}
          >
            <Select
              className="w-full"
              showSearch
              placeholder="Select a category"
              optionFilterProp="children"
              filterOption={(input, option) =>
                (option?.label ?? "").includes(input)
              }
              filterSort={(optionA, optionB) =>
                (optionA?.label ?? "")
                  .toLowerCase()
                  .localeCompare((optionB?.label ?? "").toLowerCase())
              }
              options={
                categoriesItems?.map((item) => ({
                  value: item._id,
                  label: item.title,
                })) ?? []
              }
            />
          </Form.Item>

          <div className="flex justify-end items-center">
            <Button htmlType="submit" type="primary" icon={<EditOutlined />}>
              Edit Product
            </Button>
          </div>
        </Form>
      </Modal>
    </>
  );
};

export default EditProduct;
