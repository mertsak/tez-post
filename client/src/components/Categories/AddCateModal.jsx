import { PlusOutlined } from "@ant-design/icons";
import { Modal, Button, Form, Input, message } from "antd";
import { addCategoryItem } from "../../redux/services/categoryService";
import { useDispatch } from "react-redux";

const AddCateModal = ({
  handleAddOk,
  handleAddCancel,
  isAddModalOpen,
  form,
}) => {
  const dispatch = useDispatch();

  const onFinish = (values) => {
    try {
      dispatch(addCategoryItem(values));
      message.success("Category added successfully");
      form.resetFields();
    } catch (error) {
      message.error("Category already exists");
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
