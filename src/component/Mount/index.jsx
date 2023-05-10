import React from "react";
import s from "./index.module.scss";
import Parametrs from "../detals/parameters/index";

const Mount = () => {
  return (
    <div className={s.mounts}>
      <div>
        <h1>Sunset at Mount Fuji</h1>
        <p>
          Duis tristique sed lorem a vestibulum. Cras commodo consequat orci, in
          convallis risus egestas non.
        </p>
        <Parametrs time="1/2000s" square="f/11" iso="100" location="Iceland" />
      </div>
    </div>
  );
};

export default Mount;
