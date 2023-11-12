import { Input, Badge, Button } from "antd";
import {
  SearchOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  CopyOutlined,
  UserOutlined,
  BarChartOutlined,
  LoginOutlined,
  LeftOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setSideCartTotal } from "../redux/postSlice";
import { useLocation } from "react-router-dom";

const Header = () => {
  const sideCartTotal = useSelector((state) => state.post.sideCartTotal);
  const dispatch = useDispatch();
  const location = useLocation();

  return (
    <div className="border-b mb-6">
      <header className="py-4 px-4 md:px-6 flex-between gap-4 md:gap-12">
        {/* LOGO */}
        <Link to="/">
          <h2 className="text-2xl font-bold md:text-4xl">LOGO</h2>
        </Link>

        {/* SEARCH BAR */}
        <div className="flex-center flex-1 ">
          <Input
            size="large"
            placeholder="Search..."
            prefix={<SearchOutlined />}
            className="max-w-[800px]"
          />
        </div>

        {/* BASKET */}
        <Badge count={1} offset={[-5, 2]} className="md:hidden flex">
          <Link to="/basketPage" className="menu-link">
            <ShoppingCartOutlined className="text-2xl" />
            <span className="text-[10px]">Basket</span>
          </Link>
        </Badge>

        {/* MENU LINKS */}
        <div className="flex-between gap-8 md:static fixed bottom-0 left-0 right-0 z-50 md:w-auto w-screen md:bg-transparent bg-white md:border-t-0 border-t md:px-0 px-6 md:py-0 py-2">
          <Link to="/" className="menu-link">
            <HomeOutlined className="text-xl md:text-2xl" />
            <span className="text-[10px] md:text-xs">Home</span>
          </Link>

          <Badge count={1} offset={[-5, 2]} className="md:flex hidden">
            <Link to="/basketPage" className="menu-link">
              <ShoppingCartOutlined className="text-xl md:text-2xl" />
              <span className="text-[10px] md:text-xs">Basket</span>
            </Link>
          </Badge>

          <Link to="/billPage" className="menu-link">
            <CopyOutlined className="text-xl md:text-2xl" />
            <span className="text-[10px] md:text-xs">Bill</span>
          </Link>

          <Link to="/customerPage" className="menu-link">
            <UserOutlined className="text-xl md:text-2xl" />
            <span className="text-[10px] md:text-xs">Customers</span>
          </Link>

          <Link to="/statisticPage" className="menu-link">
            <BarChartOutlined className="text-xl md:text-2xl" />
            <span className="text-[10px] md:text-xs">Statistics</span>
          </Link>

          <a href="/" className="menu-link">
            <LoginOutlined className="text-xl md:text-2xl" />
            <span className="text-[10px] md:text-xs">Logout</span>
          </a>

          <div
            className={`md:hidden  ${
              location.pathname === "/" ? "block" : "hidden"
            }`}
          >
            <Button
              onClick={() => dispatch(setSideCartTotal(!sideCartTotal))}
              type="primary"
              shape="circle"
              size="middle"
              icon={<LeftOutlined />}
            ></Button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
