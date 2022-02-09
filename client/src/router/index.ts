import Analytics from "../pages/Analytics";
import Login from "../pages/Login";
import Registration from "../pages/Registration";

export const publicRoutes = [
  { path: "/login", element: Login },
  { path: "/registration", element: Registration },
];

export const privateRoutes = [{ path: "/analytics", element: Analytics }];
