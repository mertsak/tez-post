import { PlusOutlined, EditOutlined } from "@ant-design/icons";
import React, { useState, useEffect } from "react";
import { Form } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { getCategoriesItems } from "../../redux/services/service.js";
import AddCateModal from "./AddCateModal.jsx";
import EditCateModal from "./EditCateModal.jsx";

const Categories = () => {
  const dispatch = useDispatch();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [form] = Form.useForm();
  const { categoriesItems } = useSelector((state) => state.post);

  // Add Modal

  const showAddModal = () => {
    setIsAddModalOpen(true);
  };

  const handleAddOk = () => {
    setIsAddModalOpen(false);
  };

  const handleAddCancel = () => {
    setIsAddModalOpen(false);
  };

  // Edit Modal

  const showEditModal = () => {
    setIsEditModalOpen(true);
  };

  const handleEditOk = () => {
    setIsEditModalOpen(false);
  };

  const handleEditCancel = () => {
    setIsEditModalOpen(false);
  };

  useEffect(() => {
    dispatch(getCategoriesItems());
  }, [dispatch]);

  return (
    <>
      <ul className="flex flex-row md:flex-col mb-1 gap-4 md:justify-center items-center text-lg">
        {categoriesItems?.map((item) => {
          return (
            <li className="categories-item" key={item._id}>
              <span>{item.title}</span>
            </li>
          );
        })}

        <li
          type="primary"
          onClick={showAddModal}
          className="categories-item bg-indigo-700 hover:bg-indigo-500"
        >
          <PlusOutlined className="md:text-2xl" />
        </li>

        <li
          type="primary"
          onClick={showEditModal}
          className="categories-item bg-slate-700 hover:bg-slate-500"
        >
          <EditOutlined className="md:text-2xl" />
        </li>
      </ul>

      <AddCateModal
        handleAddOk={handleAddOk}
        handleAddCancel={handleAddCancel}
        isAddModalOpen={isAddModalOpen}
        form={form}
        setIsAddModalOpen={setIsAddModalOpen}
      />

      <EditCateModal
        handleEditOk={handleEditOk}
        handleEditCancel={handleEditCancel}
        isEditModalOpen={isEditModalOpen}
        setIsEditModalOpen={setIsEditModalOpen}
      />
    </>
  );
};

export default Categories;
