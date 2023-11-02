import { Button } from "antd";
import { ClearOutlined, MinusOutlined, PlusOutlined } from "@ant-design/icons";

const CartTotal = () => {
  return (
    <div className="cart h-full flex flex-col md:max-h-[calc(100vh-108px)]">
      <h2 className="bg-blue-700 text-center py-4 text-white font-bold tracking-wide">
        Items in cart
      </h2>

      <ul className="cart-items px-2 flex flex-col gap-y-2 overflow-y-auto">
        <li className="cart-item flex justify-between items-center mt-2">
          <div className="flex items-center">
            <img
              src="https://i.lezzet.com.tr/images-xxlarge-secondary/elma-nasil-yenir-221135ca-f383-474c-a4f5-ad02a45db978.jpg"
              alt=""
              className="w-16 h-16 object-cover rounded-md"
            />

            <div className="flex flex-col ml-2">
              <b>Apple</b>
              <span>12$ x 2</span>
            </div>
          </div>

          <div className="flex justify-center items-center gap-2">
            <Button
              type="primary"
              size="middle"
              className="w-full flex items-center justify-center rounded-full"
              icon={<MinusOutlined />}
            />

            <span className="font-bold">1</span>

            <Button
              type="primary"
              size="middle"
              className="w-full flex items-center justify-center rounded-full"
              icon={<PlusOutlined />}
            />
          </div>
        </li>

        <li className="cart-item flex justify-between items-center mt-2">
          <div className="flex items-center">
            <img
              src="https://i.lezzet.com.tr/images-xxlarge-secondary/elma-nasil-yenir-221135ca-f383-474c-a4f5-ad02a45db978.jpg"
              alt=""
              className="w-16 h-16 object-cover rounded-md"
            />

            <div className="flex flex-col ml-2">
              <b>Apple</b>
              <span>12$ x 2</span>
            </div>
          </div>

          <div className="flex justify-center items-center gap-2">
            <Button
              type="primary"
              size="middle"
              className="w-full flex items-center justify-center rounded-full"
              icon={<MinusOutlined />}
            />

            <span>1</span>

            <Button
              type="primary"
              size="middle"
              className="w-full flex items-center justify-center rounded-full"
              icon={<PlusOutlined />}
            />
          </div>
        </li>

        <li className="cart-item flex justify-between items-center mt-2">
          <div className="flex items-center">
            <img
              src="https://i.lezzet.com.tr/images-xxlarge-secondary/elma-nasil-yenir-221135ca-f383-474c-a4f5-ad02a45db978.jpg"
              alt=""
              className="w-16 h-16 object-cover rounded-md"
            />

            <div className="flex flex-col ml-2">
              <b>Apple</b>
              <span>12$ x 2</span>
            </div>
          </div>

          <div className="flex justify-center items-center gap-2">
            <Button
              type="primary"
              size="middle"
              className="w-full flex items-center justify-center rounded-full"
              icon={<MinusOutlined />}
            />

            <span>1</span>

            <Button
              type="primary"
              size="middle"
              className="w-full flex items-center justify-center rounded-full"
              icon={<PlusOutlined />}
            />
          </div>
        </li>

        <li className="cart-item flex justify-between items-center mt-2">
          <div className="flex items-center">
            <img
              src="https://i.lezzet.com.tr/images-xxlarge-secondary/elma-nasil-yenir-221135ca-f383-474c-a4f5-ad02a45db978.jpg"
              alt=""
              className="w-16 h-16 object-cover rounded-md"
            />

            <div className="flex flex-col ml-2">
              <b>Apple</b>
              <span>12$ x 2</span>
            </div>
          </div>

          <div className="flex justify-center items-center gap-2">
            <Button
              type="primary"
              size="middle"
              className="w-full flex items-center justify-center rounded-full"
              icon={<MinusOutlined />}
            />

            <span>1</span>

            <Button
              type="primary"
              size="middle"
              className="w-full flex items-center justify-center rounded-full"
              icon={<PlusOutlined />}
            />
          </div>
        </li>

        <li className="cart-item flex justify-between items-center mt-2">
          <div className="flex items-center">
            <img
              src="https://i.lezzet.com.tr/images-xxlarge-secondary/elma-nasil-yenir-221135ca-f383-474c-a4f5-ad02a45db978.jpg"
              alt=""
              className="w-16 h-16 object-cover rounded-md"
            />

            <div className="flex flex-col ml-2">
              <b>Apple</b>
              <span>12$ x 2</span>
            </div>
          </div>

          <div className="flex justify-center items-center gap-2">
            <Button
              type="primary"
              size="middle"
              className="w-full flex items-center justify-center rounded-full"
              icon={<MinusOutlined />}
            />

            <span>1</span>

            <Button
              type="primary"
              size="middle"
              className="w-full flex items-center justify-center rounded-full"
              icon={<PlusOutlined />}
            />
          </div>
        </li>

        <li className="cart-item flex justify-between items-center mt-2">
          <div className="flex items-center">
            <img
              src="https://i.lezzet.com.tr/images-xxlarge-secondary/elma-nasil-yenir-221135ca-f383-474c-a4f5-ad02a45db978.jpg"
              alt=""
              className="w-16 h-16 object-cover rounded-md"
            />

            <div className="flex flex-col ml-2">
              <b>Apple</b>
              <span>12$ x 2</span>
            </div>
          </div>

          <div className="flex justify-center items-center gap-2">
            <Button
              type="primary"
              size="middle"
              className="w-full flex items-center justify-center rounded-full"
              icon={<MinusOutlined />}
            />

            <span>1</span>

            <Button
              type="primary"
              size="middle"
              className="w-full flex items-center justify-center rounded-full"
              icon={<PlusOutlined />}
            />
          </div>
        </li>

        <li className="cart-item flex justify-between items-center mt-2">
          <div className="flex items-center">
            <img
              src="https://i.lezzet.com.tr/images-xxlarge-secondary/elma-nasil-yenir-221135ca-f383-474c-a4f5-ad02a45db978.jpg"
              alt=""
              className="w-16 h-16 object-cover rounded-md"
            />

            <div className="flex flex-col ml-2">
              <b>Apple</b>
              <span>12$ x 2</span>
            </div>
          </div>

          <div className="flex justify-center items-center gap-2">
            <Button
              type="primary"
              size="middle"
              className="w-full flex items-center justify-center rounded-full"
              icon={<MinusOutlined />}
            />

            <span>1</span>

            <Button
              type="primary"
              size="middle"
              className="w-full flex items-center justify-center rounded-full"
              icon={<PlusOutlined />}
            />
          </div>
        </li>

        <li className="cart-item flex justify-between items-center mt-2">
          <div className="flex items-center">
            <img
              src="https://i.lezzet.com.tr/images-xxlarge-secondary/elma-nasil-yenir-221135ca-f383-474c-a4f5-ad02a45db978.jpg"
              alt=""
              className="w-16 h-16 object-cover rounded-md"
            />

            <div className="flex flex-col ml-2">
              <b>Apple</b>
              <span>12$ x 2</span>
            </div>
          </div>

          <div className="flex justify-center items-center gap-2">
            <Button
              type="primary"
              size="middle"
              className="w-full flex items-center justify-center rounded-full"
              icon={<MinusOutlined />}
            />

            <span>1</span>

            <Button
              type="primary"
              size="middle"
              className="w-full flex items-center justify-center rounded-full"
              icon={<PlusOutlined />}
            />
          </div>
        </li>

        <li className="cart-item flex justify-between items-center mt-2">
          <div className="flex items-center">
            <img
              src="https://i.lezzet.com.tr/images-xxlarge-secondary/elma-nasil-yenir-221135ca-f383-474c-a4f5-ad02a45db978.jpg"
              alt=""
              className="w-16 h-16 object-cover rounded-md"
            />

            <div className="flex flex-col ml-2">
              <b>Apple</b>
              <span>12$ x 2</span>
            </div>
          </div>

          <div className="flex justify-center items-center gap-2">
            <Button
              type="primary"
              size="middle"
              className="w-full flex items-center justify-center rounded-full"
              icon={<MinusOutlined />}
            />

            <span>1</span>

            <Button
              type="primary"
              size="middle"
              className="w-full flex items-center justify-center rounded-full"
              icon={<PlusOutlined />}
            />
          </div>
        </li>
      </ul>

      <div className="cart-totals mt-auto">
        <div className="border">
          <div className="flex justify-between p-2">
            <b>Subtotal:</b>
            <span>99.99$</span>
          </div>

          <div className="flex justify-between p-2">
            <b>VAT total %8</b>
            <span className="text-red-500">99.99$</span>
          </div>
        </div>

        <div className="border-b mt-4">
          <div className="flex justify-between p-2">
            <b className="text-xl text-green-500">Grand total</b>
            <span className="text-xl">99.99$</span>
          </div>
        </div>

        <div className="p-4">
          <Button type="primary" size="large" className="w-full mt-2">
            Complete the order
          </Button>

          <Button
            type="primary"
            danger
            size="large"
            icon={<ClearOutlined />}
            className="w-full mt-2"
          >
            Clear
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
