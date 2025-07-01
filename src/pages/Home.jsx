import React from 'react';
import { Link } from 'react-router-dom';
import db from '../data/db.json';

const Home = () => {
  return (
    <div style={{
      padding: '20px',
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      <h1 style={{
        color: '#333',
        textAlign: 'center',
        marginBottom: '30px'
      }}>Página Inicial</h1>
      
      <p style={{
        fontSize: '18px',
        textAlign: 'center',
        marginBottom: '40px',
        color: '#666'
      }}>Bem-vindo ao painel Luz Control!</p>
      
      <div style={{
        backgroundColor: '#f8f9fa',
        padding: '20px',
        borderRadius: '8px',
        marginBottom: '30px'
      }}>
        <h2 style={{ color: '#333', marginBottom: '20px' }}>Usuários do Sistema</h2>
        <div style={{
          display: 'grid',
          gap: '15px'
        }}>
          {db.users.map(user => (
            <div key={user.id} style={{
              backgroundColor: 'white',
              padding: '15px',
              borderRadius: '6px',
              border: '1px solid #dee2e6',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <div>
                <h3 style={{ margin: '0 0 5px 0', color: '#333' }}>{user.name}</h3>
                <p style={{ margin: '0', color: '#666', fontSize: '14px' }}>
                  {user.email} - {user.role}
                </p>
              </div>
              <Link 
                to={`/perfil/${user.id}`}
                style={{
                  backgroundColor: '#007bff',
                  color: 'white',
                  padding: '10px 20px',
                  textDecoration: 'none',
                  borderRadius: '6px',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  border: '2px solid #007bff',
                  display: 'inline-block',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#0056b3';
                  e.target.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#007bff';
                  e.target.style.transform = 'scale(1)';
                }}
              >
                👤 Ver Perfil
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;