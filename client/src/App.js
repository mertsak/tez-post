import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import components
import HomePage from "./pages/HomePage.jsx";
import CartPage from "./pages/CartPage.jsx";
import HomePageInner from "./pages/HomePageInner.jsx";

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
          path: "/cartPage",
          element: <CartPage />,
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
