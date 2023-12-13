import StatisticCard from "../components/Statistic/StatisticCard";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Filler,
} from "chart.js";
import { Pie, Line } from "react-chartjs-2";
import faker from "faker";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getBillsItems } from "../redux/services/billService";
import { getProductsItems } from "../redux/services/productService";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend,
  Title,
  Filler
);

const generateData = (billsItems, totalCashAmount, totalCreditCardAmount) => {
  return {
    labels: [...new Set(billsItems.map((item) => item.paymentMethod))],
    datasets: [
      {
        label: "# of Votes",
        data: [totalCashAmount, totalCreditCardAmount],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };
};

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const data = {
  labels: labels,
  datasets: [
    {
      fill: true,
      label: "Sales per month",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 2000 })),
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      borderColor: "rgba(54, 162, 235, 1)",
    },
  ],
};

const StatisticPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsItems());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getBillsItems());
  }, [dispatch]);

  const { billsItems, productsItems } = useSelector((state) => state.post);

  const totalCashAmount = billsItems.reduce((total, item) => {
    if (item.paymentMethod === "Cash") {
      return total + item.totalAmount;
    }
    return total;
  }, 0);

  const totalCreditCardAmount = billsItems.reduce((total, item) => {
    if (item.paymentMethod === "Credit Card") {
      return total + item.totalAmount;
    }
    return total;
  }, 0);

  const data2 = generateData(
    billsItems,
    totalCashAmount,
    totalCreditCardAmount
  );

  const totalAmonut = billsItems?.reduce((acc, item) => {
    return acc + item.totalAmount;
  }, 0);

  const totalSale = billsItems?.length;

  const totalProduct = productsItems?.length;

  return (
    <>
      <div className="px-4 md:pb-10 pb-20">
        <h2 className="text-4xl font-semibold text-center mb-6">Statistic</h2>

        {/* static section */}

        <div>
          <h2 className="text-xl">
            Hoş Geldin <span className="text-green-700 font-bold">Admin</span>.
          </h2>

          {/* static cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-10 my-10">
            {/* static card */}

            <StatisticCard
              title={"Masa Sayısı"}
              amount={"50"}
              img={"images/user.png"}
            />
            <StatisticCard
              title={"Toplam Kazanç"}
              amount={`${totalAmonut.toFixed(2)}$`}
              img={"images/money.png"}
            />
            <StatisticCard
              title={"Toplam Satış"}
              amount={totalSale}
              img={"images/sale.png"}
            />
            <StatisticCard
              title={"Toplam Ürün"}
              amount={totalProduct}
              img={"images/product.png"}
            />
          </div>

          <div className="flex justify-between items-center gap-10 lg:flex-row flex-col">
            <div className="w-full h-full flex justify-center items-center">
              <Line data={data} />
            </div>

            <div className="w-full h-full flex justify-center items-center  max-h-[500px]">
              <Pie data={data2} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatisticPage;
