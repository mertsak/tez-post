import { useState } from "react";
import CreateBill from "../components/Basket/CreateBill";
import BasketCard from "../components/Basket/BasketCard";
import BasketTable from "../components/Basket/BasketTable";

const BasketPage = () => {
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
    <>
      <div className="px-4">
        <h2 className="text-4xl font-semibold text-center mb-6">Basket</h2>
        <BasketTable />

        <div className="cart-total flex justify-end mt-4">
          <BasketCard showModal={showModal} />
        </div>
      </div>

      <CreateBill
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />
    </>
  );
};

export default BasketPage;
