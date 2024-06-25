import Home from "./pages/home/Home";
import Layout from "./pages/layout/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EstateListPage from "./pages/estateListPage/EstateListPage";
import EstateDetailsPage from "./pages/estateDetailsPage/EstateDetailsPage";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";

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
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/login",
          element: <Login />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
