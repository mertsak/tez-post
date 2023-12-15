import { useState } from "react";

import BillTable from "../components/Bill/BillTable";
import PrintBill from "../components/Bill/PrintBill";

const BillsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [printModalData, setPrintModalData] = useState();

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
      <h2 className="text-4xl font-semibold text-center mb-6">Bills</h2>

      <BillTable showModal={showModal} setPrintModalData={setPrintModalData} />

      <PrintBill
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
        printModalData={printModalData}
      />
    </div>
  );
};

export default BillsPage;
