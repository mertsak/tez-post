import { Card, Button } from "antd";

const BasketCard = ({ showModal }) => {
  return (
    <Card className="w-72">
      <div className="flex justify-between items-center">
        <span>Subtotal:</span>
        <span>1000</span>
      </div>

      <div className="flex justify-between items-center my-2">
        <span>VAT total %8:</span>
        <span className="font-bold text-red-500">+25.92$</span>
      </div>

      <div className="flex justify-between items-center font-bold">
        <span>Total:</span>
        <span className="font-bold">1000</span>
      </div>

      <Button
        onClick={showModal}
        className="w-full mt-4"
        size="large"
        type="primary"
      >
        Pay
      </Button>
    </Card>
  );
};

export default BasketCard;
