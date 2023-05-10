import React from "react";
import s from "./index.module.scss";
import img from "./Aperture-Logotype-Horizontal-White.svg";

const Header = () => {
  return (
    <div className={s.header}>
      <div className={s.logo}>
        <img src={img} alt="" />
      </div>
      <div className={s.header__navigator}>
        <h1>Business areas</h1>
        <h1>Featured images</h1>
        <h1>Gear cage</h1>
        <h1>Contact</h1>
        <button>
          <h1>Get template</h1>
        </button>
      </div>
    </div>
  );
};

export default Header;
