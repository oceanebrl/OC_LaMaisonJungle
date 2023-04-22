// cat = categories

import style from "../styles/components/catSelect.module.scss";
import chevron from "../assets/chevron.png";

import { useState } from "react";

function CatSelect({ activeCat, setActiveCat, cat }) {
  const [toggle, setToggle] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleSelected = (value) => () => {
    setSelectedOption(value);
    setActiveCat(value);
    setToggle(false);
  };

  const resetOption = () => {
    setSelectedOption(null);
    setActiveCat("");
    setToggle(false);
  };

  return (
    <div className={style.catWrap}>
      <div className={style.toggle}>
        <div className={style.toggle__header} onClick={handleToggle}>
          {selectedOption || "🌿🌱🌵 - Choisis le type de plante !"}
          <img
            className={
              toggle
                ? style.toggle__chevron
                : `${style.toggle__chevron__closed} ${style.toggle__chevron}`
            }
            src={chevron}
            alt="Chevron descendant pour la togglebar"
          />
        </div>
        <div
          className={
            toggle
              ? style.toggle__itemWrap
              : `${style.toggle__itemWrap__closed} ${style.toggle__itemWrap}`
          }>
          {cat.map((c, index) => (
            <div
              key={Math.random()}
              className={style.toggle__item}
              onClick={handleSelected(c)}>
              {c}
            </div>
          ))}
        </div>
      </div>
      <div className={style.resetBtn} onClick={resetOption}>
        Réinitialiser
      </div>
    </div>
  );
}

export default CatSelect;
