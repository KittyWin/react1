import React from "react";
import s from "./index.module.scss";
import Btns from "../detals/btns/index";

const BeforeFooter = () => {
  return (
    <div className={s.root}>
      <h1 align="center">Need help with photography or videography? </h1>
      <p>We're here for you!</p>
      <Btns p={"Get in touch"} />
    </div>
  );
};

export default BeforeFooter;
