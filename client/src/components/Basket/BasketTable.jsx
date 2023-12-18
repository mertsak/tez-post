import { useSelector, useDispatch } from "react-redux";
import { Table, Button, message } from "antd";
import { MinusOutlined, PlusOutlined, DeleteOutlined } from "@ant-design/icons";
import {
  incrementItem,
  decrementItem,
  deleteProduct,
} from "../../redux/postSlice";

const BasketTable = () => {
  const { cartItems, categoriesItems } = useSelector((state) => state.post);
  const dispatch = useDispatch();

  const handleDecrement = (item) => {
    dispatch(decrementItem(item));
    message.success("Item quantity decreased");
  };

  const handleIncrement = (item) => {
    dispatch(incrementItem(item));
    message.success("Item quantity increased");
  };

  const columns = [
    {
      title: "Product İmage",
      dataIndex: "img",
      key: "img",
      render: (_, record) => {
        return (
          <img
            alt={record.title}
            src={record.img}
            className="w-20 h-20 object-cover"
          />
        );
      },
    },
    {
      title: "Product Title",
      dataIndex: "title",
      key: "title",
      render: (_, record) => {
        return <span>{record.title}</span>;
      },
    },
    {
      title: "Product Category",
      dataIndex: "category",
      key: "category",
      render: (_, record) => {
        return (
          <span>
            {categoriesItems?.find((item) => item.title === record.category)
              ?.title ?? "No Category"}
          </span>
        );
      },
      filters: categoriesItems.map((item) => ({
        text: item.title,
        value: item.title,
      })),
      onFilter: (value, record) =>
        categoriesItems.find((item) => item.title === record.category)
          ?.title === value,
    },
    {
      title: "Product Price",
      dataIndex: "price",
      key: "price",
      sorter: (a, b) => a.price - b.price,
    },
    {
      title: "Product Quantity",
      dataIndex: "quantity",
      key: "quantity",
      sorter: (a, b) => a.quantity - b.quantity,
      render: (_, record) => {
        return (
          <div className="flex justify-center items-center gap-4 mt-3">
            <Button
              type="primary"
              size="medium"
              shape="circle"
              className="w-full flex items-center justify-center rounded-full"
              icon={<MinusOutlined />}
              onClick={() => handleDecrement(record)}
              disabled={
                cartItems.length > 0 &&
                cartItems.find((cartItem) => cartItem._id === record._id)
                  ? false
                  : true
              }
            />

            {cartItems.length > 0 &&
            cartItems.find((cartItem) => cartItem._id === record._id) ? (
              <span className="text-xl font-semibold">
                {
                  cartItems.find((cartItem) => cartItem._id === record._id)
                    .quantity
                }
              </span>
            ) : (
              <span className="text-xl font-semibold">0</span>
            )}

            <Button
              type="primary"
              size="medium"
              shape="circle"
              className="w-full flex items-center justify-center rounded-full"
              icon={<PlusOutlined />}
              onClick={() => handleIncrement(record)}
            />
          </div>
        );
      },
    },
    {
      title: "Total Price",
      dataIndex: "totalPrice",
      key: "totalPrice",
      render: (_, record) => {
        return <span>{(record.price * record.quantity).toFixed(2)}</span>;
      },
      sorter: (a, b) => a.quantity * a.price - b.quantity * b.price,
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, record) => {
        return (
          <span className="flex-center">
            <Button
              onClick={() => {
                if (
                  window.confirm("Are you sure you want to delete this item?")
                ) {
                  dispatch(deleteProduct(record));
                  message.error("Item removed from cart");
                }
              }}
              type="primary"
              danger
              icon={<DeleteOutlined />}
            />
          </span>
        );
      },
    },
  ];

  return (
    <Table
      dataSource={cartItems}
      columns={columns}
      bordered
      pagination={false}
      className="w-3/4 mx-auto"
      scroll={{ x: 1000, y: 600 }}
      rowKey={"_id"}
    />
  );
};

export default BasketTable;
