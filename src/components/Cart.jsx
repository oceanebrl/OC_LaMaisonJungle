/* eslint-disable no-restricted-globals */
import style from "../styles/components/cart.module.scss";
import trashCan from "../assets/trash.png";

function Cart({ cart, updateCart }) {
  function removeFromCart(name) {
    const filteredPlantToSave = cart.filter((plant) => plant.name !== name);
    updateCart([...filteredPlantToSave]);
  }

  function changeQuantity(e, name, price, cover, amount) {
    e = e.target.value;
    if (Number(e) === 0) {
      const response = confirm("Supprimer la plante ?");
      if (response) {
        const filteredPlantToSave = cart.filter((plant) => plant.name !== name);
        updateCart([...filteredPlantToSave]);
      } else {
        e = 0;
      }
      return;
    }
    const currentPlantSaved = cart.find((plant) => plant.name === name);
    if (currentPlantSaved) {
      const cartFilteredCurrentPlant = cart.filter(
        (plant) => plant.name !== name
      );
      updateCart([
        ...cartFilteredCurrentPlant,
        {
          name,
          price,
          cover,
          amount: e,
        },
      ]);
    }
  }

  function inc(name, price, cover, amount) {
    const currentPlantSaved = cart.find((plant) => plant.name === name);
    if (currentPlantSaved) {
      const cartFilteredCurrentPlant = cart.filter(
        (plant) => plant.name !== name
      );
      updateCart([
        ...cartFilteredCurrentPlant,
        { name, price, cover, amount: currentPlantSaved.amount + 1 },
      ]);
    }
  }

  function dec(name, price, cover, amount) {
    const currentPlantSaved = cart.find((plant) => plant.name === name);
    if (currentPlantSaved) {
      const cartFilteredCurrentPlant = cart.filter(
        (plant) => plant.name !== name
      );
      updateCart([
        ...cartFilteredCurrentPlant,
        { name, price, cover, amount: currentPlantSaved.amount - 1 },
      ]);
      if (currentPlantSaved.amount === 1) {
        const response = confirm("Supprimer la plante ?");
        if (response) {
          const filteredPlantToSave = cart.filter(
            (plant) => plant.name !== name
          );
          updateCart([...filteredPlantToSave]);
        } else {
          updateCart([
            ...cartFilteredCurrentPlant,
            { name, price, cover, amount: (currentPlantSaved.amount = 1) },
          ]);
        }
      }
    }
  }

  return (
    <div className={style.page__wrap}>
      {cart.length > 0 ? (
        <div className={style.wrap}>
          {cart
            .sort((a, b) => (a.name > b.name ? 1 : -1))
            .map(({ name, price, amount, cover }, index) => (
              <article className={style.card}>
                <img src={cover} alt={name} className={style.image} />
                <div className={style.priceName}>
                  <h3 className={style.priceName__name}>{name}</h3>
                  <p className={style.paragraph}>
                    Prix&#8239;:{" "}
                    <span className={style.priceName__price}>
                      {price}&#8239;€
                    </span>
                  </p>
                </div>
                <div className={style.amountPrice}>
                  <div className={style.amountWrap}>
                    <button
                      className={`${style.amountPrice__amountBtn} ${style.amountPrice__amountBtn__plus}`}
                      onClick={() => {
                        dec(name, price, cover, amount);
                      }}>
                      -
                    </button>
                    <input
                      className={style.amountPrice__amount}
                      type="number"
                      value={amount}
                      min="0"
                      id="quantityInput"
                      onChange={(e) => {
                        changeQuantity(e, name, price, cover, amount);
                      }}
                    />
                    <button
                      className={`${style.amountPrice__amountBtn} ${style.amountPrice__amountBtn__moins}`}
                      onClick={() => {
                        inc(name, price, cover, amount);
                      }}>
                      +
                    </button>
                  </div>
                  <p
                    className={`${style.paragraph} ${style.amountPrice__price}`}>
                    Total&#8239;:{" "}
                    <span className={style.amountPrice__price__total}>
                      {price * amount}&#8239;€
                    </span>
                  </p>
                </div>
                <div>
                  <button
                    className={style.remove}
                    onClick={() => {
                      removeFromCart(name);
                    }}>
                    <img
                      src={trashCan}
                      alt="logo d'une poubelle pour supprimer"
                    />
                  </button>
                </div>
              </article>
            ))}
        </div>
      ) : (
        <div className={style.empty}>Panier vide</div>
      )}
    </div>
  );
}

export default Cart;
