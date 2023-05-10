import React from "react";
import s from "./index.module.scss";
import Parametrs from "../detals/parameters/index";

const Intro = () => {
  return (
    <div className={s.intro}>
      <p align="center" className="color">
        Photographer & Filmmaker
      </p>
      <h1>Aperture Studios</h1>
      <p className={s.p1} align="center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros elementum tristique. Duis cursus, mi quis viverra
        ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut
        sem vitae risus tristique posuere.
      </p>
      <Parametrs time="1/2000s" square="f/11" iso="100" location="Iceland" />
    </div>
  );
};

export default Intro;
