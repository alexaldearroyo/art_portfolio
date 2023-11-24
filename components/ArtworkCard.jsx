
import React from 'react';
import Image from 'next/image';
import styles from '../styles/components/ArtworkCard.module.css';


function ArtworkCard({ image }) {
  return (
    <div className={styles.ArtworkCard}>
      <div className={styles.imageContainer}>
      <Image src={image} alt="Artwork" fill sizes="(max-width: 768px) 100vw, 400px" />
      </div>
    </div>
  );
}

export default ArtworkCard;
