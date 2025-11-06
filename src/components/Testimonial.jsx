import React from 'react';
import '../styles.css';

export default function Testimonial({item}) {
    const {nombre, cargo, texto, foto} = item;
    
    const handleMouseEnter = () => {
        // Cancelar cualquier lectura previa
        window.speechSynthesis.cancel();
        
        // Crear el texto a leer
        const textoCompleto = `Testimonio de ${nombre}, ${cargo}. ${texto}`;
        
        // Crear la instancia de síntesis de voz
        const utterance = new SpeechSynthesisUtterance(textoCompleto);
        utterance.lang = 'es-ES'; // Configurar idioma español
        utterance.rate = 0.9; // Velocidad de lectura
        utterance.pitch = 1; // Tono de voz
        utterance.volume = 1; // Volumen
        
        // Iniciar la lectura
        window.speechSynthesis.speak(utterance);
    };
    
    const handleMouseLeave = () => {
        // Detener la lectura cuando se quita el mouse
        window.speechSynthesis.cancel();
    };
    
    return (
        <article 
            className="testimonial-card"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <img src={foto} alt={nombre} className="testimonial-photo" />
            <h3 className="testimonial-name">{nombre}</h3>
            <p className="testimonial-position">{cargo}</p>
            <p className="testimonial-text">{texto}</p>
        </article>
    );
}