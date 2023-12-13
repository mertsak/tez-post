import { Modal, Form, Select, Card, Button, message } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { addBillItem } from "../../redux/services/billService";
import { resetCart } from "../../redux/postSlice";
import { useNavigate } from "react-router-dom";

const CreateBill = ({ isModalOpen, handleOk, handleCancel }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { total, tax, cartItems } = useSelector((state) => state.post);

  const onFinish = (values) => {
    dispatch(
      addBillItem({
        ...values,
        subTotal: (total - total * tax).toFixed(2),
        tax: tax,
        tableNumber: Math.floor(Math.random() * 50) + 1,
        totalAmount: total.toFixed(2),
        cartItems: cartItems,
      })
    );
    message.success("Bill created successfully");
    dispatch(resetCart());
  };

  return (
    <Modal
      title="Create Bill"
      open={isModalOpen}
      onOk={handleOk}
      footer={false}
      onCancel={handleCancel}
      rules={[
        {
          required: true,
        },
      ]}
    >
      <Form
        name="trigger"
        layout="vertical"
        autoComplete="off"
        onFinish={onFinish}
      >
        <Form.Item
          hasFeedback
          label="Payment Method"
          name="paymentMethod"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select placeholder="Please choose payment method">
            <Select.Option value="Cash">Cash</Select.Option>
            <Select.Option value="Credit Card">Credit Card</Select.Option>
          </Select>
        </Form.Item>

        <Card className="w-full">
          <div className="flex justify-between items-center">
            <span>Subtotal:</span>
            <span>{(total - total * tax).toFixed(2)}$</span>
          </div>

          <div className="flex justify-between items-center my-2">
            <span>VAT total %8:</span>
            <span className="font-bold text-red-500">
              +{(total * tax).toFixed(2)}$
            </span>
          </div>

          <div className="flex justify-between items-center font-bold">
            <span>Total:</span>
            <span className="font-bold">{total.toFixed(2)}$</span>
          </div>
        </Card>
        <Button
          className="w-full mt-4"
          size="large"
          type="primary"
          htmlType="submit"
        >
          Pay
        </Button>
      </Form>
    </Modal>
  );
};

export default CreateBill;
