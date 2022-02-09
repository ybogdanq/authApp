import React from "react";
import { useActions } from "../app/useActions";
import Form from "../components/Form";

const Registration: React.FC = () => {
  const { registrationUser } = useActions();
  const onFormSubmit = (email: string, password: string) => {
    registrationUser(email, password);
  };
  return (
    <div className="content-side__wrapper">
      <Form onFormSubmit={onFormSubmit} label="Registration" />
    </div>
  );
};

export default Registration;
