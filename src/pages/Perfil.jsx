// src/pages/Perfil.jsx

import React from 'react';
// Removemos a importação do 'Link', pois não será mais usado aqui
import { useParams } from 'react-router-dom'; 
import db from '../data/db.json';

const Perfil = () => {
  // Pega o ID do usuário da URL
  const { userId } = useParams();

  // Busca o usuário correspondente no nosso "banco de dados"
  const user = db.users.find(u => u.id === parseInt(userId));

  // Se o usuário não for encontrado, exibe uma mensagem
  if (!user) {
    return (
      <div style={{
        padding: '20px',
        textAlign: 'center'
      }}>
        <h1 style={{ color: '#dc3545' }}>Usuário não encontrado!</h1>
      </div>
    );
  }

  // Renderiza apenas as informações do usuário encontrado
  return (
    <div style={{
      padding: '20px',
      maxWidth: '600px',
      margin: '0 auto'
    }}>
      <h1 style={{
        color: '#333',
        textAlign: 'center',
        marginBottom: '30px'
      }}>Perfil de {user.name}</h1>
      
      <div style={{
        backgroundColor: '#f8f9fa',
        padding: '30px',
        borderRadius: '8px',
        border: '1px solid #dee2e6'
      }}>
        <div style={{
          display: 'grid',
          gap: '15px'
        }}>
          <div style={{
            padding: '15px',
            backgroundColor: 'white',
            borderRadius: '6px',
            border: '1px solid #e9ecef'
          }}>
            <strong style={{ color: '#495057' }}>ID:</strong>
            <span style={{ marginLeft: '10px', color: '#6c757d' }}>{user.id}</span>
          </div>
          
          <div style={{
            padding: '15px',
            backgroundColor: 'white',
            borderRadius: '6px',
            border: '1px solid #e9ecef'
          }}>
            <strong style={{ color: '#495057' }}>Email:</strong>
            <span style={{ marginLeft: '10px', color: '#6c757d' }}>{user.email}</span>
          </div>
          
          <div style={{
            padding: '15px',
            backgroundColor: 'white',
            borderRadius: '6px',
            border: '1px solid #e9ecef'
          }}>
            <strong style={{ color: '#495057' }}>Cargo:</strong>
            <span style={{ marginLeft: '10px', color: '#6c757d' }}>{user.role}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Perfil;