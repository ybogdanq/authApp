import { CircularProgress } from "@mui/material";
import React from "react";
import "./styles/Loader.scss";

const Loader: React.FC = () => {
  return (
    <div className="loader__wrapper">
      <CircularProgress color="inherit" />
    </div>
  );
};

export default Loader;
