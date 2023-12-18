import { Table, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getBillsItems } from "../../redux/services/billService";

const BillTable = ({ showModal, setPrintModalData }) => {
  const dispatch = useDispatch();
  const { billsItems } = useSelector((state) => state.post);

  console.log(billsItems);

  useEffect(() => {
    dispatch(getBillsItems());
  }, [dispatch]);

  const columns = [
    {
      title: "Table Number",
      dataIndex: "tableNumber",
      key: "tableNumber",
    },
    {
      title: "Created Date",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (text) => <span>{text.slice(0, 10)}</span>,
      sorter: (a, b) => a.createdAt.localeCompare(b.createdAt),
    },
    {
      title: "Payment Method",
      dataIndex: "paymentMethod",
      key: "paymentMethod",
      render: (text) => <span>{text}</span>,
      filters: [...new Set(billsItems.map((item) => item.paymentMethod))].map(
        (item) => ({
          text: item,
          value: item,
        })
      ),
      onFilter: (value, record) => record.paymentMethod.includes(value),
    },
    {
      title: "Total Price",
      dataIndex: "totalAmount",
      key: "totalAmount",
      sorter: (a, b) => a.totalAmount - b.totalAmount,
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, record) => {
        return (
          <div className="flex-center">
            <Button
              onClick={() => {
                showModal();
                setPrintModalData(record);
              }}
              type="primary"
            >
              Print
            </Button>
          </div>
        );
      },
    },
  ];

  return (
    <Table
      dataSource={billsItems}
      columns={columns}
      bordered
      pagination={false}
      rowKey={"_id"}
      className="w-3/4 mx-auto"
      scroll={{ x: 1000, y: 600 }}
    />
  );
};

export default BillTable;
