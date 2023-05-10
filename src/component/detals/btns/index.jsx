import React from "react";
import s from "./index.module.scss";

const Btns = ({ p }) => {
  return (
    <div className={s.root}>
      <div className={s.square}></div>
      <p>{p}</p>
    </div>
  );
};

export default Btns;
