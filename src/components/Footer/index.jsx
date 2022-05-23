import React from "react";
import { ReactComponent as Logo } from "../../assets/img/logo.svg";
import styles from "./index.module.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className={styles.footer__wrap}>
          <div className={styles.footer__wrap__info}>
            <div className={styles.footer__wrap__about}>
              <div className={styles.footer__wrap__about__logo}>
                <Logo />
                <h3 className={styles.footer__wrap__about__logo__title}>
                  medica
                </h3>
              </div>
              <div className={styles.footer__wrap__about__text}>
                <p className={styles.about__text}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit ipsum ullam vero minima? Beatae ipsum eos
                  quibusdam esse itaque maxime natus exercitationem, a
                  repudiandae corrupti maiores dolorem, iste possimus deserunt?
                </p>
              </div>
            </div>
            <div className={styles.footer__wrap__contact}>
              <h4 className={styles.footer__wrap__contact__title}>Contact</h4>
              <ul className={styles.footer__wrap__contact__list}>
                <li>+1843228662422</li>
                <li>loremipsum123@gmail.com</li>
              </ul>
            </div>
          </div>
          <div className={styles.footer__wrap__signature}>
            <p className={styles.copyright}>
              &copy; Copyright 2022 <span>medica</span>
            </p>
            <p className={styles.copyright}>
              Design by <span>Alexander Zabrovskiy</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
