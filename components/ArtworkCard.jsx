// components/ArtworkContainer.jsx

import React from 'react';
import styles from '../styles/components/ArtworkCard.module.css';

function ArtworkContainer({ children }) {
  return (
    <div className={styles.ArtworkCard}>
      {children}
    </div>
  );
}

export default ArtworkContainer;
