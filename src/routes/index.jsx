import Login from "../components/Login";
import PrivateRoute from "../components/PrivateRoute";
import Register from "../components/Register";
import Auth from "../pages/Auth";
import Error from "../pages/Error";
import Home from "../pages/Home";
import RootLayout from "../pages/RootLayout";
import {
  loadUser,
  login,
  loginWithGithub,
  loginWithGoogle,
  logout,
  register,
} from "../utils/loaders";

const routes = [
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    loader: loadUser,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <PrivateRoute />,
        children: [{ index: true, element: <div>About</div> }],
      },
      {
        path: "contact",
        element: <PrivateRoute />,
        children: [{ index: true, element: <div>contact</div> }],
      },
    ],
  },
  {
    path: "/auth/",
    element: <Auth />,
    children: [
      {
        path: "login",
        element: <Login />,
        action: login,
      },
      {
        path: "register",
        element: <Register />,
        action: register,
      },
      {
        path: "login-with-google",
        loader: loginWithGoogle,
      },
      {
        path: "login-with-github",
        loader: loginWithGithub,
      },
      {
        path: "logout",
        loader: logout,
      },
    ],
  },
];

export default routes;
