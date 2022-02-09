import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import { useActions } from "../app/useActions";
import Analytics from "../pages/Analytics";
import Login from "../pages/Login";
import { privateRoutes, publicRoutes } from "../router";

const AppRouter: React.FC = () => {
  const { checkAuth } = useActions();
  const isAuth = useAppSelector((state) => state.user.isAuth);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      checkAuth();
    }
  }, []);
  return (
    <Routes>
      {isAuth
        ? privateRoutes.map((prElement) => (
            <Route
              path={prElement.path}
              element={<prElement.element />}
              key={prElement.path}
            />
          ))
        : publicRoutes.map((prElement) => (
            <Route
              path={prElement.path}
              element={<prElement.element />}
              key={prElement.path}
            />
          ))}
      {isAuth ? (
        <Route path="*" element={<Analytics />} />
      ) : (
        <Route path="*" element={<Login />} />
      )}
    </Routes>
  );
};

export default AppRouter;
