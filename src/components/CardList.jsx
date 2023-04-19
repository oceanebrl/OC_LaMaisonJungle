import { useState } from "react";

import CardPlant from "./CardPlant";
import CatSelect from "./CatSelect";
import plantList from "../datas/plantsList";

import style from "../styles/components/cardList.module.scss";

function CardList() {
  const [activeCat, setActiveCat] = useState("");
  const cat = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
  );

  return (
    <div>
      <CatSelect cat={cat} activeCat={activeCat} setActiveCat={setActiveCat} />
      <div className={style.cardWrap}>
        {plantList.map(({ id, cover, name, price, category }) =>
          !activeCat || activeCat === category ? (
            <CardPlant key={id} cover={cover} name={name} price={price} />
          ) : null
        )}
      </div>
    </div>
  );
}

export default CardList;
