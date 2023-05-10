import React from "react";
import s from "./index.module.scss";
import Btns from "../detals/btns/index";
import image1 from "./IMAGE1.jpg";
import image2 from "./IMAGE2.jpg";
import image3 from "./IMAGE3.jpg";
import image4 from "./IMAGE4.jpg";

const data = [
  {
    id: 0,
    img: "https://telegra.ph/file/feae9d8905c511aa5854c.jpg",
    h1: "Product Photography",
    p: "Cras commodo consequat orci, in convallis risus egestas non. Nulla efficitur auctor hendrerit. Etiam ut orci varius, faucibus libero ac, cursus quam.",
  },
  {
    id: 1,
    img: "https://telegra.ph/file/b454d98d8cfe1344b93b9.jpg",
    h1: "Architecture Photography",
    p: "Aenean porta neque eget consequat fringilla. Vestibulum ultrices, orci nec egestas pharetra, ligula est semper enim, nec auctor sapien leo nec purus. Fusce tincidunt aliquet sapien, sit amet rhoncus leo imperdiet nec.",
  },
  {
    id: 2,
    img: "https://telegra.ph/file/5f1b20ed3d3f264e2ad67.jpg",
    h1: "Drone Photography",
    p: "Mauris euismod elit et nisi ultrices, ut faucibus orci tincidunt. Duis tristique sed lorem a vestibulum. Cras commodo consequat orci, in convallis risus egestas non. Nulla efficitur auctor hendrerit. Etiam ut orci varius, faucibus libero ac, cursus quam.",
  },
  {
    id: 3,
    img: "https://telegra.ph/file/95c04e039b89cdbc77285.jpg",
    h1: "Wildlife Photography",
    p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus. Nulla rhoncus feugiat eros quis consectetur. Morbi neque ex, condimentum dapibus congue et, vulputate ut ligula. Vestibulum sit amet urna turpis.",
  },
];

const Cards = () => {
  return (
    <div className={s.cards}>
      <div className={s.title}>
        <h1>What we do.</h1>
        <p className="color">The areas that we're specialized in.</p>
      </div>
      <div className={s.cards__card}>
        {/* {card()}
        {card()}
        {card()}
        {card()} */}

        {displayData()}
      </div>
    </div>
  );
};

export default Cards;

const displayData = () =>
  data.map((e) => (
    <div
      key={e.id}
      style={{ backgroundImage: `url(${e.img})` }}
      className={s.card}
    >
      <h1>{e.h1}</h1>
      <p align="left">{e.p}</p>
      <Btns p={"Read more"} />
    </div>
  ));

// const card = () => {
//   return (
//     <div className="card color">
//       <h1> Product Photography</h1>
//       <p align="left">
//         Cras commodo consequat orci, in convallis risus egestas non. Nulla
//         efficitur auctor hendrerit. Etiam ut orci varius, faucibus libero ac,
//         cursus quam.
//       </p>
//     </div>
//   );
// };
