// src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Importe suas páginas e componentes
import Login from './components/Login/Login';
import Registro from './pages/Registro';
import Home from './pages/Home';
import Perfil from './pages/Perfil';
import LayoutPadrao from './components/LayoutPadrao/LayoutPadrao';

// Crie o roteador com a nova estrutura
const router = createBrowserRouter([
  // ROTA PRINCIPAL: Agora é a página de Login
  {
    path: '/',
    element: <Login />,
  },
  // Rota de Registro continua igual
  {
    path: '/registro',
    element: <Registro />,
  },
  // ROTAS PROTEGIDAS / INTERNAS: Ficam dentro do Layout Padrão
  {
    element: <LayoutPadrao />, // O layout agora "envolve" as rotas filhas
    // Todas as rotas aqui dentro terão o menu de navegação
    children: [
      {
        path: '/home', // A página inicial agora está em "/home"
        element: <Home />,
      },
      {
        path: '/perfil/:userId',
        element: <Perfil />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);