import React from "react";
import s from "./index.module.scss";
import Parametrs from "../detals/parameters";

const Mounts = () => {
  return (
    <div className={s.mounts}>
      <div>
        <h1>Sunset at Mount Fuji</h1>
        <p>
          Duis tristique sed lorem a vestibulum. Cras commodo consequat orci, in
          convallis risus egestas non.
        </p>
      </div>
      <Parametrs />
    </div>
  );
};

export default Mounts;
