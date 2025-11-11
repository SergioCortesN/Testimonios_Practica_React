import React from 'react';

export default function Testimonial({ item }) {
    if (!item) return null;
    const { nombre, cargo, texto, foto } = item;

    return (
        <article className="testimonial-card">
            <img src={foto} alt={`Foto de ${nombre}`} />
            <h3>{nombre}</h3>
            <p>{cargo}</p>
            <blockquote>{texto}</blockquote>
        </article>
    );
}