import React from "react";
import { useLocation } from "react-router-dom";

import Header from "./Header/Header";
import Menu from "./Menu/Menu";

const Wrapper = (props) => {
  const location = useLocation();

  const isMainMode = location.pathname.includes("main");

  return (
    <>
      <Header isMainMode={isMainMode} />
      <Menu />
      {props.children}
    </>
  );
};

export default Wrapper;
