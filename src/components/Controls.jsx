import React from 'react';

export default function controls({ onPrev, onNext, onRandom }) {
  return (
    <div className="controls">
      <button onClick={onPrev} aria-label="Anterior">◀</button>
      <button onClick={onNext} aria-label="Siguiente">▶</button>
      <button onClick={onRandom} aria-label="Aleatorio">🔀</button>
    </div>
  );
}
