import "antd-button-color/dist/css/style.css";
import { Modal, Form, Table, Input, Button, message } from "antd";
import { useSelector } from "react-redux";
import { SaveOutlined, DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useState } from "react";
import {
  editCategoryItem,
  deleteCategoryItem,
} from "../../redux/services/categoryService";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const EditCateModalComponent = ({
  isEditModalOpen,
  handleEditOk,
  handleEditCancel,
}) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const { categoriesItems } = useSelector((state) => state.post);
  const [editingRow, setEditingRow] = useState({});

  const columns = [
    {
      title: "Category Title",
      dataIndex: "title",
      key: "title",
      render: (_, record) => {
        if (record._id === editingRow._id) {
          return (
            <Form.Item className="mb-0" name="title">
              <Input defaultValue={record.title} />
            </Form.Item>
          );
        } else {
          return <span>{record.title}</span>;
        }
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
            onClick={() => setEditingRow(record)}
            type="warning"
            shape="circle"
            icon={<EditOutlined />}
          />

          <Button
            className="flex-center"
            type="success"
            shape="circle"
            icon={<SaveOutlined />}
            htmlType="submit"
            disabled={editingRow._id === record._id ? false : true}
          />

          <Button
            onClick={() => deleteCategory(record._id)}
            className="danger flex-center"
            shape="circle"
            icon={<DeleteOutlined />}
          />
        </div>
      ),
    },
  ];

  const onFinish = (values) => {
    try {
      dispatch(editCategoryItem({ ...values, _id: editingRow._id }));
      message.success("Category Edited Successfully");
      setEditingRow({});
    } catch (error) {
      message.error("Something went wrong");
      console.log(error);
    }
  };

  const deleteCategory = (id) => {
    try {
      if (window.confirm("Are you sure you want to delete this category?")) {
        dispatch(deleteCategoryItem(id));
        message.error("Category Deleted Successfully");
      }
    } catch (error) {
      message.error("Something went wrong");
      console.log(error);
    }
  };

  useEffect(() => {
    form.setFieldsValue(editingRow);
  }, [form, editingRow]);

  return (
    <Modal
      title="Edit Category"
      open={isEditModalOpen}
      onOk={handleEditOk}
      onCancel={handleEditCancel}
      footer={false}
    >
      <Form onFinish={onFinish} form={form}>
        <Table
          bordered
          dataSource={categoriesItems}
          columns={columns}
          rowKey={"_id"}
        />
      </Form>
    </Modal>
  );
};

export default EditCateModalComponent;
