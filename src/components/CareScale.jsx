import sun from "../assets/sun.svg";
import water from "../assets/water.svg";

import style from "../styles/components/careScale.module.scss";

import Tooltip from "./Tooltip";

const quantity = {
  1: "peu",
  2: "modérément",
  3: "beaucoup",
};

function CareScale({ careType, scaleValue }) {
  const range = [1, 2, 3];
  const scaleType =
    careType === "light" ? (
      <img src={sun} alt="une icône de soleil" />
    ) : (
      <img src={water} alt="une icône d'eau" />
    );

  const text = `Cette plante requiert ${quantity[scaleValue]} ${
    careType === "light" ? "de lumière" : "d'eau"
  }`;

  return (
    <div className={style.care}>
      {range.map((e) =>
        scaleValue >= e ? (
          <Tooltip
            key={Math.random()}
            content={text}
            className={style.care__tip}>
            <span className={style.care__type} key={e.toString()}>
              {scaleType}
            </span>
          </Tooltip>
        ) : null
      )}
    </div>
  );
}

export default CareScale;
