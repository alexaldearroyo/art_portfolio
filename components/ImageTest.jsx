import React from 'react';
import Image from "next/image"

function ImageTest() {
  return (
    <div>
      <h1>Image Test</h1>
      <Image src="/001.png" alt="Image Test" width="64" height="64" />
    </div>
  );
}

export default ImageTest;
