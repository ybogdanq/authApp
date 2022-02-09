import React from "react";
import { useActions } from "../app/useActions";
import Form from "../components/Form";

const Login: React.FC = () => {
  const { loginUser } = useActions();
  const onFormSubmit = (email: string, password: string) => {
    loginUser(email, password);
  };
  return (
    <div className="content-side__wrapper">
      <Form onFormSubmit={onFormSubmit} label="Login" />
    </div>
  );
};

export default Login;
