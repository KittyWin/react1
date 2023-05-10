import React from "react";
import s from "./index.module.scss";
import image1 from "./IMAGE.svg";
import image2 from "./Combined-Shape1.svg";
import image3 from "./Combined-Shape2.svg";
import image4 from "./Combined-Shape3.svg";
import image5 from "./CombinedShape.svg";

const Sponsers = () => {
  return (
    <div className={s.root}>
      <h1>Past clients</h1>
      <p>Trusted by your favourite companies</p>
      <div>
        <img src={image5} alt="" />
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
      </div>
    </div>
  );
};

export default Sponsers;
