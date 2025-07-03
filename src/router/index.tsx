import { Home } from "@/app/home/home";
import { TableComponent } from "@/app/home/table";
import { Login } from "@/app/login/login";
import { Profile } from "@/app/profile/profile";
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
      },
      {
        path: "/profile",
        element: <Profile />,
      },
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
