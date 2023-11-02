import { useState } from "react";

import BillCard from "../components/Bill/BillCard";
import BillTable from "../components/Bill/BillTable";
import PrintBill from "../components/Bill/PrintBill";

const BillsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="px-4">
      <h2 className="text-4xl font-semibold text-center mb-6">Bill</h2>

      <BillTable />

      <div className="cart-total flex justify-end mt-4">
        <BillCard showModal={showModal} />
      </div>

      <PrintBill
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />
    </div>
  );
};

export default BillsPage;
