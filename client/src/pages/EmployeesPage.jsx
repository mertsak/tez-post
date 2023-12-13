import EmployeeTable from "../components/Employees/EmployeeTable.jsx";

const EmployeesPage = () => {
  return (
    <>
      <div className="px-4">
        <h2 className="text-4xl font-semibold text-center mb-6">Employees</h2>
        <EmployeeTable />
      </div>
    </>
  );
};

export default EmployeesPage;
