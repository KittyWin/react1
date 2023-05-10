import React from "react";
import s from "./index.module.scss";
import Btns from "../detals/btns/index";
import Parametrs from "../detals/parameters";

const Camera = () => {
  return (
    <div className={s.camera}>
      <div className={s.img}></div>
      <div className={s.text}>
        <p>The Gear cage</p>
        <h1>The tools that we use.</h1>
        <p>
          The say that "no place is boring if you've had a good night's sleep
          and have a pocket full of unexposed film". While we don't shoot (a
          lot) of film these days — these are the tools that we actually use
          everyday to capture the amazing things around us.
        </p>
        <Btns p={"Check it out"} />
      </div>
      <Parametrs time="0,8" square="f/5,6" iso="100" location="Sweden" />
    </div>
  );
};

export default Camera;
