import { useState } from "react";

import CardPlant from "./CardPlant";
import CatSelect from "./CatSelect";
import plantList from "../datas/plantsList";

import style from "../styles/components/cardList.module.scss";

function CardList({ cart, updateCart }) {
  const [activeCat, setActiveCat] = useState("");
  const cat = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
  );

  function addToCart(name, price, cover) {
    const currentPlantSaved = cart.find((plant) => plant.name === name);
    if (currentPlantSaved) {
      const cartFilteredCurrentPlant = cart.filter(
        (plant) => plant.name !== name
      );
      updateCart([
        ...cartFilteredCurrentPlant,
        { name, price, cover, amount: currentPlantSaved.amount + 1 },
      ]);
      return;
    } else {
      updateCart([...cart, { name, price, cover, amount: 1 }]);
    }
  }

  return (
    <div>
      <CatSelect cat={cat} activeCat={activeCat} setActiveCat={setActiveCat} />
      <div className={style.cardWrap}>
        {plantList.map(({ id, cover, name, price, category, light, water }) =>
          !activeCat || activeCat === category ? (
            <CardPlant
              key={id}
              cover={cover}
              name={name}
              price={price}
              light={light}
              water={water}
              onClick={() => addToCart(name, price, cover)}
            />
          ) : null
        )}
      </div>
    </div>
  );
}

export default CardList;
