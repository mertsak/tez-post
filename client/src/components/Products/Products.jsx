import { Card, Form } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getProductsItems } from "../../redux/services/productService";
import { PlusOutlined, EditOutlined } from "@ant-design/icons";
import AddProdModal from "./AddProdModal";

const Products = () => {
  const dispatch = useDispatch();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [form] = Form.useForm();

  const { productsItems } = useSelector((state) => state.post);

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

  useEffect(() => {
    dispatch(getProductsItems());
  }, [dispatch]);

  return (
    <div className="products grid grid-cols-products-fill gap-4">
      {productsItems?.map((item) => {
        return (
          <Card
            hoverable
            className="w-full"
            cover={<img alt={item.title} src={item.img} />}
            key={item._id}
          >
            <div className="flex flex-col justify-center items-start gap-1">
              <span className="text-xl font-semibold">{item.title}</span>
              <span className="text-base font-medium">${item.price}</span>
            </div>
          </Card>
        );
      })}

      <Card
        hoverable
        className="w-full flex-center bg-indigo-600 hover:bg-indigo-500 duration-300 text-white"
        onClick={showAddModal}
      >
        <PlusOutlined className="md:text-6xl" />
      </Card>

      <Card
        hoverable
        className="w-full flex-center bg-slate-600 hover:bg-slate-500 duration-300 text-white"
      >
        <EditOutlined className="md:text-6xl" />
      </Card>

      <AddProdModal
        handleAddOk={handleAddOk}
        handleAddCancel={handleAddCancel}
        showAddModal={showAddModal}
        isAddModalOpen={isAddModalOpen}
        form={form}
      />
    </div>
  );
};

export default Products;
