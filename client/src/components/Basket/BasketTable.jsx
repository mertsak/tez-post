import { useSelector, useDispatch } from "react-redux";
import { Table, Button, message, Input, Space } from "antd";
import { MinusOutlined, PlusOutlined, DeleteOutlined } from "@ant-design/icons";
import {
  incrementItem,
  decrementItem,
  deleteProduct,
} from "../../redux/postSlice";
import { useRef, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import Highlighter from "react-highlight-words";

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

  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? "#1677ff" : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: "#ffc069",
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

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
      ...getColumnSearchProps("title"),
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
      onFilter: (value, record) => {
        if (value === "All") {
          return record.category;
        } else {
          return record.category === value;
        }
      },
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
