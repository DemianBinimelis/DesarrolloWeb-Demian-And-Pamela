// Render: Renderiza un componente en el Dom
// Screen: Consulta al Dom
import { render, screen } from '@testing-library/react';
// Importa el componente app
import App from './App';

// Define una prueba
test('renders learn react link', () => { 
  render(<App />); // Renderiza el componente App
  // Busca en el Dom un elemento que contenga el texto, get devuelve el primer elemento que coincida
  const linkElement = screen.getByText(/learn react/i);
  // Verifica que lo encontrado este en el codumento, de lo contrario falla
  expect(linkElement).toBeInTheDocument();
});
