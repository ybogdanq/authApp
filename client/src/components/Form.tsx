import {
  Button,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
} from "@mui/material";
import React, { useState } from "react";
import styles from "./styles/Form.module.scss";

interface IForm {
  onFormSubmit: (email: string, password: string) => void;
  label: string;
}

const Form: React.FC<IForm> = ({ onFormSubmit, label }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <div className={styles.form__wrapper}>
      <h3 className={styles.form__label}>{label}</h3>
      <FormGroup className={styles.form}>
        <FormControl color="primary" margin="normal" required>
          <InputLabel htmlFor="email-input" required>
            Email address
          </InputLabel>
          <Input
            onChange={(e) => setEmail(e.target.value)}
            id="email-input"
            aria-describedby="my-helper-text"
          />
        </FormControl>
        <FormControl color="primary" margin="normal" required>
          <InputLabel htmlFor="password-input">Password</InputLabel>
          <Input
            autoComplete={"true"}
            required
            onChange={(e) => setPassword(e.target.value)}
            id="password-input"
            type="password"
            aria-describedby="my-helper-text"
          />
        </FormControl>
        <FormControl color="primary" margin="normal">
          <Button
            onClick={() => onFormSubmit(email, password)}
            variant="outlined"
          >
            Submit
          </Button>
        </FormControl>
      </FormGroup>
    </div>
  );
};

export default Form;
