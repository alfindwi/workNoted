import { useAppSelector } from "@/store";
import { Navigate, Outlet } from "react-router-dom";

const RootLayout = () => {
  const authState = useAppSelector((state) => state.auth);

  if (!authState.token) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default RootLayout;
