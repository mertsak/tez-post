import { Card, Button } from "antd";
import { useSelector } from "react-redux";

const BasketCard = ({ showModal }) => {
  const { total, tax } = useSelector((state) => state.post);

  return (
    <Card className="w-72">
      <div className="flex justify-between items-center">
        <span>Subtotal:</span>
        <span>{(total - total * tax).toFixed(2)}$</span>
      </div>

      <div className="flex justify-between items-center my-2">
        <span>VAT total %8:</span>
        <span className="font-bold text-red-500">
          +{(total * tax).toFixed(2)}$
        </span>
      </div>

      <div className="flex justify-between items-center font-bold">
        <span>Total:</span>
        <span className="font-bold">{total.toFixed(2)}$</span>
      </div>

      <Button
        onClick={showModal}
        className="w-full mt-4"
        size="large"
        type="primary"
        disabled={total === 0 ? true : false}
      >
        Pay
      </Button>
    </Card>
  );
};

export default BasketCard;
