import { Table } from "antd";

const BillTable = () => {
  const dataSource = [
    {
      key: "1",
      name: "Mert",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
  ];

  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      bordered
      pagination={false}
    />
  );
};

export default BillTable;
