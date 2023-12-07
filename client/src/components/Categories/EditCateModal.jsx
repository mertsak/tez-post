import { Modal, Form, Table } from "antd";

const EditCateModalComponent = ({
  isEditModalOpen,
  setIsEditModalOpen,
  handleEditOk,
  handleEditCancel,
}) => {
  return (
    <Modal
      title="Edit Category"
      open={isEditModalOpen}
      onOk={handleEditOk}
      onCancel={handleEditCancel}
      footer={false}
    >
      <Form>
        <Table bordered />
      </Form>
    </Modal>
  );
};

export default EditCateModalComponent;
