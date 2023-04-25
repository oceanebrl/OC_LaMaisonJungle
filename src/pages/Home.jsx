import style from "../styles/pages/home.module.scss";

import CardList from "../components/CardList";
import { useEffect, useState } from "react";

function Home({ cart, updateCart }) {
  return (
    <main className={style.main}>
      <div className={style.wrap}>
        <CardList cart={cart} updateCart={updateCart} />
      </div>
    </main>
  );
}

export default Home;
