import { useState } from "react";

import CartBtn from "../components/CartBtn";

import style from "../styles/pages/cartModal.module.scss";

function CartModal() {
  const [open, setOpen] = useState(false);
  const openModal = () => {
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
  };

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
              <p>Le futur panier à coder</p>
            </div>
            <footer className={style.footer}>
              <p>Sûrement le total à afficher</p>
            </footer>
          </article>
        </div>
      ) : null}
    </div>
  );
}

export default CartModal;
