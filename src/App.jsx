// src/App.jsx
import React, { useState, useEffect, useRef } from 'react';
import testimonios from './Data.js';
import Testimonial from './components/Testimonial.jsx';
import Controls from './components/Controls.jsx';
import './styles.css';

export default function App() {
  const [index, setIndex] = useState(0);
  const length = testimonios.length;
  const autoplayRef = useRef(null);
  //correccion
  const next = () => setIndex(prev => (prev + 1) % length);
  const prev = () => setIndex(prev => (prev - 1 + length) % length);
  const random = () => {
    let r = Math.floor(Math.random() * length);
    if (r === index) r = (r + 1) % length; // evitar mismo índice
    setIndex(r);
  };

  // Autoplay: cambia cada 5s
  useEffect(() => {
    autoplayRef.current = setInterval(() => {
      setIndex(i => (i + 1) % length);
    }, 5000);

    return () => clearInterval(autoplayRef.current);
  }, [length]);

  // Pausar autoplay al interactuar (por accesibilidad / UX)
  const handleUserAction = (actionFn) => {
    clearInterval(autoplayRef.current);
    actionFn();
    // reanudar autoplay después de 10s de inactividad
    autoplayRef.current = setInterval(() => {
      setIndex(i => (i + 1) % length);
    }, 5000); // Nota: El comentario dice 10s, pero el código usa 5000ms (5s). 
             // Si quieres 10s, cámbialo a 10000.
  };

  return (
    <main className="app">
      <h1>Testimonios</h1>
      <div className="card-wrapper">
        <Testimonial item={testimonios[index]} />
      </div>

      <Controls
        onPrev={() => handleUserAction(prev)}
        onNext={() => handleUserAction(next)}
        onRandom={() => handleUserAction(random)}
      />

      <p className="counter">{index + 1} / {length}</p>
    </main>
  );
}