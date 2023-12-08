import { PlusOutlined } from "@ant-design/icons";
import { Modal, Button, Form, Input, message, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addProductItem } from "../../redux/services/productService";

const AddProdModal = ({
  handleAddOk,
  handleAddCancel,
  isAddModalOpen,
  form,
}) => {
  const dispatch = useDispatch();
  const { productsItems, categoriesItems } = useSelector((state) => state.post);

  const onFinish = (values) => {
    try {
      dispatch(addProductItem(values));
      message.success("Product added successfully");
      form.resetFields();
      handleAddOk();
    } catch (error) {
      message.error("Something went wrong");
      console.log(error);
    }
  };

  return (
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
          <Input
            placeholder="
            Enter Product Name
          "
          />
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
          <Input
            placeholder="
            Enter Product Image
          "
          />
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
          <Input
            placeholder="
            Enter Product Price
          "
          />
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
          <Button htmlType="submit" type="primary" icon={<PlusOutlined />}>
            Add Product
          </Button>
        </div>
      </Form>
    </Modal>
  );
};

export default AddProdModal;
