import React from "react";
import { ReactComponent as Logo } from "../../assets/img/logo.svg";
import styles from "./index.module.css";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className={styles.header__wrap}>
          <div className={styles.header__wrap__left}>
            <Logo />
            <a href="index.html" className={styles.header__wrap__left__title}>
              medica
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
