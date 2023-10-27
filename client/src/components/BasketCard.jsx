import { Card, Button } from "antd";

const BasketCard = ({ showModal }) => {
  return (
    <Card className="w-72">
      <div className="flex justify-between items-center">
        <span>Ara Toplam:</span>
        <span>1000</span>
      </div>

      <div className="flex justify-between items-center my-2">
        <span>KDV toplam %8:</span>
        <span className="font-bold text-red-500">+25.92$</span>
      </div>

      <div className="flex justify-between items-center font-bold">
        <span>Toplam:</span>
        <span className="font-bold">1000</span>
      </div>

      <Button
        onClick={showModal}
        className="w-full mt-4"
        size="large"
        type="primary"
      >
        Ödeme Yap
      </Button>
    </Card>
  );
};

export default BasketCard;
