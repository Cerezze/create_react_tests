import React, { useRef } from 'react';
import {useEffect, useState} from 'react';

const Canvas = props => {
  const canvasRef = useRef(null)
  
  useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let width;
        let height;
  

        var resize = function() {
            width = window.innerWidth * 2;
            height = window.innerHeight * 2;
            canvas.width = width;
            canvas.height = height;
        }
    }, []);


  return <canvas ref={canvasRef} {...props}/>
}

export default Canvas;