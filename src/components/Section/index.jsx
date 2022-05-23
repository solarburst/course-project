import React from "react";
import styles from "./index.module.css";
import src from "../../assets/img/main.png";

const Section = () => {
  return (
    <section>
      <div className="container">
        <div className={styles.section__wrap}>
          <div className={styles.section__wrap__title}>
            <h2 className={styles.section__wrap__title__text}>
              Our <span>expertise</span> at your service
            </h2>
          </div>
          <img
            src={src}
            alt="medicine"
            className={styles.section__wrap__image}
          />
        </div>
      </div>
    </section>
  );
};

export default Section;
