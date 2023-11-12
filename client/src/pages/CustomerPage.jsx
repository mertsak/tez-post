import CustomerTable from "../components/Customer/CustomerTable";

const CustomerPage = () => {
  return (
    <>
      <div className="px-4">
        <h2 className="text-4xl font-semibold text-center mb-6">Customer</h2>
        <CustomerTable />
      </div>
    </>
  );
};

export default CustomerPage;
