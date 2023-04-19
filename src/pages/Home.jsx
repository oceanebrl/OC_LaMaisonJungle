import style from "../styles/pages/home.module.scss";

import CardList from "../components/CardList";

function Home() {
  return (
    <main className={style.main}>
      <div className={style.wrap}>
        <CardList />
      </div>
    </main>
  );
}

export default Home;
