import React from 'react';
import styles from '../styles/components/TextSpace.module.css';

function TextSpace() {
  return (
    <div className={styles.textSpace}>
      <div>Welcome to the digital art portfolio<br/>
      of Alex Arroyo<span className={styles.blink}>...</span></div>
    </div>
  );
}


export default TextSpace;
