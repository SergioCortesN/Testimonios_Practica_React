import { render, screen } from '@testing-library/react';
import Testimonial from './Testimonial';
import { describe, it, expect } from 'vitest';

describe('Testimonial component', () => {
  const testItem = {
    nombre: 'Juan Perez',
    cargo: 'Desarrollador de Software',
    texto: 'Este es un testimonio de prueba.',
    foto: 'https://via.placeholder.com/150'
  };

  it('renders the testimonial with the correct data', () => {
    render(<Testimonial item={testItem} />);

    expect(screen.getByText('Juan Perez')).toBeInTheDocument();
    expect(screen.getByText('Desarrollador de Software')).toBeInTheDocument();
    expect(screen.getByText('Este es un testimonio de prueba.')).toBeInTheDocument();
    expect(screen.getByAltText('Juan Perez')).toBeInTheDocument();
  });
});
