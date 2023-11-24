import React from "react";
import styles from "../styles/components/Header.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.headerText}>
        <p>Alex Arroyo</p>
      </div>
      <div className={styles.headerNav}>
        <a href="#" className={styles.navLink}>
          Home
        </a>
        <a href="#" className={styles.navLink}>
          Artworks
        </a>
        <a href="#" className={styles.navLink}>
          More
        </a>
      </div>
    </div>
  );
}

export default Header;
