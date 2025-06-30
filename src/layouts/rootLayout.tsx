import { useAppSelector } from "@/store";
import { Navigate, Outlet } from "react-router-dom";
import { AppLayout } from "./appLayout";

const RootLayout = () => {
  const authState = useAppSelector((state) => state.auth);

  if (!authState.token) {
    return <Navigate to="/login" replace />;
  }

  return (
    <AppLayout>
      <Outlet />
    </AppLayout>
  );
};

export default RootLayout;
