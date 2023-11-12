import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import components
import HomePage from "./pages/HomePage.jsx";
import BasketPage from "./pages/BasketPage.jsx";
import HomePageInner from "./pages/HomePageInner.jsx";
import BillPage from "./pages/BillPage.jsx";
import CustomerPage from "./pages/CustomerPage.jsx";
import StatisticPage from "./pages/StatisticPage.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      children: [
        {
          path: "/",
          element: <HomePageInner />,
        },
        {
          path: "/basketPage",
          element: <BasketPage />,
        },
        {
          path: "/billPage",
          element: <BillPage />,
        },
        {
          path: "/customerPage",
          element: <CustomerPage />,
        },
        {
          path: "/statisticPage",
          element: <StatisticPage />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
