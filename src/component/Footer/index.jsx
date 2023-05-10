import React from "react";
import s from "./index.module.scss";
import img from "./Aperture-Logotype-Horizontal-White.svg";
import facebook from "./facebook.svg";
import instagram from "./Shape.svg";
import twiter from "./Path.svg";

const Footter = () => {
  return (
    <div className={s.root}>
      <div className={s.first}>
        <div className={s.first1}>
          <img src={img} alt="" />
          <p>Photographers & videographers capturing the world around us.</p>
        </div>
        <div className={s.second2}>
          <div className={s.first1}>
            <p>Business areas</p>
            <p>Product Photography</p>
            <p>Architecture Photography</p>
            <p>Drone Photography</p>
            <p>Wildlife Photography</p>
          </div>
          <div className={s.second1}>
            <p>Pages</p>
            <p>Gear cage</p>
            <p>Featured images</p>
            <p>Contact</p>
            <p>Style guide</p>
            <p>Instructions</p>
            <p>Changelog</p>
          </div>
        </div>
      </div>
      <div className={s.second}>
        <div className={s.title}>
          <h1>Subscribe to our newsletter</h1>
          <p>Read about all the things we do.</p>
        </div>
        <div className={s.btn}>
          <button>
            <div></div>
          </button>
        </div>
      </div>
      <div className={s.therd}>
        <p>© Aperture Photography, Inc. All rights reserved.Licensing</p>
        <div className={s.logo}>
          <img src={twiter} alt="" />
          <img src={instagram} alt="" />
          <img src={facebook} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footter;
