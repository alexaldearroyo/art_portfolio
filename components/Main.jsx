import React from 'react';
import ImageTest from './ImageTest'; 

function Main(props) {
  return (
    <div>
       {/* <ImageTest /> */}
      {props.children}
    </div>
  );
}

export default Main;
