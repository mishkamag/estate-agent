import Home from "./pages/home/Home";
import Layout from "./pages/layout/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Lists from "./pages/list/Lists";
import SinglePage from "./pages/singlePage/SinglePage";

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
          element: <Lists />,
        },
        {
          path: "/lists/:id",
          element: <SinglePage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
