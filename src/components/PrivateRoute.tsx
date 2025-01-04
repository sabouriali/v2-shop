import { Navigate, Outlet } from "react-router";

import { useStoreSelector } from "../hooks/useStore";

function PrivateRoute() {
  const isLogin = useStoreSelector((state) => state.login.isLogin);

  return <>{isLogin ? <Outlet /> : <Navigate to="/user/login" />}</>;
}

export default PrivateRoute;
