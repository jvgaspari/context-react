import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ContadorProvider } from './hooks/contador';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ContadorProvider>
        <App />
      </ContadorProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
