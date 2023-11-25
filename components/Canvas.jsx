import React from "react";
import Image from "next/image";
import styles from "../styles/components/Canvas.module.css";

const images = [
  "/001.png",
  "/002.png",
  "/003.png",
  "/004.png",
  "/005.png",
  "/006.png",
  "/007.png",
  "/008.png",
  "/009.png",
  "/010.png",
  "/011.png",
  "/012.png",
];


const ImageComponent = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];
  
    return (
      <div className={styles.imageContainer}>
        <Image src={randomImage} alt="Artwork" layout="fill" objectFit="cover" />
      </div>
    );
  };
  

export default ImageComponent;
