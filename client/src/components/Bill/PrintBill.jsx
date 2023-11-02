import { Modal } from "antd";

const PrintBill = ({ isModalOpen, handleOk, handleCancel }) => {
  return (
    <Modal
      title="Print Bill"
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
      <p>yapılacak</p>
    </Modal>
  );
};

export default PrintBill;
