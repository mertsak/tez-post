import { Card, Form, Button, message } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getProductsItems } from "../../redux/services/productService";
import { PlusOutlined, EditOutlined, MinusOutlined } from "@ant-design/icons";
import AddProdModal from "./AddProdModal";
import { useNavigate } from "react-router-dom";
import {
  addProduct,
  incrementItem,
  decrementItem,
} from "../../redux/postSlice";

const Products = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [form] = Form.useForm();

  const { cartItems, filteredProducts, searchData } = useSelector(
    (state) => state.post
  );
  const auth = JSON.parse(localStorage.getItem("auth"));

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

  const handleClick = (item) => {
    dispatch(
      addProduct({
        ...item,
        quantity: 1,
      })
    );
    message.success("Item added to cart");
  };

  const handleIncrement = (item, e) => {
    e.stopPropagation();
    dispatch(incrementItem(item));

    message.success("Item added to cart");
  };

  const handleDecrement = (item, e) => {
    e.stopPropagation();
    dispatch(decrementItem(item));

    message.error("Item removed from cart");
  };

  return (
    <div className="products grid grid-cols-products-fill gap-4">
      {filteredProducts
        .filter((item) => item.title.toLowerCase().includes(searchData))
        ?.map((item) => {
          return (
            <Card
              hoverable
              className="w-full"
              onClick={() => handleClick(item)}
              cover={
                <img
                  alt={item.title}
                  src={item.img}
                  className="h-[135px] object-fill -z-50"
                />
              }
              key={item._id}
            >
              <div className="flex flex-col justify-center items-start gap-1">
                <span className="text-xl font-semibold">{item.title}</span>
                <span className="text-base font-medium">${item.price}</span>
              </div>

              <div className="flex justify-center items-center gap-4 mt-3">
                <Button
                  type="primary"
                  size="large"
                  shape="circle"
                  className="w-full flex items-center justify-center rounded-full"
                  icon={<MinusOutlined />}
                  onClick={(e) => handleDecrement(item, e)}
                  disabled={
                    cartItems.length > 0 &&
                    cartItems.find((cartItem) => cartItem._id === item._id)
                      ? false
                      : true
                  }
                />

                {cartItems.length > 0 &&
                cartItems.find((cartItem) => cartItem._id === item._id) ? (
                  <span className="text-xl font-semibold">
                    {
                      cartItems.find((cartItem) => cartItem._id === item._id)
                        .quantity
                    }
                  </span>
                ) : (
                  <span className="text-xl font-semibold">0</span>
                )}

                <Button
                  type="primary"
                  size="large"
                  shape="circle"
                  className="w-full flex items-center justify-center rounded-full"
                  icon={<PlusOutlined />}
                  onClick={(e) => handleIncrement(item, e)}
                />
              </div>
            </Card>
          );
        })}

      {auth && (
        <Card
          onClick={showAddModal}
          hoverable
          className="w-full flex-center bg-indigo-600 hover:bg-indigo-500 duration-300 text-white min-h-[236px]"
        >
          <PlusOutlined className="md:text-6xl" />
        </Card>
      )}

      {auth && (
        <Card
          onClick={() => navigate("/editProductPage")}
          hoverable
          className="w-full flex-center bg-slate-600 hover:bg-slate-500 duration-300 text-white min-h-[236px]"
        >
          <EditOutlined className="md:text-6xl" />
        </Card>
      )}

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
