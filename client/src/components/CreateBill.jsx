import { Modal, Form, Input, Select, Card, Button } from "antd";

const { Option } = Select;

const CreateBill = ({ isModalOpen, handleOk, handleCancel }) => {
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }} placeholder="+1">
        <Option value="1">+1</Option>
        <Option value="90">+90</Option>
      </Select>
    </Form.Item>
  );

  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <Modal
      title="Fatura Oluştur"
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
          label="Customer Name"
          name="Customer Name"
          validateDebounce={1000}
          validateTrigger="onBlur"
          rules={[
            {
              max: 25,
              min: 2,
              required: true,
              type: "string",
            },
          ]}
        >
          <Input placeholder="Customer Name" />
        </Form.Item>

        <Form.Item
          hasFeedback
          label="Phone Number"
          name="Phone Number"
          validateDebounce={1000}
          validateTrigger="onBlur"
          rules={[
            {
              required: true,
              max: 15,
            },
          ]}
        >
          <Input
            addonBefore={prefixSelector}
            style={{ width: "100%" }}
            placeholder="Phone Number"
          />
        </Form.Item>

        <Form.Item
          hasFeedback
          label="Payment Method"
          name="Payment Method"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select placeholder="ödeme yöntemi seçiniz">
            <Select.Option value="nakit">Nakit</Select.Option>
            <Select.Option value="kredi_kartı">Kredi Kartı</Select.Option>
          </Select>
        </Form.Item>

        <Card className="w-full">
          <div className="flex justify-between items-center">
            <span>Ara Toplam:</span>
            <span>1000</span>
          </div>

          <div className="flex justify-between items-center my-2">
            <span>KDV toplam %8:</span>
            <span className="font-bold text-red-500">+25.92$</span>
          </div>

          <div className="flex justify-between items-center font-bold">
            <span>Toplam:</span>
            <span className="font-bold">1000</span>
          </div>

          <Button
            className="w-full mt-4"
            size="large"
            type="primary"
            htmlType="submit"
          >
            Ödeme Yap
          </Button>
        </Card>
      </Form>
    </Modal>
  );
};

export default CreateBill;
