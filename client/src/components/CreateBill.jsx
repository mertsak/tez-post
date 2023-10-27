import { Modal } from "antd";

const CreateBill = ({ isModalOpen, handleOk, handleCancel }) => {
  return (
    <Modal
      title="Fatura Oluştur"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  );
};

export default CreateBill;
