import { Button, message } from "antd";
import { ClearOutlined, CloseOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { deleteProduct, resetCart } from "../redux/postSlice";
import { useNavigate } from "react-router-dom";

const CartTotal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cartItems, total, tax } = useSelector((state) => state.post);

  const handleResetCart = () => {
    if (window.confirm("Are you sure you want to delete all items?")) {
      dispatch(resetCart());
      message.error("Cart cleared");
    }
  };

  return (
    <div className="cart h-full flex flex-col md:max-h-[calc(100vh-108px)]">
      <h2 className="bg-blue-700 text-center py-4 text-white font-bold tracking-wide">
        Items in cart
      </h2>

      <ul className="cart-items px-2 flex flex-col gap-y-2 overflow-y-auto">
        {cartItems.length !== 0 ? (
          <>
            {cartItems
              ?.map((item) => {
                return (
                  <li
                    className="cart-item flex justify-between items-center mt-2"
                    key={item._id}
                  >
                    <div className="flex items-center">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-16 h-16 object-cover rounded-md"
                      />

                      <div className="flex flex-col ml-2">
                        <b>{item.title} </b>
                        <div>
                          <span>
                            {item.price}$ x {item.quantity} =
                          </span>
                          <span>
                            &nbsp; {(item.price * item.quantity).toFixed(2)}$
                          </span>
                        </div>
                      </div>
                    </div>

                    <Button
                      type="primary"
                      danger
                      size="middle"
                      icon={<CloseOutlined />}
                      onClick={() => {
                        if (
                          window.confirm(
                            "Are you sure you want to delete this item?"
                          )
                        ) {
                          dispatch(deleteProduct(item));
                          message.error("Item removed from cart");
                        }
                      }}
                    />
                  </li>
                );
              })
              .reverse()}
          </>
        ) : (
          <span className="flex-center mt-4">
            <b>There is no item in cart</b>
          </span>
        )}
      </ul>

      <div className="cart-totals mt-auto">
        <div className="border">
          <div className="flex justify-between p-2">
            <b>Subtotal:</b>
            <span>{(total - total * tax).toFixed(2)}$</span>
          </div>

          <div className="flex justify-between p-2">
            <b>VAT total %8</b>
            <span className="text-red-500"> +{(total * tax).toFixed(2)}$</span>
          </div>
        </div>

        <div className="border-b mt-4">
          <div className="flex justify-between p-2">
            <b className="text-xl text-green-500">Grand total</b>
            <span className="text-xl">{total.toFixed(2)}$</span>
          </div>
        </div>

        <div className="p-4">
          <Button
            onClick={() => navigate("/basketPage")}
            type="primary"
            size="large"
            className="w-full mt-2"
            disabled={cartItems.length > 0 ? false : true}
          >
            Complete the order
          </Button>

          <Button
            type="primary"
            danger
            size="large"
            icon={<ClearOutlined />}
            className="w-full mt-2"
            onClick={() => handleResetCart()}
            disabled={cartItems.length > 0 ? false : true}
          >
            Clear
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
