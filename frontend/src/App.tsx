import Home from "./pages/home/Home";
import Layout from "./pages/layout/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EstateListPage from "./pages/estateListPage/EstateListPage";
import EstateDetailsPage from "./pages/estateDetailsPage/EstateDetailsPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/lists",
          element: <EstateListPage />,
        },
        {
          path: "/lists/:id",
          element: <EstateDetailsPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
