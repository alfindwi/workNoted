import { Home } from "@/app/home/home";
import { Login } from "@/app/login/login";
import { Register } from "@/app/register/register";
import RootLayout from "@/layouts/rootLayout";
import {
  createBrowserRouter,
  RouterProvider,
  type RouteObject
} from "react-router-dom";

const route: RouteObject[] = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
];



export default function Router() {
  return <RouterProvider router={createBrowserRouter(route)} />;
}
