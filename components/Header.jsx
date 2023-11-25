import React from "react";
import styles from "../styles/components/Header.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

function Header() {
  const router = useRouter();

  return (
    <div className={styles.header}>
      <div className={styles.headerText}>
        <p>Alex Arroyo</p>
      </div>

      <div className={styles.headerNav}>
        {router.pathname !== "/" ? (
          <Link href="/" passHref>
            <span className={styles.navLink}>Home</span>
          </Link>
        ) : (
          <span className={styles.navLink}>Home</span>
        )}

        {router.pathname !== "/artworks" ? (
          <Link href="/artworks" passHref>
            <span className={styles.navLink}>Artworks</span>
          </Link>
        ) : (
          <span className={styles.navLink}>Artworks</span>
        )}

        <a href="#" className={styles.navLink}>
          More
        </a>
      </div>
    </div>
  );
}

export default Header;
