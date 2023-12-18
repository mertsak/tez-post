import { Input, Badge, Button, message } from "antd";
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
import {
  setSideCartTotal,
  resetAuth,
  handleSearchData,
} from "../redux/postSlice";
import { useLocation, NavLink } from "react-router-dom";

const Header = () => {
  const { sideCartTotal, cartItems } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const location = useLocation();
  const auth = JSON.parse(localStorage.getItem("auth"));

  const handleLogout = () => {
    localStorage.removeItem("auth");
    dispatch(resetAuth());
    message.success("Logout successfully");
  };

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
            onChange={(e) =>
              dispatch(handleSearchData(e.target.value.toLowerCase()))
            }
          />
        </div>

        {/* BASKET */}
        <Badge
          count={cartItems.length}
          offset={[-5, 2]}
          className="md:hidden flex"
        >
          <NavLink
            to="/basketPage"
            className={({ isActive, isPending }) =>
              isPending
                ? "menu-link"
                : isActive
                ? "menu-link text-[#40a9ff]"
                : "menu-link"
            }
          >
            <ShoppingCartOutlined className="text-2xl" />
            <span className="text-[10px]">Basket</span>
          </NavLink>
        </Badge>

        {/* MENU LINKS */}
        <div className="flex-between gap-8 md:static fixed bottom-0 left-0 right-0 z-50 md:w-auto w-screen md:bg-transparent bg-white md:border-t-0 border-t md:px-0 px-6 md:py-0 py-2">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending
                ? "menu-link"
                : isActive
                ? "menu-link text-[#40a9ff]"
                : "menu-link"
            }
          >
            <HomeOutlined className="text-xl md:text-2xl" />
            <span className="text-[10px] md:text-xs">Home</span>
          </NavLink>

          <Badge
            count={
              cartItems.length > 0
                ? cartItems.reduce((acc, item) => acc + item.quantity, 0)
                : 0
            }
            offset={[-5, 2]}
            className="md:flex hidden"
          >
            <NavLink
              to="/basketPage"
              className={({ isActive, isPending }) =>
                isPending
                  ? "menu-link"
                  : isActive
                  ? "menu-link text-[#40a9ff]"
                  : "menu-link"
              }
            >
              <ShoppingCartOutlined className="text-xl md:text-2xl" />
              <span className="text-[10px] md:text-xs">Basket</span>
            </NavLink>
          </Badge>

          {auth && (
            <NavLink
              to="/billPage"
              className={({ isActive, isPending }) =>
                isPending
                  ? "menu-link"
                  : isActive
                  ? "menu-link text-[#40a9ff]"
                  : "menu-link"
              }
            >
              <CopyOutlined className="text-xl md:text-2xl" />
              <span className="text-[10px] md:text-xs">Bills</span>
            </NavLink>
          )}

          {auth && (
            <NavLink
              to="/employeesPage"
              className={({ isActive, isPending }) =>
                isPending
                  ? "menu-link"
                  : isActive
                  ? "menu-link text-[#40a9ff]"
                  : "menu-link"
              }
            >
              <UserOutlined className="text-xl md:text-2xl" />
              <span className="text-[10px] md:text-xs">Employees</span>
            </NavLink>
          )}

          {auth && (
            <NavLink
              to="/statisticPage"
              className={({ isActive, isPending }) =>
                isPending
                  ? "menu-link"
                  : isActive
                  ? "menu-link text-[#40a9ff]"
                  : "menu-link"
              }
            >
              <BarChartOutlined className="text-xl md:text-2xl" />
              <span className="text-[10px] md:text-xs">Statistics</span>
            </NavLink>
          )}

          {auth && (
            <a href="/" className="menu-link" onClick={() => handleLogout()}>
              <LoginOutlined className="text-xl md:text-2xl" />
              <span className="text-[10px] md:text-xs">Logout</span>
            </a>
          )}

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
