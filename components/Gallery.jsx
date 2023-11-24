import React, { useEffect, useState } from 'react';
import ArtworkCard from './ArtworkCard';
import styles from '../styles/components/Gallery.module.css';

const images = [
  '/001.png',
  '/002.png',
  '/003.png',
  '/004.png',
  '/005.png',
  '/006.png',
  '/007.png',
  '/008.png',
  '/009.png',
  '/010.png',
  '/011.png',
  '/012.png',

]

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}


function Gallery() {
  const [shuffledImages, setShuffledImages] = useState([]);

  useEffect(() => {
    setShuffledImages(shuffleArray([...images]));
  }, []);

  return (
    <div className={styles.gallerySpace}>
      {shuffledImages.slice(0, 3).map((image, index) => (
        <ArtworkCard key={index} image={image} />
      ))}
    </div>
  );
}



export default Gallery;
