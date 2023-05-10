import React from "react";
import s from "./index.module.scss";
import clock from "./clock.svg";
import isos from "./iso.svg";
import kryg from "./square.svg";
import locat from "./location.svg";

const Parametrs = (p) => {
  return (
    <div className={s.root}>
      <div className={s.df}>
        <img src={clock} alt="" />
        <p>{p.time}</p>
      </div>
      <div className={s.df}>
        <img src={kryg} alt="" />
        <p>{p.square}</p>
      </div>
      <div className={s.df}>
        <img src={isos} alt="" />
        <p>{p.iso}</p>
      </div>
      <div className={s.df}>
        {" "}
        <img src={locat} alt="" />
        <p>{p.location}</p>
      </div>
    </div>
  );
};

export default Parametrs;
