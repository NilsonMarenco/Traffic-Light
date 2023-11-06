import React, { useState, useEffect } from 'react';
import './App.css';

const Semaforo = () => {
  const colores = ['roja', 'verde', 'amarilla'];
  const [indice, setIndice] = useState(0);
  const tiempoCambio = (colores[indice] === 'amarilla' && 2000) || 4000;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndice((indice + 1) % colores.length);
    }, tiempoCambio);
  }, [indice]);
 

  const color = colores[indice];
  return (
    <>
      <div className="semaforo__container">
        <div
          className={
            (color === 'roja' && 'bombilla roja') || 'bombilla apagada'
          }
        ></div>
        <div
          className={
            (color === 'amarilla' && 'bombilla amarilla') || 'bombilla apagada'
          }
        ></div>
        <div
          className={
            (color === 'verde' && 'bombilla verde') || 'bombilla apagada'
          }
        ></div>
      </div>
    </>
  );
};

export default Semaforo;
