import { Container } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import { useActions } from "../app/useActions";

const Header: React.FC = () => {
  const { logoutUser } = useActions();
  const isAuth = useAppSelector((state) => state.user.isAuth);
  return (
    <header className="app__header">
      <Container>
        <ul className="header__list">
          {isAuth ? (
            <li onClick={() => logoutUser()}>
              <span>Logout</span>
            </li>
          ) : (
            <>
              <li>
                <Link to="login">Login</Link>
              </li>
              <li>
                <Link to="/registration">Registration</Link>
              </li>
            </>
          )}
        </ul>
      </Container>
    </header>
  );
};

export default Header;
