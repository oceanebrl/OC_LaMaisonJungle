import { useState, useEffect } from "react";

import CartBtn from "../components/CartBtn";
import Cart from "../components/Cart";

import style from "../styles/pages/cartModal.module.scss";

function CartModal({ cart, updateCart }) {
  const [open, setOpen] = useState(false);
  const openModal = () => {
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
  };

  const total = cart.reduce(
    (acc, plantType) => acc + plantType.amount * plantType.price,
    0
  );

  useEffect(() => {
    cart.length > 0
      ? (document.title = `La Maison Jungle | ${total} €`)
      : (document.title = "La Maison Jungle");
  }, [cart, total]);
  return (
    <div>
      <CartBtn openModal={openModal} />
      {open ? (
        <div className={style.modal} onClick={closeModal}>
          <article className={style.cart} onClick={(e) => e.stopPropagation()}>
            <header className={style.header}>
              <h3 className={style.header__title}>🍀 Mon panier</h3>
              <button className={style.close} onClick={closeModal}>
                <span className={style.close__cross}></span>
              </button>
            </header>
            <div className={style.main}>
              <Cart cart={cart} updateCart={updateCart} total={total} />
            </div>
            <footer className={style.footer}>
              {cart.length > 0 ? (
                <div>
                  <p>Total : {total}&#8239;€</p>
                  <button
                    className="empty__button"
                    onClick={() => updateCart([])}>
                    Vider le panier
                  </button>
                </div>
              ) : (
                <p>Pourquoi ne pas faire tes amplettes ?</p>
              )}
            </footer>
          </article>
        </div>
      ) : null}
    </div>
  );
}

export default CartModal;
