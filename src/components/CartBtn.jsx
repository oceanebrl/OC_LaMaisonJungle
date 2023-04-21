import style from "../styles/components/cartBtn.module.scss";

function CartBtn({ openModal }) {
  return (
    <div className={style.btnWrap}>
      <button className={style.btn} onClick={openModal}>
        mon panier
        <span className={style.btn__span}></span>
        <span className={style.btn__span}></span>
        <span className={style.btn__span}></span>
        <span className={style.btn__span}></span>
      </button>
    </div>
  );
}

export default CartBtn;
