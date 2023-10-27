import { Button } from "antd";
import CartTotal from "../components/CartTotal";
import Categories from "../components/Categories";
import Products from "../components/Products";
import { LeftOutlined, CloseOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { setSideCartTotal } from "../redux/postSlice";

const HomePageInner = () => {
  const sideCartTotal = useSelector((state) => state.post.sideCartTotal);
  const dispatch = useDispatch();

  return (
    <>
      <div className="home px-4 flex md:flex-row flex-col md:justify-center  md:items-start gap-8 md:h-[calc(100vh-108px)] relative">
        {/* CATEGORIES */}
        <div className="categories h-full overflow-auto">
          <Categories />
        </div>

        {/* PRODUCTS */}
        <div className="products flex-[8] h-full overflow-auto">
          <Products />
        </div>

        {/* CART TOTAL */}
        <div
          className={`cart-wrapper flex-[2] h-full min-w-[300px] md:border md:static fixed top-0 left-0 right-0 bottom-0 md:z-0 z-50 bg-white w-full ${
            sideCartTotal === true ? "hidden" : "block"
          }`}
        >
          <CartTotal />
        </div>

        {/* SIDE CART TOTAL */}
        <div
          className={`${
            sideCartTotal === true
              ? "h-full flex items-center"
              : "h-full absolute right-3 -top-[5.75rem] md:-top-3 md:right-0 z-[1000000]"
          }`}
        >
          <Button
            onClick={() => dispatch(setSideCartTotal(!sideCartTotal))}
            type="primary"
            shape="circle"
            size="large"
            icon={sideCartTotal === true ? <LeftOutlined /> : <CloseOutlined />}
          ></Button>
        </div>
      </div>
    </>
  );
};

export default HomePageInner;
