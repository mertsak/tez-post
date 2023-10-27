import { useSelector } from "react-redux";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const HomePage = () => {
  const sideCartTotal = useSelector((state) => state.post.sideCartTotal);

  if (sideCartTotal === true) {
    document.body.style.overflow = "auto";
  } else {
    document.body.style.overflow = "hidden";
  }

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default HomePage;
