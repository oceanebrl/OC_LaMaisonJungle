import style from "../styles/components/header.module.scss";

import logo from "../assets/logo.png";

function Header() {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <img
          className={style.logo}
          src={logo}
          alt="Une feuille verte, représentant le logo de La Maison Jungle"
        />
        <h1 className={style.title}>La Maison Jungle</h1>
      </div>
    </header>
  );
}

export default Header;
