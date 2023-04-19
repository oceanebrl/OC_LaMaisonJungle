// cat = categories

import style from "../styles/components/catSelect.module.scss";

function CatSelect({ activeCat, setActiveCat, cat }) {
  return (
    <div className={style.catWrap}>
      <select
        className={style.cat}
        value={activeCat}
        onChange={(e) => setActiveCat(e.target.value)}>
        <option value="">🌿🌱🌵 - Choisis le type de plante !</option>
        {cat.map((c) => (
          <option className={style.option} key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
      <button className={style.btn} onClick={() => setActiveCat("")}>
        Réinitialiser
      </button>
    </div>
  );
}

export default CatSelect;
