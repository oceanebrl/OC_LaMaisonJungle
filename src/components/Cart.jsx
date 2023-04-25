function Cart({ cart, updateCart }) {
  function removeFromCart(name) {
    const filteredPlantToSave = cart.filter((plant) => plant.name !== name);
    updateCart([...filteredPlantToSave]);
  }

  function plusQuantity(name, price, cover, amount) {
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
          amount: currentPlantSaved.amount + 1,
        },
      ]);
    }
  }

  function moinsQuantity(name, price, cover, amount) {
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
          amount: currentPlantSaved.amount - 1,
        },
      ]);
    }
  }

  return (
    <div>
      {cart.length > 0 ? (
        <div>
          {cart
            .sort((a, b) => (a.name > b.name ? 1 : -1))
            .map(({ name, price, amount, cover }, index) => (
              <div key={`${name}-${index}`}>
                <img src={cover} alt={name} style={{ height: "100px" }} />
                <p className="cart__flex__group">
                  <p className="cart__title">
                    <span className="cart__title__name">{name}</span> : {price}
                    &#8239;€
                  </p>
                  <p className="cart__total cart__flex">
                    <p className="cart__amount">× {amount}</p>
                    {amount > 1 ? (
                      <button
                        onClick={() =>
                          moinsQuantity(name, price, cover, amount)
                        }>
                        -1
                      </button>
                    ) : null}
                    <button
                      onClick={() => {
                        plusQuantity(name, price, cover, amount);
                      }}>
                      +1
                    </button>
                    <p>{price * amount}&#8239;€</p>
                  </p>
                </p>
                <button
                  onClick={() => {
                    removeFromCart(name);
                  }}>
                  Supprimer
                </button>
              </div>
            ))}
        </div>
      ) : (
        <div>Panier vide</div>
      )}
    </div>
  );
}

export default Cart;
