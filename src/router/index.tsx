import { Home } from "@/app/home/home";
import { Login } from "@/app/login/login";
import { Register } from "@/app/register/register";
import Cookies from "js-cookie";
import { createBrowserRouter, Navigate, RouterProvider, useLocation, type RouteObject } from "react-router-dom";

const route: RouteObject[] = [
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/",
    element: <Home />
  }
]

export default function Router() {
  return <RouterProvider router={createBrowserRouter(route)} />
}