import { useState } from "react";
import CreateBill from "../components/CreateBill";
import BasketTable from "../components/BasketTable";
import BasketCard from "../components/BasketCard";

const CartPage = () => {
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

export default CartPage;
