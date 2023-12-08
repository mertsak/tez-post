import { Card } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getProductsItems } from "../../redux/services/productService";

const Products = () => {
  const dispatch = useDispatch();

  const { productsItems } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getProductsItems());
  }, [dispatch]);

  return (
    <div className="products grid grid-cols-products-fill gap-4">
      {productsItems?.map((item) => {
        return (
          <Card
            hoverable
            className="w-full"
            cover={<img alt={item.title} src={item.img} />}
            key={item._id}
          >
            <div className="flex flex-col justify-center items-start gap-1">
              <span className="text-xl font-semibold">{item.title}</span>
              <span className="text-base font-medium">${item.price}</span>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default Products;
