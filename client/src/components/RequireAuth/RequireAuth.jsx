import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useUserContext } from "/src/context/authContext";

function requireAuth() {
  const { user } = useUserContext();
  const location = useLocation();

  return user ? <Outlet /> : <Navigate to="/login" replace />;
}

export default requireAuth;
