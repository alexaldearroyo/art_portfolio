import React from 'react';
import ArtworkCard from './ArtworkCard';
import styles from '../styles/components/Gallery.module.css';

function Gallery() {
    const containers = new Array(3).fill(null);

  return (
    <div className={styles.gallerySpace}>
      {containers.map((_, index) => (
        <ArtworkCard key={index}>
        </ArtworkCard>
      ))}
    </div>
  );
}


export default Gallery;
