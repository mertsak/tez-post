import { Card, Button } from "antd";

const BillCard = ({ showModal }) => {
  return (
    <Card className="w-72">
      <Button
        onClick={showModal}
        className="w-full mt-4"
        size="large"
        type="primary"
      >
        Print
      </Button>
    </Card>
  );
};

export default BillCard;
