import style from "../styles/components/cardPlant.module.scss";

import CareScale from "./CareScale";

function CardPlant({ cover, name, water, light, price, cart, updateCart }) {
  return (
    <article className={style.card}>
      <span className={style.price}>{price}&#8239;€</span>
      <img className={style.cover} src={cover} alt={`${name} cover`} />
      <h2 className={style.name}>{name}</h2>
      <div className={style.wrap}>
        <div className={style.careType}>
          <CareScale careType="water" scaleValue={water} />
          <CareScale careType="light" scaleValue={light} />
        </div>
        <button className={style.btn}>
          <span className={style.btn__bg}></span>
          <span className={style.btn__bg}></span>Ajouter
        </button>
      </div>
    </article>
  );
}

export default CardPlant;
