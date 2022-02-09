import React from "react";

import "./App.scss";
import { useAppSelector } from "./app/hooks";
import AppRouter from "./components/AppRouter";
import Header from "./components/Header";
import Loader from "./components/Loader";

function App() {
  const loaderInstance = useAppSelector((state) => state.user.loader);
  return (
    <div className="App">
      <Header />
      <AppRouter />
      {loaderInstance ? <Loader /> : null}
    </div>
  );
}

export default App;
