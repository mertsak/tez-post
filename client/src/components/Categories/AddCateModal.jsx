import { PlusOutlined } from "@ant-design/icons";
import { Modal, Button, Form, Input, message } from "antd";
import axios from "axios";
import { getCategoriesItems } from "../../redux/services/service.js";
import { useDispatch } from "react-redux";

const AddCateModal = ({
  handleAddOk,
  handleAddCancel,
  isAddModalOpen,
  form,
  setIsAddModalOpen,
}) => {
  const dispatch = useDispatch();

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
          setIsAddModalOpen(false);
        })
        .then(() => {
          dispatch(getCategoriesItems());
        });
      form.resetFields();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal
      title="Add New Category"
      open={isAddModalOpen}
      onOk={handleAddOk}
      onCancel={handleAddCancel}
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
  );
};

export default AddCateModal;
