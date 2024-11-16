import { Navigate, Outlet, useLocation } from "react-router-dom";
import { auth } from "../firebase/config";

export default function PrivateRoute() {
  const { pathname } = useLocation();
  const user = auth.currentUser;

  return user ? (
    <Outlet />
  ) : (
    <Navigate
      to="/auth/login"
      replace={true}
      state={{
        from: { pathname },
      }}
    />
  );
}
