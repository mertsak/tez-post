import { Table } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import { getEmployeesItems } from "../../redux/services/employeeService";

const CustomerTable = () => {
  const dispatch = useDispatch();

  const { empleyeesItems } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getEmployeesItems());
  }, [dispatch]);

  const columns = [
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
  ];

  return (
    <Table
      dataSource={empleyeesItems}
      columns={columns}
      bordered
      pagination={false}
      className="w-3/4 mx-auto"
      scroll={{ x: 1000, y: 600 }}
      rowKey={"_id"}
    />
  );
};

export default CustomerTable;
