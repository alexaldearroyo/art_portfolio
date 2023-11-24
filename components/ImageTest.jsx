import React from 'react';
import Image from "next/image"

function ImageTest() {
  return (
    <div>
      <h1>Prueba de Imagen</h1>
      <Image src="/001.png" width="64" height="64" />
    </div>
  );
}

export default ImageTest;
