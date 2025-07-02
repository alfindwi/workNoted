import { Home } from "@/app/home/home";
import { TableComponent } from "@/app/home/table";
import { Login } from "@/app/login/login";
import { Register } from "@/app/register/register";
import { OAuthSuccess } from "@/components/oauthSuccess";
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
      { index: true, element: <Home /> },
      {
        path: "/companies",
        element: <TableComponent />,
      }
    ],
  },
  {
    path: "/oauth-success",
    element: <OAuthSuccess />,
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
