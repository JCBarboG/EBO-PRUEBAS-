import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { AppProvider } from './context/AppContext';
import './index.css';
import App from './App.jsx';
// Tema visual "Mesa de luz" (solo presentación). Va después de App para sobrescribir App.css.
import './theme-mesa-de-luz.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </StrictMode>,
);
